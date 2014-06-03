package com.ajax;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.io.FileUtils;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;

/**
 * @author dks
 */
//@WebServlet(name = "FileServlet", urlPatterns = {"/FtpServlet"})
public class FileServlet extends HttpServlet {

   String directoryRoot = null;
   String directoryTestOrRelease = null;

   public FileServlet() {
      super();
      directoryTestOrRelease = getTestOrReleaseDirectory();
      directoryRoot = getRootDirectory() + directoryTestOrRelease;
   }

   String getTestOrReleaseDirectory() {
      return "Test\\";
   }

   String getRootDirectory() {
      return "C:\\";
   }

   protected void processRequest( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {
      response.setContentType("text/html;charset=UTF-8");
      try (PrintWriter out = response.getWriter()) {
         /* TODO output your page here. You may use following sample code. */
         out.println("<!DOCTYPE html>");
         out.println("<html>");
         out.println("<head>");
         out.println("<title>Servlet FtpServlet</title>");         
         out.println("</head>");
         out.println("<body>");
         out.println("<h1>Servlet FtpServlet at " + request.getContextPath() + "</h1>");
         out.println("</body>");
         out.println("</html>");
      }
   }

   @Override
   protected void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {
      processRequest(request, response);
   }

   @Override
   protected void doPost( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {
   // processRequest(request, response);
      String fileName = request.getParameter( "fileName" );
      String fullFileName = directoryRoot + directoryTestOrRelease + fileName;
      int BUFF_SIZE = 1024;
      byte[] buffer = new byte[BUFF_SIZE];

      File fileIn = new File( fullFileName );
      FileInputStream fis = new FileInputStream(fileIn);
   // response.setContentType("audio/mpeg");
      response.setContentType("application/pdf");
      response.setHeader("Content-Disposition", "filename=\"hoge.txt\"");
      response.setContentLength((int) fileIn.length());
      OutputStream os = response.getOutputStream();

      try {
         int byteRead = 0;
         while ((byteRead = fis.read()) != -1) {
            os.write(buffer, 0, byteRead);
         }
         os.flush();
      } catch (Exception excp) {
       // downloadComplete = "-1";
         excp.printStackTrace();
      } finally {
         os.close();
         fis.close();
      }
   }
}
/*
// you need to set the header information before you start writing to the response.

BufferedInputStream bufferedInputStream = new BufferedInputStream(connection.getInputStream());
BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(out);

int bytesRead = 0;
byte[] buffer = new byte[1024];

response.setContentLength(connection.getContentLength());    
response.setContentType("application/pdf");
response.setHeader("Content-Disposition", "inline; filename=" + filename);
response.setHeader("Cache-Control", "cache, must-revalidate");
response.setHeader("Pragma", "public");

while ((bytesRead = bufferedInputStream.read(buffer)) != -1) {
    bufferedOutputStream.write(buffer, 0, bytesRead);
}

bufferedOutputStream.flush();





package com.javatpoint;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.darwinsys.spdf.PDF;
import com.darwinsys.spdf.Page;
import com.darwinsys.spdf.Text;
import com.darwinsys.spdf.MoveTo;

public class ServletPDF extends HttpServlet {
public void doGet(HttpServletRequest request,
HttpServletResponse response) throws IOException {

PrintWriter out = response.getWriter();
response.setContentType("application/pdf");

response.setHeader("Content-disposition","inline; filename='javatpoint.pdf'");

PDF p = new PDF(out);
Page p1 = new Page(p);
p1.add(new MoveTo(p, 200, 700));
p1.add(new Text(p, "www.javatpoint.com"));
p1.add(new Text(p, "by Sonoo Jaiswal"));

p.add(p1);
p.setAuthor("Ian F. Darwin");

p.writePDF();
}
}
*/

/*
   protected void doPost(HttpServletRequest res, HttpServletResponse response) throws ServletException, IOException {

      // Commons file upload classes are specifically instantiated
      FileItemFactory factory = new DiskFileItemFactory();

      ServletFileUpload upload = new ServletFileUpload(factory);
      ServletOutputStream out = null;

      try {
         // Parse the incoming HTTP request
         // Commons takes over incoming request at this point
         // Get an iterator for all the data that was sent
         List items = upload.parseRequest(res);
         Iterator iter = items.iterator();

         // Set a response content type
         response.setContentType("text/html");

         // Setup the output stream for the return XML data
         out = response.getOutputStream();

         // Iterate through the incoming request data
         while (iter.hasNext()) {
            // Get the current item in the iteration
            FileItem item = (FileItem) iter.next();

            // If the current item is an HTML form field
            if (item.isFormField()) {
               // Return an XML node with the field name and value
               out.println("this is a form data " + item.getFieldName() + "<br>");

               // If the current item is file data
            } else {
               // Specify where on disk to write the file
               // Using a servlet init param to specify location on disk
               // Write the file data to disk
               // TODO: Place restrictions on upload data
               File disk = new File("C:\\uploaded_files\\"+item.getName());
               item.write(disk);

               // Return an XML node with the file name and size (in bytes)
               //out.println(getServletContext().getRealPath("/WEB_INF"));
               out.println("this is a file with name: " + item.getName());
            }
         }

         // Close off the response XML data and stream

         out.close();
         // Rudimentary handling of any exceptions
         // TODO: Something useful if an error occurs
      } catch (FileUploadException fue) {
         fue.printStackTrace();
      } catch (IOException ioe) {
         ioe.printStackTrace();
      } catch (Exception e) {
         e.printStackTrace();
      }
   }
*/
/*
   @Override
   public String getServletInfo() {
      return "Short description";
   }

   // The example below shows you how to connect to an FTP server. In this example we are using the FTPClient class of the Apache Commons Net.
   // To connect to the server we need to provide the FTP server name. Login to the server can be done by calling the login() method of this
   // class with a valid username and password. To logout we call the logout() method.
   public static void FtpConnect(String[] args) {
      FTPClient client = new FTPClient();

      try {
         client.connect("ftp://10.0.0.9/");

         // When login success the login method returns true.
         boolean login = client.login("dks", "ezha.dks");

         if (login) {
            System.out.println("Login success...");

            // When logout success the logout method returns true.
            boolean logout = client.logout();
            if (logout) {
               System.out.println("Logout from FTP server...");
            }
         } else {
            System.out.println("Login fail...");
         }

      } catch (IOException e) {
         e.printStackTrace();
      } finally {
         try {
            // Closes the connection to the FTP server
            client.disconnect();
         } catch (IOException e) {
            e.printStackTrace();
         }
      }
   }

   // This example demonstrate how to delete file from FTP server.
   public static void FtpDelete(String[] args) {
      FTPClient client = new FTPClient();

      try {
         client.connect("ftp.domain.com");
         client.login("admin", "secret");

         // Delete file on the FTP server. When the FTP delete complete it returns true.
         String filename = "/testing/data.txt";
         boolean deleted = client.deleteFile(filename);
         if (deleted) {
             System.out.println("File deleted...");
         }

         client.logout();
      } catch (IOException e) {
         e.printStackTrace();
      } finally {
         try {
            client.disconnect();
         } catch (IOException e) {
            e.printStackTrace();
         }
      }
   }

   // This example demonstrate how to upload file to FTP server.
   public static void FileUpload(String[] args) {
      FTPClient client = new FTPClient();
      FileInputStream fis = null;

      try {
         client.connect("ftp.domain.com");
         client.login("admin", "secret");

         // Create an InputStream of the file to be uploaded
         String filename = "Touch.dat";
         fis = new FileInputStream(filename);

         // Store file to server
         client.storeFile(filename, fis);
         client.logout();
      } catch (IOException e) {
         e.printStackTrace();
      } finally {
         try {
            if (fis != null) {
               fis.close();
            }
            client.disconnect();
         } catch (IOException e) {
             e.printStackTrace();
         }
      }
   }

   // This example demonstrate how to download a file from FTP server.
   public static void FtpDownload(String[] args) {
      FTPClient client = new FTPClient();
      FileOutputStream fos = null;

      try {
         client.connect("ftp.domain.com");
         client.login("admin", "secret");

         // The remote filename to be downloaded.
         String filename = "sitemap.xml";
         fos = new FileOutputStream(filename);

         // Download file from FTP server
         client.retrieveFile("/" + filename, fos);
      } catch (IOException e) {
         e.printStackTrace();
      } finally {
         try {
            if (fos != null) {
               fos.close();
            }
            client.disconnect();
         } catch (IOException e) {
            e.printStackTrace();
         }
      }
   }

   // This example demonstrate how to retrieve list of files from FTP server.
   public static void FtpList(String[] args) {
      FTPClient client = new FTPClient();

      try {
         client.connect("ftp.domain.com");
         client.login("admin", "secret");

         // Obtain a list of filenames in the current working directory. When no file found an empty array will be returned.
         String[] names = client.listNames();
         for (String name : names) {
             System.out.println("Name = " + name);
         }

         FTPFile[] ftpFiles = client.listFiles();
         for (FTPFile ftpFile : ftpFiles) {
             // Check if FTPFile is a regular file
             if (ftpFile.getType() == FTPFile.FILE_TYPE) {
                 System.out.println("FTPFile: " + ftpFile.getName() + 
                         "; " + FileUtils.byteCountToDisplaySize(
                         ftpFile.getSize()));
             }
         }
         client.logout();
      } catch (IOException e) {
         e.printStackTrace();
      } finally {
         try {
             client.disconnect();
         } catch (IOException e) {
             e.printStackTrace();
         }
      }
   }
}
*/
/*
   public int
   FTPSendFile( View   vSubtask,
                String stringServerAddress,
                String stringUserName,
                String stringPassword,
                String stringLocalFileName,
                String stringServerFileName,
                int  lControl )
   {
      int    nRC         = 0;
      HINTERNET hConnection = 0;
      HINTERNET hFtp        = 0;

      hConnection = InternetOpen( "ftp", INTERNET_OPEN_TYPE_PRECONFIG, 0, 0,
                                  INTERNET_FLAG_ASYNC );
      do  // purist's goto
      {
      if ( hConnection == 0 )
      {
         DWORD dwError = GetLastError();
         TraceLineS( "*ERROR*", "" );
         TraceLastError( dwError );
         TraceLineS( "Server Address   = ", stringServerAddress );
         TraceLineS( "User Name        = ", stringUserName );
         TraceLineS( "Local File Name  = ", stringLocalFileName );
         TraceLineS( "Server File Name = ", stringServerFileName );
         MessageSend ( vSubtask,
                       "AD0450",
                       "FTP",
                       "Error creating an internet connection.",
                       zMSGQ_OBJECT_CONSTRAINT_ERROR, 0 );
         break;
      }

      hFtp = InternetConnect( hConnection, stringServerAddress, INTERNET_DEFAULT_FTP_PORT,
                              stringUserName, stringPassword, INTERNET_SERVICE_FTP, 0, 0 );
      if ( hFtp == 0 )
      {
         DWORD dwError = GetLastError();
         TraceLineS( "*ERROR*", "" );
         TraceLastError( dwError );
         TraceLineS( "Server Address   = ", stringServerAddress );
         TraceLineS( "User Name        = ", stringUserName );
         MessageSend ( vSubtask,
                       "AD0451",
                       "FTP",
                       "Error connecting to ftp server.",
                       zMSGQ_OBJECT_CONSTRAINT_ERROR, 0 );
         break;
      }

      if ( !FtpPutFile( hFtp, stringLocalFileName, stringServerFileName,
                        FTP_TRANSFER_TYPE_BINARY, 0 ) )
      {
         DWORD dwError = GetLastError();
         TraceLineS( "*ERROR*", "" );
         TraceLastError( dwError );
         TraceLineS( "Server Address   = ", stringServerAddress );
         TraceLineS( "User Name        = ", stringUserName );
         TraceLineS( "Local File Name  = ", stringLocalFileName );
         TraceLineS( "Server File Name = ", stringServerFileName );
         MessageSend ( vSubtask,
                       "AD0452",
                       "FTP",
                       "Error sending file to the server.",
                       zMSGQ_OBJECT_CONSTRAINT_ERROR, 0 );
         break;
      }
      // If we get here then everything's ok, so set return value.
      nRC = 1;

      }  while ( false );  // end of purist's goto

      if ( hConnection != 0 )
         InternetCloseHandle( hConnection );

      if ( hFtp != 0 )
         InternetCloseHandle( hFtp );

      return nRC;
   }


}

i don't know where r u fencing problem but i converted your source code in servlet. It may help to solve your problem.......


import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.apache.commons.net.ftp.*;

public class FTPServerConnection extends HttpServlet{ 
public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
response.setContentType("text/html");
PrintWriter pw = response.getWriter();
pw.println("<html>");
pw.println("<head><title>Hello FTP Server</title></title>");
pw.println("<body>");
pw.println("<h1>Hello FTP Server</h1>");
pw.println("</body></html>");
try{
String ftpHost = "localhost";
String ftpUserName = "admin";
String ftpPassword = "admin";
//String ftpHost = "192.168.0.144";
//String ftpUserName = "rootadmin";
//String ftpPassword = "rootadmin";
String ftpRemoteDirectory = "/Ah Kyi Ta Chat";
String fileToTransmit = "C:\\my.ini";

FTPClient ftp = new FTPClient();
int reply;

ftp.connect(ftpHost);
reply = ftp.getReplyCode();
System.out.println("Reply:"+reply);
System.out.println("FTP Reply:"+FTPReply.isPositiveCompletion(reply));

if (!FTPReply.isPositiveCompletion(reply)) {
try {
ftp.disconnect();
} catch (Exception e) {
System.err.println("Unable to disconnect from FTP server " + "after server refused connection. "+e.toString());
} throw new Exception ("FTP server refused connection.");
}

-----------------------------------------------------------


December 29, 2008 at 4:00 AM


System.out.println("Connected to " + ftpHost + ". "+ftp.getReplyString());

System.out.println("User Name:"+ftpUserName+",Password:"+ftpPassword);
if (!ftp.login(ftpUserName, ftpPassword)) {
throw new Exception ("Unable to login to FTP server " + "using username "+ftpUserName+" " + "and password "+ftpPassword);
}
System.out.println(ftp.getReplyString());
System.out.println("Login Successful.");
System.out.println("Remote system is " + ftp.getSystemName());

ftp.setFileType(FTP.BINARY_FILE_TYPE);

if (ftpRemoteDirectory != null && ftpRemoteDirectory.trim().length() > 0) {
System.out.println("Changing to FTP remote dir: " + ftpRemoteDirectory);
ftp.changeWorkingDirectory(ftpRemoteDirectory);
reply = ftp.getReplyCode();
System.out.println("Change dir Okay:");
System.out.println("Reply Code:"+reply);
if (!FTPReply.isPositiveCompletion(reply)) {
throw new Exception ("Unable to change working 5 " + "to:"+ftpRemoteDirectory);
}
}

System.out.println("File Directory:"+fileToTransmit);
File f = new File(fileToTransmit);
System.out.println("Storing file as remote filename: " + f.getName());
boolean retValue = ftp.storeFile(f.getName(), new FileInputStream(f));
if (!retValue) {
throw new Exception ("Storing of remote file failed. ftp.storeFile()" + " returned false.");
}
System.out.println("File uploaded successful.");

// String fileNames[]=ftp.listNames();
//for(int i=0;i<fileNames.length;i++){
//System.out.println("Files names:"+fileNames[i]);
//}
FTPFile files[] = ftp.listFiles();
reply = ftp.getReplyCode();
System.out.println("File length:"+files.length);
if (!FTPReply.isPositiveCompletion(reply)) {
throw new Exception ("Unable to get list of files to dowload.");
}

if (files.length == 0) {
System.out.println("No files are available for download.");
} else {
for (int i=0; i<files.length; i++) {
System.out.println("Downloading file "+files[i].getName()+" Size:"+files[i].getSize());
String outputFileName = "c:\\temp\\"+files[i].getName();
f = new File(outputFileName);
retValue = ftp.retrieveFile(files[i].getName(), new FileOutputStream(f));
if (!retValue) {
throw new Exception ("Downloading of remote file "+files[i].getName()+" failed. ftp.retrieveFile() returned false.");
}

//
//retValue = ftp.deleteFile(files[i].getName());
//if (!retValue) {
//log.error ("Unable to delete remote file "+files[i].getName()+". ftp.deleteFile() returned false.");
//}
//
}
}

try {
//ftp.logout();
ftp.disconnect();
} catch (Exception exc) {
System.err.println("Unable to disconnect from FTP server. " + exc.toString());
}
} catch (Exception e) {
System.err.println("Error: "+e.toString());
}
System.out.println("Process Complete.");
System.exit(0);
}
}
*/
/*
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPConnectionClosedException;

class FtpDownloadFile {
        public static void main(String[] args) throws IOException {
                FTPClient client = new FTPClient();
                FileOutputStream fos = null;
                boolean result;
                try {
                        client.connect("localhost");
                        result = client.login("admin", "admin");

                        if (result == true) {
                                System.out.println("Successfully logged in!");
                        } else {
                                System.out.println("Login Fail!");
                                return;
                        }
                
                        String fileName = "test.txt";
                        fos = new FileOutputStream(fileName);

                        // Download file from the ftp server
                        result = client.retrieveFile(fileName, fos);

                        if (result == true) {
                                System.out.println("File is downloaded successfully!");
                        } else {
                                System.out.println("File downloading failed!");
                        }
                        client.logout();
                } catch (FTPConnectionClosedException e) {
                        e.printStackTrace();
                } finally {
                        try {
                                if (fos != null) {
                                        fos.close();
                                }
                                client.disconnect();
                        } catch (FTPConnectionClosedException e) {
                                System.out.println(e);
                        }
                }
        }
}

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPConnectionClosedException;

class FtpUploadFile {
        public static void main(String[] args) throws IOException {
                FTPClient client = new FTPClient();
                FileInputStream fis = null;
                boolean result;
                try {
                        client.connect("localhost");
                        result = client.login("admin", "admin");

                        if (result == true) {
                                System.out.println("Successfully logged in!");
                        } else {
                                System.out.println("Login Fail!");
                                return;
                        }
                        File file = new File("C:/test.txt");
                        String testName = file.getName();
                        fis = new FileInputStream(file);

                        // Upload file to the ftp server
                        result = client.storeFile(testName, fis);

                        if (result == true) {
                                System.out.println("File is uploaded successfully");
                        } else {
                                System.out.println("File uploading failed");
                        }
                        client.logout();
                } catch (FTPConnectionClosedException e) {
                        e.printStackTrace();
                } finally {
                        try {
                                client.disconnect();
                        } catch (FTPConnectionClosedException e) {
                                System.out.println(e);
                        }
                }
        }
}
*/

// Save binary file from URL
/*
import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

public class MainClass {

  public static void main(String args[]) throws Exception {

    URL u = new URL("http://www.java2s.com/binary.dat");
    URLConnection uc = u.openConnection();
    String contentType = uc.getContentType();
    int contentLength = uc.getContentLength();
    if (contentType.startsWith("text/") || contentLength == -1) {
      throw new IOException("This is not a binary file.");
    }
    InputStream raw = uc.getInputStream();
    InputStream in = new BufferedInputStream(raw);
    byte[] data = new byte[contentLength];
    int bytesRead = 0;
    int offset = 0;
    while (offset < contentLength) {
      bytesRead = in.read(data, offset, data.length - offset);
      if (bytesRead == -1)
        break;
      offset += bytesRead;
    }
    in.close();

    if (offset != contentLength) {
      throw new IOException("Only read " + offset + " bytes; Expected " + contentLength + " bytes");
    }

    String filename = u.getFile().substring(filename.lastIndexOf('/') + 1);
    FileOutputStream out = new FileOutputStream(filename);
    out.write(data);
    out.flush();
    out.close();
  }
}

// Use apache FileUtils. I tried it with a small PDF and a JAR that was 60 meg. Works great!

import java.io.File;
import java.io.IOException;
import java.net.URL;
import org.apache.commons.io.FileUtils;

String uri = "http://localhost:8080/PMInstaller/f1.pdf";
URL url = new URL(uri);
File destination = new File("f1.pdf");
FileUtils.copyURLToFile(url, destination);

// The servlet, DownloadPDF looks something like this:

public class DownloadPDF extends HttpServlet {

public void doGet(HttpServletRequest request, HttpServletResponse response) {
    Cookie[] cookies = request.getCookies();
    try {
        // get cookies, generate PDF.
        // If PDF is generated to to temp file, read it
        byte[] bytes = getFile(name);
     sendPDF(response, bytes, name);
    } catch (Exception ex) {
        // do something here
    }
}

byte[] getFile(String filename) {

    byte[] bytes = null;

    try {
        java.io.File file = new java.io.File(filename);
        FileInputStream fis = new FileInputStream(file);
        bytes = new byte[(int) file.length()];
        fis.read(bytes);
    } catch (Exception e) {
        e.printStackTrace();
    }

    return bytes;
}

void sendPDF(HttpServletResponse response, byte[] bytes, String name) throws IOException {
    ServletOutputStream stream = null;

    stream = response.getOutputStream();
    response.setContentType("application/pdf");
    response.addHeader("Content-Type", "application/pdf");
    response.addHeader("Content-Disposition", "inline; filename=" + name);
    response.setContentLength((int) bytes.length);
    stream.write(bytes);
    stream.close();
}
}
*/
/*
public void doPost( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException
{
   ServletOutputStream out = response.getOutputStream();
   //---------------------------------------------------------------
   // Set the output data's mime type
   //---------------------------------------------------------------
   response.setContentType( "application/pdf" );  // MIME type for pdf doc

   //---------------------------------------------------------------
   // create an input stream from fileURL
   //---------------------------------------------------------------
   String fileURL = "http://www.adobe.com/aboutadobe/careeropp/pdfs/adobeapp.pdf";

   //------------------------------------------------------------
   // Content-disposition header - don't open in browser and
   // set the "Save As..." filename.
   // *There is reportedly a bug in IE4.0 which  ignores this...
   //------------------------------------------------------------
   response.setHeader( "Content-disposition", "attachment; filename=" += "Example.pdf" );

   //-----------------------------------------------------------------
   // PROXY_HOST and PROXY_PORT should be your proxy host and port
   // that will let you go through the firewall without authentication.
   // Otherwise set the system properties and use URLConnection.getInputStream().
   //-----------------------------------------------------------------
   BufferedInputStream  bis = null; 
   BufferedOutputStream bos = null;
   try {
      URL url = new URL( "http", PROXY_HOST, Integer.parseInt(PROXY_PORT), fileURL  );

      // Use Buffered Stream for reading/writing.
      bis = new BufferedInputStream( url.openStream() );
      bos = new BufferedOutputStream( out );
      byte[] buff = new byte[2048];
      int bytesRead;

      // Simple read/write loop.
      while( -1 != (bytesRead = bis.read( buff, 0, buff.length )) ) {
         bos.write( buff, 0, bytesRead );
      }
   } catch(final MalformedURLException e) {
      System.out.println ( "MalformedURLException." );
      throw e;
   } catch(final IOException e) {
      System.out.println ( "IOException." );
      throw e;
   } finally {
      if (bis != null)
         bis.close();
      if (bos != null)
         bos.close();
   }
}



// Send XML to client using Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import java.text.DateFormat;
public class MyServlet extends HttpServlet {
   
   public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

      String fileName = (String) request.getParameter( "file" );
      if ( fileName == null || fileName.equals( "" ) )
         throw new ServletException( "Invalid or non-existent file parameter in SendXml servlet." );

      if ( fileName.indexOf( ".xml" ) == -1 )
         fileName = fileName + ".xml";

      String xmlDir = getServletContext().getInitParameter( "xml-dir" );
      if ( xmlDir == null || xmlDir.equals( "" ) )
         throw new ServletException( "Invalid or non-existent xmlDir context-param." );

      ServletOutputStream stream = null;
      BufferedInputStream buf = null;
      try {

         stream = response.getOutputStream();
         File xml = new File( xmlDir + "/" + fileName );

         response.setContentType( "text/xml" );

         response.addHeader( "Content-Disposition", "attachment; filename=" + fileName );

         response.setContentLength( (int) xml.length() );

         FileInputStream input = new FileInputStream( xml );
         buf = new BufferedInputStream( input );
         int readBytes = 0;

         // read from the file; write to the ServletOutputStream
         while((readBytes = buf.read()) != -1)
            stream.write(readBytes);

      } catch (IOException ioe){

         throw new ServletException(ioe.getMessage());

      } finally {

         if ( stream != null )
            stream.close();
         if ( buf != null )
            buf.close();
      }

   }

   public void doPost( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {

      doGet(request,response);
   }
}

<?xml version="1.0" encoding="ISO-8859-1"?>

<!DOCTYPE web-app
    PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.2//EN"
    "http://java.sun.com/j2ee/dtds/web-app_2_2.dtd">

<web-app>
    <servlet><servlet-name>MyServletName</servlet-name>
             <servlet-class>MyServlet</servlet-class>

    </servlet>

    <servlet-mapping><servlet-name>MyServletName</servlet-name>
        <url-pattern>/index.html</url-pattern>
    </servlet-mapping>
</web-app>
*/