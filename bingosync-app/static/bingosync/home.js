
function initializeRoomsPanel($roomsPanel) {
    $roomsPanel.find(".show-button").on("click", function(e) {
        e.preventDefault();
        $roomsPanel.removeClass("hide-idle-rooms");
    });
    $roomsPanel.find(".hide-button").on("click", function(e) {
        e.preventDefault();
        $roomsPanel.addClass("hide-idle-rooms");
    });
}

function initializeGameSelectForm($form) {
    var $gameType = $form.find("select[name=game_type]");
    var $customJson = $form.find("textarea[name=custom_json]");
    var $customJsonContainer = $customJson.closest(".form-group");
    var $variantType = $form.find("select[name=variant_type]");
    var $variantTypeContainer = $variantType.closest(".form-group");

    var $variantHelpBlock = $variantTypeContainer.find(".help-block");
    var $variantOptions = $variantTypeContainer.find("option");
    $gameType.on("change", function() {
        if ($gameType.val() === "") {
            // empty is no game type, so hide the extra inputs
            $customJsonContainer.addClass("hidden");
            $variantTypeContainer.addClass("hidden");
        } else {
            // filter to only show the matching variants for this game type
            var $selectedGameType = $gameType.find("option:selected");
            var $selectedVariantType = $variantType.find("option:selected");

            // show the variants that match and hide the others
            var matchCondition = "[data-group='" + $gameType.val() +"']";
            var $goodVariants = $variantOptions.filter(matchCondition);
            var $badVariants = $variantOptions.not(matchCondition);
            $goodVariants.removeClass("hidden");
            $goodVariants.prop("disabled", false);
            $badVariants.addClass("hidden");
            $badVariants.prop("disabled", true);

            // choose a the default option if the current variant doesn't match
            if (!$goodVariants.is($selectedVariantType)) {
                $goodVariants.first().prop("selected", true);
            }

            var readOnly = ($goodVariants.length === 1);
            $variantType.attr("disabled", readOnly);
            if (readOnly) {
                $variantHelpBlock.removeClass("hidden");
            } else {
                $variantHelpBlock.addClass("hidden");
            }

            $variantTypeContainer.removeClass("hidden");

            // 18 and 172 are the custom game types, so show the json input
            if ($gameType.val() == 18 || $gameType.val() == 172) {
                $customJsonContainer.removeClass("hidden");
            } else {
                $customJsonContainer.addClass("hidden");
            }
        }
    });
    // trigger an on change event in a timeout to hack around the form data
    // not being immediately visible when the back button is used
    setTimeout(function() { $gameType.change(); }, 0);
}
