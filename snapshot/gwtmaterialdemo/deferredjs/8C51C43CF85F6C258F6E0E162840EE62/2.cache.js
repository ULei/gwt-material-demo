$wnd.gwtmaterialdemo.runAsyncCallback2("function ChipsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(537, 51, $intern_41, ChipsPresenter);\n_.onReveal = function onReveal_7(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Chips', \"Chips represent complex entities in small blocks, such as a contact. They can contain a photo, short title string, and brief information. Chips are manipulated through drag-and-drop. Touching them invokes the full view in a card or full screen view or invokes a menu of options related to that chip's entity.\"));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsPresenter', 537);\nfunction ChipsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_5(new ChipsView_BinderImpl$Widgets(this)));\n  $addDomHandler(this.chip.icon_0, new ChipsView$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));\n}\n\ndefineClass(664, 54, $intern_42, ChipsView);\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView', 664);\nfunction ChipsView$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(665, 1, $intern_51, ChipsView$1);\n_.onClick = function onClick_17(event_0){\n  fireToast($getElement(this.this$01.chip.span_0).textContent);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView/1', 665);\nfunction ChipsView_BinderImpl(){\n}\n\ndefineClass(828, 1, {}, ChipsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl', 828);\nfunction $build_f_HTMLPanel1_5(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialRow3, f_PrettyPre9, f_MaterialTitle10, f_MaterialRow11, f_PrettyPre15, f_MaterialTitle16, f_MaterialRow17, f_PrettyPre21, f_MaterialTitle22, chip, chipClick, f_PrettyPre23, f_PrettyPre24, f_MaterialChip4, f_MaterialChip5, f_MaterialChip6, f_MaterialChip7, f_MaterialChip8, sb, f_MaterialChip12, f_MaterialChip13, f_MaterialChip14, sb_0, f_MaterialChip18, f_MaterialChip19, f_MaterialChip20, sb_1, sb_2, sb_3;\n  f_HTMLPanel1 = new HTMLPanel($html6(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Simple Chip') , $setText_4(f_MaterialTitle2.paragraph, 'If you want just text only chip, you can use this for autocomplete textbox and search capability') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (f_MaterialChip4 = new MaterialChip , f_MaterialChip4.span_0.setText('Default') , $add_13(f_MaterialChip4, f_MaterialChip4.span_0) , $setIconType_1(f_MaterialChip4, ($clinit_IconType() , CLOSE)) , f_MaterialChip4)) , $add_13(f_MaterialRow3, (f_MaterialChip5 = new MaterialChip , f_MaterialChip5.span_0.setText('Apple') , $add_13(f_MaterialChip5, f_MaterialChip5.span_0) , $setTextColor(f_MaterialChip5.colorsMixin, 'white') , $setBackgroundColor(f_MaterialChip5.colorsMixin, 'red') , $setIconType_1(f_MaterialChip5, CLOSE) , f_MaterialChip5)) , $add_13(f_MaterialRow3, (f_MaterialChip6 = new MaterialChip , f_MaterialChip6.span_0.setText('Orange') , $add_13(f_MaterialChip6, f_MaterialChip6.span_0) , $setTextColor(f_MaterialChip6.colorsMixin, 'white') , $setBackgroundColor(f_MaterialChip6.colorsMixin, 'orange') , $setIconType_1(f_MaterialChip6, CLOSE) , f_MaterialChip6)) , $add_13(f_MaterialRow3, (f_MaterialChip7 = new MaterialChip , f_MaterialChip7.span_0.setText('Banana') , $add_13(f_MaterialChip7, f_MaterialChip7.span_0) , $setTextColor(f_MaterialChip7.colorsMixin, 'white') , $setBackgroundColor(f_MaterialChip7.colorsMixin, 'amber') , $setIconType_1(f_MaterialChip7, CLOSE) , f_MaterialChip7)) , $add_13(f_MaterialRow3, (f_MaterialChip8 = new MaterialChip , f_MaterialChip8.span_0.setText('Mango') , $add_13(f_MaterialChip8, f_MaterialChip8.span_0) , $setTextColor(f_MaterialChip8.colorsMixin, 'white') , $setBackgroundColor(f_MaterialChip8.colorsMixin, 'green') , $setIconType_1(f_MaterialChip8, CLOSE) , f_MaterialChip8)) , f_MaterialRow3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre9 = new PrettyPre , $setHTML(f_PrettyPre9, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialChip text=\"Default\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"Apple\" backgroundColor=\"red\" textColor=\"white\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"Orange\" backgroundColor=\"orange\" textColor=\"white\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"Banana\" backgroundColor=\"amber\" textColor=\"white\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"Mango\" backgroundColor=\"green\" textColor=\"white\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre9.element, 'lang-xml', true) , setStyleName(f_PrettyPre9.element, 'z-depth-1', true) , f_PrettyPre9), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle10 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle10.header), 'Static Chip') , $setText_4(f_MaterialTitle10.paragraph, 'Static chips cannot be selected, removed or edited, and are not part of any model.') , f_MaterialTitle10), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow11 = new MaterialRow , $add_13(f_MaterialRow11, (f_MaterialChip12 = new MaterialChip , f_MaterialChip12.span_0.setText('Apple') , $add_13(f_MaterialChip12, f_MaterialChip12.span_0) , f_MaterialChip12)) , $add_13(f_MaterialRow11, (f_MaterialChip13 = new MaterialChip , f_MaterialChip13.span_0.setText('Banana') , $add_13(f_MaterialChip13, f_MaterialChip13.span_0) , f_MaterialChip13)) , $add_13(f_MaterialRow11, (f_MaterialChip14 = new MaterialChip , f_MaterialChip14.span_0.setText('Mango') , $add_13(f_MaterialChip14, f_MaterialChip14.span_0) , f_MaterialChip14)) , f_MaterialRow11), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre15 = new PrettyPre , $setHTML(f_PrettyPre15, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialChip text=\"Apple\" /&gt;<br> &lt;m:MaterialChip text=\"Banana\" /&gt;<br> &lt;m:MaterialChip text=\"Mango\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre15.element, 'lang-xml', true) , setStyleName(f_PrettyPre15.element, 'z-depth-1', true) , f_PrettyPre15), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle16 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle16.header), 'Contact Chips') , $setText_4(f_MaterialTitle16.paragraph, 'Contact chips represent contact information that users have for people in a compact way. They are invoked and inserted into a text field (usually the To field) when the user starts typing a contact\\xE2\\u20AC\\u2122s name, sees the contact\\xE2\\u20AC\\u2122s addresses, and selects the correct one. Contact chips can be added directly to a text field from a menu of contacts. Contact chips efficiently confirm that the user will be sending their message to the correct person.') , f_MaterialTitle16), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow17 = new MaterialRow , $add_13(f_MaterialRow17, (f_MaterialChip18 = new MaterialChip , f_MaterialChip18.span_0.setText(\"Yunalis Mat Zara'ai\") , $add_13(f_MaterialChip18, f_MaterialChip18.span_0) , $setUrl_0(f_MaterialChip18.image, 'http://b.vimeocdn.com/ps/339/488/3394886_300.jpg') , $add_13(f_MaterialChip18, f_MaterialChip18.image) , $setIconType_1(f_MaterialChip18, CLOSE) , f_MaterialChip18)) , $add_13(f_MaterialRow17, (f_MaterialChip19 = new MaterialChip , f_MaterialChip19.span_0.setText('Marjorie Matias') , $add_13(f_MaterialChip19, f_MaterialChip19.span_0) , $setUrl_0(f_MaterialChip19.image, 'http://lorempixel.com/50/50/people?1') , $add_13(f_MaterialChip19, f_MaterialChip19.image) , $setIconType_1(f_MaterialChip19, CLOSE) , f_MaterialChip19)) , $add_13(f_MaterialRow17, (f_MaterialChip20 = new MaterialChip , f_MaterialChip20.span_0.setText('Zenaida Ringor') , $add_13(f_MaterialChip20, f_MaterialChip20.span_0) , $setUrl_0(f_MaterialChip20.image, 'http://lorempixel.com/50/50/people?8') , $add_13(f_MaterialChip20, f_MaterialChip20.image) , $setIconType_1(f_MaterialChip20, CLOSE) , f_MaterialChip20)) , f_MaterialRow17), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre21 = new PrettyPre , $setHTML(f_PrettyPre21, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialChip url=\"http://b.vimeocdn.com/ps/339/488/3394886_300.jpg\" text=\"Yunalis Mat Zara\\'ai\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip url=\"http://lorempixel.com/50/50/people?1\" text=\"Marjorie Matias\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip url=\"http://lorempixel.com/50/50/people?8\" text=\"Zenaida Ringor\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre21.element, 'lang-xml', true) , setStyleName(f_PrettyPre21.element, 'z-depth-1', true) , f_PrettyPre21), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle22 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle22.header), 'Events') , $setText_4(f_MaterialTitle22.paragraph, 'Adding events on chip is easy, you can get the secondary icon by calling getIcon() then addClickHandles etc.') , f_MaterialTitle22), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (chip = new MaterialChip , chip.span_0.setText(\"Yunalis Mat Zara'ai\") , $add_13(chip, chip.span_0) , $setUrl_0(chip.image, 'http://b.vimeocdn.com/ps/339/488/3394886_300.jpg') , $add_13(chip, chip.image) , $setIconType_1(chip, CLOSE) , this$static.owner.chip = chip , chip), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (chipClick = new MaterialChip , chipClick.span_0.setText('Click Me') , $add_13(chipClick, chipClick.span_0) , $addDomHandler(chipClick, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , chipClick), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre23 = new PrettyPre , $setHTML(f_PrettyPre23, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialChip ui:field=\"chip\" url=\"http://b.vimeocdn.com/ps/339/488/3394886_300.jpg\" text=\"Yunalis Mat Zara\\'ai\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip ui:field=\"chipClick\" text=\"Click Me\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre23.element, 'lang-xml', true) , setStyleName(f_PrettyPre23.element, 'z-depth-1', true) , f_PrettyPre23), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre24 = new PrettyPre , $setHTML(f_PrettyPre24, (sb_3 = new StringBuilder , sb_3.string += '\\u2003@UiField MaterialChip chip;<br><br> chip.getIcon().addClickHandler(new ClickHandler() {<br> @Override<br> \\u2003public void onClick(ClickEvent event) {<br> \\u2003\\u2003MaterialToast.fireToast(chip.getText());<br> \\u2003}<br> });<br><br> @UiHandler(\"chipClick\")<br> void onClickChip(ClickEvent e) {<br> \\u2003MaterialToast.fireToast(\"You clicked me\");<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(f_PrettyPre24.element, 'lang-java', true) , setStyleName(f_PrettyPre24.element, 'z-depth-1', true) , f_PrettyPre24), $get_0(this$static.domId13Element));\n  return f_HTMLPanel1;\n}\n\nfunction ChipsView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ChipsView_BinderImpl$Widgets$1;\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n}\n\ndefineClass(829, 1, {}, ChipsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl/Widgets', 829);\nfunction ChipsView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(830, 1, $intern_51, ChipsView_BinderImpl$Widgets$1);\n_.onClick = function onClick_18(event_0){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 17, 0, [])), 'You clicked me', $intern_57, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl/Widgets/1', 830);\nfunction $html6(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$) {\n    result = new ChipsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$) {\n    result = new ChipsView(new ChipsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$;\n}\n\ndefineClass(470, 1, $intern_56);\n_.onSuccess_0 = function onSuccess_1(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(2);\n\n//# sourceURL=gwtmaterialdemo-2.js\n")
