$wnd.gwtmaterialdemo.runAsyncCallback3("function $clinit_CollapsibleType(){\n  $clinit_CollapsibleType = emptyMethod;\n  ACCORDION = new CollapsibleType('ACCORDION', 0, 'accordion');\n  EXPANDABLE = new CollapsibleType('EXPANDABLE', 1, 'expandable');\n  POPOUT = new CollapsibleType('POPOUT', 2, 'popout');\n}\n\nfunction CollapsibleType(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_26(){\n  $clinit_CollapsibleType();\n  return initValues(getClassLiteralForArray(Lgwt_material_design_client_constants_CollapsibleType_2_classLit, 1), $intern_4, 200, 0, [ACCORDION, EXPANDABLE, POPOUT]);\n}\n\ndefineClass(200, 14, {26:1, 200:1, 185:1, 120:1, 5:1, 20:1, 14:1}, CollapsibleType);\n_.getCssName = function getCssName_66(){\n  return this.cssClass;\n}\n;\nvar ACCORDION, EXPANDABLE, POPOUT;\nvar Lgwt_material_design_client_constants_CollapsibleType_2_classLit = createForEnum('gwt.material.design.client.constants', 'CollapsibleType', 200, values_26);\nfunction $getActive(this$static){\n  try {\n    return $getWidget(this$static, this$static.index_0);\n  }\n   catch ($e0) {\n    $e0 = wrap($e0);\n    if (instanceOf($e0, 73)) {\n      return null;\n    }\n     else \n      throw unwrap($e0);\n  }\n}\n\nfunction $setActive(this$static){\n  var activeWidget;\n  this$static.index_0 = 1;\n  activeWidget = $getActive(this$static);\n  if (activeWidget) {\n    setStyleName(activeWidget.getStyleElement(), 'active', false);\n    setStyleName(activeWidget.getStyleElement(), 'active', true);\n  }\n}\n\nfunction $setType_2(this$static, type_0){\n  switch (type_0.ordinal) {\n    case 2:\n      $setAttribute(($clinit_DOM() , this$static.element), 'data-collapsible', 'accordion');\n      $addStyleName(this$static, type_0.cssClass);\n      break;\n    default:$setAttribute(($clinit_DOM() , this$static.element), 'data-collapsible', type_0.cssClass);\n  }\n}\n\nfunction CollapsiblePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(511, 51, $intern_39, CollapsiblePresenter);\n_.onReveal = function onReveal_8(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Collapsibles', 'Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_collapsible_CollapsiblePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.collapsible', 'CollapsiblePresenter', 511);\nfunction CollapsibleView(){\n  var f_MaterialPanel1, f_MaterialTitle2, f_MaterialCollapsible3, f_MaterialCollapsibleItem4, f_MaterialCollapsibleItem9, f_MaterialCollapsibleItem14, f_MaterialTitle19, f_MaterialCollapsible20, f_MaterialCollapsibleItem21, f_MaterialCollapsibleItem26, f_MaterialCollapsibleItem31, f_PrettyPre36, f_MaterialTitle37, f_MaterialCollapsible38, f_MaterialCollapsibleItem39, f_MaterialCollapsibleItem44, f_MaterialCollapsibleItem49, f_MaterialTitle54, f_MaterialCollapsible55, f_MaterialCollapsibleItem56, f_MaterialTitle61, f_MaterialCollapsible62, f_MaterialCollapsibleItem63, f_MaterialCollapsibleItem68, f_MaterialCollapsibleItem73, f_MaterialCollapsibleHeader5, f_MaterialLink6, f_MaterialCollapsibleBody7, f_MaterialLabel8, f_MaterialCollapsibleHeader10, f_MaterialLink11, f_MaterialCollapsibleBody12, f_MaterialLabel13, f_MaterialCollapsibleHeader15, f_MaterialLink16, f_MaterialCollapsibleBody17, f_MaterialLabel18, f_MaterialCollapsibleHeader22, f_MaterialLink23, f_MaterialCollapsibleBody24, f_MaterialLabel25, f_MaterialCollapsibleHeader27, f_MaterialLink28, f_MaterialCollapsibleBody29, f_MaterialLabel30, f_MaterialCollapsibleHeader32, f_MaterialLink33, f_MaterialCollapsibleBody34, f_MaterialLabel35, f_MaterialCollapsibleHeader40, f_MaterialLink41, f_MaterialCollapsibleBody42, f_MaterialLabel43, f_MaterialCollapsibleHeader45, f_MaterialLink46, f_MaterialCollapsibleBody47, f_MaterialLabel48, f_MaterialCollapsibleHeader50, f_MaterialLink51, f_MaterialCollapsibleBody52, f_MaterialLabel53, f_MaterialCollapsibleHeader57, f_MaterialLink58, f_MaterialCollapsibleBody59, f_MaterialLabel60, f_MaterialCollapsibleHeader64, f_MaterialLink65, f_MaterialCollapsibleBody66, f_MaterialLabel67, f_MaterialCollapsibleHeader69, f_MaterialLink70, f_MaterialCollapsibleBody71, f_MaterialLabel72, f_MaterialCollapsibleHeader74, f_MaterialLink75, f_MaterialCollapsibleBody76, f_MaterialLabel77;\n  ViewImpl.call(this);\n  $initWidget_0(this, (f_MaterialPanel1 = new MaterialPanel , $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Accordion') , $setText_4(f_MaterialTitle2.paragraph, \"You can set the accordion type by adding an attribute type='ACCORDION'\") , f_MaterialTitle2)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible3 = new MaterialCollapsible , $add_16(f_MaterialCollapsible3, (f_MaterialCollapsibleItem4 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem4, (f_MaterialCollapsibleHeader5 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader5, (f_MaterialLink6 = new MaterialLink , $setIconPosition(f_MaterialLink6, ($clinit_IconPosition() , LEFT_4)) , f_MaterialLink6.span_0.setText('First') , $add_13(f_MaterialLink6, f_MaterialLink6.span_0) , $setTextColor(f_MaterialLink6.colorsMixin, 'black') , $setIconType(f_MaterialLink6, ($clinit_IconType() , POLYMER)) , f_MaterialLink6)) , f_MaterialCollapsibleHeader5)) , $add_13(f_MaterialCollapsibleItem4, (f_MaterialCollapsibleBody7 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody7, (f_MaterialLabel8 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel8.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel8)) , f_MaterialCollapsibleBody7)) , f_MaterialCollapsibleItem4)) , $add_16(f_MaterialCollapsible3, (f_MaterialCollapsibleItem9 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem9, (f_MaterialCollapsibleHeader10 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader10, (f_MaterialLink11 = new MaterialLink , $setIconPosition(f_MaterialLink11, LEFT_4) , f_MaterialLink11.span_0.setText('Second') , $add_13(f_MaterialLink11, f_MaterialLink11.span_0) , $setTextColor(f_MaterialLink11.colorsMixin, 'black') , $setIconType(f_MaterialLink11, POLYMER) , f_MaterialLink11)) , f_MaterialCollapsibleHeader10)) , $add_13(f_MaterialCollapsibleItem9, (f_MaterialCollapsibleBody12 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody12, (f_MaterialLabel13 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel13.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel13)) , f_MaterialCollapsibleBody12)) , f_MaterialCollapsibleItem9)) , $add_16(f_MaterialCollapsible3, (f_MaterialCollapsibleItem14 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem14, (f_MaterialCollapsibleHeader15 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader15, (f_MaterialLink16 = new MaterialLink , $setIconPosition(f_MaterialLink16, LEFT_4) , f_MaterialLink16.span_0.setText('Third') , $add_13(f_MaterialLink16, f_MaterialLink16.span_0) , $setTextColor(f_MaterialLink16.colorsMixin, 'black') , $setIconType(f_MaterialLink16, POLYMER) , f_MaterialLink16)) , f_MaterialCollapsibleHeader15)) , $add_13(f_MaterialCollapsibleItem14, (f_MaterialCollapsibleBody17 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody17, (f_MaterialLabel18 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel18.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel18)) , f_MaterialCollapsibleBody17)) , f_MaterialCollapsibleItem14)) , $setGrid(f_MaterialCollapsible3.gridMixin, 's12 m6 l8') , $setType_2(f_MaterialCollapsible3, ($clinit_CollapsibleType() , ACCORDION)) , f_MaterialCollapsible3)) , $add_13(f_MaterialPanel1, (f_MaterialTitle19 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle19.header), 'Expandable') , $setText_4(f_MaterialTitle19.paragraph, \"You can set the accordion type by adding an attribute type='EXPANDABLE'\") , f_MaterialTitle19)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible20 = new MaterialCollapsible , $add_16(f_MaterialCollapsible20, (f_MaterialCollapsibleItem21 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem21, (f_MaterialCollapsibleHeader22 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader22, (f_MaterialLink23 = new MaterialLink , $setIconPosition(f_MaterialLink23, LEFT_4) , f_MaterialLink23.span_0.setText('First') , $add_13(f_MaterialLink23, f_MaterialLink23.span_0) , $setTextColor(f_MaterialLink23.colorsMixin, 'black') , $setIconType(f_MaterialLink23, POLYMER) , f_MaterialLink23)) , f_MaterialCollapsibleHeader22)) , $add_13(f_MaterialCollapsibleItem21, (f_MaterialCollapsibleBody24 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody24, (f_MaterialLabel25 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel25.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel25)) , f_MaterialCollapsibleBody24)) , f_MaterialCollapsibleItem21)) , $add_16(f_MaterialCollapsible20, (f_MaterialCollapsibleItem26 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem26, (f_MaterialCollapsibleHeader27 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader27, (f_MaterialLink28 = new MaterialLink , $setIconPosition(f_MaterialLink28, LEFT_4) , f_MaterialLink28.span_0.setText('Second') , $add_13(f_MaterialLink28, f_MaterialLink28.span_0) , $setTextColor(f_MaterialLink28.colorsMixin, 'black') , $setIconType(f_MaterialLink28, POLYMER) , f_MaterialLink28)) , f_MaterialCollapsibleHeader27)) , $add_13(f_MaterialCollapsibleItem26, (f_MaterialCollapsibleBody29 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody29, (f_MaterialLabel30 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel30.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel30)) , f_MaterialCollapsibleBody29)) , f_MaterialCollapsibleItem26)) , $add_16(f_MaterialCollapsible20, (f_MaterialCollapsibleItem31 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem31, (f_MaterialCollapsibleHeader32 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader32, (f_MaterialLink33 = new MaterialLink , $setIconPosition(f_MaterialLink33, LEFT_4) , f_MaterialLink33.span_0.setText('Third') , $add_13(f_MaterialLink33, f_MaterialLink33.span_0) , $setTextColor(f_MaterialLink33.colorsMixin, 'black') , $setIconType(f_MaterialLink33, POLYMER) , f_MaterialLink33)) , f_MaterialCollapsibleHeader32)) , $add_13(f_MaterialCollapsibleItem31, (f_MaterialCollapsibleBody34 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody34, (f_MaterialLabel35 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel35.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel35)) , f_MaterialCollapsibleBody34)) , f_MaterialCollapsibleItem31)) , $setType_2(f_MaterialCollapsible20, EXPANDABLE) , f_MaterialCollapsible20)) , $add_13(f_MaterialPanel1, (f_PrettyPre36 = new PrettyPre , setStyleName(($clinit_DOM() , f_PrettyPre36.element), 'lang-xml', true) , setStyleName(f_PrettyPre36.element, 'z-depth-1', true) , f_PrettyPre36)) , $add_13(f_MaterialPanel1, (f_MaterialTitle37 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle37.header), 'Popout') , $setText_4(f_MaterialTitle37.paragraph, \"You can set the popout type by adding an attribute type='POPOUT'\") , f_MaterialTitle37)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible38 = new MaterialCollapsible , $add_16(f_MaterialCollapsible38, (f_MaterialCollapsibleItem39 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem39, (f_MaterialCollapsibleHeader40 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader40, (f_MaterialLink41 = new MaterialLink , $setIconPosition(f_MaterialLink41, LEFT_4) , f_MaterialLink41.span_0.setText('First') , $add_13(f_MaterialLink41, f_MaterialLink41.span_0) , $setTextColor(f_MaterialLink41.colorsMixin, 'black') , $setIconType(f_MaterialLink41, POLYMER) , f_MaterialLink41)) , f_MaterialCollapsibleHeader40)) , $add_13(f_MaterialCollapsibleItem39, (f_MaterialCollapsibleBody42 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody42, (f_MaterialLabel43 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel43.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel43)) , f_MaterialCollapsibleBody42)) , f_MaterialCollapsibleItem39)) , $add_16(f_MaterialCollapsible38, (f_MaterialCollapsibleItem44 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem44, (f_MaterialCollapsibleHeader45 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader45, (f_MaterialLink46 = new MaterialLink , $setIconPosition(f_MaterialLink46, LEFT_4) , f_MaterialLink46.span_0.setText('Second') , $add_13(f_MaterialLink46, f_MaterialLink46.span_0) , $setTextColor(f_MaterialLink46.colorsMixin, 'black') , $setIconType(f_MaterialLink46, POLYMER) , f_MaterialLink46)) , f_MaterialCollapsibleHeader45)) , $add_13(f_MaterialCollapsibleItem44, (f_MaterialCollapsibleBody47 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody47, (f_MaterialLabel48 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel48.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel48)) , f_MaterialCollapsibleBody47)) , f_MaterialCollapsibleItem44)) , $add_16(f_MaterialCollapsible38, (f_MaterialCollapsibleItem49 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem49, (f_MaterialCollapsibleHeader50 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader50, (f_MaterialLink51 = new MaterialLink , $setIconPosition(f_MaterialLink51, LEFT_4) , f_MaterialLink51.span_0.setText('Third') , $add_13(f_MaterialLink51, f_MaterialLink51.span_0) , $setTextColor(f_MaterialLink51.colorsMixin, 'black') , $setIconType(f_MaterialLink51, POLYMER) , f_MaterialLink51)) , f_MaterialCollapsibleHeader50)) , $add_13(f_MaterialCollapsibleItem49, (f_MaterialCollapsibleBody52 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody52, (f_MaterialLabel53 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel53.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel53)) , f_MaterialCollapsibleBody52)) , f_MaterialCollapsibleItem49)) , $setType_2(f_MaterialCollapsible38, POPOUT) , f_MaterialCollapsible38)) , $add_13(f_MaterialPanel1, (f_MaterialTitle54 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle54.header), 'Style') , $setText_4(f_MaterialTitle54.paragraph, 'You can define easily the style of your collapsible') , f_MaterialTitle54)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible55 = new MaterialCollapsible , $add_16(f_MaterialCollapsible55, (f_MaterialCollapsibleItem56 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem56, (f_MaterialCollapsibleHeader57 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader57, (f_MaterialLink58 = new MaterialLink , $setIconPosition(f_MaterialLink58, LEFT_4) , f_MaterialLink58.span_0.setText('First') , $add_13(f_MaterialLink58, f_MaterialLink58.span_0) , $setTextColor(f_MaterialLink58.colorsMixin, 'white') , $setIconType(f_MaterialLink58, POLYMER) , f_MaterialLink58)) , $setBackgroundColor(f_MaterialCollapsibleHeader57.colorsMixin, 'grey') , $setWaves(f_MaterialCollapsibleHeader57, ($clinit_WavesType() , DEFAULT_5)) , f_MaterialCollapsibleHeader57)) , $add_13(f_MaterialCollapsibleItem56, (f_MaterialCollapsibleBody59 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody59, (f_MaterialLabel60 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel60.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , $setTextColor(f_MaterialLabel60.colorsMixin, 'white') , f_MaterialLabel60)) , $setBackgroundColor(f_MaterialCollapsibleBody59.colorsMixin, 'grey darken-1') , f_MaterialCollapsibleBody59)) , f_MaterialCollapsibleItem56)) , $setType_2(f_MaterialCollapsible55, POPOUT) , f_MaterialCollapsible55)) , $add_13(f_MaterialPanel1, (f_MaterialTitle61 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle61.header), 'Preselected Section') , $setText_4(f_MaterialTitle61.paragraph, \"If you want a collapsible with a preopened section just add active='1' the parameter is the index of the collapsible item.\") , f_MaterialTitle61)) , $add_13(f_MaterialPanel1, (f_MaterialCollapsible62 = new MaterialCollapsible , $add_16(f_MaterialCollapsible62, (f_MaterialCollapsibleItem63 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem63, (f_MaterialCollapsibleHeader64 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader64, (f_MaterialLink65 = new MaterialLink , $setIconPosition(f_MaterialLink65, LEFT_4) , f_MaterialLink65.span_0.setText('First') , $add_13(f_MaterialLink65, f_MaterialLink65.span_0) , $setTextColor(f_MaterialLink65.colorsMixin, 'black') , $setIconType(f_MaterialLink65, POLYMER) , f_MaterialLink65)) , f_MaterialCollapsibleHeader64)) , $add_13(f_MaterialCollapsibleItem63, (f_MaterialCollapsibleBody66 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody66, (f_MaterialLabel67 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel67.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel67)) , f_MaterialCollapsibleBody66)) , f_MaterialCollapsibleItem63)) , $add_16(f_MaterialCollapsible62, (f_MaterialCollapsibleItem68 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem68, (f_MaterialCollapsibleHeader69 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader69, (f_MaterialLink70 = new MaterialLink , $setIconPosition(f_MaterialLink70, LEFT_4) , f_MaterialLink70.span_0.setText('Second') , $add_13(f_MaterialLink70, f_MaterialLink70.span_0) , $setTextColor(f_MaterialLink70.colorsMixin, 'black') , $setIconType(f_MaterialLink70, POLYMER) , f_MaterialLink70)) , f_MaterialCollapsibleHeader69)) , $add_13(f_MaterialCollapsibleItem68, (f_MaterialCollapsibleBody71 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody71, (f_MaterialLabel72 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel72.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel72)) , f_MaterialCollapsibleBody71)) , f_MaterialCollapsibleItem68)) , $add_16(f_MaterialCollapsible62, (f_MaterialCollapsibleItem73 = new MaterialCollapsibleItem , $add_13(f_MaterialCollapsibleItem73, (f_MaterialCollapsibleHeader74 = new MaterialCollapsibleHeader , $add_18(f_MaterialCollapsibleHeader74, (f_MaterialLink75 = new MaterialLink , $setIconPosition(f_MaterialLink75, LEFT_4) , f_MaterialLink75.span_0.setText('Third') , $add_13(f_MaterialLink75, f_MaterialLink75.span_0) , $setTextColor(f_MaterialLink75.colorsMixin, 'black') , $setIconType(f_MaterialLink75, POLYMER) , f_MaterialLink75)) , f_MaterialCollapsibleHeader74)) , $add_13(f_MaterialCollapsibleItem73, (f_MaterialCollapsibleBody76 = new MaterialCollapsibleBody , $add_17(f_MaterialCollapsibleBody76, (f_MaterialLabel77 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel77.directionalTextHelper, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , f_MaterialLabel77)) , f_MaterialCollapsibleBody76)) , f_MaterialCollapsibleItem73)) , $setActive(f_MaterialCollapsible62) , $setType_2(f_MaterialCollapsible62, POPOUT) , f_MaterialCollapsible62)) , f_MaterialPanel1));\n}\n\ndefineClass(630, 55, $intern_40, CollapsibleView);\nvar Lgwt_material_design_demo_client_application_components_collapsible_CollapsibleView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.collapsible', 'CollapsibleView', 630);\nfunction CollapsibleView_BinderImpl(){\n}\n\ndefineClass(789, 1, {}, CollapsibleView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_collapsible_CollapsibleView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.collapsible', 'CollapsibleView_BinderImpl', 789);\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$) {\n    result = new CollapsiblePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$) {\n    result = new CollapsibleView(new CollapsibleView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsibleView$_annotation$$none$$;\n}\n\ndefineClass(449, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_2(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$collapsible$CollapsiblePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(3);\n\n//# sourceURL=gwtmaterialdemo-3.js\n")
