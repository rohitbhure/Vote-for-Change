<%-- 
    Document   : success
    Created on : 20 May, 2024, 1:43:49 PM
    Author     : Rohit
--%>

<%
    String userid=(String)session.getAttribute("adhar_no");
    if(userid==null)
    {
        session.invalidate();
        response.sendRedirect("accessdenied.html");
        return;
    }
    out.println("success");
%>