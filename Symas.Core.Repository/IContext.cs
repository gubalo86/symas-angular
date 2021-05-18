using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Symas.Core.Repository
{
    public interface IContext
    {
        Task CommitChanges(bool commitAndNewTransaction = false);
        Task RollbackChanges(bool rollbackAndNewTransaction = false);
    }
}
