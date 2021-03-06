<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
   <meta http-equiv="content-type" content="text/html; charset=utf-8">
   <title>Label Designer</title>

   <link rel="stylesheet" type="text/css" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css">
   <link rel="stylesheet" type="text/css" href="css/result-light.css">
   <link rel="stylesheet" type="text/css" href="css/style.css">
<!-- styles needed by jScrollPane
   <link rel="stylesheet" type="text/css" href="css/jquery.jscrollpane.css" media="all" />
 -->
<!-- <link href="css/evol.colorpicker.css" rel="stylesheet" /> -->
   <link rel="stylesheet" type="text/css" href="css/farbtastic.css">
<!--  
   <link href="../src/skin-win8/ui.fancytree.css" class="skinswitcher" rel="stylesheet" type="text/css">
   <script src="../src/jquery.fancytree.js" type="text/javascript"></script>
   <script src="../src/jquery.fancytree.dnd.js" type="text/javascript"></script>
   <script src="../src/jquery.fancytree.table.js" type="text/javascript"></script>
   <script src="../src/jquery.fancytree.columnview.js" type="text/javascript"></script>
-->
   <style type="text/css" media="screen">
   /*
      #label {
         padding: 40px;
         height: 120px;
         width: 500px;
         border: 2px solid #F00;
         overflow: auto;
         position: fixed;
         top: 200px;
         left: 200px;
      }
   */
      .toggler {
         width: 3.5in;
         height: 8.5in;
      }
   /*
      .scroll-pane {
         width: 30%;
         height:100px;
         overflow: auto;
      }
   */

      .colorwell {
         border: 2px solid #fff;
         width: 6em;
         text-align: center;
         cursor: pointer;
      }
      body .colorwell-selected {
         border: 2px solid #000;
         font-weight: bold;
      }

      ul.dragfrom
      {
          float: left;
          width: 130px;
          background: silver;
          padding: 1px;
          padding-left: 10px;
          color: Black;
          margin: 5px;
          margin-left: 1px;
      }
      ul.dragto
      {
          float: right;
          width: 110px;
          background: silver;
          padding: 1px;
          padding-left: 10px;
          color: Black;
          margin: 5px;
          margin-left: 4px;
      }
      ul.dragfrom li
      {
          padding: 2px;
          margin: 1px;
          margin-left: 10px;
          margin-right: 1px;
          background-color: white;
          cursor: pointer;
      }
      ul.dragto li
      {
          padding: 2px;
          margin: 1px;
          margin-left: 10px;
          margin-right: 1px;
          background-color:blue;
          cursor: pointer;
      }

   </style>
<!--
  <style>
  #selectRegisteredViews, #sortable2, #sortable3 { list-style-type: none; margin: 0; padding: 0; float: left; margin-right: 2px; background: #eee; padding: 2px; width: 100px;}
  #selectRegisteredViews li, #sortable2 li, #sortable3 li { margin: 2px; padding: 2px; font-size: 1.0em; width: 100px; }
  </style>
-->
   <script src="//code.jquery.com/jquery-1.10.2.js"></script>
   <script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
   <script src="js/jquery.nicescroll.min.js"></script>
<!--   <script src="js/evol.colorpicker.js" type="text/javascript"></script>  -->
   <script src="js/farbtastic.js"></script>
<!--   <script src="js/label.js"></script>  -->
   <script src="js/jquery.blockUI.js"></script>
   <script src="js/LabelDesigner.js"></script>
   <script src="js/jsonpath-0.8.0.js"></script>
   <script src="js/jsoeTestData.js"></script>
   <script src="js/jsoeUtils.js"></script>
   <script src="js/jsoe.js"></script>

<!-- the mousewheel plugin - optional to provide mousewheel support -->
   <script src="js/jquery.mousewheel.js"></script>

<!-- the jScrollPane script -->
   <script src="js/jquery.jscrollpane.min.js"></script>

