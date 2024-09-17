/*    */ package BOOT-INF.classes.com.portfolio.Uday.controller;
/*    */ 
/*    */ import com.portfolio.Uday.model.Contact;
/*    */ import com.portfolio.Uday.repository.ContactRepository;
/*    */ import com.portfolio.Uday.service.EmailService;
/*    */ import org.springframework.beans.factory.annotation.Autowired;
/*    */ import org.springframework.http.ResponseEntity;
/*    */ import org.springframework.web.bind.annotation.CrossOrigin;
/*    */ import org.springframework.web.bind.annotation.PostMapping;
/*    */ import org.springframework.web.bind.annotation.RequestBody;
/*    */ import org.springframework.web.bind.annotation.RequestMapping;
/*    */ import org.springframework.web.bind.annotation.RestController;
/*    */ 
/*    */ @RestController
/*    */ @RequestMapping({"/api/contact"})
/*    */ public class ContactController
/*    */ {
/*    */   @Autowired
/*    */   private ContactRepository contactRepository;
/*    */   
/*    */   @CrossOrigin(origins = {"https://www.udaytech.net", "https://udaytech.net"})
/*    */   @PostMapping
/*    */   public ResponseEntity<String> saveContact(@RequestBody Contact contact) {
/* 24 */     this.contactRepository.save(contact);
/* 25 */     this.emailService.sendSimpleEmail(contact.getEmail(), "Thank you for your message", "We have received your message!\n I will get back to you soon.\n\n\nWarm Regards,\nUday Surya Kovvuri.");
/* 26 */     return ResponseEntity.ok("Message sent successfully");
/*    */   }
/*    */   
/*    */   @Autowired
/*    */   private EmailService emailService;
/*    */ }


/* Location:              C:\Users\Uday\Desktop\Uday-0.0.1-SNAPSHOT.jar!\BOOT-INF\classes\com\portfolio\Uday\controller\ContactController.class
 * Java compiler version: 17 (61.0)
 * JD-Core Version:       1.1.3
 */