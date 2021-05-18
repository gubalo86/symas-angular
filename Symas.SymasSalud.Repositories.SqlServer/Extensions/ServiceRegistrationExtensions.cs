using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Symas.Core.Validation;
using System;

namespace Symas.SymasSalud.Repositories.SqlServer.Extensions
{
    public static class ServiceRegistrationExtensions
    {
        public static IServiceCollection AddSymasSaludDbContext(
            this IServiceCollection service,
            Action<DbContextOptionsBuilder> options)
        {
            //service.RequireThat().NotNull();

            service.AddDbContext<SymasSaludDbContext>(options);

            return service;
        }

        public static IServiceCollection AddSymasSaludRepositories(
            this IServiceCollection service)
        {
            //service.RequireThat().NotNull();

            service.AddScoped<IProductRepository, ProductRepository>();
            //service.AddScoped<IDistrictRepository, DistrictRepository>();
            //service.AddScoped<ISchoolRepository, SchoolRepository>();
            //service.AddScoped<IFacultyRepository, FacultyRepository>();
            //service.AddScoped<IStudentRepository, StudentRepository>();
            //service.AddScoped<IParentRepository, ParentRepository>();
            //service.AddScoped<IBroadcastMessagesRepository, BroadcastMessagesRepository>();
            //service.AddScoped<ITripRepository, TripRepository>();
            //service.AddScoped<ICatalogRepository, CatalogRepository>();
            //service.AddScoped<IStudentTripRepository, StudentTripRepository>();
            //service.AddScoped<IBeaconRepository, BeaconRepository>();
            //service.AddScoped<IBeaconSummaryRepository, BeaconSummaryRepository>();
            //service.AddScoped<IChaperoneRepository, ChaperoneRepository>();
            //service.AddScoped<IUserRepository, UserRepository>();
            //service.AddScoped<IIncidentsRepository, IncidentsRepository>();
            //service.AddScoped<IIncidentUpdatesRepository, IncidentUpdatesRepository>();
            //service.AddScoped<IFacultyRoleRepository, FacultyRoleRepository>();
            //service.AddScoped<ICatalogFacultyRoleTypeRepository, CatalogFacultyRoleTypeRepository>();
            return service;
        }
    }
}
