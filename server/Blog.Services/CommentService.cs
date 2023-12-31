using Blog.Domain;
using Blog.Domain.Exceptions;
using Blog.Domain.SearchCriterias;
using Blog.IDataAccess;
using Blog.IServices;

namespace Blog.Services;

public class CommentService : ICommentService
{
    private readonly ICommentRepository _repository;

    public CommentService(ICommentRepository repository)
    {
        _repository = repository;
    }
    public Comment CreateComment(Comment comment)
    {
        comment.ValidOrFail();
        _repository.Insert(comment);
        _repository.Save();
        return comment;
    }

    public Comment GetSpecificComment(int id)
    {
        var commentSaved = _repository.GetOneBy(c => c.Id == id);

        if (commentSaved == null)
            throw new ResourceNotFoundException($"Could not find specified comment {id}");

        return commentSaved;
    }
    public Comment UpdateComment(int id, Comment updatedComment)
    {
        updatedComment.ValidOrFail();
        var commentSaved = _repository.GetOneBy(c => c.Id == id);

        if (commentSaved == null)
            throw new ResourceNotFoundException($"Could not find specified comment {id}");

        commentSaved.UpdateAttributes(updatedComment);
        _repository.Update(commentSaved);
        _repository.Save();

        return commentSaved;
    }

    public List<Comment> GetAllComments(CommentSearchCriteria searchCriteria)
    {
        return _repository.GetAllBy(searchCriteria.Criteria()).ToList();
    }

    public void MarkAllArticleCommentsAsViewed(int articleId)
    {
        _repository.MarkAllArticleCommentsAsViewed(articleId);
    }

 

}
