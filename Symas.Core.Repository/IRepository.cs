using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Symas.Core.Repository
{
    public interface IRepository<TModel>
    {
        //public Task<MqlQueryResult<TModel>> QueryMqlAsync(string query);

        public Task<TModel> CreateAsync(TModel model);

        public Task<TModel> UpdateAsync(TModel model, params object[] id);

        public Task<TModel> UpdateAsync(TModel model);

        public Task DeleteAsync(TModel model);

        public Task DeleteAsync(params object[] id);

        public Task<TModel> FindByIdAsync(params object[] id);

        public Task<ICollection<TModel>> FindByModelAsync(TModel model);
    }
}

