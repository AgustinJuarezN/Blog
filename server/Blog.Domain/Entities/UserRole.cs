namespace Blog.Domain;

public class UserRole
{
    public int Id {get; set;}
    public User User {get; set;}
    public Role Role {get; set;}

   // public DateTimeOffset? DeletedAt { get; set; }

    public UserRole() { /* Requerido por EF */  }
}
