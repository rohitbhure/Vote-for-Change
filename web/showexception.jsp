<%-- 
    Document   : showexception
    Created on : 10 May, 2024, 1:28:02 PM
    Author     : Rohit
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    out.print(request.getAttribute("Exception"));
%>
