(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"9RwZ":function(e,r,t){"use strict";t.r(r);var _=t("fpkf"),o=t("C3Ci"),E={components:{ColorPicker:t("yIkO").a},mixins:[o.a],props:{form:{type:Object,required:!0}},data:function(){return{colorPickerFillColor:!1,colorPickerFontColor:!1,diceTypes:[{text:this.$t("Tetrahedron"),value:"tetrahedron"},{text:this.$t("Cube"),value:"cube"},{text:this.$t("Octahedron"),value:"octahedron"},{text:this.$t("Dipyramid"),value:"dipyramid"},{text:this.$t("Dodecahedron"),value:"dodecahedron"},{text:this.$t("Icosahedron"),value:"icosahedron"}],variables:{GAME_DICE_3D_MIN_BET:parseInt(Object(_.a)("dice-3d.min_bet"),10),GAME_DICE_3D_MAX_BET:parseInt(Object(_.a)("dice-3d.max_bet"),10),GAME_DICE_3D_BET_CHANGE_AMOUNT:parseInt(Object(_.a)("dice-3d.bet_change_amount"),10),GAME_DICE_3D_DEFAULT_BET_AMOUNT:parseInt(Object(_.a)("dice-3d.default_bet_amount"),10),GAME_DICE_3D_MIN_WIN_CHANCE:parseFloat(Object(_.a)("dice-3d.min_win_chance")),GAME_DICE_3D_MAX_WIN_CHANCE:parseFloat(Object(_.a)("dice-3d.max_win_chance")),GAME_DICE_3D_HOUSE_EDGE:parseFloat(Object(_.a)("dice-3d.house_edge")),GAME_DICE_3D_DICE:Object(_.a)("dice-3d.dice"),GAME_DICE_3D_FILL_COLOR:Object(_.a)("dice-3d.fill_color"),GAME_DICE_3D_FONT_COLOR:Object(_.a)("dice-3d.font_color")}}},computed:{houseEdgeHint:function(){return this.$t("This parameter affects payout calculation.")+" "+this.$t("Payout is calculated like this: {0}.",["(100 - houseEdge) / winChance"])+" "+this.$t("Hence the more house edge is the less payout a user will get.")}},created:function(){this.$emit("input",this.variables)}},a=t("KHd+"),i=t("ZUTo"),n=t.n(i),s=t("sK+t"),l=t("mdmw"),c=t("uXRr"),D=t("hlRy"),d=Object(a.a)(E,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-card",{attrs:{flat:""}},[t("v-card-text",[t("v-text-field",{attrs:{label:e.$t("Min bet"),rules:[function(r){return e.validationInteger(parseInt(r,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_MIN_BET"),"error-messages":e.form.errors.get("GAME_DICE_3D_MIN_BET"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(r){return e.clearFormErrors(r,"GAME_DICE_3D_MIN_BET")}},model:{value:e.form.GAME_DICE_3D_MIN_BET,callback:function(r){e.$set(e.form,"GAME_DICE_3D_MIN_BET",e._n(r))},expression:"form.GAME_DICE_3D_MIN_BET"}}),e._v(" "),t("v-text-field",{attrs:{label:e.$t("Max bet"),rules:[function(r){return e.validationInteger(parseInt(r,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_MAX_BET"),"error-messages":e.form.errors.get("GAME_DICE_3D_MAX_BET"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(r){return e.clearFormErrors(r,"GAME_DICE_3D_MAX_BET")}},model:{value:e.form.GAME_DICE_3D_MAX_BET,callback:function(r){e.$set(e.form,"GAME_DICE_3D_MAX_BET",e._n(r))},expression:"form.GAME_DICE_3D_MAX_BET"}}),e._v(" "),t("v-text-field",{attrs:{label:e.$t("Bet increment / decrement amount"),rules:[function(r){return e.validationInteger(parseInt(r,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_BET_CHANGE_AMOUNT"),"error-messages":e.form.errors.get("GAME_DICE_3D_BET_CHANGE_AMOUNT"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(r){return e.clearFormErrors(r,"GAME_DICE_3D_BET_CHANGE_AMOUNT")}},model:{value:e.form.GAME_DICE_3D_BET_CHANGE_AMOUNT,callback:function(r){e.$set(e.form,"GAME_DICE_3D_BET_CHANGE_AMOUNT",e._n(r))},expression:"form.GAME_DICE_3D_BET_CHANGE_AMOUNT"}}),e._v(" "),t("v-text-field",{attrs:{label:e.$t("Default bet amount"),rules:[function(r){return e.validationInteger(parseInt(r,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_DEFAULT_BET_AMOUNT"),"error-messages":e.form.errors.get("GAME_DICE_3D_DEFAULT_BET_AMOUNT"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(r){return e.clearFormErrors(r,"GAME_DICE_3D_DEFAULT_BET_AMOUNT")}},model:{value:e.form.GAME_DICE_3D_DEFAULT_BET_AMOUNT,callback:function(r){e.$set(e.form,"GAME_DICE_3D_DEFAULT_BET_AMOUNT",e._n(r))},expression:"form.GAME_DICE_3D_DEFAULT_BET_AMOUNT"}}),e._v(" "),t("v-text-field",{attrs:{label:e.$t("House edge"),rules:[e.validationNumeric],error:e.form.errors.has("GAME_DICE_3D_HOUSE_EDGE"),"error-messages":e.form.errors.get("GAME_DICE_3D_HOUSE_EDGE"),outlined:"",suffix:"%",hint:e.houseEdgeHint,"persistent-hint":""},on:{keydown:function(r){return e.clearFormErrors(r,"GAME_DICE_3D_HOUSE_EDGE")}},model:{value:e.form.GAME_DICE_3D_HOUSE_EDGE,callback:function(r){e.$set(e.form,"GAME_DICE_3D_HOUSE_EDGE",e._n(r))},expression:"form.GAME_DICE_3D_HOUSE_EDGE"}}),e._v(" "),t("v-select",{staticClass:"mt-5",attrs:{items:e.diceTypes,label:e.$t("Dice"),chips:"",multiple:"","hide-selected":"","deletable-chips":"","append-icon":"mdi-plus"},model:{value:e.form.GAME_DICE_3D_DICE,callback:function(r){e.$set(e.form,"GAME_DICE_3D_DICE",r)},expression:"form.GAME_DICE_3D_DICE"}}),e._v(" "),t("color-picker",{attrs:{label:e.$t("Dice fill color")},model:{value:e.form.GAME_DICE_3D_FILL_COLOR,callback:function(r){e.$set(e.form,"GAME_DICE_3D_FILL_COLOR",r)},expression:"form.GAME_DICE_3D_FILL_COLOR"}}),e._v(" "),t("color-picker",{attrs:{label:e.$t("Dice font color")},model:{value:e.form.GAME_DICE_3D_FONT_COLOR,callback:function(r){e.$set(e.form,"GAME_DICE_3D_FONT_COLOR",r)},expression:"form.GAME_DICE_3D_FONT_COLOR"}})],1)],1)}),[],!1,null,null,null);r.default=d.exports;n()(d,{VCard:s.a,VCardText:l.c,VSelect:c.a,VTextField:D.a})}}]);
//# sourceMappingURL=dice-3d-resources-js-pages-admin-settings.js.map