$wnd.gwtmaterialdemo.runAsyncCallback12("function $setUrl_1(this$static){\n  $setSrc(($clinit_DOM() , this$static.element), 'http://www.youtube.com/embed/Q8TXgCzxEnw?rel=0');\n}\n\ndefineClass(68, 41, $intern_46);\n_.getText = function getText_4(){\n  return this.text_0;\n}\n;\ndefineClass(229, 68, $intern_46);\n_.getText = function getText_5(){\n  return ($clinit_DOM() , this.element).innerHTML;\n}\n;\nfunction MaterialSlideCaption(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  $setClassName(($clinit_DOM() , this.element), 'caption');\n}\n\ndefineClass(232, 41, $intern_46, MaterialSlideCaption);\nvar Lgwt_material_design_client_ui_MaterialSlideCaption_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlideCaption', 232);\nfunction MaterialSlideItem(){\n  ListItem.call(this);\n}\n\ndefineClass(226, 39, $intern_49, MaterialSlideItem);\nvar Lgwt_material_design_client_ui_MaterialSlideItem_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlideItem', 226);\nfunction $add_25(this$static, child){\n  this$static.ul.add_0(child);\n}\n\nfunction $initialize_2(e){\n  $wnd.jQuery(document).ready(function(){\n    $wnd.jQuery(e).slider({full_width:true});\n  }\n  );\n}\n\nfunction $setFullscreen(this$static, fullscreen){\n  $setOn(this$static.fsMixin, fullscreen);\n}\n\nfunction $setHeight_1(this$static, height){\n  ($clinit_DOM() , this$static.element).style['height'] = height;\n  $setHeight_0(this$static.ul, height);\n}\n\nfunction MaterialSlider(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.ul = new UnorderedList;\n  this.fsMixin = new ToggleStyleMixin(this, 'fullscreen');\n  $setClassName(($clinit_DOM() , this.element), 'slider');\n  $setStyleName(this.ul, 'slides');\n  $add_13(this, this.ul);\n}\n\ndefineClass(980, 41, $intern_46, MaterialSlider);\n_.add_0 = function add_26(child){\n  $add_25(this, child);\n}\n;\n_.onLoad = function onLoad_14(){\n  $initialize_2(($clinit_DOM() , this.element));\n}\n;\n_.setHeight_0 = function setHeight_3(height){\n  $setHeight_1(this, height);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialSlider_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlider', 980);\nfunction MaterialVideo(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.frame_0 = new Frame_0;\n  $add_13(this, this.frame_0);\n}\n\ndefineClass(979, 41, $intern_46, MaterialVideo);\nvar Lgwt_material_design_client_ui_MaterialVideo_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialVideo', 979);\nfunction MediaPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(520, 51, $intern_39, MediaPresenter);\n_.onReveal = function onReveal_17(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Media', 'Media components include things that have to do with large media objects like Images, Video, Audio, etc.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaPresenter', 520);\nfunction $fullscreenBtnClick(this$static){\n  $setFullscreen_0(this$static, $equals_0(this$static.fullscreenBtn.span_0.getText(), 'Fullscreen Slider'));\n}\n\nfunction $setFullscreen_0(this$static, fullscreen){\n  $setFullscreen(this$static.slider_0, fullscreen);\n  if (fullscreen) {\n    ($clinit_DOM() , this$static.slider_0.element).style['position'] = ($clinit_Style$Position() , 'fixed');\n    this$static.slider_0.element.style['zIndex'] = '9998';\n    $setHeight_1(this$static.slider_0, '100%');\n    this$static.fullscreenBtn.element.style['position'] = 'fixed';\n    this$static.fullscreenBtn.element.style['zIndex'] = '9999';\n    this$static.fullscreenBtn.element.style['bottom'] = ($clinit_Style$Unit() , '0.0px');\n    this$static.fullscreenBtn.element.style['left'] = '0.0px';\n    $setIconType(this$static.fullscreenBtn, ($clinit_IconType() , FULLSCREEN_EXIT));\n    $setText_3(this$static.fullscreenBtn, 'Close Fullscreen');\n  }\n   else {\n    ($clinit_DOM() , this$static.slider_0.element).style['position'] = '';\n    this$static.slider_0.element.style['zIndex'] = '';\n    this$static.slider_0.element.style['height'] = '';\n    this$static.fullscreenBtn.element.style['position'] = '';\n    this$static.fullscreenBtn.element.style['zIndex'] = '';\n    this$static.fullscreenBtn.element.style['bottom'] = '';\n    this$static.fullscreenBtn.element.style['left'] = '';\n    $setIconType(this$static.fullscreenBtn, ($clinit_IconType() , FULLSCREEN));\n    $setText_3(this$static.fullscreenBtn, 'Fullscreen Slider');\n  }\n}\n\nfunction MediaView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_12(new MediaView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(657, 55, $intern_40, MediaView);\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView', 657);\nfunction MediaView_BinderImpl(){\n}\n\ndefineClass(844, 1, {}, MediaView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl', 844);\nfunction $build_f_HTMLPanel1_12(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialImage3, f_MaterialTitle4, f_MaterialImage5, f_MaterialTitle6, f_MaterialVideo7, f_MaterialTitle8, slider, f_MaterialTitle25, fullscreenBtn, f_MaterialSlideItem9, f_MaterialImage10, f_MaterialSlideCaption11, f_MaterialTitle12, f_MaterialSlideItem13, f_MaterialImage14, f_MaterialSlideCaption15, f_MaterialTitle16, f_MaterialSlideItem17, f_MaterialImage18, f_MaterialSlideCaption19, f_MaterialTitle20, f_MaterialSlideItem21, f_MaterialImage22, f_MaterialSlideCaption23, f_MaterialTitle24;\n  f_HTMLPanel1 = new HTMLPanel($html1_9(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Material Box') , $setText_4(f_MaterialTitle2.paragraph, 'Material box is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged. Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialImage3 = new MaterialImage , $setType_4(f_MaterialImage3, ($clinit_ImageType() , MATERIALBOXED)) , $setUrl_2(f_MaterialImage3, ($clinit_UriUtils() , new SafeUriString('http://assets.materialup.com/uploads/0587e4a8-6a46-4e27-b8bf-836e4350fe82/candycons.gif'))) , f_MaterialImage3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Captions') , $setText_4(f_MaterialTitle4.paragraph, 'It is very easy to add a short caption to your photo. Just add the caption as a caption attribute.') , f_MaterialTitle4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialImage5 = new MaterialImage , $setAttribute(f_MaterialImage5.element, 'data-caption', 'I love Material Design') , $setType_4(f_MaterialImage5, MATERIALBOXED) , $setUrl_2(f_MaterialImage5, new SafeUriString('http://assets.materialup.com/uploads/449089f1-22d5-473f-9de6-59ef04e9de2b/personal-card-material-design-animation.gif')) , f_MaterialImage5), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Responsive Videos') , $setText_4(f_MaterialTitle6.paragraph, 'We provide a container for Embedded Videos that resizes them responsively.') , f_MaterialTitle6), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialVideo7 = new MaterialVideo , $setUrl_1(f_MaterialVideo7.frame_0) , setStyleName(f_MaterialVideo7.element, 'video-container', true) , $add_13(f_MaterialVideo7, f_MaterialVideo7.frame_0) , undefined , f_MaterialVideo7), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), 'Material Slider') , $setText_4(f_MaterialTitle8.paragraph, 'Our slider is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider. Note: This is also Hammer.js compatible! Try swiping with your finger to scroll through the slider.') , f_MaterialTitle8), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (slider = new MaterialSlider , $add_25(slider, (f_MaterialSlideItem9 = new MaterialSlideItem , $add_13(f_MaterialSlideItem9, (f_MaterialImage10 = new MaterialImage , $setUrl_2(f_MaterialImage10, new SafeUriString('http://mayastepien.nl/googlecalendar/google-drinks.jpg')) , f_MaterialImage10)) , $add_13(f_MaterialSlideItem9, (f_MaterialSlideCaption11 = new MaterialSlideCaption , $add_13(f_MaterialSlideCaption11, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), 'This is our big Tagline') , $setText_4(f_MaterialTitle12.paragraph, \"Here's our small slogan.\") , f_MaterialTitle12)) , $setTextAlign(f_MaterialSlideCaption11, ($clinit_TextAlign() , CENTER_4)) , f_MaterialSlideCaption11)) , f_MaterialSlideItem9)) , $add_25(slider, (f_MaterialSlideItem13 = new MaterialSlideItem , $add_13(f_MaterialSlideItem13, (f_MaterialImage14 = new MaterialImage , $setUrl_2(f_MaterialImage14, new SafeUriString('http://mayastepien.nl/googlecalendar/google-coffee.jpg')) , f_MaterialImage14)) , $add_13(f_MaterialSlideItem13, (f_MaterialSlideCaption15 = new MaterialSlideCaption , $add_13(f_MaterialSlideCaption15, (f_MaterialTitle16 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle16.header), 'This is our big Tagline') , $setText_4(f_MaterialTitle16.paragraph, \"Here's our small slogan.\") , f_MaterialTitle16)) , $setTextAlign(f_MaterialSlideCaption15, LEFT_6) , f_MaterialSlideCaption15)) , f_MaterialSlideItem13)) , $add_25(slider, (f_MaterialSlideItem17 = new MaterialSlideItem , $add_13(f_MaterialSlideItem17, (f_MaterialImage18 = new MaterialImage , $setUrl_2(f_MaterialImage18, new SafeUriString('http://mayastepien.nl/googlecalendar/google-skiing.jpg')) , f_MaterialImage18)) , $add_13(f_MaterialSlideItem17, (f_MaterialSlideCaption19 = new MaterialSlideCaption , $add_13(f_MaterialSlideCaption19, (f_MaterialTitle20 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle20.header), 'This is our big Tagline') , $setText_4(f_MaterialTitle20.paragraph, \"Here's our small slogan.\") , f_MaterialTitle20)) , $setTextAlign(f_MaterialSlideCaption19, RIGHT_7) , f_MaterialSlideCaption19)) , f_MaterialSlideItem17)) , $add_25(slider, (f_MaterialSlideItem21 = new MaterialSlideItem , $add_13(f_MaterialSlideItem21, (f_MaterialImage22 = new MaterialImage , $setUrl_2(f_MaterialImage22, new SafeUriString('http://mayastepien.nl/googlecalendar/google-manicure.jpg')) , f_MaterialImage22)) , $add_13(f_MaterialSlideItem21, (f_MaterialSlideCaption23 = new MaterialSlideCaption , $add_13(f_MaterialSlideCaption23, (f_MaterialTitle24 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle24.header), 'This is our big Tagline') , $setText_4(f_MaterialTitle24.paragraph, \"Here's our small slogan.\") , f_MaterialTitle24)) , $setTextAlign(f_MaterialSlideCaption23, CENTER_4) , f_MaterialSlideCaption23)) , f_MaterialSlideItem21)) , $setOn(slider.fsMixin, false) , this$static.owner.slider_0 = slider , slider), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle25 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle25.header), 'Material Slider Fullscreen') , $setText_4(f_MaterialTitle25.paragraph, \"Just add fullscreen='true' on MaterialSlide to make the slider fullscreen\") , f_MaterialTitle25), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (fullscreenBtn = new MaterialButton , fullscreenBtn.span_0.setText('Fullscreen Slider') , $add_13(fullscreenBtn, fullscreenBtn.span_0) , $setWaves(fullscreenBtn, ($clinit_WavesType() , LIGHT)) , $setIconType(fullscreenBtn, ($clinit_IconType() , FULLSCREEN)) , $addDomHandler(fullscreenBtn, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , this$static.owner.fullscreenBtn = fullscreenBtn , fullscreenBtn), $get_0(this$static.domId9Element));\n  return f_HTMLPanel1;\n}\n\nfunction MediaView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new MediaView_BinderImpl$Widgets$1(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n}\n\ndefineClass(845, 1, {}, MediaView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets', 845);\nfunction MediaView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(846, 1, $intern_55, MediaView_BinderImpl$Widgets$1);\n_.onClick = function onClick_57(event_0){\n  $fullscreenBtnClick(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets/1', 846);\nfunction $html1_9(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$) {\n    result = new MediaPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$) {\n    result = new MediaView(new MediaView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$;\n}\n\ndefineClass(467, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_11(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(12);\n\n//# sourceURL=gwtmaterialdemo-12.js\n")
