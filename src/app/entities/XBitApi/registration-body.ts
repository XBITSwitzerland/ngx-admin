export class RegistrationBody {
    Password: string;
    Name: string;
    Surname: string;
    BirthDate: string;
    Username: string;
    UserClaimsRoles: any;
    Address: {
        Street: string;
        Place: string;
        Zip: string;
        CountryName: string;
    };
}