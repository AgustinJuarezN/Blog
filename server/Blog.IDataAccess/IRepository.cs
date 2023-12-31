using System.Linq.Expressions;

namespace Blog.IDataAccess;

public interface IRepository<T> where T : class
{
    IEnumerable<T> GetAllBy(Expression<Func<T, bool>> expression);
    IEnumerable<T> GetAll();
    T? GetOneBy(Expression<Func<T, bool>> expression);
    void Insert(T elem);
    void Delete(T elem);
    void Update(T elem);
    void Save();
}
