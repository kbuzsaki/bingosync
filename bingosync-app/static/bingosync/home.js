
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

function initializeNewRoomForm($newRoomForm) {
    var $gameType = $newRoomForm.find("form [name=game_type]");
    var $oldCustomJson = $newRoomForm.find("form [name=custom_json]");
    var $oldVariantType = $newRoomForm.find("form [name=variant_type]");
    var $customJson = $newRoomForm.find(".real-custom-json");
    var $variantType = $newRoomForm.find(".real-variant-type");

    // grab the data from the old custom json field, if any, and remove it
    // then hackily swap in the real field from the hidden template
    var oldCustomJsonVal = $oldCustomJson.val();
    $oldCustomJson.remove();
    $customJson.insertAfter($gameType.parent().parent());
    $customJson.find("textarea").text(oldCustomJsonVal);

    // grab the data from the old variant field, if any, and remove it
    // then hackily swap in the real field from the hidden template
    var oldVariantTypeVal = $oldVariantType.val();
    $oldVariantType.remove();
    $variantType.insertAfter($gameType.parent().parent());
    $variantType.find("select").val(oldVariantTypeVal);

    var $variantHelpBlock = $variantType.find(".help-block");
    var $variantOptions = $variantType.find("option");
    $gameType.on("change", function() {
        if ($gameType.val() === "") {
            // empty is no game type, so hide the extra inputs
            $customJson.addClass("hidden");
            $variantType.addClass("hidden");
        } else if ($gameType.val() == 18) {
            // 18 is the custom game type, so show the json input
            $customJson.removeClass("hidden");
            $variantType.addClass("hidden");
        } else {
            // any other game type has a variant, so show the matching variants
            var $selectedGameType = $gameType.find("option:selected");
            var $selectedVariantType = $variantType.find("option:selected");

            // show the variants that match and hide the others
            var matchCondition = "[group='" + $gameType.val() +"']";
            var $goodVariants = $variantOptions.filter(matchCondition);
            var $badVariants = $variantOptions.not(matchCondition);
            $goodVariants.removeClass("hidden");
            $badVariants.addClass("hidden");

            // choose a the default option if the current variant doesn't match
            if (!$goodVariants.is($selectedVariantType)) {
                $goodVariants.first().prop("selected", true);
            }

            var readOnly = ($goodVariants.length === 1);
            $variantType.find("select").attr("disabled", readOnly);
            if (readOnly) {
                $variantHelpBlock.removeClass("hidden");
            } else {
                $variantHelpBlock.addClass("hidden");
            }

            $customJson.addClass("hidden");
            $variantType.removeClass("hidden");
        }
    });
    $gameType.change();
}
