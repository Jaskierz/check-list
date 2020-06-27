## Getting started

Install dependencies 
```sh
$ yarn
```
Start server
```sh
$ yarn start
```

## API

### List of companies 

`GET http://localhost:3000/companies`

##### Interface
```typescript
interface Company {
  id: number;
  uuid: number;
  name: string;
  group: number;
  description: string;
  departments: {
    label: string;
    code: string;
    required: boolean;
  }[];
}
```

### Save agreements

`POST http://localhost:3000/userAgreements`

##### Interface
```typescript
interface UserDepartmentAgreements {
  usrId: number;
  departments: {
    departmentCode: string;
    processingAllowed: boolean;
  }[];
}
```
