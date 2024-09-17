/*    */ package BOOT-INF.classes.com.portfolio.Uday.model;
/*    */ import jakarta.persistence.Access;
/*    */ import jakarta.persistence.AccessType;
/*    */ import jakarta.persistence.GeneratedValue;
/*    */ import jakarta.persistence.GenerationType;
/*    */ import jakarta.persistence.Id;
/*    */ 
/*    */ @Entity
/*    */ @Access(AccessType.FIELD)
/*    */ public class Contact {
/*    */   @Id
/*    */   @GeneratedValue(strategy = GenerationType.IDENTITY)
/*    */   private Long id;
/*    */   private String name;
/*    */   
/*    */   public Long getId() {
/* 17 */     return this.id;
/*    */   } private String email; private String subject; private String message;
/*    */   public void setId(Long id) {
/* 20 */     this.id = id;
/*    */   }
/*    */   public String getName() {
/* 23 */     return this.name;
/*    */   }
/*    */   public void setName(String name) {
/* 26 */     this.name = name;
/*    */   }
/*    */   public String getEmail() {
/* 29 */     return this.email;
/*    */   }
/*    */   public void setEmail(String email) {
/* 32 */     this.email = email;
/*    */   }
/*    */   public String getSubject() {
/* 35 */     return this.subject;
/*    */   }
/*    */   public void setSubject(String subject) {
/* 38 */     this.subject = subject;
/*    */   }
/*    */   public String getMessage() {
/* 41 */     return this.message;
/*    */   }
/*    */   public void setMessage(String message) {
/* 44 */     this.message = message;
/*    */   }
/*    */ }


/* Location:              C:\Users\Uday\Desktop\Uday-0.0.1-SNAPSHOT.jar!\BOOT-INF\classes\com\portfolio\Uday\model\Contact.class
 * Java compiler version: 17 (61.0)
 * JD-Core Version:       1.1.3
 */