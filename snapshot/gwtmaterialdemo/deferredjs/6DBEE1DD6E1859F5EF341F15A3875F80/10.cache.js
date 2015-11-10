$wnd.gwtmaterialdemo.runAsyncCallback10("function $setPropertyBoolean(this$static, name_0, value_0){\n  this$static[name_0] = value_0;\n}\n\nfunction $selectAdd(select, option, before){\n  select.add(option, before);\n}\n\nfunction $setEnabled(this$static, enabled){\n  ($clinit_DOM() , this$static.element)['disabled'] = !enabled;\n}\n\nfunction $getValue_0(this$static){\n  return this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE:FALSE);\n}\n\nfunction $setText(this$static, text_0){\n  $setTextOrHtml(this$static.directionalTextHelper, text_0);\n}\n\nfunction $getSelectElement(this$static){\n  return $clinit_DOM() , this$static.element;\n}\n\nfunction $insertItem(this$static, item_0, value_0, index_0){\n  var before, itemCount, option, select;\n  select = ($clinit_DOM() , this$static.element);\n  option = $doc.createElement('option');\n  option.text = item_0;\n  $removeAttribute(option, 'bidiwrapped');\n  option.value = value_0;\n  itemCount = select.options.length;\n  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);\n  if (index_0 == itemCount) {\n    $selectAdd(select, option, null);\n  }\n   else {\n    before = select.options[index_0];\n    $selectAdd(select, option, before);\n  }\n}\n\ndefineClass(976, 260, $intern_85);\nvar Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 976);\nfunction $isOn(this$static){\n  return containsStyle(this$static.uiObject.getStyleElement().className || '', this$static.style_0);\n}\n\nfunction $createInternalChangeHandler(this$static, id_0){\n  var that = this$static;\n  var callback = $entry(function(){\n    that.onChangeInternal();\n  }\n  );\n  $wnd.jQuery('#' + id_0).change(callback);\n}\n\nfunction $initializeMaterial(id_0){\n  $wnd.jQuery(document).ready(function(){\n    $wnd.jQuery('#' + id_0).material_select();\n  }\n  );\n}\n\nfunction $setId_1(this$static, id_0){\n  $setId_0(this$static.idMixin, id_0);\n}\n\nfunction MaterialListBox(){\n  $clinit_FocusWidget();\n  FocusWidget.call(this, $doc.createElement('select'));\n  $setClassName(($clinit_DOM() , this.element), 'gwt-ListBox');\n  this.idMixin = new IdMixin(this);\n  new GridMixin(this);\n  new ColorsMixin(this);\n  this.oldMixin = new ToggleStyleMixin(this, 'browser-default input-field');\n  $setId_1(this, $createUniqueId($doc));\n}\n\ndefineClass(219, 976, $intern_85, MaterialListBox);\n_.onChangeInternal = function onChangeInternal(){\n  $createHtmlEvent($doc, 'change', false, true);\n}\n;\n_.onLoad = function onLoad_11(){\n  $isOn(this.oldMixin) || $createInternalChangeHandler(this, $getElement(this.idMixin.uiObject).id);\n  $initializeMaterial($getElement(this.idMixin.uiObject).id);\n}\n;\n_.setId = function setId_5(id_0){\n  $setId_1(this, id_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialListBox_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialListBox', 219);\nfunction $getIntFromRangeElement(this$static, attribute){\n  var ele;\n  ele = $getRangeElement(this$static);\n  if (ele) {\n    return valueOf_1($getPropertyInt(ele, attribute));\n  }\n  return null;\n}\n\nfunction $getRangeElement(this$static){\n  var elements;\n  if (!this$static.rangeElement) {\n    elements = $getElementsByTagName(($clinit_DOM() , this$static.element), INPUT_0);\n    !!elements && elements.length > 0 && (this$static.rangeElement = elements[0]);\n  }\n  return this$static.rangeElement;\n}\n\nfunction $setIntToRangeElement(this$static, attribute, val){\n  var ele;\n  ele = $getRangeElement(this$static);\n  !!ele && $setPropertyInt(ele, attribute, val.value_0);\n}\n\nfunction $setMax(this$static, max_0){\n  $setIntToRangeElement(this$static, MAX, max_0);\n}\n\nvar INPUT_0 = 'INPUT', MAX = 'max', VALUE = 'value';\nfunction $setEnabled_2(this$static){\n  $setEnabled_1(this$static.enabledMixin);\n  $setAttribute(($clinit_DOM() , this$static.element), 'style', 'background-color:transparent !important');\n  $setAttribute($getElement(this$static.label_0), 'style', 'background-color:transparent !important');\n  $setEnabled_1(this$static.span_0.enabledMixin);\n  $setEnabled(this$static.input_0, false);\n}\n\nfunction $setIconType_3(this$static, iconType){\n  $setIconType_2(this$static.icon_0, iconType);\n  $setOn(this$static.icon_0.prefixMixin, true);\n}\n\nfunction $setIconType_4(this$static, iconType){\n  $setIconType_2(this$static.icon_0, iconType);\n  $setOn(this$static.icon_0.prefixMixin, true);\n}\n\nfunction FormsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(518, 51, $intern_40, FormsPresenter);\n_.onReveal = function onReveal_15(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Forms', 'Forms are the standard way to receive user inputted data. The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsPresenter', 518);\nfunction $onCheckAll(this$static){\n  if ($getValue_0(this$static.cbBoxAll).value_0) {\n    $setValue(this$static.cbBlue, ($clinit_Boolean() , $clinit_Boolean() , TRUE));\n    $setValue(this$static.cbRed, (null , TRUE));\n    $setValue(this$static.cbCyan, (null , TRUE));\n    $setValue(this$static.cbGreen, (null , TRUE));\n    $setValue(this$static.cbBrown, (null , TRUE));\n  }\n   else {\n    $setValue(this$static.cbBlue, ($clinit_Boolean() , $clinit_Boolean() , FALSE));\n    $setValue(this$static.cbRed, (null , FALSE));\n    $setValue(this$static.cbCyan, (null , FALSE));\n    $setValue(this$static.cbGreen, (null , FALSE));\n    $setValue(this$static.cbBrown, (null , FALSE));\n  }\n}\n\nfunction $onCheckBox(this$static){\n  $getValue_0(this$static.cbBox).value_0?$setText(this$static.cbBox, 'CheckBox 1: true'):$setText(this$static.cbBox, 'CheckBox 1: false');\n}\n\nfunction $onRange(this$static){\n  $setText_0(this$static.lblRange, 'Value: ' + ('' + $getIntFromRangeElement(this$static.range, VALUE)));\n}\n\nfunction $onSwitch1(this$static){\n  ($clinit_Boolean() , $getElement(this$static.switch1.input_0).hasAttribute('checked')?TRUE:FALSE).value_0?$setText_0(this$static.lblSwitch1, 'Switch: true'):$setText_0(this$static.lblSwitch1, 'Switch: false');\n}\n\nfunction $onSwitch2(this$static){\n  ($clinit_Boolean() , $getElement(this$static.switch2.input_0).hasAttribute('checked')?TRUE:FALSE).value_0?$setText_0(this$static.lblSwitch2, 'Switch: true'):$setText_0(this$static.lblSwitch2, 'Switch: false');\n}\n\nfunction FormsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_10(new FormsView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(652, 55, $intern_41, FormsView);\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView', 652);\nfunction FormsView_BinderImpl(){\n}\n\ndefineClass(831, 1, {}, FormsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl', 831);\nfunction $build_f_HTMLPanel1_10(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialTextBox3, f_MaterialTextBox4, f_MaterialTitle5, f_MaterialTextArea6, txtArea, f_MaterialTitle7, lstOptions, f_MaterialTitle8, f_MaterialTitle9, f_MaterialListBox10, f_MaterialTitle11, f_MaterialListBox12, f_MaterialListBox13, f_MaterialTitle14, f_MaterialRadioButton15, f_MaterialRadioButton16, f_MaterialRadioButton17, f_MaterialRadioButton18, f_MaterialTitle19, f_MaterialRow20, f_MaterialTitle28, f_MaterialRow29, f_MaterialRow30, f_MaterialRow31, f_MaterialRow34, f_MaterialTitle37, range, f_MaterialLabel38, f_MaterialLabel39, lblRange, f_MaterialColumn21, f_MaterialCheckBox22, f_MaterialCheckBox23, f_MaterialCheckBox24, f_MaterialCheckBox25, f_MaterialCheckBox26, cbBox, f_MaterialColumn27, cbBoxAll, cbBlue, cbRed, cbCyan, cbGreen, cbBrown, switch1, lblSwitch1, switch2, lblSwitch2, f_MaterialSwitch32, f_MaterialLabel33, f_MaterialSwitch35, f_MaterialLabel36;\n  f_HTMLPanel1 = new HTMLPanel($html1_7(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId15, this$static.domId16, this$static.domId17, this$static.domId18, this$static.domId19, this$static.domId20, this$static.domId21, this$static.domId22, this$static.domId23, this$static.domId24, this$static.domId25, this$static.domId26, this$static.domId27, this$static.domId28, this$static.domId29, this$static.domId30).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  $get_0(this$static.domId15Element);\n  $get_0(this$static.domId16Element);\n  $get_0(this$static.domId17Element);\n  $get_0(this$static.domId18Element);\n  $get_0(this$static.domId19Element);\n  $get_0(this$static.domId20Element);\n  $get_0(this$static.domId21Element);\n  $get_0(this$static.domId22Element);\n  $get_0(this$static.domId23Element);\n  $get_0(this$static.domId24Element);\n  $get_0(this$static.domId25Element);\n  $get_0(this$static.domId26Element);\n  $get_0(this$static.domId27Element);\n  $get_0(this$static.domId28Element);\n  $get_0(this$static.domId29Element);\n  $get_0(this$static.domId30Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'TextBox') , $setText_4(f_MaterialTitle2.paragraph, 'Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTextBox3 = new MaterialTextBox , $setText_0(f_MaterialTextBox3.lblName, 'First Name') , f_MaterialTextBox3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTextBox4 = new MaterialTextBox , $setText_0(f_MaterialTextBox4.lblName, 'Email') , $setIconType_4(f_MaterialTextBox4, ($clinit_IconType() , ACCOUNT_CIRCLE)) , f_MaterialTextBox4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle5.header), 'Textarea') , $setText_4(f_MaterialTitle5.paragraph, 'Textareas allow larger expandable user input. The border should light up simply and clearly indicating which field the user is currently editing.') , f_MaterialTitle5), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTextArea6 = new MaterialTextArea , $setText_0(f_MaterialTextArea6.lblName, 'Content') , f_MaterialTextArea6), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (txtArea = new MaterialTextArea , $setText_0(txtArea.lblName, 'About') , $setIconType_3(txtArea, FACE) , txtArea), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'ListBox') , $setText_4(f_MaterialTitle7.paragraph, 'Select allows user input through specified options.') , f_MaterialTitle7), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (lstOptions = new MaterialListBox , $insertItem(lstOptions, 'Option 1', 'Option 1', -1) , $initializeMaterial($getElement(lstOptions.idMixin.uiObject).id) , $insertItem(lstOptions, 'Option 2', 'Option 2', -1) , $initializeMaterial($getElement(lstOptions.idMixin.uiObject).id) , $insertItem(lstOptions, 'Option 3', 'Option 3', -1) , $initializeMaterial($getElement(lstOptions.idMixin.uiObject).id) , $addDomHandler(lstOptions, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0)) , this$static.owner.lstOptions = lstOptions , lstOptions), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), 'ChangeHandler') , $setText_4(f_MaterialTitle8.paragraph, 'Add the code below to trigger any events on listbox') , f_MaterialTitle8), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), 'Old Browser List Box') , $setText_4(f_MaterialTitle9.paragraph, \"You can add an attribute old='true' to get the browser default listbox.\") , f_MaterialTitle9), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialListBox10 = new MaterialListBox , $insertItem(f_MaterialListBox10, 'Option 1', 'Option 1', -1) , $initializeMaterial($getElement(f_MaterialListBox10.idMixin.uiObject).id) , $insertItem(f_MaterialListBox10, 'Option 2', 'Option 2', -1) , $initializeMaterial($getElement(f_MaterialListBox10.idMixin.uiObject).id) , $insertItem(f_MaterialListBox10, 'Option 3', 'Option 3', -1) , $initializeMaterial($getElement(f_MaterialListBox10.idMixin.uiObject).id) , $setOn(f_MaterialListBox10.oldMixin, true) , f_MaterialListBox10), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Disabled Styles') , $setText_4(f_MaterialTitle11.paragraph, \"You can also add an attribute disabled='true' to the select element to make the whole thing disabled. Or if you add disabled to the options, the individual options will be unselectable.\") , f_MaterialTitle11), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialListBox12 = new MaterialListBox , $insertItem(f_MaterialListBox12, 'Option 1', 'Option 1', -1) , $initializeMaterial($getElement(f_MaterialListBox12.idMixin.uiObject).id) , $insertItem(f_MaterialListBox12, 'Option 2', 'Option 2', -1) , $initializeMaterial($getElement(f_MaterialListBox12.idMixin.uiObject).id) , $insertItem(f_MaterialListBox12, 'Option 3', 'Option 3', -1) , $initializeMaterial($getElement(f_MaterialListBox12.idMixin.uiObject).id) , $setPropertyBoolean(f_MaterialListBox12.element, 'disabled', true) , f_MaterialListBox12), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialListBox13 = new MaterialListBox , $insertItem(f_MaterialListBox13, 'Option 1', 'Option 1', -1) , $initializeMaterial($getElement(f_MaterialListBox13.idMixin.uiObject).id) , $insertItem(f_MaterialListBox13, 'Option 2', 'Option 2', -1) , $initializeMaterial($getElement(f_MaterialListBox13.idMixin.uiObject).id) , $insertItem(f_MaterialListBox13, 'Option 3', 'Option 3', -1) , $initializeMaterial($getElement(f_MaterialListBox13.idMixin.uiObject).id) , $setPropertyBoolean(f_MaterialListBox13.element, 'disabled', true) , $setOn(f_MaterialListBox13.oldMixin, true) , f_MaterialListBox13), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle14 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle14.header), 'Radio Button') , $setText_4(f_MaterialTitle14.paragraph, 'Radio Buttons are used when the user must make only one selection out of a group of items') , f_MaterialTitle14), $get_0(this$static.domId14Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRadioButton15 = new MaterialRadioButton , setStyleName(f_MaterialRadioButton15.element, 'KVUXRGB-h-a', true) , $setTextOrHtml(f_MaterialRadioButton15.directionalTextHelper, 'Red') , $replaceInputElement(f_MaterialRadioButton15, $createInputRadioElement($doc, 'color')) , f_MaterialRadioButton15), $get_0(this$static.domId15Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRadioButton16 = new MaterialRadioButton , setStyleName(f_MaterialRadioButton16.element, 'KVUXRGB-h-a', true) , $setTextOrHtml(f_MaterialRadioButton16.directionalTextHelper, 'Yellow') , $replaceInputElement(f_MaterialRadioButton16, $createInputRadioElement($doc, 'color')) , f_MaterialRadioButton16), $get_0(this$static.domId16Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRadioButton17 = new MaterialRadioButton , setStyleName(f_MaterialRadioButton17.element, 'KVUXRGB-h-a', true) , $setTextOrHtml(f_MaterialRadioButton17.directionalTextHelper, 'Green') , $replaceInputElement(f_MaterialRadioButton17, $createInputRadioElement($doc, 'color')) , f_MaterialRadioButton17), $get_0(this$static.domId17Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRadioButton18 = new MaterialRadioButton , setStyleName(f_MaterialRadioButton18.element, 'KVUXRGB-h-a', true) , $setDisabled(f_MaterialRadioButton18.inputElem, true) , $setStyleName_0(f_MaterialRadioButton18, getStylePrimaryName(f_MaterialRadioButton18.element) + '-' + 'disabled', true) , $setTextOrHtml(f_MaterialRadioButton18.directionalTextHelper, 'Brown') , $replaceInputElement(f_MaterialRadioButton18, $createInputRadioElement($doc, 'color')) , f_MaterialRadioButton18), $get_0(this$static.domId18Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle19 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle19.header), 'Check Box') , $setText_4(f_MaterialTitle19.paragraph, 'Checkboxes') , f_MaterialTitle19), $get_0(this$static.domId19Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow20 = new MaterialRow , $add_13(f_MaterialRow20, (f_MaterialColumn21 = new MaterialColumn , $add_13(f_MaterialColumn21, (f_MaterialCheckBox22 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox22.directionalTextHelper, 'Blue') , $setValue(f_MaterialCheckBox22, ($clinit_Boolean() , $clinit_Boolean() , TRUE)) , f_MaterialCheckBox22)) , $add_13(f_MaterialColumn21, (f_MaterialCheckBox23 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox23.directionalTextHelper, 'Red') , f_MaterialCheckBox23)) , $add_13(f_MaterialColumn21, (f_MaterialCheckBox24 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox24.directionalTextHelper, 'Cyan') , $setValue(f_MaterialCheckBox24, (null , TRUE)) , $setType_1(f_MaterialCheckBox24, ($clinit_CheckBoxType() , FILLED)) , f_MaterialCheckBox24)) , $add_13(f_MaterialColumn21, (f_MaterialCheckBox25 = new MaterialCheckBox , $setDisabled(f_MaterialCheckBox25.inputElem, true) , $setStyleName_0(f_MaterialCheckBox25, getStylePrimaryName(f_MaterialCheckBox25.element) + '-' + 'disabled', true) , $setTextOrHtml(f_MaterialCheckBox25.directionalTextHelper, 'Green') , $setValue(f_MaterialCheckBox25, (null , TRUE)) , f_MaterialCheckBox25)) , $add_13(f_MaterialColumn21, (f_MaterialCheckBox26 = new MaterialCheckBox , $setDisabled(f_MaterialCheckBox26.inputElem, true) , $setStyleName_0(f_MaterialCheckBox26, getStylePrimaryName(f_MaterialCheckBox26.element) + '-' + 'disabled', true) , $setTextOrHtml(f_MaterialCheckBox26.directionalTextHelper, 'Brown') , f_MaterialCheckBox26)) , $add_13(f_MaterialColumn21, (cbBox = new MaterialCheckBox , $setTextOrHtml(cbBox.directionalTextHelper, 'CheckBox 1: true') , $setValue(cbBox, (null , TRUE)) , $setType_1(cbBox, FILLED) , $addDomHandler(cbBox, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , this$static.owner.cbBox = cbBox , cbBox)) , $setGrid(f_MaterialColumn21.gridMixin, 'l2') , f_MaterialColumn21)) , $add_13(f_MaterialRow20, (f_MaterialColumn27 = new MaterialColumn , $add_13(f_MaterialColumn27, (cbBoxAll = new MaterialCheckBox , $setTextOrHtml(cbBoxAll.directionalTextHelper, 'Check all') , $setType_1(cbBoxAll, FILLED) , $addDomHandler(cbBoxAll, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , this$static.owner.cbBoxAll = cbBoxAll , cbBoxAll)) , $add_13(f_MaterialColumn27, (cbBlue = new MaterialCheckBox , $setTextOrHtml(cbBlue.directionalTextHelper, 'Blue') , $setType_1(cbBlue, FILLED) , this$static.owner.cbBlue = cbBlue , cbBlue)) , $add_13(f_MaterialColumn27, (cbRed = new MaterialCheckBox , $setTextOrHtml(cbRed.directionalTextHelper, 'Red') , $setType_1(cbRed, FILLED) , this$static.owner.cbRed = cbRed , cbRed)) , $add_13(f_MaterialColumn27, (cbCyan = new MaterialCheckBox , $setTextOrHtml(cbCyan.directionalTextHelper, 'Cyan') , $setType_1(cbCyan, FILLED) , this$static.owner.cbCyan = cbCyan , cbCyan)) , $add_13(f_MaterialColumn27, (cbGreen = new MaterialCheckBox , $setTextOrHtml(cbGreen.directionalTextHelper, 'Green') , $setType_1(cbGreen, FILLED) , this$static.owner.cbGreen = cbGreen , cbGreen)) , $add_13(f_MaterialColumn27, (cbBrown = new MaterialCheckBox , $setTextOrHtml(cbBrown.directionalTextHelper, 'Brown') , $setType_1(cbBrown, FILLED) , this$static.owner.cbBrown = cbBrown , cbBrown)) , $setGrid(f_MaterialColumn27.gridMixin, 'l2') , f_MaterialColumn27)) , f_MaterialRow20), $get_0(this$static.domId20Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle28 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle28.header), 'Switches') , f_MaterialTitle28), $get_0(this$static.domId21Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow29 = new MaterialRow , $add_13(f_MaterialRow29, (switch1 = new MaterialSwitch , $setValue_3(switch1, (null , TRUE)) , $setGrid(switch1.gridMixin, 'l0') , $addClickHandler(switch1, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , this$static.owner.switch1 = switch1 , switch1)) , $add_13(f_MaterialRow29, (lblSwitch1 = new MaterialLabel , $setTextOrHtml(lblSwitch1.directionalTextHelper, 'Switch: true') , this$static.owner.lblSwitch1 = lblSwitch1 , lblSwitch1)) , f_MaterialRow29), $get_0(this$static.domId22Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow30 = new MaterialRow , $add_13(f_MaterialRow30, (switch2 = new MaterialSwitch , $setValue_3(switch2, (null , FALSE)) , $setGrid(switch2.gridMixin, 'l0') , $addClickHandler(switch2, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , this$static.owner.switch2 = switch2 , switch2)) , $add_13(f_MaterialRow30, (lblSwitch2 = new MaterialLabel , $setTextOrHtml(lblSwitch2.directionalTextHelper, 'Switch: false') , this$static.owner.lblSwitch2 = lblSwitch2 , lblSwitch2)) , f_MaterialRow30), $get_0(this$static.domId23Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow31 = new MaterialRow , $add_13(f_MaterialRow31, (f_MaterialSwitch32 = new MaterialSwitch , $setEnabled_2(f_MaterialSwitch32) , $setValue_3(f_MaterialSwitch32, (null , TRUE)) , $setGrid(f_MaterialSwitch32.gridMixin, 'l0') , f_MaterialSwitch32)) , $add_13(f_MaterialRow31, (f_MaterialLabel33 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel33.directionalTextHelper, 'Switch: disabled') , f_MaterialLabel33)) , f_MaterialRow31), $get_0(this$static.domId24Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow34 = new MaterialRow , $add_13(f_MaterialRow34, (f_MaterialSwitch35 = new MaterialSwitch , $setEnabled_2(f_MaterialSwitch35) , $setGrid(f_MaterialSwitch35.gridMixin, 'l0') , f_MaterialSwitch35)) , $add_13(f_MaterialRow34, (f_MaterialLabel36 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel36.directionalTextHelper, 'Switch: disabled') , f_MaterialLabel36)) , f_MaterialRow34), $get_0(this$static.domId25Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle37 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle37.header), 'Range') , f_MaterialTitle37), $get_0(this$static.domId26Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (range = new MaterialRange , $setMax(range, valueOf_1(50)) , $addDomHandler(range, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE_0)) , this$static.owner.range = range , range), $get_0(this$static.domId27Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel38 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel38.directionalTextHelper, 'Min: 10') , f_MaterialLabel38), $get_0(this$static.domId28Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel39 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel39.directionalTextHelper, 'Min: 50') , f_MaterialLabel39), $get_0(this$static.domId29Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (lblRange = new MaterialLabel , $setTextOrHtml(lblRange.directionalTextHelper, 'Value: 25') , this$static.owner.lblRange = lblRange , lblRange), $get_0(this$static.domId30Element));\n  return f_HTMLPanel1;\n}\n\nfunction FormsView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FormsView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FormsView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new FormsView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new FormsView_BinderImpl$Widgets$4(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new FormsView_BinderImpl$Widgets$5(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new FormsView_BinderImpl$Widgets$6(this);\n  this.owner = owner;\n  this.style_0 = (new FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_8);\n  $ensureInjected_13(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId16 = $createUniqueId($doc);\n  this.domId17 = $createUniqueId($doc);\n  this.domId18 = $createUniqueId($doc);\n  this.domId19 = $createUniqueId($doc);\n  this.domId20 = $createUniqueId($doc);\n  this.domId21 = $createUniqueId($doc);\n  this.domId22 = $createUniqueId($doc);\n  this.domId23 = $createUniqueId($doc);\n  this.domId24 = $createUniqueId($doc);\n  this.domId25 = $createUniqueId($doc);\n  this.domId26 = $createUniqueId($doc);\n  this.domId27 = $createUniqueId($doc);\n  this.domId28 = $createUniqueId($doc);\n  this.domId29 = $createUniqueId($doc);\n  this.domId30 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId15Element = new LazyDomElement(this.domId15);\n  this.domId16Element = new LazyDomElement(this.domId16);\n  this.domId17Element = new LazyDomElement(this.domId17);\n  this.domId18Element = new LazyDomElement(this.domId18);\n  this.domId19Element = new LazyDomElement(this.domId19);\n  this.domId20Element = new LazyDomElement(this.domId20);\n  this.domId21Element = new LazyDomElement(this.domId21);\n  this.domId22Element = new LazyDomElement(this.domId22);\n  this.domId23Element = new LazyDomElement(this.domId23);\n  this.domId24Element = new LazyDomElement(this.domId24);\n  this.domId25Element = new LazyDomElement(this.domId25);\n  this.domId26Element = new LazyDomElement(this.domId26);\n  this.domId27Element = new LazyDomElement(this.domId27);\n  this.domId28Element = new LazyDomElement(this.domId28);\n  this.domId29Element = new LazyDomElement(this.domId29);\n  this.domId30Element = new LazyDomElement(this.domId30);\n}\n\ndefineClass(832, 1, {}, FormsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl/Widgets', 832);\nfunction FormsView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(833, 1, $intern_86, FormsView_BinderImpl$Widgets$1);\n_.onChange = function onChange_0(event_0){\n  fireToast('Selected Index: ' + $getSelectElement(this.this$11.owner.lstOptions).selectedIndex);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl/Widgets/1', 833);\nfunction FormsView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(834, 1, $intern_56, FormsView_BinderImpl$Widgets$2);\n_.onClick = function onClick_50(event_0){\n  $onCheckBox(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl/Widgets/2', 834);\nfunction FormsView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(835, 1, $intern_56, FormsView_BinderImpl$Widgets$3);\n_.onClick = function onClick_51(event_0){\n  $onCheckAll(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl/Widgets/3', 835);\nfunction FormsView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(836, 1, $intern_56, FormsView_BinderImpl$Widgets$4);\n_.onClick = function onClick_52(event_0){\n  $onSwitch1(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl/Widgets/4', 836);\nfunction FormsView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(837, 1, $intern_56, FormsView_BinderImpl$Widgets$5);\n_.onClick = function onClick_53(event_0){\n  $onSwitch2(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl/Widgets/5', 837);\nfunction FormsView_BinderImpl$Widgets$6(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(838, 1, $intern_86, FormsView_BinderImpl$Widgets$6);\n_.onChange = function onChange_1(event_0){\n  $onRange(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl$Widgets$6_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl/Widgets/6', 838);\nfunction FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1104, 1, {}, FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_8;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1104);\nfunction $ensureInjected_13(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.KVUXRGB-h-a{display:block;margin-bottom:10px}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1105, 1, {}, FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_19(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_forms_FormsView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms', 'FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1105);\nfunction $clinit_FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_8 = new FormsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_7(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27, arg28, arg29, arg30){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg15));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg16));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg17));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg18));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg19));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg20));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg21));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg22));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg23));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg24));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg25));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg26));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg27));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg28));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg29));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg30));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$FormsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$FormsPresenter$_annotation$$none$$) {\n    result = new FormsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$forms$FormsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$forms$FormsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$FormsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$FormsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$FormsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$FormsView$_annotation$$none$$) {\n    result = new FormsView(new FormsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$FormsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$FormsView$_annotation$$none$$;\n}\n\ndefineClass(463, 1, $intern_54);\n_.onSuccess_0 = function onSuccess_9(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$forms$FormsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(10);\n\n//# sourceURL=gwtmaterialdemo-10.js\n")
