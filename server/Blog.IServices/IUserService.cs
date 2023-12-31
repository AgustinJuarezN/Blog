using Blog.Domain;
using Blog.Domain.SearchCriterias;

namespace Blog.IServices;

public interface IUserService
{
    List<User> GetAllUsers(UserSearchCriteria searchCriteria);
    List<User> GetUsersRanking(DateTime startDate, DateTime endDate);
    User GetSpecificUser(int id);
    User CreateUser(User user);
    User UpdateUser(int id, User updatedUser);
    void DeleteUser(int id);
}
