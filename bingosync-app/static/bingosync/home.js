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
    let $customBoardType = $form.find("input:radio[name=custom_board_type]");
    let $customBoardTypeContainer = $customBoardType.closest(".form-group");
    let $randomizeCustom = $form.find("input:checkbox[name=randomize_custom]");
    let $randomizeCustomContainer = $randomizeCustom.closest(".form-group");
    var $variantType = $form.find("select[name=variant_type]");
    var $variantTypeContainer = $variantType.closest(".form-group");

    var $variantHelpBlock = $variantTypeContainer.find(".help-block");
    var $variantOptions = $variantTypeContainer.find("option");

    // selection of customBoardType changes the placeholder text in custom JSON
    $customBoardType.on("change", () => {
        var CUSTOM_JSON_PLACEHOLDER_TEXT = 
`Paste the board as a 25 element JSON goal list, e.g:
[ {"name": "Collect 3 Fire Flowers"},
{"name": "Defeat Phantom Ganon"},
{"name": "Catch a Pokemon while Surfing"},
... ]`;

        var CUSTOM_SIMPLE_PLACEHOLDER_TEXT = 
`Paste the board as a 25 element goal list, eg:
Collect 3 Fire Flowers
Defeat Phantom Ganon
Catch a Pokemon while Surfing`;

        if ($customBoardType.filter(":checked").val() === "Simple") {
            $customJson.attr("placeholder", CUSTOM_SIMPLE_PLACEHOLDER_TEXT)
        } else if ($customBoardType.filter(":checked").val() === "JSON") {
            $customJson.attr("placeholder", CUSTOM_JSON_PLACEHOLDER_TEXT)
        }
    });

    $gameType.on("change", function() {
        if ($gameType.val() === "") {
            // empty is no game type, so hide the extra inputs
            $customJsonContainer.addClass("hidden");
            $variantTypeContainer.addClass("hidden");
            $customBoardTypeContainer.addClass("hidden");
            $randomizeCustomContainer.addClass("hidden");

            
        } else if ($gameType.val() == 18) {
            // 18 is the custom game type, so show the json input
            $customJsonContainer.removeClass("hidden");
            $variantTypeContainer.addClass("hidden");
            $customBoardTypeContainer.removeClass("hidden");
            $randomizeCustomContainer.removeClass("hidden");
            $customBoardType.prop("checked", true);

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
