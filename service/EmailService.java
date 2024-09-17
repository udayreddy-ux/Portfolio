/*    */ package BOOT-INF.classes.com.portfolio.Uday.service;
/*    */ 
/*    */ import org.springframework.beans.factory.annotation.Autowired;
/*    */ import org.springframework.mail.SimpleMailMessage;
/*    */ import org.springframework.mail.javamail.JavaMailSender;
/*    */ import org.springframework.stereotype.Service;
/*    */ 
/*    */ @Service
/*    */ public class EmailService {
/*    */   @Autowired
/*    */   private JavaMailSender mailSender;
/*    */   
/*    */   public void sendSimpleEmail(String toEmail, String subject, String body) {
/* 14 */     SimpleMailMessage message = new SimpleMailMessage();
/* 15 */     message.setTo(toEmail);
/* 16 */     message.setFrom("udaysuryakdr@gmail.com");
/* 17 */     message.setSubject(subject);
/* 18 */     message.setText(body);
/* 19 */     this.mailSender.send(message);
/* 20 */     System.out.println("Mail sent successfully.");
/*    */   }
/*    */ }


/* Location:              C:\Users\Uday\Desktop\Uday-0.0.1-SNAPSHOT.jar!\BOOT-INF\classes\com\portfolio\Uday\service\EmailService.class
 * Java compiler version: 17 (61.0)
 * JD-Core Version:       1.1.3
 */