<script>

   $(function() {

      $( "#showbar" ).button({
         text: false,
         icons: {
            primary: 'tools'
         }
      });

      $( "#al" ).button({
         text: false,
         icons: {
            primary: 'alignleft'
         }
      });

      $( "#at" ).button({
         text: false,
         icons: {
            primary: 'aligntop'
         }
      });

      $( "#ar" ).button({
         text: false,
         icons: {
            primary: 'alignright'
         }
      });

      $( "#ab" ).button({
         text: false,
         icons: {
            primary: "alignbottom"
         }
      });

      $( "#ew" ).button({
         text: false,
         icons: {
            primary: "equalwidth"
         }
      });

      $( "#eh" ).button({
         text: false,
         icons: {
            primary: "equalheight"
         }
      });

      $( "#ewh" ).button({
         text: false,
         icons: {
           primary: "equalwidthheight"
         }
      });

      $( "#esh" ).button({
         text: false,
         icons: {
            primary: "equalspacehorizontal"
         }
      });

      $( "#esv" ).button({
         text: false,
         icons: {
           primary: "equalspacevertical"
         }
      });

      $( "#ah" ).button({
         text: false,
         icons: {
            primary: "abuthorizontal"
         }
      });

      $( "#av" ).button({
         text: false,
         icons: {
           primary: "abutvertical"
         }
      });

      $( "#st" ).button({
         text: false,
         icons: {
           primary: "tools"
         }
      });
   });
</script>

<style> 
      #ztoolbar {
        padding: 4px;
        display: inline-block;
      }
      /* support: IE7 */
      *+html #ztoolbar {
        display: inline;
      }
      .ui-state-default .ui-icon { background-image: url(images/painter.png); }
      .ui-button .tools { background-position: 0px 0px; }
      .ui-button .alignleft { background-position: -15px 0px; }
      .ui-button .aligntop { background-position: -31px 0px; }
      .ui-button .alignright { background-position: -47px 0px; }
      .ui-button .alignbottom { background-position: -63px 0px; }
      .ui-button .equalwidth { background-position: -79px 0px; }
      .ui-button .equalheight { background-position: -95px 0px; }
      .ui-button .equalwidthheight { background-position: -111px 0px; }
      .ui-button .equalspacehorizontal { background-position: -127px 0px; }
      .ui-button .equalspacevertical { background-position: -143px 0px; }
      .ui-button .abuthorizontal { background-position: -159px 0px; }
      .ui-button .abutvertical { background-position: -175px 0px; }

      .ui-widget-header {
         border: 1px solid #aaaaaa;
         background: #cccccc url(images/ui-bg_highlight-soft_75_cccccc_1x100.png) 50% 50% repeat-x;
         color: #222222;
         font-weight: bold;
      }
      
      .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
         border: 1px solid #d3d3d3;
         background: #e6e6e6 url(images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x;
         font-weight: normal;
         color: #555555;
      }

      div.label {
         overflow: scroll;
      }

      div.zaccordion {
         overflow: hidden;
      }

      div.page {
         background-color:lightyellow;
         top:0px;
         left:0px;
         width: 36in;
         height: 36in;
         float:left;
         position:absolute;
         text-align:left;
      // overflow: scroll;
         background-image: url(images/inch.png);
      }

/*
      #zcontainer {
         height: 100vh;
         width: 100vw;
      }

#zclient {
         height: 98vh;
         width: 98vw;
      }

      #zviewport {
         width: 98vw;
      }

      #label {
         width: 98vw;
         height:90vh;
      }
      
      #zfooter {
         top:95vh;
         width:98vw;
      }
*/

 
      body {
          padding: 0 0 30px;
      }


     #zfooter {
          height:30px;
          background: #ccc;
       // position: fixed;
          bottom:0;
          padding-top:10px;
          width: 100%
      }


</style>

</head>
<body>

