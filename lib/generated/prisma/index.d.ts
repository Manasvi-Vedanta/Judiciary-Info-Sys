
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cases
 * 
 */
export type Cases = $Result.DefaultSelection<Prisma.$CasesPayload>
/**
 * Model Documents
 * 
 */
export type Documents = $Result.DefaultSelection<Prisma.$DocumentsPayload>
/**
 * Model Hearings
 * 
 */
export type Hearings = $Result.DefaultSelection<Prisma.$HearingsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CaseStatus: {
  FILED: 'FILED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  ADJOURNED: 'ADJOURNED',
  CLOSED: 'CLOSED'
};

export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus]


export const HearingStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  ADJOURNED: 'ADJOURNED',
  CANCELLED: 'CANCELLED'
};

export type HearingStatus = (typeof HearingStatus)[keyof typeof HearingStatus]


export const Role: {
  REGISTRAR: 'REGISTRAR',
  JUDGE: 'JUDGE',
  LAWYER: 'LAWYER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type CaseStatus = $Enums.CaseStatus

export const CaseStatus: typeof $Enums.CaseStatus

export type HearingStatus = $Enums.HearingStatus

export const HearingStatus: typeof $Enums.HearingStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cases
 * const cases = await prisma.cases.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cases
   * const cases = await prisma.cases.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cases`: Exposes CRUD operations for the **Cases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.cases.findMany()
    * ```
    */
  get cases(): Prisma.CasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **Documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.DocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hearings`: Exposes CRUD operations for the **Hearings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hearings
    * const hearings = await prisma.hearings.findMany()
    * ```
    */
  get hearings(): Prisma.HearingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cases: 'Cases',
    Documents: 'Documents',
    Hearings: 'Hearings',
    Notifications: 'Notifications',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cases" | "documents" | "hearings" | "notifications" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cases: {
        payload: Prisma.$CasesPayload<ExtArgs>
        fields: Prisma.CasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          findFirst: {
            args: Prisma.CasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          findMany: {
            args: Prisma.CasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>[]
          }
          create: {
            args: Prisma.CasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          createMany: {
            args: Prisma.CasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>[]
          }
          delete: {
            args: Prisma.CasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          update: {
            args: Prisma.CasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          deleteMany: {
            args: Prisma.CasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>[]
          }
          upsert: {
            args: Prisma.CasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          aggregate: {
            args: Prisma.CasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCases>
          }
          groupBy: {
            args: Prisma.CasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasesCountArgs<ExtArgs>
            result: $Utils.Optional<CasesCountAggregateOutputType> | number
          }
        }
      }
      Documents: {
        payload: Prisma.$DocumentsPayload<ExtArgs>
        fields: Prisma.DocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findFirst: {
            args: Prisma.DocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findMany: {
            args: Prisma.DocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          create: {
            args: Prisma.DocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          createMany: {
            args: Prisma.DocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          delete: {
            args: Prisma.DocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          update: {
            args: Prisma.DocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          deleteMany: {
            args: Prisma.DocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          upsert: {
            args: Prisma.DocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.DocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      Hearings: {
        payload: Prisma.$HearingsPayload<ExtArgs>
        fields: Prisma.HearingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HearingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HearingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>
          }
          findFirst: {
            args: Prisma.HearingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HearingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>
          }
          findMany: {
            args: Prisma.HearingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>[]
          }
          create: {
            args: Prisma.HearingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>
          }
          createMany: {
            args: Prisma.HearingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HearingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>[]
          }
          delete: {
            args: Prisma.HearingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>
          }
          update: {
            args: Prisma.HearingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>
          }
          deleteMany: {
            args: Prisma.HearingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HearingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HearingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>[]
          }
          upsert: {
            args: Prisma.HearingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HearingsPayload>
          }
          aggregate: {
            args: Prisma.HearingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHearings>
          }
          groupBy: {
            args: Prisma.HearingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HearingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HearingsCountArgs<ExtArgs>
            result: $Utils.Optional<HearingsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cases?: CasesOmit
    documents?: DocumentsOmit
    hearings?: HearingsOmit
    notifications?: NotificationsOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CasesCountOutputType
   */

  export type CasesCountOutputType = {
    documents: number
    hearings: number
    users: number
  }

  export type CasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | CasesCountOutputTypeCountDocumentsArgs
    hearings?: boolean | CasesCountOutputTypeCountHearingsArgs
    users?: boolean | CasesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CasesCountOutputType without action
   */
  export type CasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasesCountOutputType
     */
    select?: CasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasesCountOutputType without action
   */
  export type CasesCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
  }

  /**
   * CasesCountOutputType without action
   */
  export type CasesCountOutputTypeCountHearingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HearingsWhereInput
  }

  /**
   * CasesCountOutputType without action
   */
  export type CasesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type HearingsCountOutputType
   */

  export type HearingsCountOutputType = {
    users: number
  }

  export type HearingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HearingsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * HearingsCountOutputType without action
   */
  export type HearingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearingsCountOutputType
     */
    select?: HearingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HearingsCountOutputType without action
   */
  export type HearingsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    documents: number
    notifications: number
    cases: number
    hearings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UsersCountOutputTypeCountDocumentsArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    cases?: boolean | UsersCountOutputTypeCountCasesArgs
    hearings?: boolean | UsersCountOutputTypeCountHearingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHearingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HearingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cases
   */

  export type AggregateCases = {
    _count: CasesCountAggregateOutputType | null
    _avg: CasesAvgAggregateOutputType | null
    _sum: CasesSumAggregateOutputType | null
    _min: CasesMinAggregateOutputType | null
    _max: CasesMaxAggregateOutputType | null
  }

  export type CasesAvgAggregateOutputType = {
    id: number | null
  }

  export type CasesSumAggregateOutputType = {
    id: number | null
  }

  export type CasesMinAggregateOutputType = {
    id: number | null
    caseNumber: string | null
    title: string | null
    description: string | null
    status: $Enums.CaseStatus | null
    type: string | null
    filedDate: Date | null
    location: string | null
    plaintiffName: string | null
    plaintiffAddress: string | null
    defendantName: string | null
    defendantAddress: string | null
    judge: string | null
    crimeType: string | null
    crimeDate: Date | null
    crimeLocation: string | null
    arrestingOfficer: string | null
    arrestDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    nextHearing: Date | null
  }

  export type CasesMaxAggregateOutputType = {
    id: number | null
    caseNumber: string | null
    title: string | null
    description: string | null
    status: $Enums.CaseStatus | null
    type: string | null
    filedDate: Date | null
    location: string | null
    plaintiffName: string | null
    plaintiffAddress: string | null
    defendantName: string | null
    defendantAddress: string | null
    judge: string | null
    crimeType: string | null
    crimeDate: Date | null
    crimeLocation: string | null
    arrestingOfficer: string | null
    arrestDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    nextHearing: Date | null
  }

  export type CasesCountAggregateOutputType = {
    id: number
    caseNumber: number
    title: number
    description: number
    status: number
    type: number
    filedDate: number
    location: number
    plaintiffName: number
    plaintiffAddress: number
    defendantName: number
    defendantAddress: number
    judge: number
    crimeType: number
    crimeDate: number
    crimeLocation: number
    arrestingOfficer: number
    arrestDate: number
    createdAt: number
    updatedAt: number
    nextHearing: number
    _all: number
  }


  export type CasesAvgAggregateInputType = {
    id?: true
  }

  export type CasesSumAggregateInputType = {
    id?: true
  }

  export type CasesMinAggregateInputType = {
    id?: true
    caseNumber?: true
    title?: true
    description?: true
    status?: true
    type?: true
    filedDate?: true
    location?: true
    plaintiffName?: true
    plaintiffAddress?: true
    defendantName?: true
    defendantAddress?: true
    judge?: true
    crimeType?: true
    crimeDate?: true
    crimeLocation?: true
    arrestingOfficer?: true
    arrestDate?: true
    createdAt?: true
    updatedAt?: true
    nextHearing?: true
  }

  export type CasesMaxAggregateInputType = {
    id?: true
    caseNumber?: true
    title?: true
    description?: true
    status?: true
    type?: true
    filedDate?: true
    location?: true
    plaintiffName?: true
    plaintiffAddress?: true
    defendantName?: true
    defendantAddress?: true
    judge?: true
    crimeType?: true
    crimeDate?: true
    crimeLocation?: true
    arrestingOfficer?: true
    arrestDate?: true
    createdAt?: true
    updatedAt?: true
    nextHearing?: true
  }

  export type CasesCountAggregateInputType = {
    id?: true
    caseNumber?: true
    title?: true
    description?: true
    status?: true
    type?: true
    filedDate?: true
    location?: true
    plaintiffName?: true
    plaintiffAddress?: true
    defendantName?: true
    defendantAddress?: true
    judge?: true
    crimeType?: true
    crimeDate?: true
    crimeLocation?: true
    arrestingOfficer?: true
    arrestDate?: true
    createdAt?: true
    updatedAt?: true
    nextHearing?: true
    _all?: true
  }

  export type CasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to aggregate.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasesMaxAggregateInputType
  }

  export type GetCasesAggregateType<T extends CasesAggregateArgs> = {
        [P in keyof T & keyof AggregateCases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCases[P]>
      : GetScalarType<T[P], AggregateCases[P]>
  }




  export type CasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasesWhereInput
    orderBy?: CasesOrderByWithAggregationInput | CasesOrderByWithAggregationInput[]
    by: CasesScalarFieldEnum[] | CasesScalarFieldEnum
    having?: CasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasesCountAggregateInputType | true
    _avg?: CasesAvgAggregateInputType
    _sum?: CasesSumAggregateInputType
    _min?: CasesMinAggregateInputType
    _max?: CasesMaxAggregateInputType
  }

  export type CasesGroupByOutputType = {
    id: number
    caseNumber: string
    title: string
    description: string | null
    status: $Enums.CaseStatus
    type: string
    filedDate: Date
    location: string | null
    plaintiffName: string
    plaintiffAddress: string | null
    defendantName: string
    defendantAddress: string | null
    judge: string
    crimeType: string | null
    crimeDate: Date | null
    crimeLocation: string | null
    arrestingOfficer: string | null
    arrestDate: Date | null
    createdAt: Date
    updatedAt: Date
    nextHearing: Date
    _count: CasesCountAggregateOutputType | null
    _avg: CasesAvgAggregateOutputType | null
    _sum: CasesSumAggregateOutputType | null
    _min: CasesMinAggregateOutputType | null
    _max: CasesMaxAggregateOutputType | null
  }

  type GetCasesGroupByPayload<T extends CasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasesGroupByOutputType[P]>
            : GetScalarType<T[P], CasesGroupByOutputType[P]>
        }
      >
    >


  export type CasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseNumber?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    type?: boolean
    filedDate?: boolean
    location?: boolean
    plaintiffName?: boolean
    plaintiffAddress?: boolean
    defendantName?: boolean
    defendantAddress?: boolean
    judge?: boolean
    crimeType?: boolean
    crimeDate?: boolean
    crimeLocation?: boolean
    arrestingOfficer?: boolean
    arrestDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nextHearing?: boolean
    documents?: boolean | Cases$documentsArgs<ExtArgs>
    hearings?: boolean | Cases$hearingsArgs<ExtArgs>
    users?: boolean | Cases$usersArgs<ExtArgs>
    _count?: boolean | CasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cases"]>

  export type CasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseNumber?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    type?: boolean
    filedDate?: boolean
    location?: boolean
    plaintiffName?: boolean
    plaintiffAddress?: boolean
    defendantName?: boolean
    defendantAddress?: boolean
    judge?: boolean
    crimeType?: boolean
    crimeDate?: boolean
    crimeLocation?: boolean
    arrestingOfficer?: boolean
    arrestDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nextHearing?: boolean
  }, ExtArgs["result"]["cases"]>

  export type CasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseNumber?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    type?: boolean
    filedDate?: boolean
    location?: boolean
    plaintiffName?: boolean
    plaintiffAddress?: boolean
    defendantName?: boolean
    defendantAddress?: boolean
    judge?: boolean
    crimeType?: boolean
    crimeDate?: boolean
    crimeLocation?: boolean
    arrestingOfficer?: boolean
    arrestDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nextHearing?: boolean
  }, ExtArgs["result"]["cases"]>

  export type CasesSelectScalar = {
    id?: boolean
    caseNumber?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    type?: boolean
    filedDate?: boolean
    location?: boolean
    plaintiffName?: boolean
    plaintiffAddress?: boolean
    defendantName?: boolean
    defendantAddress?: boolean
    judge?: boolean
    crimeType?: boolean
    crimeDate?: boolean
    crimeLocation?: boolean
    arrestingOfficer?: boolean
    arrestDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nextHearing?: boolean
  }

  export type CasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caseNumber" | "title" | "description" | "status" | "type" | "filedDate" | "location" | "plaintiffName" | "plaintiffAddress" | "defendantName" | "defendantAddress" | "judge" | "crimeType" | "crimeDate" | "crimeLocation" | "arrestingOfficer" | "arrestDate" | "createdAt" | "updatedAt" | "nextHearing", ExtArgs["result"]["cases"]>
  export type CasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Cases$documentsArgs<ExtArgs>
    hearings?: boolean | Cases$hearingsArgs<ExtArgs>
    users?: boolean | Cases$usersArgs<ExtArgs>
    _count?: boolean | CasesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cases"
    objects: {
      documents: Prisma.$DocumentsPayload<ExtArgs>[]
      hearings: Prisma.$HearingsPayload<ExtArgs>[]
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caseNumber: string
      title: string
      description: string | null
      status: $Enums.CaseStatus
      type: string
      filedDate: Date
      location: string | null
      plaintiffName: string
      plaintiffAddress: string | null
      defendantName: string
      defendantAddress: string | null
      judge: string
      crimeType: string | null
      crimeDate: Date | null
      crimeLocation: string | null
      arrestingOfficer: string | null
      arrestDate: Date | null
      createdAt: Date
      updatedAt: Date
      nextHearing: Date
    }, ExtArgs["result"]["cases"]>
    composites: {}
  }

  type CasesGetPayload<S extends boolean | null | undefined | CasesDefaultArgs> = $Result.GetResult<Prisma.$CasesPayload, S>

  type CasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasesCountAggregateInputType | true
    }

  export interface CasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cases'], meta: { name: 'Cases' } }
    /**
     * Find zero or one Cases that matches the filter.
     * @param {CasesFindUniqueArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasesFindUniqueArgs>(args: SelectSubset<T, CasesFindUniqueArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasesFindUniqueOrThrowArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasesFindUniqueOrThrowArgs>(args: SelectSubset<T, CasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesFindFirstArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasesFindFirstArgs>(args?: SelectSubset<T, CasesFindFirstArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesFindFirstOrThrowArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasesFindFirstOrThrowArgs>(args?: SelectSubset<T, CasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.cases.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.cases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casesWithIdOnly = await prisma.cases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasesFindManyArgs>(args?: SelectSubset<T, CasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cases.
     * @param {CasesCreateArgs} args - Arguments to create a Cases.
     * @example
     * // Create one Cases
     * const Cases = await prisma.cases.create({
     *   data: {
     *     // ... data to create a Cases
     *   }
     * })
     * 
     */
    create<T extends CasesCreateArgs>(args: SelectSubset<T, CasesCreateArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CasesCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const cases = await prisma.cases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasesCreateManyArgs>(args?: SelectSubset<T, CasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cases and returns the data saved in the database.
     * @param {CasesCreateManyAndReturnArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const cases = await prisma.cases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cases and only return the `id`
     * const casesWithIdOnly = await prisma.cases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasesCreateManyAndReturnArgs>(args?: SelectSubset<T, CasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cases.
     * @param {CasesDeleteArgs} args - Arguments to delete one Cases.
     * @example
     * // Delete one Cases
     * const Cases = await prisma.cases.delete({
     *   where: {
     *     // ... filter to delete one Cases
     *   }
     * })
     * 
     */
    delete<T extends CasesDeleteArgs>(args: SelectSubset<T, CasesDeleteArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cases.
     * @param {CasesUpdateArgs} args - Arguments to update one Cases.
     * @example
     * // Update one Cases
     * const cases = await prisma.cases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasesUpdateArgs>(args: SelectSubset<T, CasesUpdateArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CasesDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.cases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasesDeleteManyArgs>(args?: SelectSubset<T, CasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const cases = await prisma.cases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasesUpdateManyArgs>(args: SelectSubset<T, CasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases and returns the data updated in the database.
     * @param {CasesUpdateManyAndReturnArgs} args - Arguments to update many Cases.
     * @example
     * // Update many Cases
     * const cases = await prisma.cases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cases and only return the `id`
     * const casesWithIdOnly = await prisma.cases.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasesUpdateManyAndReturnArgs>(args: SelectSubset<T, CasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cases.
     * @param {CasesUpsertArgs} args - Arguments to update or create a Cases.
     * @example
     * // Update or create a Cases
     * const cases = await prisma.cases.upsert({
     *   create: {
     *     // ... data to create a Cases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cases we want to update
     *   }
     * })
     */
    upsert<T extends CasesUpsertArgs>(args: SelectSubset<T, CasesUpsertArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.cases.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CasesCountArgs>(
      args?: Subset<T, CasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CasesAggregateArgs>(args: Subset<T, CasesAggregateArgs>): Prisma.PrismaPromise<GetCasesAggregateType<T>>

    /**
     * Group by Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasesGroupByArgs['orderBy'] }
        : { orderBy?: CasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cases model
   */
  readonly fields: CasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Cases$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Cases$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hearings<T extends Cases$hearingsArgs<ExtArgs> = {}>(args?: Subset<T, Cases$hearingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Cases$usersArgs<ExtArgs> = {}>(args?: Subset<T, Cases$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cases model
   */
  interface CasesFieldRefs {
    readonly id: FieldRef<"Cases", 'Int'>
    readonly caseNumber: FieldRef<"Cases", 'String'>
    readonly title: FieldRef<"Cases", 'String'>
    readonly description: FieldRef<"Cases", 'String'>
    readonly status: FieldRef<"Cases", 'CaseStatus'>
    readonly type: FieldRef<"Cases", 'String'>
    readonly filedDate: FieldRef<"Cases", 'DateTime'>
    readonly location: FieldRef<"Cases", 'String'>
    readonly plaintiffName: FieldRef<"Cases", 'String'>
    readonly plaintiffAddress: FieldRef<"Cases", 'String'>
    readonly defendantName: FieldRef<"Cases", 'String'>
    readonly defendantAddress: FieldRef<"Cases", 'String'>
    readonly judge: FieldRef<"Cases", 'String'>
    readonly crimeType: FieldRef<"Cases", 'String'>
    readonly crimeDate: FieldRef<"Cases", 'DateTime'>
    readonly crimeLocation: FieldRef<"Cases", 'String'>
    readonly arrestingOfficer: FieldRef<"Cases", 'String'>
    readonly arrestDate: FieldRef<"Cases", 'DateTime'>
    readonly createdAt: FieldRef<"Cases", 'DateTime'>
    readonly updatedAt: FieldRef<"Cases", 'DateTime'>
    readonly nextHearing: FieldRef<"Cases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cases findUnique
   */
  export type CasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases findUniqueOrThrow
   */
  export type CasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases findFirst
   */
  export type CasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Cases findFirstOrThrow
   */
  export type CasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Cases findMany
   */
  export type CasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Cases create
   */
  export type CasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Cases.
     */
    data: XOR<CasesCreateInput, CasesUncheckedCreateInput>
  }

  /**
   * Cases createMany
   */
  export type CasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CasesCreateManyInput | CasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cases createManyAndReturn
   */
  export type CasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * The data used to create many Cases.
     */
    data: CasesCreateManyInput | CasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cases update
   */
  export type CasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Cases.
     */
    data: XOR<CasesUpdateInput, CasesUncheckedUpdateInput>
    /**
     * Choose, which Cases to update.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases updateMany
   */
  export type CasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CasesWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Cases updateManyAndReturn
   */
  export type CasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * The data used to update Cases.
     */
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CasesWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Cases upsert
   */
  export type CasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Cases to update in case it exists.
     */
    where: CasesWhereUniqueInput
    /**
     * In case the Cases found by the `where` argument doesn't exist, create a new Cases with this data.
     */
    create: XOR<CasesCreateInput, CasesUncheckedCreateInput>
    /**
     * In case the Cases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasesUpdateInput, CasesUncheckedUpdateInput>
  }

  /**
   * Cases delete
   */
  export type CasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter which Cases to delete.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases deleteMany
   */
  export type CasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CasesWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Cases.documents
   */
  export type Cases$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    cursor?: DocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Cases.hearings
   */
  export type Cases$hearingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    where?: HearingsWhereInput
    orderBy?: HearingsOrderByWithRelationInput | HearingsOrderByWithRelationInput[]
    cursor?: HearingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HearingsScalarFieldEnum | HearingsScalarFieldEnum[]
  }

  /**
   * Cases.users
   */
  export type Cases$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Cases without action
   */
  export type CasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
  }


  /**
   * Model Documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    id: number | null
    fileSize: number | null
    caseId: number | null
    version: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    id: number | null
    fileSize: number | null
    caseId: number | null
    version: number | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    fileUrl: string | null
    category: string | null
    fileSize: number | null
    uploadedById: string | null
    caseId: number | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    fileUrl: string | null
    category: string | null
    fileSize: number | null
    uploadedById: string | null
    caseId: number | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    fileUrl: number
    category: number
    fileSize: number
    uploadedById: number
    caseId: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    id?: true
    fileSize?: true
    caseId?: true
    version?: true
  }

  export type DocumentsSumAggregateInputType = {
    id?: true
    fileSize?: true
    caseId?: true
    version?: true
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    category?: true
    fileSize?: true
    uploadedById?: true
    caseId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    category?: true
    fileSize?: true
    uploadedById?: true
    caseId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    category?: true
    fileSize?: true
    uploadedById?: true
    caseId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to aggregate.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type DocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithAggregationInput | DocumentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: DocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    fileUrl: string
    category: string
    fileSize: number
    uploadedById: string
    caseId: number
    version: number
    createdAt: Date
    updatedAt: Date
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends DocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type DocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    fileSize?: boolean
    uploadedById?: boolean
    caseId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    fileSize?: boolean
    uploadedById?: boolean
    caseId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    fileSize?: boolean
    uploadedById?: boolean
    caseId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    fileSize?: boolean
    uploadedById?: boolean
    caseId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "fileUrl" | "category" | "fileSize" | "uploadedById" | "caseId" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["documents"]>
  export type DocumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DocumentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DocumentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documents"
    objects: {
      cases: Prisma.$CasesPayload<ExtArgs>
      users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      fileUrl: string
      category: string
      fileSize: number
      uploadedById: string
      caseId: number
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type DocumentsGetPayload<S extends boolean | null | undefined | DocumentsDefaultArgs> = $Result.GetResult<Prisma.$DocumentsPayload, S>

  type DocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface DocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documents'], meta: { name: 'Documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {DocumentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentsFindUniqueArgs>(args: SelectSubset<T, DocumentsFindUniqueArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentsFindFirstArgs>(args?: SelectSubset<T, DocumentsFindFirstArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentsFindManyArgs>(args?: SelectSubset<T, DocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {DocumentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends DocumentsCreateArgs>(args: SelectSubset<T, DocumentsCreateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentsCreateManyArgs>(args?: SelectSubset<T, DocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentsCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documents.
     * @param {DocumentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends DocumentsDeleteArgs>(args: SelectSubset<T, DocumentsDeleteArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {DocumentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentsUpdateArgs>(args: SelectSubset<T, DocumentsUpdateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentsDeleteManyArgs>(args?: SelectSubset<T, DocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentsUpdateManyArgs>(args: SelectSubset<T, DocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentsUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documents.
     * @param {DocumentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends DocumentsUpsertArgs>(args: SelectSubset<T, DocumentsUpsertArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentsCountArgs>(
      args?: Subset<T, DocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentsGroupByArgs['orderBy'] }
        : { orderBy?: DocumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documents model
   */
  readonly fields: DocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cases<T extends CasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasesDefaultArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documents model
   */
  interface DocumentsFieldRefs {
    readonly id: FieldRef<"Documents", 'Int'>
    readonly title: FieldRef<"Documents", 'String'>
    readonly description: FieldRef<"Documents", 'String'>
    readonly fileUrl: FieldRef<"Documents", 'String'>
    readonly category: FieldRef<"Documents", 'String'>
    readonly fileSize: FieldRef<"Documents", 'Int'>
    readonly uploadedById: FieldRef<"Documents", 'String'>
    readonly caseId: FieldRef<"Documents", 'Int'>
    readonly version: FieldRef<"Documents", 'Int'>
    readonly createdAt: FieldRef<"Documents", 'DateTime'>
    readonly updatedAt: FieldRef<"Documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documents findUnique
   */
  export type DocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findUniqueOrThrow
   */
  export type DocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findFirst
   */
  export type DocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findFirstOrThrow
   */
  export type DocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findMany
   */
  export type DocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents create
   */
  export type DocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Documents.
     */
    data: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
  }

  /**
   * Documents createMany
   */
  export type DocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documents createManyAndReturn
   */
  export type DocumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documents update
   */
  export type DocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Documents.
     */
    data: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
    /**
     * Choose, which Documents to update.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents updateMany
   */
  export type DocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Documents updateManyAndReturn
   */
  export type DocumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documents upsert
   */
  export type DocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Documents to update in case it exists.
     */
    where: DocumentsWhereUniqueInput
    /**
     * In case the Documents found by the `where` argument doesn't exist, create a new Documents with this data.
     */
    create: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
    /**
     * In case the Documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
  }

  /**
   * Documents delete
   */
  export type DocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter which Documents to delete.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents deleteMany
   */
  export type DocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Documents without action
   */
  export type DocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
  }


  /**
   * Model Hearings
   */

  export type AggregateHearings = {
    _count: HearingsCountAggregateOutputType | null
    _avg: HearingsAvgAggregateOutputType | null
    _sum: HearingsSumAggregateOutputType | null
    _min: HearingsMinAggregateOutputType | null
    _max: HearingsMaxAggregateOutputType | null
  }

  export type HearingsAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    caseId: number | null
  }

  export type HearingsSumAggregateOutputType = {
    id: number | null
    duration: number | null
    caseId: number | null
  }

  export type HearingsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    duration: number | null
    location: string | null
    status: $Enums.HearingStatus | null
    type: string | null
    notes: string | null
    caseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HearingsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    duration: number | null
    location: string | null
    status: $Enums.HearingStatus | null
    type: string | null
    notes: string | null
    caseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HearingsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    duration: number
    location: number
    status: number
    type: number
    notes: number
    caseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HearingsAvgAggregateInputType = {
    id?: true
    duration?: true
    caseId?: true
  }

  export type HearingsSumAggregateInputType = {
    id?: true
    duration?: true
    caseId?: true
  }

  export type HearingsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    duration?: true
    location?: true
    status?: true
    type?: true
    notes?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HearingsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    duration?: true
    location?: true
    status?: true
    type?: true
    notes?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HearingsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    duration?: true
    location?: true
    status?: true
    type?: true
    notes?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HearingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hearings to aggregate.
     */
    where?: HearingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearings to fetch.
     */
    orderBy?: HearingsOrderByWithRelationInput | HearingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HearingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hearings
    **/
    _count?: true | HearingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HearingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HearingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HearingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HearingsMaxAggregateInputType
  }

  export type GetHearingsAggregateType<T extends HearingsAggregateArgs> = {
        [P in keyof T & keyof AggregateHearings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHearings[P]>
      : GetScalarType<T[P], AggregateHearings[P]>
  }




  export type HearingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HearingsWhereInput
    orderBy?: HearingsOrderByWithAggregationInput | HearingsOrderByWithAggregationInput[]
    by: HearingsScalarFieldEnum[] | HearingsScalarFieldEnum
    having?: HearingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HearingsCountAggregateInputType | true
    _avg?: HearingsAvgAggregateInputType
    _sum?: HearingsSumAggregateInputType
    _min?: HearingsMinAggregateInputType
    _max?: HearingsMaxAggregateInputType
  }

  export type HearingsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    date: Date
    duration: number
    location: string
    status: $Enums.HearingStatus
    type: string
    notes: string | null
    caseId: number
    createdAt: Date
    updatedAt: Date
    _count: HearingsCountAggregateOutputType | null
    _avg: HearingsAvgAggregateOutputType | null
    _sum: HearingsSumAggregateOutputType | null
    _min: HearingsMinAggregateOutputType | null
    _max: HearingsMaxAggregateOutputType | null
  }

  type GetHearingsGroupByPayload<T extends HearingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HearingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HearingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HearingsGroupByOutputType[P]>
            : GetScalarType<T[P], HearingsGroupByOutputType[P]>
        }
      >
    >


  export type HearingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    duration?: boolean
    location?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | Hearings$usersArgs<ExtArgs>
    _count?: boolean | HearingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hearings"]>

  export type HearingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    duration?: boolean
    location?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | CasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hearings"]>

  export type HearingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    duration?: boolean
    location?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | CasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hearings"]>

  export type HearingsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    duration?: boolean
    location?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HearingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "duration" | "location" | "status" | "type" | "notes" | "caseId" | "createdAt" | "updatedAt", ExtArgs["result"]["hearings"]>
  export type HearingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | CasesDefaultArgs<ExtArgs>
    users?: boolean | Hearings$usersArgs<ExtArgs>
    _count?: boolean | HearingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HearingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | CasesDefaultArgs<ExtArgs>
  }
  export type HearingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | CasesDefaultArgs<ExtArgs>
  }

  export type $HearingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hearings"
    objects: {
      cases: Prisma.$CasesPayload<ExtArgs>
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      date: Date
      duration: number
      location: string
      status: $Enums.HearingStatus
      type: string
      notes: string | null
      caseId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hearings"]>
    composites: {}
  }

  type HearingsGetPayload<S extends boolean | null | undefined | HearingsDefaultArgs> = $Result.GetResult<Prisma.$HearingsPayload, S>

  type HearingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HearingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HearingsCountAggregateInputType | true
    }

  export interface HearingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hearings'], meta: { name: 'Hearings' } }
    /**
     * Find zero or one Hearings that matches the filter.
     * @param {HearingsFindUniqueArgs} args - Arguments to find a Hearings
     * @example
     * // Get one Hearings
     * const hearings = await prisma.hearings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HearingsFindUniqueArgs>(args: SelectSubset<T, HearingsFindUniqueArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hearings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HearingsFindUniqueOrThrowArgs} args - Arguments to find a Hearings
     * @example
     * // Get one Hearings
     * const hearings = await prisma.hearings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HearingsFindUniqueOrThrowArgs>(args: SelectSubset<T, HearingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hearings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearingsFindFirstArgs} args - Arguments to find a Hearings
     * @example
     * // Get one Hearings
     * const hearings = await prisma.hearings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HearingsFindFirstArgs>(args?: SelectSubset<T, HearingsFindFirstArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hearings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearingsFindFirstOrThrowArgs} args - Arguments to find a Hearings
     * @example
     * // Get one Hearings
     * const hearings = await prisma.hearings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HearingsFindFirstOrThrowArgs>(args?: SelectSubset<T, HearingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hearings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hearings
     * const hearings = await prisma.hearings.findMany()
     * 
     * // Get first 10 Hearings
     * const hearings = await prisma.hearings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hearingsWithIdOnly = await prisma.hearings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HearingsFindManyArgs>(args?: SelectSubset<T, HearingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hearings.
     * @param {HearingsCreateArgs} args - Arguments to create a Hearings.
     * @example
     * // Create one Hearings
     * const Hearings = await prisma.hearings.create({
     *   data: {
     *     // ... data to create a Hearings
     *   }
     * })
     * 
     */
    create<T extends HearingsCreateArgs>(args: SelectSubset<T, HearingsCreateArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hearings.
     * @param {HearingsCreateManyArgs} args - Arguments to create many Hearings.
     * @example
     * // Create many Hearings
     * const hearings = await prisma.hearings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HearingsCreateManyArgs>(args?: SelectSubset<T, HearingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hearings and returns the data saved in the database.
     * @param {HearingsCreateManyAndReturnArgs} args - Arguments to create many Hearings.
     * @example
     * // Create many Hearings
     * const hearings = await prisma.hearings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hearings and only return the `id`
     * const hearingsWithIdOnly = await prisma.hearings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HearingsCreateManyAndReturnArgs>(args?: SelectSubset<T, HearingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hearings.
     * @param {HearingsDeleteArgs} args - Arguments to delete one Hearings.
     * @example
     * // Delete one Hearings
     * const Hearings = await prisma.hearings.delete({
     *   where: {
     *     // ... filter to delete one Hearings
     *   }
     * })
     * 
     */
    delete<T extends HearingsDeleteArgs>(args: SelectSubset<T, HearingsDeleteArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hearings.
     * @param {HearingsUpdateArgs} args - Arguments to update one Hearings.
     * @example
     * // Update one Hearings
     * const hearings = await prisma.hearings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HearingsUpdateArgs>(args: SelectSubset<T, HearingsUpdateArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hearings.
     * @param {HearingsDeleteManyArgs} args - Arguments to filter Hearings to delete.
     * @example
     * // Delete a few Hearings
     * const { count } = await prisma.hearings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HearingsDeleteManyArgs>(args?: SelectSubset<T, HearingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hearings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hearings
     * const hearings = await prisma.hearings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HearingsUpdateManyArgs>(args: SelectSubset<T, HearingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hearings and returns the data updated in the database.
     * @param {HearingsUpdateManyAndReturnArgs} args - Arguments to update many Hearings.
     * @example
     * // Update many Hearings
     * const hearings = await prisma.hearings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hearings and only return the `id`
     * const hearingsWithIdOnly = await prisma.hearings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HearingsUpdateManyAndReturnArgs>(args: SelectSubset<T, HearingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hearings.
     * @param {HearingsUpsertArgs} args - Arguments to update or create a Hearings.
     * @example
     * // Update or create a Hearings
     * const hearings = await prisma.hearings.upsert({
     *   create: {
     *     // ... data to create a Hearings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hearings we want to update
     *   }
     * })
     */
    upsert<T extends HearingsUpsertArgs>(args: SelectSubset<T, HearingsUpsertArgs<ExtArgs>>): Prisma__HearingsClient<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hearings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearingsCountArgs} args - Arguments to filter Hearings to count.
     * @example
     * // Count the number of Hearings
     * const count = await prisma.hearings.count({
     *   where: {
     *     // ... the filter for the Hearings we want to count
     *   }
     * })
    **/
    count<T extends HearingsCountArgs>(
      args?: Subset<T, HearingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HearingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hearings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HearingsAggregateArgs>(args: Subset<T, HearingsAggregateArgs>): Prisma.PrismaPromise<GetHearingsAggregateType<T>>

    /**
     * Group by Hearings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HearingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HearingsGroupByArgs['orderBy'] }
        : { orderBy?: HearingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HearingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHearingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hearings model
   */
  readonly fields: HearingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hearings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HearingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cases<T extends CasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasesDefaultArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Hearings$usersArgs<ExtArgs> = {}>(args?: Subset<T, Hearings$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hearings model
   */
  interface HearingsFieldRefs {
    readonly id: FieldRef<"Hearings", 'Int'>
    readonly title: FieldRef<"Hearings", 'String'>
    readonly description: FieldRef<"Hearings", 'String'>
    readonly date: FieldRef<"Hearings", 'DateTime'>
    readonly duration: FieldRef<"Hearings", 'Int'>
    readonly location: FieldRef<"Hearings", 'String'>
    readonly status: FieldRef<"Hearings", 'HearingStatus'>
    readonly type: FieldRef<"Hearings", 'String'>
    readonly notes: FieldRef<"Hearings", 'String'>
    readonly caseId: FieldRef<"Hearings", 'Int'>
    readonly createdAt: FieldRef<"Hearings", 'DateTime'>
    readonly updatedAt: FieldRef<"Hearings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hearings findUnique
   */
  export type HearingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * Filter, which Hearings to fetch.
     */
    where: HearingsWhereUniqueInput
  }

  /**
   * Hearings findUniqueOrThrow
   */
  export type HearingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * Filter, which Hearings to fetch.
     */
    where: HearingsWhereUniqueInput
  }

  /**
   * Hearings findFirst
   */
  export type HearingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * Filter, which Hearings to fetch.
     */
    where?: HearingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearings to fetch.
     */
    orderBy?: HearingsOrderByWithRelationInput | HearingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hearings.
     */
    cursor?: HearingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hearings.
     */
    distinct?: HearingsScalarFieldEnum | HearingsScalarFieldEnum[]
  }

  /**
   * Hearings findFirstOrThrow
   */
  export type HearingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * Filter, which Hearings to fetch.
     */
    where?: HearingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearings to fetch.
     */
    orderBy?: HearingsOrderByWithRelationInput | HearingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hearings.
     */
    cursor?: HearingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hearings.
     */
    distinct?: HearingsScalarFieldEnum | HearingsScalarFieldEnum[]
  }

  /**
   * Hearings findMany
   */
  export type HearingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * Filter, which Hearings to fetch.
     */
    where?: HearingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearings to fetch.
     */
    orderBy?: HearingsOrderByWithRelationInput | HearingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hearings.
     */
    cursor?: HearingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearings.
     */
    skip?: number
    distinct?: HearingsScalarFieldEnum | HearingsScalarFieldEnum[]
  }

  /**
   * Hearings create
   */
  export type HearingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Hearings.
     */
    data: XOR<HearingsCreateInput, HearingsUncheckedCreateInput>
  }

  /**
   * Hearings createMany
   */
  export type HearingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hearings.
     */
    data: HearingsCreateManyInput | HearingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hearings createManyAndReturn
   */
  export type HearingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * The data used to create many Hearings.
     */
    data: HearingsCreateManyInput | HearingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hearings update
   */
  export type HearingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Hearings.
     */
    data: XOR<HearingsUpdateInput, HearingsUncheckedUpdateInput>
    /**
     * Choose, which Hearings to update.
     */
    where: HearingsWhereUniqueInput
  }

  /**
   * Hearings updateMany
   */
  export type HearingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hearings.
     */
    data: XOR<HearingsUpdateManyMutationInput, HearingsUncheckedUpdateManyInput>
    /**
     * Filter which Hearings to update
     */
    where?: HearingsWhereInput
    /**
     * Limit how many Hearings to update.
     */
    limit?: number
  }

  /**
   * Hearings updateManyAndReturn
   */
  export type HearingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * The data used to update Hearings.
     */
    data: XOR<HearingsUpdateManyMutationInput, HearingsUncheckedUpdateManyInput>
    /**
     * Filter which Hearings to update
     */
    where?: HearingsWhereInput
    /**
     * Limit how many Hearings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hearings upsert
   */
  export type HearingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Hearings to update in case it exists.
     */
    where: HearingsWhereUniqueInput
    /**
     * In case the Hearings found by the `where` argument doesn't exist, create a new Hearings with this data.
     */
    create: XOR<HearingsCreateInput, HearingsUncheckedCreateInput>
    /**
     * In case the Hearings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HearingsUpdateInput, HearingsUncheckedUpdateInput>
  }

  /**
   * Hearings delete
   */
  export type HearingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    /**
     * Filter which Hearings to delete.
     */
    where: HearingsWhereUniqueInput
  }

  /**
   * Hearings deleteMany
   */
  export type HearingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hearings to delete
     */
    where?: HearingsWhereInput
    /**
     * Limit how many Hearings to delete.
     */
    limit?: number
  }

  /**
   * Hearings.users
   */
  export type Hearings$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Hearings without action
   */
  export type HearingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    message: string | null
    read: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    message: string | null
    read: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    message: number
    read: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    message?: true
    read?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    message?: true
    read?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    message?: true
    read?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    message: string
    read: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    read?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    read?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    read?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    message?: boolean
    read?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "read" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      read: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'Int'>
    readonly message: FieldRef<"Notifications", 'String'>
    readonly read: FieldRef<"Notifications", 'Boolean'>
    readonly userId: FieldRef<"Notifications", 'String'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
    readonly updatedAt: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    name: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | Users$documentsArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    cases?: boolean | Users$casesArgs<ExtArgs>
    hearings?: boolean | Users$hearingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Users$documentsArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    cases?: boolean | Users$casesArgs<ExtArgs>
    hearings?: boolean | Users$hearingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      documents: Prisma.$DocumentsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      cases: Prisma.$CasesPayload<ExtArgs>[]
      hearings: Prisma.$HearingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Users$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cases<T extends Users$casesArgs<ExtArgs> = {}>(args?: Subset<T, Users$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hearings<T extends Users$hearingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$hearingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HearingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.documents
   */
  export type Users$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    cursor?: DocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Users.notifications
   */
  export type Users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users.cases
   */
  export type Users$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    where?: CasesWhereInput
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    cursor?: CasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Users.hearings
   */
  export type Users$hearingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hearings
     */
    select?: HearingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hearings
     */
    omit?: HearingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HearingsInclude<ExtArgs> | null
    where?: HearingsWhereInput
    orderBy?: HearingsOrderByWithRelationInput | HearingsOrderByWithRelationInput[]
    cursor?: HearingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HearingsScalarFieldEnum | HearingsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CasesScalarFieldEnum: {
    id: 'id',
    caseNumber: 'caseNumber',
    title: 'title',
    description: 'description',
    status: 'status',
    type: 'type',
    filedDate: 'filedDate',
    location: 'location',
    plaintiffName: 'plaintiffName',
    plaintiffAddress: 'plaintiffAddress',
    defendantName: 'defendantName',
    defendantAddress: 'defendantAddress',
    judge: 'judge',
    crimeType: 'crimeType',
    crimeDate: 'crimeDate',
    crimeLocation: 'crimeLocation',
    arrestingOfficer: 'arrestingOfficer',
    arrestDate: 'arrestDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nextHearing: 'nextHearing'
  };

  export type CasesScalarFieldEnum = (typeof CasesScalarFieldEnum)[keyof typeof CasesScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    fileUrl: 'fileUrl',
    category: 'category',
    fileSize: 'fileSize',
    uploadedById: 'uploadedById',
    caseId: 'caseId',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const HearingsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    duration: 'duration',
    location: 'location',
    status: 'status',
    type: 'type',
    notes: 'notes',
    caseId: 'caseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HearingsScalarFieldEnum = (typeof HearingsScalarFieldEnum)[keyof typeof HearingsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    message: 'message',
    read: 'read',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CaseStatus'
   */
  export type EnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus'>
    


  /**
   * Reference to a field of type 'CaseStatus[]'
   */
  export type ListEnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'HearingStatus'
   */
  export type EnumHearingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HearingStatus'>
    


  /**
   * Reference to a field of type 'HearingStatus[]'
   */
  export type ListEnumHearingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HearingStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CasesWhereInput = {
    AND?: CasesWhereInput | CasesWhereInput[]
    OR?: CasesWhereInput[]
    NOT?: CasesWhereInput | CasesWhereInput[]
    id?: IntFilter<"Cases"> | number
    caseNumber?: StringFilter<"Cases"> | string
    title?: StringFilter<"Cases"> | string
    description?: StringNullableFilter<"Cases"> | string | null
    status?: EnumCaseStatusFilter<"Cases"> | $Enums.CaseStatus
    type?: StringFilter<"Cases"> | string
    filedDate?: DateTimeFilter<"Cases"> | Date | string
    location?: StringNullableFilter<"Cases"> | string | null
    plaintiffName?: StringFilter<"Cases"> | string
    plaintiffAddress?: StringNullableFilter<"Cases"> | string | null
    defendantName?: StringFilter<"Cases"> | string
    defendantAddress?: StringNullableFilter<"Cases"> | string | null
    judge?: StringFilter<"Cases"> | string
    crimeType?: StringNullableFilter<"Cases"> | string | null
    crimeDate?: DateTimeNullableFilter<"Cases"> | Date | string | null
    crimeLocation?: StringNullableFilter<"Cases"> | string | null
    arrestingOfficer?: StringNullableFilter<"Cases"> | string | null
    arrestDate?: DateTimeNullableFilter<"Cases"> | Date | string | null
    createdAt?: DateTimeFilter<"Cases"> | Date | string
    updatedAt?: DateTimeFilter<"Cases"> | Date | string
    nextHearing?: DateTimeFilter<"Cases"> | Date | string
    documents?: DocumentsListRelationFilter
    hearings?: HearingsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type CasesOrderByWithRelationInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    type?: SortOrder
    filedDate?: SortOrder
    location?: SortOrderInput | SortOrder
    plaintiffName?: SortOrder
    plaintiffAddress?: SortOrderInput | SortOrder
    defendantName?: SortOrder
    defendantAddress?: SortOrderInput | SortOrder
    judge?: SortOrder
    crimeType?: SortOrderInput | SortOrder
    crimeDate?: SortOrderInput | SortOrder
    crimeLocation?: SortOrderInput | SortOrder
    arrestingOfficer?: SortOrderInput | SortOrder
    arrestDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nextHearing?: SortOrder
    documents?: DocumentsOrderByRelationAggregateInput
    hearings?: HearingsOrderByRelationAggregateInput
    users?: UsersOrderByRelationAggregateInput
  }

  export type CasesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    caseNumber?: string
    AND?: CasesWhereInput | CasesWhereInput[]
    OR?: CasesWhereInput[]
    NOT?: CasesWhereInput | CasesWhereInput[]
    title?: StringFilter<"Cases"> | string
    description?: StringNullableFilter<"Cases"> | string | null
    status?: EnumCaseStatusFilter<"Cases"> | $Enums.CaseStatus
    type?: StringFilter<"Cases"> | string
    filedDate?: DateTimeFilter<"Cases"> | Date | string
    location?: StringNullableFilter<"Cases"> | string | null
    plaintiffName?: StringFilter<"Cases"> | string
    plaintiffAddress?: StringNullableFilter<"Cases"> | string | null
    defendantName?: StringFilter<"Cases"> | string
    defendantAddress?: StringNullableFilter<"Cases"> | string | null
    judge?: StringFilter<"Cases"> | string
    crimeType?: StringNullableFilter<"Cases"> | string | null
    crimeDate?: DateTimeNullableFilter<"Cases"> | Date | string | null
    crimeLocation?: StringNullableFilter<"Cases"> | string | null
    arrestingOfficer?: StringNullableFilter<"Cases"> | string | null
    arrestDate?: DateTimeNullableFilter<"Cases"> | Date | string | null
    createdAt?: DateTimeFilter<"Cases"> | Date | string
    updatedAt?: DateTimeFilter<"Cases"> | Date | string
    nextHearing?: DateTimeFilter<"Cases"> | Date | string
    documents?: DocumentsListRelationFilter
    hearings?: HearingsListRelationFilter
    users?: UsersListRelationFilter
  }, "id" | "caseNumber">

  export type CasesOrderByWithAggregationInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    type?: SortOrder
    filedDate?: SortOrder
    location?: SortOrderInput | SortOrder
    plaintiffName?: SortOrder
    plaintiffAddress?: SortOrderInput | SortOrder
    defendantName?: SortOrder
    defendantAddress?: SortOrderInput | SortOrder
    judge?: SortOrder
    crimeType?: SortOrderInput | SortOrder
    crimeDate?: SortOrderInput | SortOrder
    crimeLocation?: SortOrderInput | SortOrder
    arrestingOfficer?: SortOrderInput | SortOrder
    arrestDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nextHearing?: SortOrder
    _count?: CasesCountOrderByAggregateInput
    _avg?: CasesAvgOrderByAggregateInput
    _max?: CasesMaxOrderByAggregateInput
    _min?: CasesMinOrderByAggregateInput
    _sum?: CasesSumOrderByAggregateInput
  }

  export type CasesScalarWhereWithAggregatesInput = {
    AND?: CasesScalarWhereWithAggregatesInput | CasesScalarWhereWithAggregatesInput[]
    OR?: CasesScalarWhereWithAggregatesInput[]
    NOT?: CasesScalarWhereWithAggregatesInput | CasesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cases"> | number
    caseNumber?: StringWithAggregatesFilter<"Cases"> | string
    title?: StringWithAggregatesFilter<"Cases"> | string
    description?: StringNullableWithAggregatesFilter<"Cases"> | string | null
    status?: EnumCaseStatusWithAggregatesFilter<"Cases"> | $Enums.CaseStatus
    type?: StringWithAggregatesFilter<"Cases"> | string
    filedDate?: DateTimeWithAggregatesFilter<"Cases"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Cases"> | string | null
    plaintiffName?: StringWithAggregatesFilter<"Cases"> | string
    plaintiffAddress?: StringNullableWithAggregatesFilter<"Cases"> | string | null
    defendantName?: StringWithAggregatesFilter<"Cases"> | string
    defendantAddress?: StringNullableWithAggregatesFilter<"Cases"> | string | null
    judge?: StringWithAggregatesFilter<"Cases"> | string
    crimeType?: StringNullableWithAggregatesFilter<"Cases"> | string | null
    crimeDate?: DateTimeNullableWithAggregatesFilter<"Cases"> | Date | string | null
    crimeLocation?: StringNullableWithAggregatesFilter<"Cases"> | string | null
    arrestingOfficer?: StringNullableWithAggregatesFilter<"Cases"> | string | null
    arrestDate?: DateTimeNullableWithAggregatesFilter<"Cases"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cases"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cases"> | Date | string
    nextHearing?: DateTimeWithAggregatesFilter<"Cases"> | Date | string
  }

  export type DocumentsWhereInput = {
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    id?: IntFilter<"Documents"> | number
    title?: StringFilter<"Documents"> | string
    description?: StringNullableFilter<"Documents"> | string | null
    fileUrl?: StringFilter<"Documents"> | string
    category?: StringFilter<"Documents"> | string
    fileSize?: IntFilter<"Documents"> | number
    uploadedById?: StringFilter<"Documents"> | string
    caseId?: IntFilter<"Documents"> | number
    version?: IntFilter<"Documents"> | number
    createdAt?: DateTimeFilter<"Documents"> | Date | string
    updatedAt?: DateTimeFilter<"Documents"> | Date | string
    cases?: XOR<CasesScalarRelationFilter, CasesWhereInput>
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type DocumentsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    caseId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cases?: CasesOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
  }

  export type DocumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    title?: StringFilter<"Documents"> | string
    description?: StringNullableFilter<"Documents"> | string | null
    fileUrl?: StringFilter<"Documents"> | string
    category?: StringFilter<"Documents"> | string
    fileSize?: IntFilter<"Documents"> | number
    uploadedById?: StringFilter<"Documents"> | string
    caseId?: IntFilter<"Documents"> | number
    version?: IntFilter<"Documents"> | number
    createdAt?: DateTimeFilter<"Documents"> | Date | string
    updatedAt?: DateTimeFilter<"Documents"> | Date | string
    cases?: XOR<CasesScalarRelationFilter, CasesWhereInput>
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type DocumentsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    caseId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentsCountOrderByAggregateInput
    _avg?: DocumentsAvgOrderByAggregateInput
    _max?: DocumentsMaxOrderByAggregateInput
    _min?: DocumentsMinOrderByAggregateInput
    _sum?: DocumentsSumOrderByAggregateInput
  }

  export type DocumentsScalarWhereWithAggregatesInput = {
    AND?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    OR?: DocumentsScalarWhereWithAggregatesInput[]
    NOT?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Documents"> | number
    title?: StringWithAggregatesFilter<"Documents"> | string
    description?: StringNullableWithAggregatesFilter<"Documents"> | string | null
    fileUrl?: StringWithAggregatesFilter<"Documents"> | string
    category?: StringWithAggregatesFilter<"Documents"> | string
    fileSize?: IntWithAggregatesFilter<"Documents"> | number
    uploadedById?: StringWithAggregatesFilter<"Documents"> | string
    caseId?: IntWithAggregatesFilter<"Documents"> | number
    version?: IntWithAggregatesFilter<"Documents"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Documents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Documents"> | Date | string
  }

  export type HearingsWhereInput = {
    AND?: HearingsWhereInput | HearingsWhereInput[]
    OR?: HearingsWhereInput[]
    NOT?: HearingsWhereInput | HearingsWhereInput[]
    id?: IntFilter<"Hearings"> | number
    title?: StringFilter<"Hearings"> | string
    description?: StringNullableFilter<"Hearings"> | string | null
    date?: DateTimeFilter<"Hearings"> | Date | string
    duration?: IntFilter<"Hearings"> | number
    location?: StringFilter<"Hearings"> | string
    status?: EnumHearingStatusFilter<"Hearings"> | $Enums.HearingStatus
    type?: StringFilter<"Hearings"> | string
    notes?: StringNullableFilter<"Hearings"> | string | null
    caseId?: IntFilter<"Hearings"> | number
    createdAt?: DateTimeFilter<"Hearings"> | Date | string
    updatedAt?: DateTimeFilter<"Hearings"> | Date | string
    cases?: XOR<CasesScalarRelationFilter, CasesWhereInput>
    users?: UsersListRelationFilter
  }

  export type HearingsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cases?: CasesOrderByWithRelationInput
    users?: UsersOrderByRelationAggregateInput
  }

  export type HearingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HearingsWhereInput | HearingsWhereInput[]
    OR?: HearingsWhereInput[]
    NOT?: HearingsWhereInput | HearingsWhereInput[]
    title?: StringFilter<"Hearings"> | string
    description?: StringNullableFilter<"Hearings"> | string | null
    date?: DateTimeFilter<"Hearings"> | Date | string
    duration?: IntFilter<"Hearings"> | number
    location?: StringFilter<"Hearings"> | string
    status?: EnumHearingStatusFilter<"Hearings"> | $Enums.HearingStatus
    type?: StringFilter<"Hearings"> | string
    notes?: StringNullableFilter<"Hearings"> | string | null
    caseId?: IntFilter<"Hearings"> | number
    createdAt?: DateTimeFilter<"Hearings"> | Date | string
    updatedAt?: DateTimeFilter<"Hearings"> | Date | string
    cases?: XOR<CasesScalarRelationFilter, CasesWhereInput>
    users?: UsersListRelationFilter
  }, "id">

  export type HearingsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HearingsCountOrderByAggregateInput
    _avg?: HearingsAvgOrderByAggregateInput
    _max?: HearingsMaxOrderByAggregateInput
    _min?: HearingsMinOrderByAggregateInput
    _sum?: HearingsSumOrderByAggregateInput
  }

  export type HearingsScalarWhereWithAggregatesInput = {
    AND?: HearingsScalarWhereWithAggregatesInput | HearingsScalarWhereWithAggregatesInput[]
    OR?: HearingsScalarWhereWithAggregatesInput[]
    NOT?: HearingsScalarWhereWithAggregatesInput | HearingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hearings"> | number
    title?: StringWithAggregatesFilter<"Hearings"> | string
    description?: StringNullableWithAggregatesFilter<"Hearings"> | string | null
    date?: DateTimeWithAggregatesFilter<"Hearings"> | Date | string
    duration?: IntWithAggregatesFilter<"Hearings"> | number
    location?: StringWithAggregatesFilter<"Hearings"> | string
    status?: EnumHearingStatusWithAggregatesFilter<"Hearings"> | $Enums.HearingStatus
    type?: StringWithAggregatesFilter<"Hearings"> | string
    notes?: StringNullableWithAggregatesFilter<"Hearings"> | string | null
    caseId?: IntWithAggregatesFilter<"Hearings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hearings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hearings"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: IntFilter<"Notifications"> | number
    message?: StringFilter<"Notifications"> | string
    read?: BoolFilter<"Notifications"> | boolean
    userId?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    message?: StringFilter<"Notifications"> | string
    read?: BoolFilter<"Notifications"> | boolean
    userId?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notifications"> | number
    message?: StringWithAggregatesFilter<"Notifications"> | string
    read?: BoolWithAggregatesFilter<"Notifications"> | boolean
    userId?: StringWithAggregatesFilter<"Notifications"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    documents?: DocumentsListRelationFilter
    notifications?: NotificationsListRelationFilter
    cases?: CasesListRelationFilter
    hearings?: HearingsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: DocumentsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    cases?: CasesOrderByRelationAggregateInput
    hearings?: HearingsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    documents?: DocumentsListRelationFilter
    notifications?: NotificationsListRelationFilter
    cases?: CasesListRelationFilter
    hearings?: HearingsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type CasesCreateInput = {
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    documents?: DocumentsCreateNestedManyWithoutCasesInput
    hearings?: HearingsCreateNestedManyWithoutCasesInput
    users?: UsersCreateNestedManyWithoutCasesInput
  }

  export type CasesUncheckedCreateInput = {
    id?: number
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    documents?: DocumentsUncheckedCreateNestedManyWithoutCasesInput
    hearings?: HearingsUncheckedCreateNestedManyWithoutCasesInput
    users?: UsersUncheckedCreateNestedManyWithoutCasesInput
  }

  export type CasesUpdateInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUpdateManyWithoutCasesNestedInput
    hearings?: HearingsUpdateManyWithoutCasesNestedInput
    users?: UsersUpdateManyWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUncheckedUpdateManyWithoutCasesNestedInput
    hearings?: HearingsUncheckedUpdateManyWithoutCasesNestedInput
    users?: UsersUncheckedUpdateManyWithoutCasesNestedInput
  }

  export type CasesCreateManyInput = {
    id?: number
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
  }

  export type CasesUpdateManyMutationInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsCreateInput = {
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
    cases: CasesCreateNestedOneWithoutDocumentsInput
    users: UsersCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    uploadedById: string
    caseId: number
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type DocumentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CasesUpdateOneRequiredWithoutDocumentsNestedInput
    users?: UsersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    uploadedById: string
    caseId: number
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type DocumentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HearingsCreateInput = {
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    cases: CasesCreateNestedOneWithoutHearingsInput
    users?: UsersCreateNestedManyWithoutHearingsInput
  }

  export type HearingsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    caseId: number
    createdAt?: Date | string
    updatedAt: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutHearingsInput
  }

  export type HearingsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CasesUpdateOneRequiredWithoutHearingsNestedInput
    users?: UsersUpdateManyWithoutHearingsNestedInput
  }

  export type HearingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutHearingsNestedInput
  }

  export type HearingsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    caseId: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type HearingsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HearingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    users: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: number
    message: string
    read?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type NotificationsUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    id?: number
    message: string
    read?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    cases?: CasesCreateNestedManyWithoutUsersInput
    hearings?: HearingsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    cases?: CasesUncheckedCreateNestedManyWithoutUsersInput
    hearings?: HearingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    cases?: CasesUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    cases?: CasesUncheckedUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DocumentsListRelationFilter = {
    every?: DocumentsWhereInput
    some?: DocumentsWhereInput
    none?: DocumentsWhereInput
  }

  export type HearingsListRelationFilter = {
    every?: HearingsWhereInput
    some?: HearingsWhereInput
    none?: HearingsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HearingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasesCountOrderByAggregateInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    type?: SortOrder
    filedDate?: SortOrder
    location?: SortOrder
    plaintiffName?: SortOrder
    plaintiffAddress?: SortOrder
    defendantName?: SortOrder
    defendantAddress?: SortOrder
    judge?: SortOrder
    crimeType?: SortOrder
    crimeDate?: SortOrder
    crimeLocation?: SortOrder
    arrestingOfficer?: SortOrder
    arrestDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nextHearing?: SortOrder
  }

  export type CasesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CasesMaxOrderByAggregateInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    type?: SortOrder
    filedDate?: SortOrder
    location?: SortOrder
    plaintiffName?: SortOrder
    plaintiffAddress?: SortOrder
    defendantName?: SortOrder
    defendantAddress?: SortOrder
    judge?: SortOrder
    crimeType?: SortOrder
    crimeDate?: SortOrder
    crimeLocation?: SortOrder
    arrestingOfficer?: SortOrder
    arrestDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nextHearing?: SortOrder
  }

  export type CasesMinOrderByAggregateInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    type?: SortOrder
    filedDate?: SortOrder
    location?: SortOrder
    plaintiffName?: SortOrder
    plaintiffAddress?: SortOrder
    defendantName?: SortOrder
    defendantAddress?: SortOrder
    judge?: SortOrder
    crimeType?: SortOrder
    crimeDate?: SortOrder
    crimeLocation?: SortOrder
    arrestingOfficer?: SortOrder
    arrestDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nextHearing?: SortOrder
  }

  export type CasesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CasesScalarRelationFilter = {
    is?: CasesWhereInput
    isNot?: CasesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type DocumentsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    caseId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentsAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    caseId?: SortOrder
    version?: SortOrder
  }

  export type DocumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    caseId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    caseId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentsSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    caseId?: SortOrder
    version?: SortOrder
  }

  export type EnumHearingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HearingStatus | EnumHearingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHearingStatusFilter<$PrismaModel> | $Enums.HearingStatus
  }

  export type HearingsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HearingsAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    caseId?: SortOrder
  }

  export type HearingsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HearingsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HearingsSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    caseId?: SortOrder
  }

  export type EnumHearingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HearingStatus | EnumHearingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHearingStatusWithAggregatesFilter<$PrismaModel> | $Enums.HearingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHearingStatusFilter<$PrismaModel>
    _max?: NestedEnumHearingStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type CasesListRelationFilter = {
    every?: CasesWhereInput
    some?: CasesWhereInput
    none?: CasesWhereInput
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DocumentsCreateNestedManyWithoutCasesInput = {
    create?: XOR<DocumentsCreateWithoutCasesInput, DocumentsUncheckedCreateWithoutCasesInput> | DocumentsCreateWithoutCasesInput[] | DocumentsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutCasesInput | DocumentsCreateOrConnectWithoutCasesInput[]
    createMany?: DocumentsCreateManyCasesInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type HearingsCreateNestedManyWithoutCasesInput = {
    create?: XOR<HearingsCreateWithoutCasesInput, HearingsUncheckedCreateWithoutCasesInput> | HearingsCreateWithoutCasesInput[] | HearingsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutCasesInput | HearingsCreateOrConnectWithoutCasesInput[]
    createMany?: HearingsCreateManyCasesInputEnvelope
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
  }

  export type UsersCreateNestedManyWithoutCasesInput = {
    create?: XOR<UsersCreateWithoutCasesInput, UsersUncheckedCreateWithoutCasesInput> | UsersCreateWithoutCasesInput[] | UsersUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCasesInput | UsersCreateOrConnectWithoutCasesInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type DocumentsUncheckedCreateNestedManyWithoutCasesInput = {
    create?: XOR<DocumentsCreateWithoutCasesInput, DocumentsUncheckedCreateWithoutCasesInput> | DocumentsCreateWithoutCasesInput[] | DocumentsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutCasesInput | DocumentsCreateOrConnectWithoutCasesInput[]
    createMany?: DocumentsCreateManyCasesInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type HearingsUncheckedCreateNestedManyWithoutCasesInput = {
    create?: XOR<HearingsCreateWithoutCasesInput, HearingsUncheckedCreateWithoutCasesInput> | HearingsCreateWithoutCasesInput[] | HearingsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutCasesInput | HearingsCreateOrConnectWithoutCasesInput[]
    createMany?: HearingsCreateManyCasesInputEnvelope
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutCasesInput = {
    create?: XOR<UsersCreateWithoutCasesInput, UsersUncheckedCreateWithoutCasesInput> | UsersCreateWithoutCasesInput[] | UsersUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCasesInput | UsersCreateOrConnectWithoutCasesInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DocumentsUpdateManyWithoutCasesNestedInput = {
    create?: XOR<DocumentsCreateWithoutCasesInput, DocumentsUncheckedCreateWithoutCasesInput> | DocumentsCreateWithoutCasesInput[] | DocumentsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutCasesInput | DocumentsCreateOrConnectWithoutCasesInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutCasesInput | DocumentsUpsertWithWhereUniqueWithoutCasesInput[]
    createMany?: DocumentsCreateManyCasesInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutCasesInput | DocumentsUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutCasesInput | DocumentsUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type HearingsUpdateManyWithoutCasesNestedInput = {
    create?: XOR<HearingsCreateWithoutCasesInput, HearingsUncheckedCreateWithoutCasesInput> | HearingsCreateWithoutCasesInput[] | HearingsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutCasesInput | HearingsCreateOrConnectWithoutCasesInput[]
    upsert?: HearingsUpsertWithWhereUniqueWithoutCasesInput | HearingsUpsertWithWhereUniqueWithoutCasesInput[]
    createMany?: HearingsCreateManyCasesInputEnvelope
    set?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    disconnect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    delete?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    update?: HearingsUpdateWithWhereUniqueWithoutCasesInput | HearingsUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: HearingsUpdateManyWithWhereWithoutCasesInput | HearingsUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: HearingsScalarWhereInput | HearingsScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutCasesNestedInput = {
    create?: XOR<UsersCreateWithoutCasesInput, UsersUncheckedCreateWithoutCasesInput> | UsersCreateWithoutCasesInput[] | UsersUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCasesInput | UsersCreateOrConnectWithoutCasesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCasesInput | UsersUpsertWithWhereUniqueWithoutCasesInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCasesInput | UsersUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCasesInput | UsersUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentsUncheckedUpdateManyWithoutCasesNestedInput = {
    create?: XOR<DocumentsCreateWithoutCasesInput, DocumentsUncheckedCreateWithoutCasesInput> | DocumentsCreateWithoutCasesInput[] | DocumentsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutCasesInput | DocumentsCreateOrConnectWithoutCasesInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutCasesInput | DocumentsUpsertWithWhereUniqueWithoutCasesInput[]
    createMany?: DocumentsCreateManyCasesInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutCasesInput | DocumentsUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutCasesInput | DocumentsUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type HearingsUncheckedUpdateManyWithoutCasesNestedInput = {
    create?: XOR<HearingsCreateWithoutCasesInput, HearingsUncheckedCreateWithoutCasesInput> | HearingsCreateWithoutCasesInput[] | HearingsUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutCasesInput | HearingsCreateOrConnectWithoutCasesInput[]
    upsert?: HearingsUpsertWithWhereUniqueWithoutCasesInput | HearingsUpsertWithWhereUniqueWithoutCasesInput[]
    createMany?: HearingsCreateManyCasesInputEnvelope
    set?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    disconnect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    delete?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    update?: HearingsUpdateWithWhereUniqueWithoutCasesInput | HearingsUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: HearingsUpdateManyWithWhereWithoutCasesInput | HearingsUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: HearingsScalarWhereInput | HearingsScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutCasesNestedInput = {
    create?: XOR<UsersCreateWithoutCasesInput, UsersUncheckedCreateWithoutCasesInput> | UsersCreateWithoutCasesInput[] | UsersUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCasesInput | UsersCreateOrConnectWithoutCasesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCasesInput | UsersUpsertWithWhereUniqueWithoutCasesInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCasesInput | UsersUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCasesInput | UsersUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type CasesCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<CasesCreateWithoutDocumentsInput, CasesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CasesCreateOrConnectWithoutDocumentsInput
    connect?: CasesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentsInput
    connect?: UsersWhereUniqueInput
  }

  export type CasesUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<CasesCreateWithoutDocumentsInput, CasesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CasesCreateOrConnectWithoutDocumentsInput
    upsert?: CasesUpsertWithoutDocumentsInput
    connect?: CasesWhereUniqueInput
    update?: XOR<XOR<CasesUpdateToOneWithWhereWithoutDocumentsInput, CasesUpdateWithoutDocumentsInput>, CasesUncheckedUpdateWithoutDocumentsInput>
  }

  export type UsersUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentsInput
    upsert?: UsersUpsertWithoutDocumentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDocumentsInput, UsersUpdateWithoutDocumentsInput>, UsersUncheckedUpdateWithoutDocumentsInput>
  }

  export type CasesCreateNestedOneWithoutHearingsInput = {
    create?: XOR<CasesCreateWithoutHearingsInput, CasesUncheckedCreateWithoutHearingsInput>
    connectOrCreate?: CasesCreateOrConnectWithoutHearingsInput
    connect?: CasesWhereUniqueInput
  }

  export type UsersCreateNestedManyWithoutHearingsInput = {
    create?: XOR<UsersCreateWithoutHearingsInput, UsersUncheckedCreateWithoutHearingsInput> | UsersCreateWithoutHearingsInput[] | UsersUncheckedCreateWithoutHearingsInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutHearingsInput | UsersCreateOrConnectWithoutHearingsInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutHearingsInput = {
    create?: XOR<UsersCreateWithoutHearingsInput, UsersUncheckedCreateWithoutHearingsInput> | UsersCreateWithoutHearingsInput[] | UsersUncheckedCreateWithoutHearingsInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutHearingsInput | UsersCreateOrConnectWithoutHearingsInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type EnumHearingStatusFieldUpdateOperationsInput = {
    set?: $Enums.HearingStatus
  }

  export type CasesUpdateOneRequiredWithoutHearingsNestedInput = {
    create?: XOR<CasesCreateWithoutHearingsInput, CasesUncheckedCreateWithoutHearingsInput>
    connectOrCreate?: CasesCreateOrConnectWithoutHearingsInput
    upsert?: CasesUpsertWithoutHearingsInput
    connect?: CasesWhereUniqueInput
    update?: XOR<XOR<CasesUpdateToOneWithWhereWithoutHearingsInput, CasesUpdateWithoutHearingsInput>, CasesUncheckedUpdateWithoutHearingsInput>
  }

  export type UsersUpdateManyWithoutHearingsNestedInput = {
    create?: XOR<UsersCreateWithoutHearingsInput, UsersUncheckedCreateWithoutHearingsInput> | UsersCreateWithoutHearingsInput[] | UsersUncheckedCreateWithoutHearingsInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutHearingsInput | UsersCreateOrConnectWithoutHearingsInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutHearingsInput | UsersUpsertWithWhereUniqueWithoutHearingsInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutHearingsInput | UsersUpdateWithWhereUniqueWithoutHearingsInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutHearingsInput | UsersUpdateManyWithWhereWithoutHearingsInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutHearingsNestedInput = {
    create?: XOR<UsersCreateWithoutHearingsInput, UsersUncheckedCreateWithoutHearingsInput> | UsersCreateWithoutHearingsInput[] | UsersUncheckedCreateWithoutHearingsInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutHearingsInput | UsersCreateOrConnectWithoutHearingsInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutHearingsInput | UsersUpsertWithWhereUniqueWithoutHearingsInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutHearingsInput | UsersUpdateWithWhereUniqueWithoutHearingsInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutHearingsInput | UsersUpdateManyWithWhereWithoutHearingsInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    upsert?: UsersUpsertWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotificationsInput, UsersUpdateWithoutNotificationsInput>, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type DocumentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<DocumentsCreateWithoutUsersInput, DocumentsUncheckedCreateWithoutUsersInput> | DocumentsCreateWithoutUsersInput[] | DocumentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUsersInput | DocumentsCreateOrConnectWithoutUsersInput[]
    createMany?: DocumentsCreateManyUsersInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type CasesCreateNestedManyWithoutUsersInput = {
    create?: XOR<CasesCreateWithoutUsersInput, CasesUncheckedCreateWithoutUsersInput> | CasesCreateWithoutUsersInput[] | CasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutUsersInput | CasesCreateOrConnectWithoutUsersInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type HearingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<HearingsCreateWithoutUsersInput, HearingsUncheckedCreateWithoutUsersInput> | HearingsCreateWithoutUsersInput[] | HearingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutUsersInput | HearingsCreateOrConnectWithoutUsersInput[]
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
  }

  export type DocumentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<DocumentsCreateWithoutUsersInput, DocumentsUncheckedCreateWithoutUsersInput> | DocumentsCreateWithoutUsersInput[] | DocumentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUsersInput | DocumentsCreateOrConnectWithoutUsersInput[]
    createMany?: DocumentsCreateManyUsersInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type CasesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CasesCreateWithoutUsersInput, CasesUncheckedCreateWithoutUsersInput> | CasesCreateWithoutUsersInput[] | CasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutUsersInput | CasesCreateOrConnectWithoutUsersInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type HearingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<HearingsCreateWithoutUsersInput, HearingsUncheckedCreateWithoutUsersInput> | HearingsCreateWithoutUsersInput[] | HearingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutUsersInput | HearingsCreateOrConnectWithoutUsersInput[]
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DocumentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DocumentsCreateWithoutUsersInput, DocumentsUncheckedCreateWithoutUsersInput> | DocumentsCreateWithoutUsersInput[] | DocumentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUsersInput | DocumentsCreateOrConnectWithoutUsersInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutUsersInput | DocumentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DocumentsCreateManyUsersInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutUsersInput | DocumentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutUsersInput | DocumentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUsersInput | NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUsersInput | NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUsersInput | NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type CasesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CasesCreateWithoutUsersInput, CasesUncheckedCreateWithoutUsersInput> | CasesCreateWithoutUsersInput[] | CasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutUsersInput | CasesCreateOrConnectWithoutUsersInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutUsersInput | CasesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutUsersInput | CasesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutUsersInput | CasesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type HearingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<HearingsCreateWithoutUsersInput, HearingsUncheckedCreateWithoutUsersInput> | HearingsCreateWithoutUsersInput[] | HearingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutUsersInput | HearingsCreateOrConnectWithoutUsersInput[]
    upsert?: HearingsUpsertWithWhereUniqueWithoutUsersInput | HearingsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    disconnect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    delete?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    update?: HearingsUpdateWithWhereUniqueWithoutUsersInput | HearingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: HearingsUpdateManyWithWhereWithoutUsersInput | HearingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: HearingsScalarWhereInput | HearingsScalarWhereInput[]
  }

  export type DocumentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DocumentsCreateWithoutUsersInput, DocumentsUncheckedCreateWithoutUsersInput> | DocumentsCreateWithoutUsersInput[] | DocumentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUsersInput | DocumentsCreateOrConnectWithoutUsersInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutUsersInput | DocumentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DocumentsCreateManyUsersInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutUsersInput | DocumentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutUsersInput | DocumentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUsersInput | NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUsersInput | NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUsersInput | NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type CasesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CasesCreateWithoutUsersInput, CasesUncheckedCreateWithoutUsersInput> | CasesCreateWithoutUsersInput[] | CasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutUsersInput | CasesCreateOrConnectWithoutUsersInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutUsersInput | CasesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutUsersInput | CasesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutUsersInput | CasesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type HearingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<HearingsCreateWithoutUsersInput, HearingsUncheckedCreateWithoutUsersInput> | HearingsCreateWithoutUsersInput[] | HearingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: HearingsCreateOrConnectWithoutUsersInput | HearingsCreateOrConnectWithoutUsersInput[]
    upsert?: HearingsUpsertWithWhereUniqueWithoutUsersInput | HearingsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    disconnect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    delete?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    connect?: HearingsWhereUniqueInput | HearingsWhereUniqueInput[]
    update?: HearingsUpdateWithWhereUniqueWithoutUsersInput | HearingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: HearingsUpdateManyWithWhereWithoutUsersInput | HearingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: HearingsScalarWhereInput | HearingsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumHearingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HearingStatus | EnumHearingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHearingStatusFilter<$PrismaModel> | $Enums.HearingStatus
  }

  export type NestedEnumHearingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HearingStatus | EnumHearingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HearingStatus[] | ListEnumHearingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHearingStatusWithAggregatesFilter<$PrismaModel> | $Enums.HearingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHearingStatusFilter<$PrismaModel>
    _max?: NestedEnumHearingStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DocumentsCreateWithoutCasesInput = {
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
    users: UsersCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateWithoutCasesInput = {
    id?: number
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    uploadedById: string
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type DocumentsCreateOrConnectWithoutCasesInput = {
    where: DocumentsWhereUniqueInput
    create: XOR<DocumentsCreateWithoutCasesInput, DocumentsUncheckedCreateWithoutCasesInput>
  }

  export type DocumentsCreateManyCasesInputEnvelope = {
    data: DocumentsCreateManyCasesInput | DocumentsCreateManyCasesInput[]
    skipDuplicates?: boolean
  }

  export type HearingsCreateWithoutCasesInput = {
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    users?: UsersCreateNestedManyWithoutHearingsInput
  }

  export type HearingsUncheckedCreateWithoutCasesInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutHearingsInput
  }

  export type HearingsCreateOrConnectWithoutCasesInput = {
    where: HearingsWhereUniqueInput
    create: XOR<HearingsCreateWithoutCasesInput, HearingsUncheckedCreateWithoutCasesInput>
  }

  export type HearingsCreateManyCasesInputEnvelope = {
    data: HearingsCreateManyCasesInput | HearingsCreateManyCasesInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutCasesInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    hearings?: HearingsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCasesInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    hearings?: HearingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCasesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCasesInput, UsersUncheckedCreateWithoutCasesInput>
  }

  export type DocumentsUpsertWithWhereUniqueWithoutCasesInput = {
    where: DocumentsWhereUniqueInput
    update: XOR<DocumentsUpdateWithoutCasesInput, DocumentsUncheckedUpdateWithoutCasesInput>
    create: XOR<DocumentsCreateWithoutCasesInput, DocumentsUncheckedCreateWithoutCasesInput>
  }

  export type DocumentsUpdateWithWhereUniqueWithoutCasesInput = {
    where: DocumentsWhereUniqueInput
    data: XOR<DocumentsUpdateWithoutCasesInput, DocumentsUncheckedUpdateWithoutCasesInput>
  }

  export type DocumentsUpdateManyWithWhereWithoutCasesInput = {
    where: DocumentsScalarWhereInput
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyWithoutCasesInput>
  }

  export type DocumentsScalarWhereInput = {
    AND?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    OR?: DocumentsScalarWhereInput[]
    NOT?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    id?: IntFilter<"Documents"> | number
    title?: StringFilter<"Documents"> | string
    description?: StringNullableFilter<"Documents"> | string | null
    fileUrl?: StringFilter<"Documents"> | string
    category?: StringFilter<"Documents"> | string
    fileSize?: IntFilter<"Documents"> | number
    uploadedById?: StringFilter<"Documents"> | string
    caseId?: IntFilter<"Documents"> | number
    version?: IntFilter<"Documents"> | number
    createdAt?: DateTimeFilter<"Documents"> | Date | string
    updatedAt?: DateTimeFilter<"Documents"> | Date | string
  }

  export type HearingsUpsertWithWhereUniqueWithoutCasesInput = {
    where: HearingsWhereUniqueInput
    update: XOR<HearingsUpdateWithoutCasesInput, HearingsUncheckedUpdateWithoutCasesInput>
    create: XOR<HearingsCreateWithoutCasesInput, HearingsUncheckedCreateWithoutCasesInput>
  }

  export type HearingsUpdateWithWhereUniqueWithoutCasesInput = {
    where: HearingsWhereUniqueInput
    data: XOR<HearingsUpdateWithoutCasesInput, HearingsUncheckedUpdateWithoutCasesInput>
  }

  export type HearingsUpdateManyWithWhereWithoutCasesInput = {
    where: HearingsScalarWhereInput
    data: XOR<HearingsUpdateManyMutationInput, HearingsUncheckedUpdateManyWithoutCasesInput>
  }

  export type HearingsScalarWhereInput = {
    AND?: HearingsScalarWhereInput | HearingsScalarWhereInput[]
    OR?: HearingsScalarWhereInput[]
    NOT?: HearingsScalarWhereInput | HearingsScalarWhereInput[]
    id?: IntFilter<"Hearings"> | number
    title?: StringFilter<"Hearings"> | string
    description?: StringNullableFilter<"Hearings"> | string | null
    date?: DateTimeFilter<"Hearings"> | Date | string
    duration?: IntFilter<"Hearings"> | number
    location?: StringFilter<"Hearings"> | string
    status?: EnumHearingStatusFilter<"Hearings"> | $Enums.HearingStatus
    type?: StringFilter<"Hearings"> | string
    notes?: StringNullableFilter<"Hearings"> | string | null
    caseId?: IntFilter<"Hearings"> | number
    createdAt?: DateTimeFilter<"Hearings"> | Date | string
    updatedAt?: DateTimeFilter<"Hearings"> | Date | string
  }

  export type UsersUpsertWithWhereUniqueWithoutCasesInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutCasesInput, UsersUncheckedUpdateWithoutCasesInput>
    create: XOR<UsersCreateWithoutCasesInput, UsersUncheckedCreateWithoutCasesInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutCasesInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutCasesInput, UsersUncheckedUpdateWithoutCasesInput>
  }

  export type UsersUpdateManyWithWhereWithoutCasesInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutCasesInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type CasesCreateWithoutDocumentsInput = {
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    hearings?: HearingsCreateNestedManyWithoutCasesInput
    users?: UsersCreateNestedManyWithoutCasesInput
  }

  export type CasesUncheckedCreateWithoutDocumentsInput = {
    id?: number
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    hearings?: HearingsUncheckedCreateNestedManyWithoutCasesInput
    users?: UsersUncheckedCreateNestedManyWithoutCasesInput
  }

  export type CasesCreateOrConnectWithoutDocumentsInput = {
    where: CasesWhereUniqueInput
    create: XOR<CasesCreateWithoutDocumentsInput, CasesUncheckedCreateWithoutDocumentsInput>
  }

  export type UsersCreateWithoutDocumentsInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    cases?: CasesCreateNestedManyWithoutUsersInput
    hearings?: HearingsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutDocumentsInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    cases?: CasesUncheckedCreateNestedManyWithoutUsersInput
    hearings?: HearingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutDocumentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
  }

  export type CasesUpsertWithoutDocumentsInput = {
    update: XOR<CasesUpdateWithoutDocumentsInput, CasesUncheckedUpdateWithoutDocumentsInput>
    create: XOR<CasesCreateWithoutDocumentsInput, CasesUncheckedCreateWithoutDocumentsInput>
    where?: CasesWhereInput
  }

  export type CasesUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: CasesWhereInput
    data: XOR<CasesUpdateWithoutDocumentsInput, CasesUncheckedUpdateWithoutDocumentsInput>
  }

  export type CasesUpdateWithoutDocumentsInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    hearings?: HearingsUpdateManyWithoutCasesNestedInput
    users?: UsersUpdateManyWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    hearings?: HearingsUncheckedUpdateManyWithoutCasesNestedInput
    users?: UsersUncheckedUpdateManyWithoutCasesNestedInput
  }

  export type UsersUpsertWithoutDocumentsInput = {
    update: XOR<UsersUpdateWithoutDocumentsInput, UsersUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDocumentsInput, UsersUncheckedUpdateWithoutDocumentsInput>
  }

  export type UsersUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    cases?: CasesUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    cases?: CasesUncheckedUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CasesCreateWithoutHearingsInput = {
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    documents?: DocumentsCreateNestedManyWithoutCasesInput
    users?: UsersCreateNestedManyWithoutCasesInput
  }

  export type CasesUncheckedCreateWithoutHearingsInput = {
    id?: number
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    documents?: DocumentsUncheckedCreateNestedManyWithoutCasesInput
    users?: UsersUncheckedCreateNestedManyWithoutCasesInput
  }

  export type CasesCreateOrConnectWithoutHearingsInput = {
    where: CasesWhereUniqueInput
    create: XOR<CasesCreateWithoutHearingsInput, CasesUncheckedCreateWithoutHearingsInput>
  }

  export type UsersCreateWithoutHearingsInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    cases?: CasesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutHearingsInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    cases?: CasesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutHearingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutHearingsInput, UsersUncheckedCreateWithoutHearingsInput>
  }

  export type CasesUpsertWithoutHearingsInput = {
    update: XOR<CasesUpdateWithoutHearingsInput, CasesUncheckedUpdateWithoutHearingsInput>
    create: XOR<CasesCreateWithoutHearingsInput, CasesUncheckedCreateWithoutHearingsInput>
    where?: CasesWhereInput
  }

  export type CasesUpdateToOneWithWhereWithoutHearingsInput = {
    where?: CasesWhereInput
    data: XOR<CasesUpdateWithoutHearingsInput, CasesUncheckedUpdateWithoutHearingsInput>
  }

  export type CasesUpdateWithoutHearingsInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUpdateManyWithoutCasesNestedInput
    users?: UsersUpdateManyWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateWithoutHearingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUncheckedUpdateManyWithoutCasesNestedInput
    users?: UsersUncheckedUpdateManyWithoutCasesNestedInput
  }

  export type UsersUpsertWithWhereUniqueWithoutHearingsInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutHearingsInput, UsersUncheckedUpdateWithoutHearingsInput>
    create: XOR<UsersCreateWithoutHearingsInput, UsersUncheckedCreateWithoutHearingsInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutHearingsInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutHearingsInput, UsersUncheckedUpdateWithoutHearingsInput>
  }

  export type UsersUpdateManyWithWhereWithoutHearingsInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutHearingsInput>
  }

  export type UsersCreateWithoutNotificationsInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsCreateNestedManyWithoutUsersInput
    cases?: CasesCreateNestedManyWithoutUsersInput
    hearings?: HearingsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutNotificationsInput = {
    id: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    documents?: DocumentsUncheckedCreateNestedManyWithoutUsersInput
    cases?: CasesUncheckedCreateNestedManyWithoutUsersInput
    hearings?: HearingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersUpsertWithoutNotificationsInput = {
    update: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUpdateManyWithoutUsersNestedInput
    cases?: CasesUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUncheckedUpdateManyWithoutUsersNestedInput
    cases?: CasesUncheckedUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type DocumentsCreateWithoutUsersInput = {
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
    cases: CasesCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    caseId: number
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type DocumentsCreateOrConnectWithoutUsersInput = {
    where: DocumentsWhereUniqueInput
    create: XOR<DocumentsCreateWithoutUsersInput, DocumentsUncheckedCreateWithoutUsersInput>
  }

  export type DocumentsCreateManyUsersInputEnvelope = {
    data: DocumentsCreateManyUsersInput | DocumentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUsersInput = {
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type NotificationsUncheckedCreateWithoutUsersInput = {
    id?: number
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type NotificationsCreateOrConnectWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type NotificationsCreateManyUsersInputEnvelope = {
    data: NotificationsCreateManyUsersInput | NotificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CasesCreateWithoutUsersInput = {
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    documents?: DocumentsCreateNestedManyWithoutCasesInput
    hearings?: HearingsCreateNestedManyWithoutCasesInput
  }

  export type CasesUncheckedCreateWithoutUsersInput = {
    id?: number
    caseNumber: string
    title: string
    description?: string | null
    status?: $Enums.CaseStatus
    type: string
    filedDate?: Date | string
    location?: string | null
    plaintiffName: string
    plaintiffAddress?: string | null
    defendantName: string
    defendantAddress?: string | null
    judge: string
    crimeType?: string | null
    crimeDate?: Date | string | null
    crimeLocation?: string | null
    arrestingOfficer?: string | null
    arrestDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    nextHearing: Date | string
    documents?: DocumentsUncheckedCreateNestedManyWithoutCasesInput
    hearings?: HearingsUncheckedCreateNestedManyWithoutCasesInput
  }

  export type CasesCreateOrConnectWithoutUsersInput = {
    where: CasesWhereUniqueInput
    create: XOR<CasesCreateWithoutUsersInput, CasesUncheckedCreateWithoutUsersInput>
  }

  export type HearingsCreateWithoutUsersInput = {
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    cases: CasesCreateNestedOneWithoutHearingsInput
  }

  export type HearingsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    caseId: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type HearingsCreateOrConnectWithoutUsersInput = {
    where: HearingsWhereUniqueInput
    create: XOR<HearingsCreateWithoutUsersInput, HearingsUncheckedCreateWithoutUsersInput>
  }

  export type DocumentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: DocumentsWhereUniqueInput
    update: XOR<DocumentsUpdateWithoutUsersInput, DocumentsUncheckedUpdateWithoutUsersInput>
    create: XOR<DocumentsCreateWithoutUsersInput, DocumentsUncheckedCreateWithoutUsersInput>
  }

  export type DocumentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: DocumentsWhereUniqueInput
    data: XOR<DocumentsUpdateWithoutUsersInput, DocumentsUncheckedUpdateWithoutUsersInput>
  }

  export type DocumentsUpdateManyWithWhereWithoutUsersInput = {
    where: DocumentsScalarWhereInput
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUsersInput, NotificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUsersInput, NotificationsUncheckedUpdateWithoutUsersInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUsersInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: IntFilter<"Notifications"> | number
    message?: StringFilter<"Notifications"> | string
    read?: BoolFilter<"Notifications"> | boolean
    userId?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type CasesUpsertWithWhereUniqueWithoutUsersInput = {
    where: CasesWhereUniqueInput
    update: XOR<CasesUpdateWithoutUsersInput, CasesUncheckedUpdateWithoutUsersInput>
    create: XOR<CasesCreateWithoutUsersInput, CasesUncheckedCreateWithoutUsersInput>
  }

  export type CasesUpdateWithWhereUniqueWithoutUsersInput = {
    where: CasesWhereUniqueInput
    data: XOR<CasesUpdateWithoutUsersInput, CasesUncheckedUpdateWithoutUsersInput>
  }

  export type CasesUpdateManyWithWhereWithoutUsersInput = {
    where: CasesScalarWhereInput
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyWithoutUsersInput>
  }

  export type CasesScalarWhereInput = {
    AND?: CasesScalarWhereInput | CasesScalarWhereInput[]
    OR?: CasesScalarWhereInput[]
    NOT?: CasesScalarWhereInput | CasesScalarWhereInput[]
    id?: IntFilter<"Cases"> | number
    caseNumber?: StringFilter<"Cases"> | string
    title?: StringFilter<"Cases"> | string
    description?: StringNullableFilter<"Cases"> | string | null
    status?: EnumCaseStatusFilter<"Cases"> | $Enums.CaseStatus
    type?: StringFilter<"Cases"> | string
    filedDate?: DateTimeFilter<"Cases"> | Date | string
    location?: StringNullableFilter<"Cases"> | string | null
    plaintiffName?: StringFilter<"Cases"> | string
    plaintiffAddress?: StringNullableFilter<"Cases"> | string | null
    defendantName?: StringFilter<"Cases"> | string
    defendantAddress?: StringNullableFilter<"Cases"> | string | null
    judge?: StringFilter<"Cases"> | string
    crimeType?: StringNullableFilter<"Cases"> | string | null
    crimeDate?: DateTimeNullableFilter<"Cases"> | Date | string | null
    crimeLocation?: StringNullableFilter<"Cases"> | string | null
    arrestingOfficer?: StringNullableFilter<"Cases"> | string | null
    arrestDate?: DateTimeNullableFilter<"Cases"> | Date | string | null
    createdAt?: DateTimeFilter<"Cases"> | Date | string
    updatedAt?: DateTimeFilter<"Cases"> | Date | string
    nextHearing?: DateTimeFilter<"Cases"> | Date | string
  }

  export type HearingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: HearingsWhereUniqueInput
    update: XOR<HearingsUpdateWithoutUsersInput, HearingsUncheckedUpdateWithoutUsersInput>
    create: XOR<HearingsCreateWithoutUsersInput, HearingsUncheckedCreateWithoutUsersInput>
  }

  export type HearingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: HearingsWhereUniqueInput
    data: XOR<HearingsUpdateWithoutUsersInput, HearingsUncheckedUpdateWithoutUsersInput>
  }

  export type HearingsUpdateManyWithWhereWithoutUsersInput = {
    where: HearingsScalarWhereInput
    data: XOR<HearingsUpdateManyMutationInput, HearingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type DocumentsCreateManyCasesInput = {
    id?: number
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    uploadedById: string
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type HearingsCreateManyCasesInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    duration: number
    location: string
    status?: $Enums.HearingStatus
    type: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type DocumentsUpdateWithoutCasesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateManyWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HearingsUpdateWithoutCasesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutHearingsNestedInput
  }

  export type HearingsUncheckedUpdateWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutHearingsNestedInput
  }

  export type HearingsUncheckedUpdateManyWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    hearings?: HearingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutHearingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    cases?: CasesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutHearingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    cases?: CasesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutHearingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsCreateManyUsersInput = {
    id?: number
    title: string
    description?: string | null
    fileUrl: string
    category: string
    fileSize: number
    caseId: number
    version?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type NotificationsCreateManyUsersInput = {
    id?: number
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type DocumentsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CasesUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    caseId?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    caseId?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUpdateWithoutUsersInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUpdateManyWithoutCasesNestedInput
    hearings?: HearingsUpdateManyWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentsUncheckedUpdateManyWithoutCasesNestedInput
    hearings?: HearingsUncheckedUpdateManyWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    type?: StringFieldUpdateOperationsInput | string
    filedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    plaintiffName?: StringFieldUpdateOperationsInput | string
    plaintiffAddress?: NullableStringFieldUpdateOperationsInput | string | null
    defendantName?: StringFieldUpdateOperationsInput | string
    defendantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    judge?: StringFieldUpdateOperationsInput | string
    crimeType?: NullableStringFieldUpdateOperationsInput | string | null
    crimeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crimeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    arrestingOfficer?: NullableStringFieldUpdateOperationsInput | string | null
    arrestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextHearing?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HearingsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CasesUpdateOneRequiredWithoutHearingsNestedInput
  }

  export type HearingsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HearingsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumHearingStatusFieldUpdateOperationsInput | $Enums.HearingStatus
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}