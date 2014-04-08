<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
   <meta http-equiv="content-type" content="text/html; charset=utf-8">
   <title>Label Designer</title>

   <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
   <link rel="stylesheet" type="text/css" href="css/result-light.css">
   <link rel="stylesheet" href="css/style.css">
<!--   <link href="css/evol.colorpicker.css" rel="stylesheet" />  -->
   <link href="css/farbtastic.css" rel="stylesheet">
<!--  
   <link href="../src/skin-win8/ui.fancytree.css" class="skinswitcher" rel="stylesheet" type="text/css">
   <script src="../src/jquery.fancytree.js" type="text/javascript"></script>
   <script src="../src/jquery.fancytree.dnd.js" type="text/javascript"></script>
   <script src="../src/jquery.fancytree.table.js" type="text/javascript"></script>
   <script src="../src/jquery.fancytree.columnview.js" type="text/javascript"></script>
-->
   <style type="text/css" media="screen">

   /* #label {
         background:#eef;
         z-index:-5;
      }
      .panel {
         background-size: 0.25in 0.25in;    
         background-image:repeating-linear-gradient(0deg, #f00, #00f 1px, transparent 1px, transparent 40px),repeating-linear-gradient(270deg, #f00, #0f0 1px, transparent 1px, transparent 40px);
         opacity:0.14;
         z-index:-4;
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
   <script src="./js/jquery-1.10.2.js"></script>
   <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<!--   <script src="js/evol.colorpicker.js" type="text/javascript"></script>  -->
   <script src="js/farbtastic.js"></script>
<!--   <script src="js/label.js"></script>  -->
   <script src="js/jquery.blockUI.js"></script>
   <script src="js/LabelDesigner.js"></script>
   <script src="js/jsonpath-0.8.0.js"></script>
   <script src="js/jsoeTestData.js"></script>
   <script src="js/jsoe.js"></script>
   <script src="js/jsoeUtils.js"></script>

</head>
<body>

<div id="zcontainer" name="zcontainer" style="width:12in; height:9in;">
   <div id="zviewport" name="zviewport" style="background-color:#00A5FF; height:0.4in;">
      <h1 style="text-align:center; line-height:0.25in;"><span>Label Designer
         <img src="./images/HA.jpg" width="30" height="25" alt="HA" style="margin:5px; float:right; border-style:double;"></span>
      </h1>
      <div id="zclient" name="zclient" style="margin:0"> <!-- client area -->
         <div id="panelmenu" name="panelmenu" class="ui-widget-content" style="position:relative;margin:0">
         <div id="label" name="label" class="label" style="top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;">Drop area ...  <!-- without position:relative, target position is off -->
            <div id="panel"  name="panel" class="panel" style="display:block;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">1</div> <!-- panel -->
            <div id="panel2" name="panel2" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">2</div> <!-- panel -->
            <div id="panel3" name="panel3" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">3</div> <!-- panel -->
            <div id="panel4" name="panel4" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">4</div> <!-- panel -->
            <div id="panel5" name="panel5" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">5</div> <!-- panel -->
            <div id="panel6" name="panel6" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">6</div> <!-- panel -->
            <div id="panel7" name="panel7" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">7</div> <!-- panel -->
            <div id="panel8" name="panel8" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">8</div> <!-- panel -->
            <div id="panel9" name="panel9" class="panel" style="display:none;background-color:lightyellow;top:0px;left:0px;width:8.5in;height:9in;float:left;position:absolute;text-align:left">9</div> <!-- panel -->
         </div> <!-- label -->
         <div id="zmenu" name="zmenu" style="background-color:#00D7FF;top:0px;left:8.5in;width:3.5in;height:9in;float:right;position:absolute;">   <!-- without position:relative, clone position is off -->
            <div id="zaccordion" name="zaccordion" style="margin-left:0;padding-left:0">
               <h3>Block Types</h3>
               <div id="zpool" name="zpool">
                  <div style="position:relative;">  <!-- without position:relative, initial position is off -->
                  <!-- <div id="zdrag1" name="zdrag1" class="draggable resizable ui-widget ui-widget-content" style="background-color:#FF0000;position:absolute;top:5px;left:5px;width:60px;height:70px;">
                        <p>Drag me to trigger the chain of events.</p></div> -->
                     <div id="z__drag2" name="z__drag2" class="draggable ui-widget-content" style="position:absolute;top:5px;left:5px;width:20px;height:20px;background:blue;display:block;float:left;color:red;border:2px solid;"></div>
                  </div>
                  <button id="zTest3" name="zTest3" style="float: right;">Test3</button>
                  <button id="zTest2" name="zTest2" style="float: right;">Test2</button>
                  <button id="zTest1" name="zTest1" style="float: right;">Test1</button>
               </div> <!-- zpool -->  <!-- End of: Block Types -->

               <h3>Block Properties</h3>
               <div>
                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zBlockTag">Tag:</label>
                    <input id="zBlockTag" name="zBlockTag" class="zeidon" data-zmap="block.z_^tag" style="float:right" />
                  </div>

                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zBlockVEA">View.Entity.Attribute:</label>
                    <input id="zBlockVEA" name="zBlockVEA" class="zeidon" data-zmap="block.z_^v^e^a" style="float:right" />
                  </div>

                  <div id="zBlockUnits">
                     <input type="radio" id="zBlockInches" name="radio" checked="checked" /><label for="zBlockInches">in</label>
                     <input type="radio" id="zBlockCentimeters" name="radio" /><label for="zBlockCentimeters">cm</label>
                     <input type="radio" id="zBlockMillimeters" name="radio" /><label for="zBlockMillimeters">mm</label>
                     <input type="radio" id="zBlockPixels" name="radio" /><label for="zBlockPixels">px</label>
                     <input type="radio" id="zBlockPercent" name="radio" /><label for="zBlockPercent">%</label>
                  </div>

                  <!-- 
                  <div id="jQueryRequired" name="jQueryRequired" style="color: red; font-size: 1.4em">jQuery.js is not present. You must install jQuery in this folder for the demo to work.</div>
                  <div class="form-item">
                     <label for="zColor">Color:</label>
                     <input type="text" id="zColor" name="zColor" value="#123456" />
                  </div>
                  <div id="zPickerBlock" name="zPickerBlock"></div>
                  -->

                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zSectionType">Section Type:</label>
                    <input id="zSectionType" name="zSectionType" class="zeidon" data-zmap="block.z_^block^section^type" style="float:right" />
                  </div>
                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zBlockTitle">Block Title:</label>
                    <input id="zBlockTitle" name="zBlockTitle" class="zeidon" data-zmap="block.z_^block^title" style="float:right" />
                  </div>
                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zBlockTop">Block Top:</label>
                    <input id="zBlockTop" name="zBlockTop" class="zeidon" data-zmap="block.z_^top" style="float:right" />
                  </div>
                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zBlockLeft">Block Left:</label>
                    <input id="zBlockLeft" name="zBlockLeft" class="zeidon" data-zmap="block.z_^left" style="float:right" />
                  </div>
                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zBlockHeight">Block Height:</label>
                    <input id="zBlockHeight" name="zBlockHeight" class="zeidon" data-zmap="block.z_^height" style="float:right" />
                  </div>
                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zBlockWidth">Block Width:</label>
                    <input id="zBlockWidth" name="zBlockWidth" class="zeidon" data-zmap="block.z_^width" style="float:right" />
                  </div>

                  <div class="ui-widget">
                    <label>Text Align: </label>
                    <select id="zBlockTextAlign" name="zBlockTextAlign" class="zeidon" data-zmap="block.z_^text^align" style="float:right">
                      <option value="">Text Alignment...</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                      <option value="center">Center</option>
                    </select>
                  </div>

                  <p style="clear:both;position:relative"></p>
                  <div style="overflow:hidden; white-space:nowrap;">
             <!-- <form action="" style="width: 240px;"> -->
                    <div>
                       <input type="checkbox" id="zOverrideCSS_Text" /><label for="zOverrideCSS_Text">Override CSS Text</label>
                       <label for="zBlockTextColor">Color:</label>
                       <input type="text" id="zBlockTextColor" name="zBlockTextColor" class="colorwell colorwell1 zeidon" data-zmap="block.z_^text^color" value="#ff0000" style="float:right" />
                    </div>
                    <p style="clear:both;position:relative"></p>
                    <div>
                       <input type="checkbox" id="zOverrideCSS_Background" /><label for="zOverrideCSS_Background">Override CSS Back</label>
                       <label for="zBlockBackgroundColor">Color:</label>
                       <input type="text" id="zBlockBackgroundColor" name="zBlockBackgroundColor" class="colorwell colorwell1 zeidon" data-zmap="block.z_^background^color" value="#00ff00" style="float:right" />
                    </div>
                    <p style="clear:both;position:relative"></p>
                    <div>
                       <input type="checkbox" id="zOverrideCSS_Border" /><label for="zOverrideCSS_Border">Override CSS Border</label>
                       <label for="zBlockBorderColor">Color:</label>
                       <input type="text" id="zBlockBorderColor" name="zBlockBorderColor" class="colorwell colorwell1 zeidon" data-zmap="block.z_^border^color" value="#0000ff" style="float:right" />
                    </div>
                    <p style="clear:both"></p>
                    <div id="zBlockPicker" name="zBlockPicker"></div>
             <!-- </form> -->
                  </div>

                  <div id="zmbp">
                     <ul>
                        <li><a href="#zMargins">Margins</a></li>
                        <li><a href="#zBorders">Borders</a></li>
                        <li><a href="#zPaddings">Padding</a></li>
                     </ul>
                     <div id="zMargins" name="zMargins">
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zMargin">Margins:</label>
                          <input id="zMargin" name="zMargin" class="zeidon" data-zmap="block.z_^margin" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zMarginTop">Top:</label>
                          <input id="zMarginTop" name="zMarginTop" class="zeidon" data-zmap="block.z_^margin^top" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zMarginBottom">Bottom:</label>
                          <input id="zMarginBottom" name="zMarginBottom" class="zeidon" data-zmap="block.z_^margin^bottom" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zMarginLeft">Left:</label>
                          <input id="zMarginLeft" name="zMarginLeft" class="zeidon" data-zmap="block.z_^margin^left" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zMarginRight">Right:</label>
                          <input id="zMarginRight" name="zMarginRight" class="zeidon" data-zmap="block.z_^margin^right" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <input type="checkbox" id="zMarginOverride" class="zeidon" data-zmap="block.z_^margin^override" style="float:center" /><label for="zMarginOverride">Override CSS</label>
                        </div>
                     </div>
                     <div id="zBorders" name="zBorders">
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zBorder">Borders:</label>
                          <input id="zBorder" name="zBorder" class="zeidon" data-zmap="block.z_^border" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zBorderTop">Top:</label>
                          <input id="zBorderTop" name="zBorderTop" class="zeidon" data-zmap="block.z_^border^top" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zBorderBottom">Bottom:</label>
                          <input id="zBorderBottom" name="zBorderBottom" class="zeidon" data-zmap="block.z_^border^bottom" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zBorderLeft">Left:</label>
                          <input id="zBorderLeft" name="zBorderLeft" class="zeidon" data-zmap="block.z_^border^left" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zBorderRight">Right:</label>
                          <input id="zBorderRight" name="zBorderRight" class="zeidon" data-zmap="block.z_^border^right" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <input type="checkbox" id="zBorderOverride" class="zeidon" data-zmap="block.z_^border^override" style="float:center" /><label for="zBorderOverride">Override CSS</label>
                        </div>
                     </div>
                     <div id="zPaddings" name="zPaddings">
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zPadding">Padding:</label>
                          <input id="zPadding" name="zPadding" class="zeidon" data-zmap="block.z_^padding" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zPaddingTop">Top:</label>
                          <input id="zPaddingTop" name="zPaddingTop" class="zeidon" data-zmap="block.z_^padding^top" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zPaddingBottom">Bottom:</label>
                          <input id="zPaddingBottom" name="zPaddingBottom" class="zeidon" data-zmap="block.z_^padding^bottom" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zPaddingLeft">Left:</label>
                          <input id="zPaddingLeft" name="zPaddingLeft" class="zeidon" data-zmap="block.z_^padding^left" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <label for="zPaddingRight">Right:</label>
                          <input id="zPaddingRight" name="zPaddingRight" class="zeidon" data-zmap="block.z_^padding^right" style="float:right" />
                        </div>
                        <div style="overflow:hidden; white-space:nowrap;">
                          <input type="checkbox" id="zPaddingOverride" class="zeidon" data-zmap="block.z_^padding^override" style="float:center" /><label for="zPaddingOverride">Override CSS</label>
                        </div>
                     </div>
                   </div>
                   <p style="clear:both;position:relative"></p>
                   <input type="checkbox" id="zCheckContinuationBlock" class="zeidon" data-zmap="block.z_^continuation^block^flag" /><label for="zCheckContinuationBlock">Continuation Block</label>

                  
  <!-- Add a <div> element where the dynatree should appear: -->
  <hr><div id="ftree"><hr></div><hr>

                    <div class="ui-widget">
                    <label>View Name: </label>
                    <select id="zBlockViewName" name="zBlockViewName" style="float:right">
                      <option value="">None Selected...</option>
                    </select>
                  </div>


<!--  
                   
<div>
  <table id="treegrid">
    <colgroup>
    <col width="30px"></col>
    <col width="30px"></col>
    <col width="*"></col>
    <col width="50px"></col>
    <col width="30px"></col>
    </colgroup>
    <thead>
      <tr> <th></th> <th>#</th> <th></th> <th>Key</th> <th>Like</th> </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>
-->
               </div> <!-- End of: Block Properties -->

               <h3>Panel Properties</h3>
               <div>
                  <p style="clear:both;position:relative">
                     <span>
                        <label for="zPanelName">Panel Name:</label>
                        <input id="zPanelName" name="zPanelName" class="zeidon" data-zmap="panel.z_^tag" value="" style="width:120px;float:right;" />
                     </span>
                  </p>
                  <p style="clear:both;position:relative">
                     <span>
                        <label for="zPanelVEA">View.Entity.Attribute:</label>
                        <input id="zPanelVEA" name="zPanelVEA" class="zeidon" data-zmap="panel.z_^v^e^a" style="width:120px;float:right" />
                     </span>
                  </p>
                  <p style="clear:both;position:relative">
                     <span>
                        <label for="zPanelSpinner">Panel:</label>
                        <input id="zPanelSpinner" name="zPanelSpinner" value="1" style="width:20px;"/>
                     </span>
                  </p>
                  <p style="clear:both;position:relative">
                     <span>
                        <label for="zPanelHeight">Panel Height:</label>
                        <input id="zPanelHeight" name="zPanelHeight" class="zeidon" data-zmap="panel.z_^height" value="11" style="width:20px;float:right;"/>
                     </span>
                  </p>
                  <p style="clear:both;position:relative">
                     <span>
                        <label for="zPanelWidth">Panel Width:</label>
                        <input id="zPanelWidth" name="zPanelWidth" class="zeidon" data-zmap="panel.z_^width" value="8.5" style="width:20px;float:right;"/>
                     </span>
                  </p>
                  <p style="clear:both;position:relative"></p>
                  <div id="zPanelUnits">
                     <label for="zPanelInches">in</label>
                     <input type="radio" id="zPanelInches" name="radio" class="zeidon" checked="checked" />
                     <label for="zPanelCentimeters">cm</label>
                     <input type="radio" id="zPanelCentimeters" name="radio" class="zeidon" />
                  </div>
                  <div id="tree" class="aciTree">
                  </div>
               </div> <!-- End of: Panel Properties -->

               <h3>LLD Properties</h3>
               <div>
                  <p>
                     <label for="zLLD_Name">LLD Name:</label>
                     <span>
                        <button id="zLLD_Save" name="zLLD_Save" style="float: right;">Save</button>
                        <button id="zLLD_Load" name="zLLD_Load" style="float: right;">Load</button>
                        <input id="zLLD_Name" name="zLLD_Name" data-zmap="label.z_^name" type="text" value="" style="float:right;width:92px;"/>
                     </span>
                  </p>
                  <p style="clear:both;position:relative"></p>
                  <p>
                  <div style="overflow:hidden; white-space:nowrap;">
                    <label for="zLabelVEA">View.Entity.Attribute:</label>
                    <input id="zLabelVEA" name="zLabelVEA" class="zeidon" data-zmap="label.z_^v^e^a" style="float:right;width:140px;" />
                  </div>
                     <span>
                        <label for="zCSS_File">CSS File:</label>
                        <input id="zCSS_File" name="zCSS_File" class="zeidon" data-zmap="label.z_^c^s^s_^file^name" value="" style="float:right;width:180px;"/>
                     </span>
                  </p>
                  <p style="clear:both;position:relative"></p>
                  <div class="ui-widget" style="overflow:hidden; white-space:nowrap;">
                     <label for="zHazardPanel">Hazard Panel:</label>
                     <select id="zHazardPanel" name="zHazardPanel" class="zeidon" data-zmap="label.z_^hazard^panel" style="float:right;width:180px;">
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
                     <input id="zContinuationPreviousPage" name="zContinuationPreviousPage" class="zeidon" data-zmap="label.z_^continuation^text^previous^page" placeholder="Previous Page" style="width:246px;"/><br />
                     <input id="zContinuationNextPage" name="zContinuationNextPage" class="zeidon" data-zmap="label.z_^continuation^text^next^page" placeholder="Next Page" style="width:246px;"/><br />
                  </p>
                  <p style="clear:both;position:relative"></p>
                  <div style="overflow:hidden; white-space:nowrap;">
             <!-- <form action="" style="width: 240px;"> -->
                    <div>
                       <label for="zLabelBackgroundColor">Background:</label>
                       <input type="text" id="zLabelBackgroundColor" name="zLabelBackgroundColor" class="colorwell colorwell2 zeidon" data-zmap="label.z_^background^color"  value="#ffffed" style="float:right" />
                    </div>
                    <p style="clear:both"></p>
                    <div id="zLabelPicker" name="zLabelPicker"></div>
             <!-- </form> -->
                  </div>

               </div> <!-- End of: LLD Properties -->

               <h3>Registered Views</h3>
               <div>
                  <p>
                     <span>
                        <button id="zLLD_LoadRegisteredViews" name="zLLD_LoadRegisteredViews" style="float: left;">Get Registered Views</button>
                        <button id="zLLD_SaveRegisteredViews" name="zLLD_SaveRegisteredViews" style="float: right;">Save Registered Views</button>
                     </span>
                  </p>
                  <p style="clear:both;position:relative"></p>
                  <p style="white-space:nowrap;">
                     <span>
                        <ul id="selectRegisteredViews" class="dragfrom equalheight">
                      <!-- <li uniqueIdentity="1" class="ui-state-default">hi 1</li>
                           <li uniqueIdentity="2" class="ui-state-default">hi 2</li>
                           <li uniqueIdentity="3" class="ui-state-default">hi 3</li>
                           <li uniqueIdentity="4" class="ui-state-default">hi 4</li>
                           <li uniqueIdentity="5" class="ui-state-default">hi 5</li> -->
                        </ul>
                        <ul id="selectedRegisteredViews" class="dragto equalheight">
                        </ul>
                     </span>
                  </p>
                  <p style="clear:both;position:relative"></p>
                  <p style="white-space:nowrap;"></p>
                  <h5 style="text-align:center;">Drag Registered Views right (to add) or left (to remove)</h5>
                  <br style="clear:both">
                  <p style="clear:both;position:relative"></p>
               </div> <!-- End of: Registered Views Properties -->

               <h3>Trash</h3>
               <div id="ztrash" name="ztrash" style="position:relative;">
               </div> <!-- End of: Trash Properties -->

            </div> <!-- zaccordian -->
         </div> <!-- zmenu -->
      </div> <!-- panelmenu -->
      </div> <!-- zclient -->
   </div> <!-- zviewport -->
   <div id="zfooter" name="zfooter" style="position:absolute;top:9.5in;width:12in;height:0.25in;background-color:#00A5FF;clear:both;text-align:left;">Copyright &copy; Arksoft, Inc.
      <span id="zdisplay_size" name="zdisplay_size" style="float:right;padding-right:10px;"></span>
      <span id="zdisplay_position" name="zdisplay_position" style="float:right;padding-right:10px;"></span>
   </div>
</div> <!-- zcontainer -->
<form id="zupdateLabel" name="zupdateLabel">
<div id="zSubmitLabel" name="zSubmitLabel" style="position:absolute;top:9.75in;width:12in;">
<p style="clear:both;position:relative"></p>
<input type="submit" />
</div>
</form>

&nbsp;
&nbsp;
<div id="zFormattedLabel" name="zFormattedLabel" style="position:absolute;top:10.25in;width:12in;">
<p style="clear:both;position:relative"></p>
<div id="zControlsRow" name="zControlsRow">

</div>
<div id="zFormattedJsonLabel" name="zFormattedJsonLabel" class="FormattedJsonLabel"></div>
</div>

</body>
</html>