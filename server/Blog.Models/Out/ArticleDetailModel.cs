using Blog.Domain;

namespace Models;

public class ArticleDetailModel
{
    public int Id { get; set; }

    public int AuthorId { get; set; }
    
    public string Title { get; set; }
    
    public bool Private { get; set; }
    
    public List<CommentDetailModel>? Comments { get; set; }
    
    public string Content { get; set; }
    
    public string? FirstImage { get; set; }

    public string? SecondImage { get; set; }

    public Template Template { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    public DateTime? UpdatedAt { get; set; }

    public DateTime? DeletedAt { get; set; }

    public bool IsApproved { get; set; }

    public bool IsRejected { get; set; }

    public ArticleDetailModel(Article article)
    {
        if (article == null)
        {
            throw new ArgumentNullException(nameof(article));
        }

        List<CommentDetailModel>? comments = null;

        if(article.Comments != null)
        {
            comments = article.Comments.Select(c => new CommentDetailModel(c)).ToList();
        }

        Id = article.Id;
        AuthorId = article.Author.Id;
        Title = article.Title;
        Content = article.Content;
        Private = article.Private;
        Comments = comments;
        FirstImage = article.FirstImage;
        SecondImage = article.SecondImage;
        Template = article.Template;
        CreatedAt = article.CreatedAt;
        UpdatedAt = article.UpdatedAt;
        DeletedAt = article.DeletedAt;
        IsApproved = article.IsApproved;
        IsRejected = article.IsRejected;
    }
    
    public override bool Equals(object? obj)
    {
        var model = obj as ArticleDetailModel;
        return model.Id == Id;
    }
}