<div id="zcontainer">
   <div id="zviewport" style="background-color:#ccc; height:0.4in;">
      <span>
         <div id="zheader" style="display: block; font-size: 1em; font-weight: bold;">
            Label Designer&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="ztoolbar" class="ui-widget-header ui-corner-all">
               <button id="at" class="zalign">Align Top</button>
               <button id="al" class="zalign">Align Left</button> 
               <button id="ab" class="zalign">Align Bottom</button> 
               <button id="ar" class="zalign">Align Right</button> 
               <button id="ew" class="zalign">Equal Width</button>
               <button id="eh" class="zalign">Equal Height</button> 
               <button id="ewh" class="zalign">Equal Width & Height</button> 
               <button id="esh" class="zalign">Equal Space Horizontal</button>
               <button id="esv" class="zalign">Equal Space Vertical</button> 
               <button id="ah" class="zalign">Abut Horizontal</button>
               <button id="av" class="zalign">Abut Vertical</button> 

               <input type="checkbox" id="showtools"><label for="showtools">Show Tools</label>
               &nbsp;&nbsp;
               <span>
                  <label for="zZoomSpinner">Zoom:</label>
                  <input id="zZoomSpinner" value="1.0" style="width:20px;"/>
               </span>
            </div> <!-- ztoolbar -->
            <img src="./images/epamms.jpg" width="64" height="25" alt="ePamms" style="margin:5px; float:right; border-style:double;">
         </div> <!-- zheader -->
      </span>
      <div id="zclient" style="margin:0"> <!-- client area -->
         <div id="pagemenu" class="ui-widget-content" style="position:relative;margin:0">
            <div id="label" class="label" style="top:0px;left:0px;float:left;position:absolute;">Drop area ...    <!-- without position:relative, target position is off -->
               <div id="page" class="page" style="display:block;">1</div> <!-- page -->
               <div id="page2" class="page" style="display:none;">2</div> <!-- page -->
               <div id="page3" class="page" style="display:none;">3</div> <!-- page -->
               <div id="page4" class="page" style="display:none;">4</div> <!-- page -->
               <div id="page5" class="page" style="display:none;">5</div> <!-- page -->
               <div id="page6" class="page" style="display:none;">6</div> <!-- page -->
               <div id="page7" class="page" style="display:none;">7</div> <!-- page -->
               <div id="page8" class="page" style="display:none;">8</div> <!-- page -->
               <div id="page9" class="page" style="display:none;">9</div> <!-- page -->
            </div> <!-- label -->
            <div id="zmenu" class="toggler" style="background-color:#ccc;top:0px;width:3.5in;height:9in;float:right;position:absolute;">   <!-- without position:relative, clone position is off -->
               <div id="zaccordion" style="margin-left:0;padding-left:0">
                  <h3>Block Types</h3>
                  <div id="zpool">
                <!-- <fieldset class="border" style="position:absolute;top:80px;left:15px;width:260px;height:200px;"><legend>Drag left onto page to create a new</legend> -->
                     <fieldset class="border" style="height:200px;"><legend>Drag left onto page to create a new</legend>
                        <div style="position:relative;">  <!-- without position:relative, initial position is off -->
                      <!-- <div id="z__drag1" class="panel draggable ui-widget-content" style="position:absolute;top:5px;left:15px;width:60px;height:60px;background:lightgrey;display:block;float:left;color:black;border:2px solid;">
                              <p>Panel</p>
                           </div> -->
                           <div id="z__drag2" class="draggable ui-widget-content" style="position:absolute;top:5px;left:85px;width:79px;height:79px;background:lightblue;display:block;float:left;color:black;border:2px solid;">
                              <p>Block</p>
                           </div>
                        </div>
                     </fieldset>
                     &nbsp;
                     &nbsp;
                     &nbsp;
                     <div>
                        <button id="zTest5" style="float: right;">Test5</button>
                        <button id="zTest4" style="float: right;">Test4</button>
                        <button id="zTest3" style="float: right;">Test3</button>
                        <button id="zTest2" style="float: right;">Test2</button>
                        <button id="zTest1" style="float: right;">Test1</button>
                     </div>
                     &nbsp;
                     &nbsp;
                     &nbsp;
                     <br>
                     <br>
                     <br>
                     <br>
                     <div>
                        <label for="SnapType">Drag Snap Type: </label>
                        <select id="SnapType" style="float:right">
                           <option value="default">Select Snap Type...</option>
                           <option value="none">Snap Off</option>
                           <option value="inner">Inner</option>
                           <option value="outer">Outer</option>
                           <option value="both">Inner/Outer</option>
                           <option value="grid">Grid</option>
                        </select>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <br>
                        <br>
                        <fieldset class="border" style="height:80px; width:200px"><legend>Snap amount for snap type Grid</legend>
                        <span>
                           <label for="SnapSpinnerX">Snap X:</label>
                           <input id="SnapSpinnerX" value="0.25" style="width:25px;"/>
                           <br>
                           <label for="SnapSpinnerY">Snap Y:</label>
                           <input id="SnapSpinnerY" value="0.25" style="width:25px;"/>
                        </span>
                        </fieldset>
                     </div>
                  </div> <!-- zpool -->  <!-- End of: Block Types -->

                  <h3>Block Properties</h3>
                  <div>
                     <div style="overflow:hidden; white-space:nowrap;">
                       <label for="zBlockTag">Tag:</label>
                       <input id="zBlockTag" class="zeidon" data-zmap="block.z_^tag" style="float:right" />
                     </div>

                     <!-- 
                     <div id="jQueryRequired" style="color: red; font-size: 1.4em">jQuery.js is not present. You must install jQuery in this folder for the demo to work.</div>
                     <div class="form-item">
                        <label for="zColor">Color:</label>
                        <input type="text" id="zColor" value="#123456" />
                     </div>
                     <div id="zPickerBlock"></div>
                     -->

                     <div class="ui-widget">
                       <label>Section Type: </label>
                       <select id="zSectionType" class="zeidon" data-zmap="block.z_^block^section^type" style="float:right">
                         <option value="">Select Section Type...</option>
                         <option value="Ingredients">Ingredients</option>
                         <option value="FirstAid">First Aid</option>
                         <option value="Hazards">Hazards</option>
                         <option value="PhysicalHazard">Physical Hazard</option>
                         <option value="ContainerDisposal">Container Disposal</option>
                         <option value="StorageDisposal">Storage and Disposal</option>
                         <option value="Precautionary">Precautionary</option>
                         <option value="DirectionsForUse">Directions For Use</option>
                         <option value="Marketing">Marketing</option>
                         <option value="HumanHazard">Human Hazard</option>
                         <option value="Graphic">Graphic</option>
                         <option value="NetContents">Net Contents</option>
                         <option value="EPA_RegAndEstNbr">EPA Reg. No. - EPA Est. No.</option>
                         <option value="Product">Product Specific</option>
                        </select>
                     </div>
                     &nbsp;
                     <div style="overflow:hidden; white-space:nowrap;">
                       <label for="zBlockTitle">Block Title:</label>
                       <input id="zBlockTitle" class="zeidon" data-zmap="block.z_^block^title" style="float:right" />
                     </div>
                     <div style="overflow:hidden; white-space:nowrap;">
                       <label for="zBlockTop">Block Top:</label>
                       <input id="zBlockTop" class="zeidon" data-zmap="block.z_^top" style="float:right" />
                     </div>
                     <div style="overflow:hidden; white-space:nowrap;">
                       <label for="zBlockLeft">Block Left:</label>
                       <input id="zBlockLeft" class="zeidon" data-zmap="block.z_^left" style="float:right" />
                     </div>
                     <div style="overflow:hidden; white-space:nowrap;">
                       <label for="zBlockHeight">Block Height:</label>
                       <input id="zBlockHeight" class="zeidon" data-zmap="block.z_^height" style="float:right" />
                     </div>
                     <div style="overflow:hidden; white-space:nowrap;">
                       <label for="zBlockWidth">Block Width:</label>
                       <input id="zBlockWidth" class="zeidon" data-zmap="block.z_^width" style="float:right" />
                     </div>

                     &nbsp;
                     <p style="clear:both;position:relative"></p>
                     <div style="overflow:hidden; white-space:nowrap;">
                <!-- <fieldset class="border"><legend>Override CSS</legend> -->
                     <hr>Override CSS<hr>
                       <div><span>
                          <input type="checkbox" id="zOverrideCSS_Text" /><label for="zOverrideCSS_Text">Text</label>
                          <label for="zBlockTextColor">Color:</label>
                          <input type="text" id="zBlockTextColor" class="colorwell colorwell1 zeidon" data-zmap="block.z_^text^color" value="#ff0000" style="float:right" />
                       </span></div>                  &nbsp;
                       <p style="clear:both;position:relative"></p>
                       <div><span>
                          <input type="checkbox" id="zOverrideCSS_Background" /><label for="zOverrideCSS_Background">Back</label>
                          <label for="zBlockBackgroundColor">Color:</label>
                          <input type="text" id="zBlockBackgroundColor" class="colorwell colorwell1 zeidon" data-zmap="block.z_^background^color" value="#00ff00" style="float:right" />
                       </span></div>                  &nbsp;
                       <p style="clear:both;position:relative"></p>
                       <div><span>
                          <input type="checkbox" id="zOverrideCSS_Border" /><label for="zOverrideCSS_Border">Border</label>
                          <label for="zBlockBorderColor">Color:</label>
                          <input type="text" id="zBlockBorderColor" class="colorwell colorwell1 zeidon" data-zmap="block.z_^border^color" value="#0000ff" style="float:right" />
                       </span></div>
                       <p style="clear:both"></p>
                       <div id="zBlockPicker"></div>
                <!-- </fieldset> -->
                     &nbsp;
                     &nbsp;
                     &nbsp;
                     </div>

                     <div id="zmbp">
                        <ul>
                           <li><a href="#zMargins">Margins</a></li>
                           <li><a href="#zBorders">Borders</a></li>
                           <li><a href="#zPaddings">Padding</a></li>
                        </ul>
                        <div id="zMargins">
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zMargin">Margins:</label>
                             <input id="zMargin" class="zeidon" data-zmap="block.z_^margin" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zMarginTop">Top:</label>
                             <input id="zMarginTop" class="zeidon" data-zmap="block.z_^margin^top" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zMarginBottom">Bottom:</label>
                             <input id="zMarginBottom" class="zeidon" data-zmap="block.z_^margin^bottom" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zMarginLeft">Left:</label>
                             <input id="zMarginLeft" class="zeidon" data-zmap="block.z_^margin^left" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zMarginRight">Right:</label>
                             <input id="zMarginRight" class="zeidon" data-zmap="block.z_^margin^right" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <input type="checkbox" id="zMarginOverride" class="zeidon" data-zmap="block.z_^margin^override" style="float:center" /><label for="zMarginOverride">Override CSS</label>
                           </div>
                        </div>
                        <div id="zBorders">
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zBorder">Borders:</label>
                             <input id="zBorder" class="zeidon" data-zmap="block.z_^border" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zBorderTop">Top:</label>
                             <input id="zBorderTop" class="zeidon" data-zmap="block.z_^border^top" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zBorderBottom">Bottom:</label>
                             <input id="zBorderBottom" class="zeidon" data-zmap="block.z_^border^bottom" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zBorderLeft">Left:</label>
                             <input id="zBorderLeft" class="zeidon" data-zmap="block.z_^border^left" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zBorderRight">Right:</label>
                             <input id="zBorderRight" class="zeidon" data-zmap="block.z_^border^right" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <input type="checkbox" id="zBorderOverride" class="zeidon" data-zmap="block.z_^border^override" style="float:center" /><label for="zBorderOverride">Override CSS</label>
                           </div>
                        </div>
                        <div id="zPaddings">
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zPadding">Padding:</label>
                             <input id="zPadding" class="zeidon" data-zmap="block.z_^padding" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zPaddingTop">Top:</label>
                             <input id="zPaddingTop" class="zeidon" data-zmap="block.z_^padding^top" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zPaddingBottom">Bottom:</label>
                             <input id="zPaddingBottom" class="zeidon" data-zmap="block.z_^padding^bottom" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zPaddingLeft">Left:</label>
                             <input id="zPaddingLeft" class="zeidon" data-zmap="block.z_^padding^left" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <label for="zPaddingRight">Right:</label>
                             <input id="zPaddingRight" class="zeidon" data-zmap="block.z_^padding^right" style="float:right" />
                           </div>
                           <div style="overflow:hidden; white-space:nowrap;">
                             <input type="checkbox" id="zPaddingOverride" class="zeidon" data-zmap="block.z_^padding^override" style="float:center" /><label for="zPaddingOverride">Override CSS</label>
                           </div>
                        </div>
                     </div>

                     &nbsp;
                     <p style="clear:both;position:relative"></p>
                     <hr>
                     <input type="checkbox" id="zCheckContinuationBlock" class="zeidon" data-zmap="block.z_^continuation^block^flag" /><label for="zCheckContinuationBlock">Continuation Block</label>

                     <!-- Add a <div> element where the dynatree should appear: -->
                     <hr>
                  </div> <!-- End of: Block Properties -->

                  <h3>Panel Properties</h3>
                  <div>
                     <div style="overflow:hidden; white-space:nowrap;">
                       <label for="zPanelTag">Tag:</label>
                       <input id="zPanelTag" class="zeidon" data-zmap="panel.z_^tag" style="float:right" />
                     </div>

                     <p style="clear:both;position:relative">
                        <span>
                           <label for="zPanelTitle">Panel Title:</label>
                           <input id="zPanelTitle" class="zeidon" data-zmap="panel.z_^title" value="" style="width:120px;float:right;" />
                        </span>
                     </p>
                     <p style="clear:both;position:relative">
                        <span>
                           <label for="zPanelHeight">Panel Height:</label>
                           <input id="zPanelHeight" class="zeidon" data-zmap="panel.z_^height" value="11" style="width:20px;float:right;"/>
                        </span>
                     </p>
                     <p style="clear:both;position:relative">
                        <span>
                           <label for="zPanelWidth">Panel Width:</label>
                           <input id="zPanelWidth" class="zeidon" data-zmap="panel.z_^width" value="8.5" style="width:20px;float:right;"/>
                        </span>
                     </p>
                  </div> <!-- End of: Panel Properties -->

                  <h3>Page Properties</h3>
                  <div>
                     <p style="clear:both;position:relative">
                        <span>
                           <label for="zPageSpinner">Page:</label>
                           <input id="zPageSpinner" value="1" style="width:20px;"/>
                        </span>
                     </p>
                     <p style="clear:both;position:relative">
                        <span>
                           <label for="zPageTitle">Page Title:</label>
                           <input id="zPageTitle" class="zeidon" data-zmap="page.z_^title" value="" style="width:120px;float:right;" />
                        </span>
                     </p>
                     <p style="clear:both;position:relative">
                        <span>
                           <label for="zPageHeight">Page Height:</label>
                           <input id="zPageHeight" class="zeidon" data-zmap="page.z_^height" value="11" style="width:20px;float:right;"/>
                        </span>
                     </p>
                     <p style="clear:both;position:relative">
                        <span>
                           <label for="zPageWidth">Page Width:</label>
                           <input id="zPageWidth" class="zeidon" data-zmap="page.z_^width" value="8.5" style="width:20px;float:right;"/>
                        </span>
                     </p>
                     <div id="tree" class="aciTree">
                     </div>
                  </div> <!-- End of: Page Properties -->

                  <h3>LLD Properties</h3>
                  <div>
                     <p>
                        <label for="zLLD_Name">LLD Name:</label>
                        <span>
                           <button id="zLLD_Save" style="float: right;">Save</button>
                           <button id="zLLD_Load" style="float: right;">Load</button>
                           <input id="zLLD_Name" data-zmap="label.z_^name" type="text" value="" style="float:right;width:92px;"/>
                        </span>
                     </p>
                     <p style="clear:both;position:relative"></p>
                     <p>
                        <span>
                           <label for="zCSS_File">CSS File:</label>
                           <input id="zCSS_File" class="zeidon" data-zmap="label.z_^c^s^s_^file^name" value="" style="float:right;width:180px;"/>
                        </span>
                     </p>
                     <p style="clear:both;position:relative"></p>
                     <div class="ui-widget" style="overflow:hidden; white-space:nowrap;">
                        <label for="zHazardPanel">Hazard Panel:</label>
                        <select id="zHazardPanel" class="zeidon" data-zmap="label.z_^hazard^panel" style="float:right;width:180px;">
                          <option value="">Select one...</option>
                          <option value="0">None</option>
                          <option value="1">Location 1</option>
                          <option value="2">Location 2</option>
                          <option value="3">Location 3</option>
                          <option value="4">Location 4</option>
                          <option value="5">Location 5</option>
                        </select>
                     </div>
                     <p style="clear:both;position:relative"></p>
                     <p>
                        <label>Continuation Text:</label><br />
                        <input id="zContinuationPreviousPage" class="zeidon" data-zmap="label.z_^continuation^text^previous^page" placeholder="Previous Page" style="width:246px;"/><br />
                        <input id="zContinuationNextPage" class="zeidon" data-zmap="label.z_^continuation^text^next^page" placeholder="Next Page" style="width:246px;"/><br />
                     </p>
                     <p style="clear:both;position:relative"></p>
                     <div style="overflow:hidden; white-space:nowrap;">

                  <!--
                     <fieldset class="border"><legend>Override CSS</legend>
                       <div><span>
                          <input type="checkbox" id="zOverrideCSS_Text" /><label for="zOverrideCSS_Text">Text</label>
                          <label for="zBlockTextColor">Color:</label>
                          <input type="text" id="zBlockTextColor" class="colorwell colorwell1 zeidon" data-zmap="label.z_^text^color" value="#ff0000" style="float:right" />
                       </span></div>                  &nbsp;
                       <p style="clear:both;position:relative"></p>
                       <div><span>
                          <input type="checkbox" id="zOverrideCSS_Background" /><label for="zOverrideCSS_Background">Back</label>
                          <label for="zBlockBackgroundColor">Color:</label>
                          <input type="text" id="zBlockBackgroundColor" class="colorwell colorwell1 zeidon" data-zmap="label.z_^background^color" value="#00ff00" style="float:right" />
                       </span></div>                  &nbsp;
                       <p style="clear:both;position:relative"></p>
                       <div><span>
                          <input type="checkbox" id="zOverrideCSS_Border" /><label for="zOverrideCSS_Border">Border</label>
                          <label for="zBlockBorderColor">Color:</label>
                          <input type="text" id="zBlockBorderColor" class="colorwell colorwell1 zeidon" data-zmap="label.z_^border^color" value="#0000ff" style="float:right" />
                       </span></div>
                       <p style="clear:both"></p>
                       <div id="zBlockPicker"></div>
                     </fieldset>

                       <div>
                          <label for="zLabelBackgroundColor">Background:</label>
                          <input type="text" id="zLabelBackgroundColor" class="colorwell colorwell2 zeidon" data-zmap="label.z_^background^color"  value="#ffffed" style="float:right" />
                       </div>
                       <p style="clear:both"></p>
                       <div id="zLabelPicker"></div>
                  -->

                     </div>
                     &nbsp;
                     <p style="clear:both;position:relative"></p>
                     <div id="zPageUnits">
                        <label for="zPageInches">in</label>
                        <input type="radio" id="zPageInches" class="zeidon" checked="checked" disabled />
                        <label for="zPageCentimeters">cm</label>
                        <input type="radio" id="zPageCentimeters" class="zeidon" disabled />
                     </div>

                  </div> <!-- End of: LLD Properties -->

                  <h3>Trash</h3>
                  <div id="ztrash" style="position:relative;">
                  </div> <!-- End of: Trash Properties -->

               </div> <!-- zaccordion -->
            </div> <!-- zmenu -->
         </div> <!-- pagemenu -->
      </div> <!-- zclient -->
   </div> <!-- zviewport -->
   <div id="zfooter" style="position:absolute;height:0.25in;background-color:#ccc;clear:both;text-align:left;">Copyright &copy; Arksoft, Inc.
      <span id="zdisplay_size" style="float:right;padding-right:10px;"></span>&nbsp;
      <span id="zdisplay_position" style="float:right;padding-right:10px;"></span>
   </div> <!-- zfooter -->
</div> <!-- zcontainer -->
<!--
<form id="zupdateLabel">
<div id="zSubmitLabel" style="position:absolute;top:9.75in;width:12in;">
<p style="clear:both;position:relative"></p>
<input type="submit" />
</div>
</form>
-->
&nbsp;
&nbsp;
<div id="zFormattedLabel" style="position:absolute;top:10.25in;width:12in;">
<p style="clear:both;position:relative"></p>
<div id="zControlsRow">

</div>
<div id="zFormattedJsonLabel" class="FormattedJsonLabel"></div>
</div>

</body>
</html>