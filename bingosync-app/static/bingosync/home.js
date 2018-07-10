
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
        } else if ($gameType.val() == 18) {
            // 18 is the custom game type, so show the json input
            $customJsonContainer.removeClass("hidden");
            $variantTypeContainer.addClass("hidden");
        } else {
            // any other game type has a variant, so show the matching variants
            var $selectedGameType = $gameType.find("option:selected");
            var $selectedVariantType = $variantType.find("option:selected");

            // show the variants that match and hide the others
            var matchCondition = "[data-group='" + $gameType.val() +"']";
            var $goodVariants = $variantOptions.filter(matchCondition);
            var $badVariants = $variantOptions.not(matchCondition);
            $goodVariants.removeClass("hidden");
            $badVariants.addClass("hidden");

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

            $customJsonContainer.addClass("hidden");
            $variantTypeContainer.removeClass("hidden");
        }
    });
    $gameType.change();
}
