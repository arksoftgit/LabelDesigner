package com.ajax;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;
import java.util.Enumeration;

import org.apache.log4j.Logger;
import com.google.gson.Gson;

import com.quinsoft.zeidon.ObjectEngine;
import com.quinsoft.zeidon.Task;
import com.quinsoft.zeidon.View;
import com.quinsoft.zeidon.standardoe.JavaObjectEngine;
import com.quinsoft.zeidon.ActivateFlags;
import com.quinsoft.zeidon.Application;
import com.quinsoft.zeidon.CursorPosition;
import com.quinsoft.zeidon.CursorResult;
import com.quinsoft.zeidon.EntityCursor;
import com.quinsoft.zeidon.UnknownViewOdException;
import com.quinsoft.zeidon.WriteOiFlags;
import com.quinsoft.zeidon.ZeidonException;

import static com.quinsoft.zeidon.vml.VmlOperation.GetApplDirectoryFromView;
import static com.quinsoft.zeidon.vml.VmlOperation.OrderEntityForView;
import static com.quinsoft.zeidon.vml.VmlOperation.SetCursorFirstEntityByInteger;
import static com.quinsoft.zeidon.vml.VmlOperation.zAPPL_DIR_LIB;
import static com.quinsoft.zeidon.vml.VmlOperation.zIGNORE_ERRORS;
import static com.quinsoft.zeidon.vml.VmlOperation.zLEVEL_APPLICATION;
import static com.quinsoft.zeidon.vml.VmlOperation.zREFER_LOD_META;
import static com.quinsoft.zeidon.vml.VmlOperation.zSINGLE;

import com.quinsoft.zeidon.zeidonoperations.KZOEP1AA;

import com.quinsoft.zeidon.vml.zVIEW;
import java.io.BufferedWriter;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.StringWriter;
import java.io.Writer;
import java.util.logging.Level;
import org.apache.commons.io.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * @author dks
 */
//@WebServlet("/labeldesigner")
public class LabelDesignerServlet extends HttpServlet {
   
   private class jsonRegisteredViewArray extends JSONObject {
     jsonRegisteredViewObject objRV;
   };
   private class jsonRegisteredViewObject extends JSONObject {
     String ZKey;
     String Name;
     boolean processed;
   };
   private ServletContext context;

   private static final long serialVersionUID = 1L;
   private static final Logger logger = Logger.getLogger( LabelDesignerServlet.class );
   private static Task epamms;
   private static Application zeidonTools;
   private static Task zeidonSystem;
   private static ObjectEngine oe;
   private static Integer i = 0;
   private static KZOEP1AA m_KZOEP1AA = null;

