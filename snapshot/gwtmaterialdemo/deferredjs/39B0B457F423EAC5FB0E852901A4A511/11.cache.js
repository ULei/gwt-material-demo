$wnd.gwtmaterialdemo.runAsyncCallback11("function $clinit_DateTimeFormat_0(){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_DateTimeFormat_0;\n  $clinit_DateTimeFormat_0 = ($location_0[stackIndex] = 'DateTimeFormat.java:' + '390' , emptyMethod);\n  $clinit_DateTimeFormat();\n  cache_0 = ($location_0[stackIndex] = 'DateTimeFormat.java:' + '461' , new HashMap);\n  $stackDepth_0 = stackIndex - 1;\n}\n\nfunction DateTimeFormat_0(){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = DateTimeFormat_0;\n  ($location_0[stackIndex] = 'DateTimeFormat.java:' + '861' , DateTimeFormat).call(this, 'hh:mm a');\n  $stackDepth_0 = stackIndex - 1;\n}\n\nfunction getFormat_0(dtfi){\n  var stackIndex, returnTemp;\n  $stack_0[stackIndex = ++$stackDepth_0] = getFormat_0;\n  $location_0[stackIndex] = 'DateTimeFormat.java:' + '791' , $clinit_DateTimeFormat_0();\n  var defaultDtfi, dtf;\n  $location_0[stackIndex] = 'DateTimeFormat.java:' + '793' , defaultDtfi = $getDateTimeFormatInfo(($location_0[stackIndex] = 'DateTimeFormat.java:' + '808' , $clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_3));\n  $location_0[stackIndex] = 'DateTimeFormat.java:' + '794' , dtf = null;\n  ($location_0[stackIndex] = 'DateTimeFormat.java:' + '795' , dtfi) == defaultDtfi && (dtf = dynamicCast(($location_0[stackIndex] = 'DateTimeFormat.java:' + '796' , cache_0).get_3('hh:mm a'), 354));\n  if (!($location_0[stackIndex] = 'DateTimeFormat.java:' + '798' , dtf)) {\n    dtf = ($location_0[stackIndex] = 'DateTimeFormat.java:' + '799' , new DateTimeFormat_0);\n    ($location_0[stackIndex] = 'DateTimeFormat.java:' + '800' , dtfi) == defaultDtfi && ($location_0[stackIndex] = 'DateTimeFormat.java:' + '801' , cache_0).put('hh:mm a', dtf);\n  }\n  returnTemp = ($location_0[stackIndex] = 'DateTimeFormat.java:' + '804' , dtf);\n  $stackDepth_0 = stackIndex - 1;\n  return returnTemp;\n}\n\ndefineClass(354, 258, {354:1, 258:1}, DateTimeFormat_0);\nvar cache_0;\nvar Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 354);\nfunction $addCloseHandler(this$static){\n  var stackIndex, returnTemp;\n  $stack_0[stackIndex = ++$stackDepth_0] = $addCloseHandler;\n  returnTemp = $addHandler_1(($location_0[stackIndex] = 'MaterialTimePicker.java:' + '321' , this$static), new MaterialTimePicker$1(this$static), TYPE_16?TYPE_16:(TYPE_16 = new GwtEvent$Type));\n  $stackDepth_0 = stackIndex - 1;\n  return returnTemp;\n}\n\nfunction $addOpenHandler(this$static){\n  var stackIndex, returnTemp;\n  $stack_0[stackIndex = ++$stackDepth_0] = $addOpenHandler;\n  returnTemp = $addHandler_1(($location_0[stackIndex] = 'MaterialTimePicker.java:' + '333' , this$static), new MaterialTimePicker$2(this$static), (!TYPE_17 && (TYPE_17 = new GwtEvent$Type) , TYPE_17));\n  $stackDepth_0 = stackIndex - 1;\n  return returnTemp;\n}\n\nfunction $addValueChangeHandler_2(this$static, handler){\n  var stackIndex, returnTemp;\n  $stack_0[stackIndex = ++$stackDepth_0] = $addValueChangeHandler_2;\n  returnTemp = $addHandler_1(($location_0[stackIndex] = 'MaterialTimePicker.java:' + '366' , this$static), new MaterialTimePicker$3(this$static, handler), (!TYPE_20 && (TYPE_20 = new GwtEvent$Type) , TYPE_20));\n  $stackDepth_0 = stackIndex - 1;\n  return returnTemp;\n}\n\nfunction MaterialTimePicker$1(this$0){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = MaterialTimePicker$1;\n  this.this$01 = ($location_0[stackIndex] = 'MaterialTimePicker.java:' + '321' , this$0);\n  $stackDepth_0 = stackIndex - 1;\n}\n\ndefineClass(1463, 1, $intern_65, MaterialTimePicker$1);\n_.onClose = function onClose_0(event_0){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = onClose_0;\n  $isEnabled_0(($location_0[stackIndex] = 'MaterialTimePicker.java:' + '324' , this.this$01)) && $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Closed Time Picker', $intern_85, null);\n  $stackDepth_0 = stackIndex - 1;\n}\n;\nvar Lgwt_material_design_addins_client_timepicker_MaterialTimePicker$1_2_classLit = createForClass('gwt.material.design.addins.client.timepicker', 'MaterialTimePicker/1', 1463);\nfunction MaterialTimePicker$2(this$0){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = MaterialTimePicker$2;\n  this.this$01 = ($location_0[stackIndex] = 'MaterialTimePicker.java:' + '333' , this$0);\n  $stackDepth_0 = stackIndex - 1;\n}\n\ndefineClass(1464, 1, $intern_107, MaterialTimePicker$2);\n_.onOpen = function onOpen(event_0){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = onOpen;\n  $isEnabled_0(($location_0[stackIndex] = 'MaterialTimePicker.java:' + '336' , this.this$01)) && $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Opened Time Picker', $intern_85, null);\n  $stackDepth_0 = stackIndex - 1;\n}\n;\nvar Lgwt_material_design_addins_client_timepicker_MaterialTimePicker$2_2_classLit = createForClass('gwt.material.design.addins.client.timepicker', 'MaterialTimePicker/2', 1464);\nfunction MaterialTimePicker$3(this$0, val$handler){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = MaterialTimePicker$3;\n  this.this$01 = ($location_0[stackIndex] = 'MaterialTimePicker.java:' + '366' , this$0);\n  this.val$handler2 = val$handler;\n  $stackDepth_0 = stackIndex - 1;\n}\n\ndefineClass(1465, 1, $intern_62, MaterialTimePicker$3);\n_.onValueChange = function onValueChange_3(event_0){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = onValueChange_3;\n  $isEnabled_0(($location_0[stackIndex] = 'MaterialTimePicker.java:' + '369' , this.this$01)) && $onValueChange_0(($location_0[stackIndex] = 'MaterialTimePicker.java:' + '370' , event_0));\n  $stackDepth_0 = stackIndex - 1;\n}\n;\nvar Lgwt_material_design_addins_client_timepicker_MaterialTimePicker$3_2_classLit = createForClass('gwt.material.design.addins.client.timepicker', 'MaterialTimePicker/3', 1465);\nfunction TimePickersPresenter(eventBus, view, proxy){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = TimePickersPresenter;\n  $location_0[stackIndex] = 'TimePickersPresenter.java:' + '48' , $clinit_TimePickersPresenter();\n  ($location_0[stackIndex] = 'TimePickersPresenter.java:' + '52' , Presenter).call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n  $stackDepth_0 = stackIndex - 1;\n}\n\ndefineClass(738, 56, $intern_73, TimePickersPresenter);\n_.onReveal = function onReveal_19(){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = onReveal_19;\n  $location_0[stackIndex] = 'TimePickersPresenter.java:' + '59' , $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Time Pickers', 'A dialog picker is used to select a single time (hours:minutes) on mobile.\\n\\nThe selected time is indicated by the filled circle at the end of the clock hand.'));\n  $stackDepth_0 = stackIndex - 1;\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersPresenter', 738);\nfunction TimePickersView(){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = TimePickersView;\n  ($location_0[stackIndex] = 'TimePickersView.java:' + '47' , ViewImpl).call(this);\n  $initWidget_0(this, ($tmp = $build_f_MaterialPanel1_5(new TimePickersView_BinderImpl$Widgets(this)) , $location_0[stackIndex] = 'TimePickersView.java:' + '48' , $tmp));\n  $addOpenHandler(($location_0[stackIndex] = 'TimePickersView.java:' + '50' , this.tpEvents));\n  $addCloseHandler(($location_0[stackIndex] = 'TimePickersView.java:' + '57' , this.tpEvents));\n  $addValueChangeHandler_2(($location_0[stackIndex] = 'TimePickersView.java:' + '64' , this.tpEvents), new TimePickersView$3);\n  $stackDepth_0 = stackIndex - 1;\n}\n\ndefineClass(968, 59, $intern_74, TimePickersView);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView', 968);\nfunction $onValueChange_0(event_0){\n  var dtf, time, stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = $onValueChange_0;\n  dtf = ($location_0[stackIndex] = 'TimePickersView.java:' + '67' , $clinit_DateTimeFormat_0() , getFormat_0($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_3))));\n  time = dynamicCast(($location_0[stackIndex] = 'TimePickersView.java:' + '68' , event_0).value_0, 86);\n  fireToast('MaterialTimePicker value changed to: ' + $format(($location_0[stackIndex] = 'TimePickersView.java:' + '69' , dtf), time, null));\n  $stackDepth_0 = stackIndex - 1;\n}\n\nfunction TimePickersView$3(){\n}\n\ndefineClass(969, 1, $intern_62, TimePickersView$3);\n_.onValueChange = function onValueChange_9(event_0){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = onValueChange_9;\n  $onValueChange_0(($location_0[stackIndex] = 'TimePickersView.java:' + '66' , event_0));\n  $stackDepth_0 = stackIndex - 1;\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/3', 969);\nfunction TimePickersView_BinderImpl(){\n}\n\ndefineClass(1283, 1, {}, TimePickersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl', 1283);\nfunction $build_f_MaterialPanel1_5(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, tp, f_PrettyPre5, f_MaterialTitle6, f_timepicker$MaterialTimePicker7, f_MaterialTitle8, f_timepicker$MaterialTimePicker9, f_PrettyPre10, f_MaterialTitle11, tpEvents, f_PrettyPre12, f_MaterialTitle13, tpClear, btnClear, f_PrettyPre14, sb, sb_0, sb_1, sb_2, sb_3, stackIndex, returnTemp;\n  $stack_0[stackIndex = ++$stackDepth_0] = $build_f_MaterialPanel1_5;\n  f_MaterialPanel1 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '101' , new MaterialPanel);\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '103' , f_MaterialPanel1), ($tmp = (f_MaterialTitle2 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '132' , new MaterialTitle) , $setInnerHTML($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '134' , f_MaterialTitle2).header), 'Usage') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '136' , f_MaterialTitle2)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '103' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '104' , f_MaterialPanel1), ($tmp = (f_PrettyPre3 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '147' , new PrettyPre) , $setHTML_0(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '149' , f_PrettyPre3), (sb = new StringBuilder , sb.string += '\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '150' , f_PrettyPre3).element), 'lang-xml', true) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '151' , f_PrettyPre3).element, 'z-depth-1', true) , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '153' , f_PrettyPre3)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '104' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '105' , f_MaterialPanel1), ($tmp = (f_MaterialTitle4 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '164' , new MaterialTitle) , $setInnerHTML($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '166' , f_MaterialTitle4).header), 'Time Picker') , $setText_9(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '167' , f_MaterialTitle4).paragraph, 'Tap between the hour and minute label in the title bar to switch between the hour or minute view. Additionally, tap on the AM/PM label in the title bar to switch between AM or PM (in 12-hour clock mode).') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '169' , f_MaterialTitle4)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '105' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '106' , f_MaterialPanel1), ($tmp = (tp = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '180' , new MaterialTimePicker) , $setAttribute($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '182' , tp).input_0), 'placeholder', 'Snooze Time') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '184' , tp)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '106' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '107' , f_MaterialPanel1), ($tmp = (f_PrettyPre5 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '195' , new PrettyPre) , $setHTML_0(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '197' , f_PrettyPre5), (sb_0 = new StringBuilder , sb_0.string += '&lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '198' , f_PrettyPre5).element, 'lang-xml', true) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '199' , f_PrettyPre5).element, 'z-depth-1', true) , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '201' , f_PrettyPre5)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '107' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '108' , f_MaterialPanel1), ($tmp = (f_MaterialTitle6 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '212' , new MaterialTitle) , $setInnerHTML($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '214' , f_MaterialTitle6).header), 'Disabled Styles') , $setText_9(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '215' , f_MaterialTitle6).paragraph, \"You can disable your time picker by adding enabled='false'\") , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '217' , f_MaterialTitle6)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '108' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '109' , f_MaterialPanel1), ($tmp = (f_timepicker$MaterialTimePicker7 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '228' , new MaterialTimePicker) , $setEnabled_1(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '230' , f_timepicker$MaterialTimePicker7).input_0, false) , $setAttribute($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '231' , f_timepicker$MaterialTimePicker7).input_0), 'placeholder', 'Snooze Time') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '233' , f_timepicker$MaterialTimePicker7)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '109' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '110' , f_MaterialPanel1), ($tmp = (f_MaterialTitle8 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '244' , new MaterialTitle) , $setInnerHTML($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '246' , f_MaterialTitle8).header), '24 Hour format') , $setText_9(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '247' , f_MaterialTitle8).paragraph, \"You can set 24 hour format of time picker by adding a parameter : hour24='true'\") , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '249' , f_MaterialTitle8)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '110' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '111' , f_MaterialPanel1), ($tmp = (f_timepicker$MaterialTimePicker9 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '260' , new MaterialTimePicker) , $setAttribute($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '262' , f_timepicker$MaterialTimePicker9).input_0), 'placeholder', 'Snooze Time') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '263' , f_timepicker$MaterialTimePicker9).hour24 = true , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '265' , f_timepicker$MaterialTimePicker9)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '111' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '112' , f_MaterialPanel1), ($tmp = (f_PrettyPre10 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '276' , new PrettyPre) , $setHTML_0(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '278' , f_PrettyPre10), (sb_1 = new StringBuilder , sb_1.string += '&lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" hour24=\"true\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '279' , f_PrettyPre10).element, 'lang-xml', true) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '280' , f_PrettyPre10).element, 'z-depth-1', true) , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '282' , f_PrettyPre10)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '112' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '113' , f_MaterialPanel1), ($tmp = (f_MaterialTitle11 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '293' , new MaterialTitle) , $setInnerHTML($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '295' , f_MaterialTitle11).header), 'Events') , $setText_9(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '296' , f_MaterialTitle11).paragraph, 'We provided events on time picker namely : Close, Open, ValueChange events.') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '298' , f_MaterialTitle11)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '113' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '114' , f_MaterialPanel1), ($tmp = (tpEvents = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '309' , new MaterialTimePicker) , $setAttribute($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '311' , tpEvents).input_0), 'placeholder', 'Alarm Time') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '313' , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '114' , this$static).owner).tpEvents = tpEvents , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '315' , tpEvents)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '114' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '115' , f_MaterialPanel1), ($tmp = (f_PrettyPre12 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '326' , new PrettyPre) , $setHTML_0(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '328' , f_PrettyPre12), (sb_2 = new StringBuilder , sb_2.string += '\\u2003// Open Handler<br> tpEvents.addOpenHandler(new OpenHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onOpen(OpenEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Opened Time Picker\");<br> \\u2003}<br> });<br><br> // Close Handler<br> tpEvents.addCloseHandler(new CloseHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onClose(CloseEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Closed Time Picker\");<br> \\u2003}<br> });<br><br> // ValueChange Handler<br> tpEvents.addValueChangeHandler(new ValueChangeHandler&lt;Date&gt;() {<br> \\u2003@Override<br> \\u2003public void onValueChange(ValueChangeEvent&lt;Date&gt; event) {<br> \\u2003\\u2003DateTimeFormat dtf = DateTimeFormat.getFormat(\"hh:mm a\");<br> \\u2003\\u2003Date time = event.getValue();<br> \\u2003\\u2003MaterialToast.fireToast(\"MaterialTimePicker value changed to: \" + dtf.format(time));<br> \\u2003}<br> });<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '329' , f_PrettyPre12).element, 'lang-java', true) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '330' , f_PrettyPre12).element, 'z-depth-1', true) , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '332' , f_PrettyPre12)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '115' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '116' , f_MaterialPanel1), ($tmp = (f_MaterialTitle13 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '343' , new MaterialTitle) , $setInnerHTML($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '345' , f_MaterialTitle13).header), 'Clear()') , $setText_9(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '346' , f_MaterialTitle13).paragraph, 'Clear your time picker value') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '348' , f_MaterialTitle13)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '116' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '117' , f_MaterialPanel1), ($tmp = (tpClear = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '359' , new MaterialTimePicker) , $setAttribute($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '361' , tpClear).input_0), 'placeholder', 'Snooze Time') , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '363' , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '117' , this$static).owner).tpClear = tpClear , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '365' , tpClear)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '117' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '118' , f_MaterialPanel1), ($tmp = (btnClear = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '376' , new MaterialButton) , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '378' , btnClear).span_1.setText('Clear') , $add_13(btnClear, btnClear.span_1) , $setIconType(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '379' , btnClear), ($clinit_IconType() , REFRESH)) , $addClickHandler(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '380' , btnClear), ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '380' , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '118' , this$static).handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1)) , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '382' , btnClear)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '118' , $tmp));\n  $add_13(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '119' , f_MaterialPanel1), ($tmp = (f_PrettyPre14 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '393' , new PrettyPre) , $setHTML_0(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '395' , f_PrettyPre14), (sb_3 = new StringBuilder , sb_3.string += 'timepick.clear();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '396' , f_PrettyPre14).element, 'lang-java', true) , setStyleName(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '397' , f_PrettyPre14).element, 'z-depth-1', true) , ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '399' , f_PrettyPre14)) , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '119' , $tmp));\n  returnTemp = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '121' , f_MaterialPanel1);\n  $stackDepth_0 = stackIndex - 1;\n  return returnTemp;\n}\n\nfunction TimePickersView_BinderImpl$Widgets(owner){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = TimePickersView_BinderImpl$Widgets;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TimePickersView_BinderImpl$Widgets$1(($tmp = this , $location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '53' , $tmp));\n  this.owner = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '60' , owner);\n  $stackDepth_0 = stackIndex - 1;\n}\n\ndefineClass(1284, 1, {}, TimePickersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets', 1284);\nfunction TimePickersView_BinderImpl$Widgets$1(this$1){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = TimePickersView_BinderImpl$Widgets$1;\n  this.this$11 = ($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '53' , this$1);\n  $stackDepth_0 = stackIndex - 1;\n}\n\ndefineClass(1285, 1, $intern_82, TimePickersView_BinderImpl$Widgets$1);\n_.onClick = function onClick_80(event_0){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = onClick_80;\n  $clearTimePickerValue($getElement(($location_0[stackIndex] = 'TimePickersView_BinderImpl.java:' + '55' , this.this$11).owner.tpClear.input_0));\n  $stackDepth_0 = stackIndex - 1;\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/1', 1285);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this$static){\n  var result, stackIndex, returnTemp;\n  $stack_0[stackIndex = ++$stackDepth_0] = $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$;\n  if (!($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '56' , this$static).singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$) {\n    $location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '57' , result = new TimePickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '57' , this$static).injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(($tmp = this$static , $location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '30' , $tmp)), ($tmp = $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$MyProxy$_annotation$$none$$(($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '57' , this$static)) , $location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '67' , $tmp));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '12' , ($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '58' , this$static).injector)) , ($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '58' , result)), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '12' , this$static.injector))));\n    ($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '60' , this$static).singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$ = result;\n  }\n  returnTemp = ($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '62' , this$static).singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$;\n  $stackDepth_0 = stackIndex - 1;\n  return returnTemp;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static){\n  var result, stackIndex, returnTemp;\n  $stack_0[stackIndex = ++$stackDepth_0] = $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$;\n  if (!($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '113' , this$static).singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$) {\n    $location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '114' , result = new TimePickersView(($tmp = ($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '99' , new TimePickersView_BinderImpl) , $location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '124' , $tmp));\n    ($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '117' , this$static).singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$ = result;\n  }\n  returnTemp = ($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '119' , this$static).singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$;\n  $stackDepth_0 = stackIndex - 1;\n  return returnTemp;\n}\n\ndefineClass(643, 1, $intern_122);\n_.onSuccess_0 = function onSuccess_12(){\n  var stackIndex;\n  $stack_0[stackIndex = ++$stackDepth_0] = onSuccess_12;\n  $onSuccess_0(($location_0[stackIndex] = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment.java:' + '80' , this.val$callback2), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this.this$11.this$01));\n  $stackDepth_0 = stackIndex - 1;\n}\n;\n$entry(onLoad_0)(11);\n\n//# sourceURL=gwtmaterialdemo-11.js\n")