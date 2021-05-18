using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Symas.Core.Service
{
    public interface IModelService<TModel> where TModel : class
    {
        //public Task<ServiceResult<MqlQueryResult<TModel>>> QueryMqlAsync(string query);

        public Task<ServiceResult<TModel>> CreateAsync(TModel model);

        public Task<ServiceResult<TModel>> UpdateAsync(TModel model);

        public Task<ServiceResult<TModel>> DeleteAsync(TModel model);

        public Task<ServiceResult<TModel>> DeleteAsync(params object[] id);

        public Task<ServiceResult<TModel>> FindByIdAsync(params object[] id);

    }
}