    /*
     * @see HttpServlet#HttpServlet()
     */
   public LabelDesignerServlet() {
      super();
      View taskView;
   // zVIEW vLPLR = new zVIEW();

   // oe = JavaObjectEngine.getInstance();
      oe = com.arksoft.epamms.ZeidonObjectEngineConfiguration.getObjectEngine();

      epamms = oe.createTask( "epamms" );  // at some point, the application name needs to be supplied
      zeidonTools = epamms.getApplication( "Zeidon_Tools" );
      zeidonSystem = oe.getSystemTask();
      logger.debug( "Hello ePamms" );

      taskView = epamms.activateEmptyObjectInstance( "wWebXfer" );
      taskView.setName( "wWebXfer" );
      taskView.cursor( "Root" ).createEntity();
      i++;
      taskView.cursor( "Root" ).setAttribute( "Banner1", i.toString() );
      taskView.logObjectInstance();

   // String LPLR_FileName = GetApplDirectoryFromView( epamms, zAPPL_DIR_LIB ) + "epamms" + ".XLP";

      try {
         m_KZOEP1AA = new KZOEP1AA( taskView );
         m_KZOEP1AA.InitializeLPLR( taskView, "epamms" );
      } catch( IOException ie ) {
         logger.debug( "Error initializing epamms LPLR: " + ie.getMessage() );
      } finally {
         logger.debug( "Completed initializing epamms LPLR" );
      }

      // Make sure Registered View list is alphabetized.

      // ActivateOI_FromFile( vLPLR, "TZCMLPLO", taskView, LPLR_FileName, /*zSINGLE 0 |*/ zLEVEL_APPLICATION /*4*/ | zIGNORE_ERRORS /*12288*/ );
   /* vLPLR.setView( epamms.activateOiFromFile( "TZCMLPLO", zeidonSystem.getApplication(), LPLR_FileName, ActivateFlags.SINGLE_IGNORE_ERRORS ) );
      epamms.setNameForView( "LPLR_RegisteredView", vLPLR );
      epamms.setNameForView( "TaskLPLR", vLPLR );

      // Make sure Registered View list is alphabetized.
      EntityCursor cursorType = vLPLR.cursor( "W_MetaType" );
   // SetCursorFirstEntityByInteger( vLPLR, "W_MetaType", "Type", 2009, "" );
      cursorType.setFirst( "Type", 2009, "" );  // Registered Views
      cursorType.logEntity( true );
   // OrderEntityForView( vLPLR, "W_MetaDef", "Name A" );
      EntityCursor cursorDef = vLPLR.cursor( "W_MetaDef" );
      cursorDef.orderEntities( "Name A" );
      cursorType.logEntity( true );
   */
   /*
      String s = "%kzd%:\\lplr\\epamms";
      StringBuilder sb = new StringBuilder( s );
      m_KZOEP1AA.SysConvertEnvironmentString( sb, s );
      StringBuilder sb1 = new StringBuilder( );
      m_KZOEP1AA.SysConvertEnvironmentString( sb1, s );
      StringBuilder sb2 = new StringBuilder( s );
      m_KZOEP1AA.SysConvertEnvironmentString( sb2, s );
      StringBuilder sb3 = new StringBuilder( s );
      m_KZOEP1AA.SysConvertEnvironmentString( sb3, s );
      StringBuilder sb4 = new StringBuilder( s );
      m_KZOEP1AA.SysConvertEnvironmentString( sb4, s );
      StringBuilder sb5 = new StringBuilder( s );
      m_KZOEP1AA.SysConvertEnvironmentString( sb5, s );
   */
  }

   @Override
   public void init( ServletConfig config ) throws ServletException {
      this.context = config.getServletContext();
   }

   private JSONObject findRegisteredView( JSONArray rv, String ZKey ) {
      JSONObject json;
      Iterator iterator = rv.iterator();
      while ( iterator.hasNext() ) {
         json = (JSONObject) iterator.next();
         if ( ZKey.equals( (String) json.get( "ZKey" ) ) ) {
             return json;
         }
      }

      return null;
   }

   private String convertLLD_ToJSON( View vLLD ) {
      String jsonLabel = null;
      StringWriter sw = null;
      BufferedWriter writer = null;
      vLLD.logObjectInstance();
      try {
         sw = new StringWriter();
         writer = new BufferedWriter( sw );
         vLLD.writeOiAsJson( writer, WriteOiFlags.fINCREMENTAL );
         StringBuffer sb = sw.getBuffer();
         jsonLabel = sb.toString();
         logger.debug( "Json Label from OI: " + jsonLabel );
      } catch( ZeidonException ze ) {
         logger.debug( "Error loading Json Label: " + ze.getMessage() );
         jsonLabel = "{ \"Error\" : \"" + ze.getMessage() + "\" }";
      } finally {
         if ( sw != null ) {
            try {
               sw.close();
            } catch( IOException oi ) {
               logger.debug( "Unable to close StringWriter in convertLLD_ToJSON" );
            }
         }
         if ( writer != null ) {
            try {
               writer.close();
            } catch( IOException oi ) {
               logger.debug( "Unable to close BufferedWriter in convertLLD_ToJSON" );
            }
         }
      }
      return jsonLabel;
   }

   /**
    * @see HttpServlet#doGet( HttpServletRequest request, HttpServletResponse response )
    */
   protected void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {
   // handleRequest( request, response );
   }

   /*
    * @see HttpServlet#doPost( HttpServletRequest request, HttpServletResponse response )Handles the HTTP <code>POST</code> method.
    * @param request servlet request
    * @param response servlet response
    * @throws ServletException if a servlet-specific error occurs
    * @throws IOException if an I/O error occurs
    */
   @Override
   public void doPost( HttpServletRequest request, HttpServletResponse response ) throws IOException, ServletException {
      String action = request.getParameter( "action" );
      String fileName = request.getParameter( "fileName" );
      String lldFileName = "";
      String fullName = "";

      if ( fileName != null ) {
         lldFileName = fileName.toLowerCase();
         if ( lldFileName.endsWith( ".lld" ) == false ) {
            lldFileName += ".lld";
         }
      }
      fullName = epamms.getApplication().getQlplrDir() + '/' + lldFileName;
      String jsonLabel = null;
      if ( action.equals( "saveLabel" ) ) {
         jsonLabel = request.getParameter( "jsonLabel" );
         try {
            InputStream in = IOUtils.toInputStream( jsonLabel );
            View vLLD = zeidonSystem.activateOiFromJsonStream( in, null );
            vLLD.logObjectInstance();
            vLLD.writeOiToFile( fullName, 0 );
         } catch( ZeidonException ze ) {
            logger.debug( "Error processing Json Label: " + ze.getMessage() );
         } finally {
            logger.debug( "Completed processing Json Label: " + jsonLabel );
            response.setContentType( "text/json" );
            response.getWriter().write( jsonLabel );
         }
      } else if ( action.equals( "loadLabel" ) ) {
      // String fileName = GetApplDirectoryFromView( epamms, VmlOperation.zAPPL_DIR_QLPLR ) + request.getParameter( "fileName" );
         try {
            View vLLD = epamms.activateOiFromFile( "TZLLD", zeidonTools, fullName, null );
            jsonLabel = convertLLD_ToJSON( vLLD );
            jsonLabel = jsonLabel.replaceFirst( "\"TZLLD\",", "\"TZLLD\",\n      \"fileName\" : \"" + fileName + "\"," );
         } catch( ZeidonException ze ) {
            logger.debug( "Error loading Json Label: " + ze.getMessage() );
            jsonLabel = "{ \"Error\" : \"" + ze.getMessage() + "\" }";
         /* jsonLabel = "{ \".oimeta\" : { \"application\" : \"epamms\", \"odName\" : \"TZLLD\", \"fileName\" : \"onCatchException\", \"incremental\" : \"true\" }, " +
                           "\"LLD\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Name\" : \"Drop area ...\" , " +
                           "\"Panel\" : [ { \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"1\" , \"Tag\" : \"panel1\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                           "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"46.21875px\", \"Left\" : \"18px\", \"Height\" : \"415px\", \"Width\" : \"361px\", \"Tag\" : \"Tag100\" , \"Level\" : \"1\" , " +
                           "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"61px\", \"Left\" : \"72px\", \"Height\" : \"160px\", \"Width\" : \"200px\", \"Tag\" : \"Tag101\" , \"Level\" : \"2\" , " +
                           "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"43px\", \"Left\" : \"69px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag103\" , \"Level\" : \"3\"  } ] }, " +
                           "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"257px\", \"Left\" : \"190px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag102\" , \"Level\" : \"2\"  } ] }, " +
                           "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"55px\", \"Left\" : \"439px\", \"Height\" : \"403px\", \"Width\" : \"182px\", \"Tag\" : \"Tag104\" , \"Level\" : \"1\" , " +
                           "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"64.21875px\", \"Left\" : \"36px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag105\" , \"Level\" : \"2\"  } ] } ]}, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"2\" , \"Tag\" : \"panel2\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                           "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"78px\", \"Left\" : \"82px\", \"Height\" : \"299px\", \"Width\" : \"262px\", \"Tag\" : \"Tag106\" , \"Level\" : \"1\"  }, " +
                           "{ \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"174px\", \"Left\" : \"396px\", \"Height\" : \"297px\", \"Width\" : \"216px\", \"Tag\" : \"Tag107\" , \"Level\" : \"1\" , " +
                           "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"54px\", \"Left\" : \"36px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag108\" , \"Level\" : \"2\"  } ] } ]}, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"3\" , \"Tag\" : \"panel3\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" , " +
                           "\"Block\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"47px\", \"Left\" : \"135px\", \"Height\" : \"488px\", \"Width\" : \"415px\", \"Tag\" : \"Tag109\" , \"Level\" : \"1\" , " +
                           "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"66px\", \"Left\" : \"80px\", \"Height\" : \"311px\", \"Width\" : \"243px\", \"Tag\" : \"Tag110\" , \"Level\" : \"2\" , " +
                           "\"BlockBlock\" : [ { \".meta\" : { \"created\" : \"true\" } , \"Top\" : \"56px\", \"Left\" : \"61px\", \"Height\" : \"100px\", \"Width\" : \"100px\", \"Tag\" : \"Tag111\" , \"Level\" : \"3\"  } ] } ] } ]}, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"4\" , \"Tag\" : \"panel4\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"5\" , \"Tag\" : \"panel5\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"6\" , \"Tag\" : \"panel6\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"7\" , \"Tag\" : \"panel7\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"8\" , \"Tag\" : \"panel8\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\" }, " +
                           "{ \".meta\" : { \"created\" : \"true\" }, \"Order\" : \"9\" , \"Tag\" : \"panel9\" , \"Top\" : \"0px\", \"Left\" : \"0px\", \"Height\" : \"600px\", \"Width\" : \"650px\", \"Level\" : \"0\"  } ] } ]} ";
         */
         /* { "OIs" : [ { ".oimeta" : { "application" : "Zeidon_Tools", "odName" : "TZLLD", "incremental" : true },
                  "LLD" : [ { ".meta" : { "incrementals" : "UC___" },
                            "Tag" : "label", ".Tag" : { "updated" : "true" },
                            "Name" : "Drop area ...", ".Name" : { "updated" : "true" },
                            "CSS_FileName" : "css", ".CSS_FileName" : { "updated" : "true" },
                            "BackgroundColor" : "#b62953", ".BackgroundColor" : { "updated" : "true" },
                            "ContinuationTextPreviousPage" : "Continued from previous page", ".ContinuationTextPreviousPage" : { "updated" : "true" },
                            "ContinuationTextNextPage" : "Continued on next page", ".ContinuationTextNextPage" : { "updated" : "true" },
                            "Top" : "0px", ".Top" : { "updated" : "true" },
                            "Left" : "0px", ".Left" : { "updated" : "true" },
                            "Width" : "8.5in", ".Width" : { "updated" : "true" },
                            "Height" : "9in", ".Height" : { "updated" : "true" },
                     "Panel" : [ { ".meta" : { "incrementals" : "UC___" },
                                 "Tag" : "panel1", ".Tag" : { "updated" : "true" },
                                 "Order" : "1", ".Order" : { "updated" : "true" },
                                 "Top" : "0px", ".Top" : { "updated" : "true" },
                                 "Left" : "0px", ".Left" : { "updated" : "true" },
                                 "Height" : "9in", ".Height" : { "updated" : "true" },
                                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                                 "Level" : "0", ".Level" : { "updated" : "true" },
                        "Block" : [ { ".meta" : { "incrementals" : "UC___" },
                                    "Tag" : "Tag100", ".Tag" : { "updated" : "true" },
                                    "Top" : "86px", ".Top" : { "updated" : "true" },
                                    "Left" : "157px", ".Left" : { "updated" : "true" },
                                    "Height" : "443px", ".Height" : { "updated" : "true" },
                                    "Width" : "490px", ".Width" : { "updated" : "true" },
                                    "BorderColor" : "#ffffff", ".BorderColor" : { "updated" : "true" },
                                    "TextColor" : "#ffffff", ".TextColor" : { "updated" : "true" },
                                    "BackgroundColor" : "#ffffff", ".BackgroundColor" : { "updated" : "true" },
                                    "Level" : "1", ".Level" : { "updated" : "true" },
                           "BlockBlock" : [ { ".meta" : { "incrementals" : "UC___" },
                                            "Tag" : "Tag101", ".Tag" : { "updated" : "true" },
                                            "Top" : "43px", ".Top" : { "updated" : "true" },
                                            "Left" : "36px", ".Left" : { "updated" : "true" },
                                            "Height" : "175px", ".Height" : { "updated" : "true"  },
                                            "Width" : "179px", ".Width" : { "updated" : "true" },
                                            "BorderColor" : "#e36262", ".BorderColor" : { "updated" : "true" },
                                            "TextColor" : "#4050dc", ".TextColor" : { "updated" : "true" },
                                            "BackgroundColor" : "#5ce73b", ".BackgroundColor" : { "updated" : "true" },
                                            "Level" : "2", ".Level" : { "updated" : "true" } } ] } ] },
            { ".meta" : { "incrementals" : "UC___" },
                  "Tag" : "panel2", ".Tag" : { "updated" : "true" },
                  "Order" : "2", ".Order" : { "updated" : "true" },
                  "Top" : "0px", ".Top" : { "updated" : "true" },
                  "Left" : "0px", ".Left" : { "updated" : "true" },
                  "Height" : "9in", ".Height" : { "updated" : "true" },
                  "Width" : "8.5in", ".Width" : { "updated" : "true" },
                  "Level" : "0", ".Level" : { "updated" : "true" } },
            { ".meta" : { "incrementals" : "UC___" },
                 "Tag" : "panel3", ".Tag" : { "updated" : "true" },
                 "Order" : "3", ".Order" : { "updated" : "true" },
                 "Top" : "0px", ".Top" : { "updated" : "true" },
                 "Left" : "0px", ".Left" : { "updated" : "true" },
                 "Height" : "9in", ".Height" : { "updated" : "true" },
                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                 "Level" : "0", ".Level" : { "updated" : "true" } },
            { ".meta" : { "incrementals" : "UC___" },
                 "Tag" : "panel4", ".Tag" : { "updated" : "true" },
                 "Order" : "4", ".Order" : { "updated" : "true" },
                 "Top" : "0px", ".Top" : { "updated" : "true" },
                 "Left" : "0px", ".Left" : { "updated" : "true" },
                 "Height" : "9in", ".Height" : { "updated" : "true" },
                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                 "Level" : "0", ".Level" : { "updated" : "true" } },
            { ".meta" : { "incrementals" : "UC___" },
                 "Tag" : "panel5", ".Tag" : { "updated" : "true" },
                 "Order" : "5", ".Order" : { "updated" : "true" },
                 "Top" : "0px", ".Top" : { "updated" : "true" },
                 "Left" : "0px", ".Left" : { "updated" : "true" },
                 "Height" : "9in", ".Height" : { "updated" : "true" },
                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                 "Level" : "0", ".Level" : { "updated" : "true" } },
            { ".meta" : { "incrementals" : "UC___" },
                 "Tag" : "panel6", ".Tag" : { "updated" : "true" },
                 "Order" : "6", ".Order" : { "updated" : "true" },
                 "Top" : "0px", ".Top" : { "updated" : "true" },
                 "Left" : "0px", ".Left" : { "updated" : "true" },
                 "Height" : "9in", ".Height" : { "updated" : "true" },
                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                 "Level" : "0", ".Level" : { "updated" : "true" } },
            { ".meta" : { "incrementals" : "UC___" },
                 "Tag" : "panel7", ".Tag" : { "updated" : "true" },
                 "Order" : "7", ".Order" : { "updated" : "true" },
                 "Top" : "0px", ".Top" : { "updated" : "true" },
                 "Left" : "0px", ".Left" : { "updated" : "true" },
                 "Height" : "9in", ".Height" : { "updated" : "true" },
                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                 "Level" : "0", ".Level" : { "updated" : "true" } },
            { ".meta" : { "incrementals" : "UC___" },
                 "Tag" : "panel8", ".Tag" : { "updated" : "true" },
                 "Order" : "8", ".Order" : { "updated" : "true" },
                 "Top" : "0px", ".Top" : { "updated" : "true" },
                 "Left" : "0px", ".Left" : { "updated" : "true" },
                 "Height" : "9in", ".Height" : { "updated" : "true" },
                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                 "Level" : "0", ".Level" : { "updated" : "true" } },
            { ".meta" : { "incrementals" : "UC___" },
                 "Tag" : "panel9", ".Tag" : { "updated" : "true" },
                 "Order" : "9", ".Order" : { "updated" : "true" },
                 "Top" : "0px", ".Top" : { "updated" : "true" },
                 "Left" : "0px", ".Left" : { "updated" : "true" },
                 "Height" : "9in", ".Height" : { "updated" : "true" },
                 "Width" : "8.5in", ".Width" : { "updated" : "true" },
                 "Level" : "0", ".Level" : { "updated" : "true" } } ]
                  } ]
                } ]
             }
         */
         } finally {
            response.setContentType( "text/json" );
         // response.getWriter().write( jsonLabel );
            response.getWriter().write( new Gson().toJson( jsonLabel ) );
         }
      } else if ( action.equals( "loadRegisteredViews" ) ) {
         String lodName = "";
         int lZKey = 0;
         try {
            // { "employees": [ { "firstName":"John" , "lastName":"Doe" }, { "firstName":"Anna" , "lastName":"Smith" } ] }
            jsonLabel = "{ \"registeredViews\" :";
            boolean first = true;
            View v = epamms.getViewByName( "TaskLPLR" );
            EntityCursor cursorMetaType = v.cursor( "W_MetaType" );
            cursorMetaType.setFirst( "Type", 2009, "" );  // Registered Views
         // OrderEntityForView( vLPLR, "W_MetaDef", "Name A" );
            EntityCursor cursorMetaDef = v.cursor( "W_MetaDef" );
            cursorMetaDef.orderEntities( "Name A" );
            cursorMetaType.logEntity( true );

            CursorResult cr = cursorMetaDef.setFirst();
            while ( cr.isSet() ) {
               if ( first ) {
                  jsonLabel += " [ ";
                  first = false;
               }
               String metaZKey = cursorMetaDef.getAttribute( "CPLR_ZKey" ).getString();
               String metaName = cursorMetaDef.getAttribute( "Name" ).getString();
               jsonLabel += "{ \"ZKey\" : \"" + metaZKey + "\", \"Name\" : \"" + metaName + "\" }, ";
               if ( metaName.compareTo( "GENKEYWO" ) == 0 ) {
                  lodName = metaName;
                  lZKey = Integer.parseInt( metaZKey );
               }
               cr = cursorMetaDef.setNext();
            }

            if ( first == false ) {  // if we had at least one, kill the trailing "," and add a "]"
               int k = jsonLabel.lastIndexOf( "," );
               jsonLabel = jsonLabel.substring( 0, k ) + " ] }";
            }
            else {
               jsonLabel += "}";
            }

            zVIEW  vLOD = new zVIEW();
            View vNull = null;
            View vTaskView = epamms.getViewByName( "wWebXfer" );
         // int rc = m_KZOEP1AA.ActivateMetaOI_ByZKey( vTaskView, vLOD, vNull, zREFER_LOD_META, zSINGLE, lZKey, 0 );
            int rc = m_KZOEP1AA.ActivateMetaOI_ByName( vTaskView, vLOD, vNull, zREFER_LOD_META, zSINGLE, lodName, 0 );
            if ( rc == 0 ) {
               vLOD.logObjectInstance();
            }
         } catch( ZeidonException ze ) {
            logger.debug( "Error loading Registered Views: " + ze.getMessage() );
         } finally {
            logger.debug( "Completed loading Registered Views: " + jsonLabel );
            response.setContentType( "text/json" );
         // response.getWriter().write( jsonLabel );
            response.getWriter().write( new Gson().toJson( jsonLabel ) );
         }
      } else if ( action.equals( "saveRegisteredViews" ) ) {
         View vLLD = null;
         try {
            String jsonRegisteredViews = request.getParameter( "registeredViews" );
            logger.debug( "Json Registered Views: " + jsonRegisteredViews );
            JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse( jsonRegisteredViews );
            JSONArray rv = (JSONArray) jsonObject.get( "registeredViews" );
            boolean updatedOI = false;

            vLLD = epamms.activateOiFromFile( "TZLLD", zeidonTools, fullName, null );
            vLLD.logObjectInstance();
            EntityCursor cursorViewObjRef = vLLD.cursor( "ViewObjRef" );
            // 68568788 ==> DOMAINTL
         // objA = (jsonRegisteredViewArray) jso.get( "registeredViews" );
         // objT = (jsonRegisteredViewObject) objA.get( "8568788" );
         // objT.processed = true;
            CursorResult cr = cursorViewObjRef.setFirst();
            while ( cr.isSet() ) {
               String ZKey = cursorViewObjRef.getStringFromAttribute( "ZKey" );
               JSONObject obj = findRegisteredView( rv, ZKey );
               if ( obj == null ) {
                  updatedOI = true;
                  cursorViewObjRef.excludeEntity( CursorPosition.NONE );
               } else {
                  rv.remove( obj );  // already in OI, so we don't want to 
               }

               cr = cursorViewObjRef.setNext();
            }

            /* just to test remove
            JSONObject obj = findRegisteredView( rv, "68568788" );
            if ( obj != null ) {
               rv.remove( obj );
            }
            end of test code */

            View vTaskView = epamms.getViewByName( "wWebXfer" );

            // loop array
            Iterator iterator = rv.iterator();
            while ( iterator.hasNext() ) {
               JSONObject jo = (JSONObject) iterator.next();
               String name = (String) jo.get( "Name" );
               int zkey = Integer.parseInt( (String) jo.get( "ZKey" ) );
               System.out.println( "Name: " + name + "  ZKey: " + zkey );
               m_KZOEP1AA.IncludeVOR_Entity( vTaskView, vLLD, zkey );
               updatedOI = true;
            }

            if ( updatedOI ) {
               vLLD.writeOiToFile( fullName, 0 );
            }
         } catch( UnknownViewOdException ze ) {
            logger.debug( "Error saving Registered Views: " + ze.getMessage() );
            ze.printStackTrace();
         } catch ( ParseException pe ) {
            logger.debug( "JSON Error saving Registered Views: " + pe.getMessage() );
            pe.printStackTrace();
         } finally {
            if ( vLLD != null ) {
               jsonLabel = convertLLD_ToJSON( vLLD );
               logger.debug( "Completed saving Registered Views: " + jsonLabel );
            }

            response.setContentType( "text/json" );
         // response.getWriter().write( jsonLabel );
            response.getWriter().write( new Gson().toJson( jsonLabel ) );
         }
      } else {
         //nothing to show
         response.setStatus( HttpServletResponse.SC_NO_CONTENT );
      }
   }
}