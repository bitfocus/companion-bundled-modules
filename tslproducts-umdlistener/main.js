/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6010:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Sony-Bravia

const { InstanceBase, InstanceStatus, runEntrypoint } = __webpack_require__(8049);
const UpgradeScripts = __webpack_require__(4556);

const config = __webpack_require__(9182);
const actions = __webpack_require__(5144);
const feedbacks = __webpack_require__(7417);
const variables = __webpack_require__(4049);
const presets = __webpack_require__(3125);

const api = __webpack_require__(5965);

class TSLProductsUMDListenerInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		// Assign the methods from the listed files to this class
		Object.assign(this, {
			...config,
			...actions,
			...feedbacks,
			...variables,
			...presets,
			...api
		})

		this.oldPortType = '';

		this.SERVER = undefined;
		this.TALLIES = [];
		this.CHOICES_TALLYADDRESSES = [
			{ id: -1, label: 'No tally data received yet...'}
		]
	}

	async destroy() {
		let self = this;

		self.closePort();
	}

	async init(config) {
		this.configUpdated(config)
	}

	async configUpdated(config) {
		this.config = config

		if (config) {
			this.oldPortType = this.config.porttype;
			this.config = config
		}

		if (this.SERVER !== undefined) {
			//close out any open ports and re-init
			this.closePort();
		}

		// Quickly check if certain config values are present and continue setup
		if (this.config.port) {
			//Open the listening port
			this.openPort();

			// Init the Actions
			this.initActions();
			this.initVariables();
			this.initFeedbacks();
			this.initPresets();

			this.checkVariables();
			this.checkFeedbacks();

			// Set Status to Connecting
			this.updateStatus(InstanceStatus.Connecting)

			this.setVariableValues({'module_state': 'Waiting for Data...'});
		}
	}
}

runEntrypoint(TSLProductsUMDListenerInstance, UpgradeScripts);

/***/ }),

/***/ 7056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// https://github.com/ajv-validator/ajv/issues/889
const equal = __webpack_require__(4063);
equal.code = 'require("ajv/dist/runtime/equal").default';
exports.Z = equal;
//# sourceMappingURL=equal.js.map

/***/ }),

/***/ 758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ addExtensionMethods)
/* harmony export */ });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5659);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6890);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2176);
/* module decorator */ module = __webpack_require__.hmd(module);



/**
 * @private
 */
function _autoloadDatabaseIntegrations() {
  const carrier = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_0__/* .getMainCarrier */ .cu)();
  if (!carrier.__SENTRY__) {
    return;
  }

  const packageToIntegrationMapping = {
    mongodb() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/mongo')

;
      return new integration.Mongo();
    },
    mongoose() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/mongo')

;
      return new integration.Mongo();
    },
    mysql() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/mysql')

;
      return new integration.Mysql();
    },
    pg() {
      const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, './node/integrations/postgres')

;
      return new integration.Postgres();
    },
  };

  const mappedPackages = Object.keys(packageToIntegrationMapping)
    .filter(moduleName => !!(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .loadModule */ .$y)(moduleName))
    .map(pkg => {
      try {
        return packageToIntegrationMapping[pkg]();
      } catch (e) {
        return undefined;
      }
    })
    .filter(p => p) ;

  if (mappedPackages.length > 0) {
    carrier.__SENTRY__.integrations = [...(carrier.__SENTRY__.integrations || []), ...mappedPackages];
  }
}

/**
 * This patches the global object and injects the Tracing extensions methods
 */
function addExtensionMethods() {
  (0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .addTracingExtensions */ .T)();

  // Detect and automatically load specified integrations.
  if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .isNodeEnv */ .KV)()) {
    _autoloadDatabaseIntegrations();
  }
}


//# sourceMappingURL=extensions.js.map


/***/ }),

/***/ 2716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Apollo)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4307);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2176);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(535);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2844);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7597);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7990);




/** Tracing integration for Apollo */
class Apollo  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Apollo';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(
    options = {
      useNestjs: false,
    },
  ) {
    this.name = Apollo.id;
    this._useNest = !!options.useNestjs;
  }

  /** @inheritdoc */
   loadDependency() {
    if (this._useNest) {
      this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('@nestjs/graphql');
    } else {
      this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('apollo-server-core');
    }

    return this._module;
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Apollo Integration is skipped because of instrumenter configuration.');
      return;
    }

    if (this._useNest) {
      const pkg = this.loadDependency();

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Apollo-NestJS Integration was unable to require @nestjs/graphql package.');
        return;
      }

      /**
       * Iterate over resolvers of NestJS ResolversExplorerService before schemas are constructed.
       */
      (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(
        pkg.GraphQLFactory.prototype,
        'mergeWithSchema',
        function (orig) {
          return function (

            ...args
          ) {
            (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(this.resolversExplorerService, 'explore', function (orig) {
              return function () {
                const resolvers = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .arrayify */ .lE)(orig.call(this));

                const instrumentedResolvers = instrumentResolvers(resolvers, getCurrentHub);

                return instrumentedResolvers;
              };
            });

            return orig.call(this, ...args);
          };
        },
      );
    } else {
      const pkg = this.loadDependency();

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Apollo Integration was unable to require apollo-server-core package.');
        return;
      }

      /**
       * Iterate over resolvers of the ApolloServer instance before schemas are constructed.
       */
      (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(pkg.ApolloServerBase.prototype, 'constructSchema', function (orig) {
        return function (

) {
          if (!this.config.resolvers) {
            if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
              if (this.config.schema) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.' +
                    'If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead.',
                );
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.warn();
              } else if (this.config.modules) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.',
                );
              }

              _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Skipping tracing as no resolvers found on the `ApolloServer` instance.');
            }

            return orig.call(this);
          }

          const resolvers = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .arrayify */ .lE)(this.config.resolvers);

          this.config.resolvers = instrumentResolvers(resolvers, getCurrentHub);

          return orig.call(this);
        };
      });
    }
  }
}Apollo.__initStatic();

function instrumentResolvers(resolvers, getCurrentHub) {
  return resolvers.map(model => {
    Object.keys(model).forEach(resolverGroupName => {
      Object.keys(model[resolverGroupName]).forEach(resolverName => {
        if (typeof model[resolverGroupName][resolverName] !== 'function') {
          return;
        }

        wrapResolver(model, resolverGroupName, resolverName, getCurrentHub);
      });
    });

    return model;
  });
}

/**
 * Wrap a single resolver which can be a parent of other resolvers and/or db operations.
 */
function wrapResolver(
  model,
  resolverGroupName,
  resolverName,
  getCurrentHub,
) {
  (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(model[resolverGroupName], resolverName, function (orig) {
    return function ( ...args) {
      const scope = getCurrentHub().getScope();
      const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);
      const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
        description: `${resolverGroupName}.${resolverName}`,
        op: 'graphql.resolve',
      })]);

      const rv = orig.call(this, ...args);

      if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .isThenable */ .J8)(rv)) {
        return rv.then((res) => {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
          return res;
        });
      }

      (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_5__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);

      return rv;
    };
  });
}


//# sourceMappingURL=apollo.js.map


/***/ }),

/***/ 8737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Express)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4307);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6956);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(442);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7597);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7990);




/**
 * Express integration
 *
 * Provides an request and error handler for Express framework as well as tracing capabilities
 */
class Express  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Express';}

  /**
   * @inheritDoc
   */

  /**
   * Express App instance
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Express.id;
    this._router = options.router || options.app;
    this._methods = (Array.isArray(options.methods) ? options.methods : []).concat('use');
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (!this._router) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.error('ExpressIntegration is missing an Express instance');
      return;
    }

    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.log('Express Integration is skipped because of instrumenter configuration.');
      return;
    }

    instrumentMiddlewares(this._router, this._methods);
    instrumentRouter(this._router );
  }
}Express.__initStatic();

/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 *
 * They all internally delegate to the `router[method]` of the given application instance.
 */
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
function wrap(fn, method) {
  const arity = fn.length;

  switch (arity) {
    case 2: {
      return function ( req, res) {
        const transaction = res.__sentry_transaction;
        if (transaction) {
          const span = transaction.startChild({
            description: fn.name,
            op: `middleware.express.${method}`,
          });
          res.once('finish', () => {
            span.finish();
          });
        }
        return fn.call(this, req, res);
      };
    }
    case 3: {
      return function (

        req,
        res,
        next,
      ) {
        const transaction = res.__sentry_transaction;
        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([transaction, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3({
          description: fn.name,
          op: `middleware.express.${method}`,
        })]);
        fn.call(this, req, res, function ( ...args) {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([span, 'optionalAccess', _4 => _4.finish, 'call', _5 => _5()]);
          next.call(this, ...args);
        });
      };
    }
    case 4: {
      return function (

        err,
        req,
        res,
        next,
      ) {
        const transaction = res.__sentry_transaction;
        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([transaction, 'optionalAccess', _6 => _6.startChild, 'call', _7 => _7({
          description: fn.name,
          op: `middleware.express.${method}`,
        })]);
        fn.call(this, err, req, res, function ( ...args) {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
          next.call(this, ...args);
        });
      };
    }
    default: {
      throw new Error(`Express middleware takes 2-4 arguments. Got: ${arity}`);
    }
  }
}

/**
 * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */
function wrapMiddlewareArgs(args, method) {
  return args.map((arg) => {
    if (typeof arg === 'function') {
      return wrap(arg, method);
    }

    if (Array.isArray(arg)) {
      return arg.map((a) => {
        if (typeof a === 'function') {
          return wrap(a, method);
        }
        return a;
      });
    }

    return arg;
  });
}

/**
 * Patches original router to utilize our tracing functionality
 */
function patchMiddleware(router, method) {
  const originalCallback = router[method];

  router[method] = function (...args) {
    return originalCallback.call(this, ...wrapMiddlewareArgs(args, method));
  };

  return router;
}

/**
 * Patches original router methods
 */
function instrumentMiddlewares(router, methods = []) {
  methods.forEach((method) => patchMiddleware(router, method));
}

/**
 * Patches the prototype of Express.Router to accumulate the resolved route
 * if a layer instance's `match` function was called and it returned a successful match.
 *
 * @see https://github.com/expressjs/express/blob/master/lib/router/index.js
 *
 * @param appOrRouter the router instance which can either be an app (i.e. top-level) or a (nested) router.
 */
function instrumentRouter(appOrRouter) {
  // This is how we can distinguish between app and routers
  const isApp = 'settings' in appOrRouter;

  // In case the app's top-level router hasn't been initialized yet, we have to do it now
  if (isApp && appOrRouter._router === undefined && appOrRouter.lazyrouter) {
    appOrRouter.lazyrouter();
  }

  const router = isApp ? appOrRouter._router : appOrRouter;

  if (!router) {
    /*
    If we end up here, this means likely that this integration is used with Express 3 or Express 5.
    For now, we don't support these versions (3 is very old and 5 is still in beta). To support Express 5,
    we'd need to make more changes to the routing instrumentation because the router is no longer part of
    the Express core package but maintained in its own package. The new router has different function
    signatures and works slightly differently, demanding more changes than just taking the router from
    `app.router` instead of `app._router`.
    @see https://github.com/pillarjs/router

    TODO: Proper Express 5 support
    */
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.debug('Cannot instrument router for URL Parameterization (did not find a valid router).');
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .kg.debug('Routing instrumentation is currently only supported in Express 4.');
    return;
  }

  const routerProto = Object.getPrototypeOf(router) ;

  const originalProcessParams = routerProto.process_params;
  routerProto.process_params = function process_params(
    layer,
    called,
    req,
    res,
    done,
  ) {
    // Base case: We're in the first part of the URL (thus we start with the root '/')
    if (!req._reconstructedRoute) {
      req._reconstructedRoute = '';
    }

    // If the layer's partial route has params, is a regex or an array, the route is stored in layer.route.
    const { layerRoutePath, isRegex, isArray, numExtraSegments } = getLayerRoutePathInfo(layer);

    if (layerRoutePath || isRegex || isArray) {
      req._hasParameters = true;
    }

    // Otherwise, the hardcoded path (i.e. a partial route without params) is stored in layer.path
    const partialRoute = layerRoutePath || layer.path || '';

    // Normalize the partial route so that it doesn't contain leading or trailing slashes
    // and exclude empty or '*' wildcard routes.
    // The exclusion of '*' routes is our best effort to not "pollute" the transaction name
    // with interim handlers (e.g. ones that check authentication or do other middleware stuff).
    // We want to end up with the parameterized URL of the incoming request without any extraneous path segments.
    const finalPartialRoute = partialRoute
      .split('/')
      .filter(segment => segment.length > 0 && (isRegex || isArray || !segment.includes('*')))
      .join('/');

    // If we found a valid partial URL, we append it to the reconstructed route
    if (finalPartialRoute && finalPartialRoute.length > 0) {
      // If the partial route is from a regex route, we append a '/' to close the regex
      req._reconstructedRoute += `/${finalPartialRoute}${isRegex ? '/' : ''}`;
    }

    // Now we check if we are in the "last" part of the route. We determine this by comparing the
    // number of URL segments from the original URL to that of our reconstructed parameterized URL.
    // If we've reached our final destination, we update the transaction name.
    const urlLength = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(req.originalUrl || '') + numExtraSegments;
    const routeLength = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(req._reconstructedRoute);

    if (urlLength === routeLength) {
      if (!req._hasParameters) {
        if (req._reconstructedRoute !== req.originalUrl) {
          req._reconstructedRoute = req.originalUrl ? (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .stripUrlQueryAndFragment */ .rt)(req.originalUrl) : req.originalUrl;
        }
      }

      const transaction = res.__sentry_transaction;
      if (transaction && transaction.metadata.source !== 'custom') {
        // If the request URL is '/' or empty, the reconstructed route will be empty.
        // Therefore, we fall back to setting the final route to '/' in this case.
        const finalRoute = req._reconstructedRoute || '/';

        transaction.setName(...(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .extractPathForTransaction */ .oA)(req, { path: true, method: true, customRoute: finalRoute }));
      }
    }

    return originalProcessParams.call(this, layer, called, req, res, done);
  };
}

/**
 * Extracts and stringifies the layer's route which can either be a string with parameters (`users/:id`),
 * a RegEx (`/test/`) or an array of strings and regexes (`['/path1', /\/path[2-5]/, /path/:id]`). Additionally
 * returns extra information about the route, such as if the route is defined as regex or as an array.
 *
 * @param layer the layer to extract the stringified route from
 *
 * @returns an object containing the stringified route, a flag determining if the route was a regex
 *          and the number of extra segments to the matched path that are additionally in the route,
 *          if the route was an array (defaults to 0).
 */
function getLayerRoutePathInfo(layer) {
  const lrp = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__/* ._optionalChain */ .x)([layer, 'access', _10 => _10.route, 'optionalAccess', _11 => _11.path]);

  const isRegex = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isRegExp */ .Kj)(lrp);
  const isArray = Array.isArray(lrp);

  if (!lrp) {
    return { isRegex, isArray, numExtraSegments: 0 };
  }

  const numExtraSegments = isArray
    ? Math.max(getNumberOfArrayUrlSegments(lrp ) - (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(layer.path || ''), 0)
    : 0;

  const layerRoutePath = getLayerRoutePathString(isArray, lrp);

  return { layerRoutePath, isRegex, isArray, numExtraSegments };
}

/**
 * Returns the number of URL segments in an array of routes
 *
 * Example: ['/api/test', /\/api\/post[0-9]/, '/users/:id/details`] -> 7
 */
function getNumberOfArrayUrlSegments(routesArray) {
  return routesArray.reduce((accNumSegments, currentRoute) => {
    // array members can be a RegEx -> convert them toString
    return accNumSegments + (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNumberOfUrlSegments */ .$A)(currentRoute.toString());
  }, 0);
}

/**
 * Extracts and returns the stringified version of the layers route path
 * Handles route arrays (by joining the paths together) as well as RegExp and normal
 * string values (in the latter case the toString conversion is technically unnecessary but
 * it doesn't hurt us either).
 */
function getLayerRoutePathString(isArray, lrp) {
  if (isArray) {
    return (lrp ).map(r => r.toString()).join(',');
  }
  return lrp && lrp.toString();
}


//# sourceMappingURL=express.js.map


/***/ }),

/***/ 1791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ GraphQL)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4307);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2176);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(535);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7597);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7990);




/** Tracing integration for graphql package */
class GraphQL  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'GraphQL';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = GraphQL.id;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('graphql/execution/execute.js'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('GraphQL Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('GraphQL Integration was unable to require graphql/execution package.');
      return;
    }

    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(pkg, 'execute', function (orig) {
      return function ( ...args) {
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);

        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
          description: 'execute',
          op: 'graphql.execute',
        })]);

        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _6 => _6.setSpan, 'call', _7 => _7(span)]);

        const rv = orig.call(this, ...args);

        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isThenable */ .J8)(rv)) {
          return rv.then((res) => {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _10 => _10.setSpan, 'call', _11 => _11(parentSpan)]);

            return res;
          });
        }

        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _14 => _14.setSpan, 'call', _15 => _15(parentSpan)]);
        return rv;
      };
    });
  }
}GraphQL.__initStatic();


//# sourceMappingURL=graphql.js.map


/***/ }),

/***/ 6046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ lazyLoadedNodePerformanceMonitoringIntegrations)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2176);
/* module decorator */ module = __webpack_require__.hmd(module);


const lazyLoadedNodePerformanceMonitoringIntegrations = [
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dynamicRequire */ .l$)(module, './apollo')

;
    return new integration.Apollo();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dynamicRequire */ .l$)(module, './apollo')

;
    return new integration.Apollo({ useNestjs: true });
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dynamicRequire */ .l$)(module, './graphql')

;
    return new integration.GraphQL();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dynamicRequire */ .l$)(module, './mongo')

;
    return new integration.Mongo();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dynamicRequire */ .l$)(module, './mongo')

;
    return new integration.Mongo({ mongoose: true });
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dynamicRequire */ .l$)(module, './mysql')

;
    return new integration.Mysql();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dynamicRequire */ .l$)(module, './postgres')

;
    return new integration.Postgres();
  },
];


//# sourceMappingURL=lazy.js.map


/***/ }),

/***/ 6169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Mongo)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4307);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2176);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(535);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7597);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7990);




// This allows us to use the same array for both defaults options and the type itself.
// (note `as const` at the end to make it a union of string literal types (i.e. "a" | "b" | ... )
// and not just a string[])

const OPERATIONS = [
  'aggregate', // aggregate(pipeline, options, callback)
  'bulkWrite', // bulkWrite(operations, options, callback)
  'countDocuments', // countDocuments(query, options, callback)
  'createIndex', // createIndex(fieldOrSpec, options, callback)
  'createIndexes', // createIndexes(indexSpecs, options, callback)
  'deleteMany', // deleteMany(filter, options, callback)
  'deleteOne', // deleteOne(filter, options, callback)
  'distinct', // distinct(key, query, options, callback)
  'drop', // drop(options, callback)
  'dropIndex', // dropIndex(indexName, options, callback)
  'dropIndexes', // dropIndexes(options, callback)
  'estimatedDocumentCount', // estimatedDocumentCount(options, callback)
  'find', // find(query, options, callback)
  'findOne', // findOne(query, options, callback)
  'findOneAndDelete', // findOneAndDelete(filter, options, callback)
  'findOneAndReplace', // findOneAndReplace(filter, replacement, options, callback)
  'findOneAndUpdate', // findOneAndUpdate(filter, update, options, callback)
  'indexes', // indexes(options, callback)
  'indexExists', // indexExists(indexes, options, callback)
  'indexInformation', // indexInformation(options, callback)
  'initializeOrderedBulkOp', // initializeOrderedBulkOp(options, callback)
  'insertMany', // insertMany(docs, options, callback)
  'insertOne', // insertOne(doc, options, callback)
  'isCapped', // isCapped(options, callback)
  'mapReduce', // mapReduce(map, reduce, options, callback)
  'options', // options(options, callback)
  'parallelCollectionScan', // parallelCollectionScan(options, callback)
  'rename', // rename(newName, options, callback)
  'replaceOne', // replaceOne(filter, doc, options, callback)
  'stats', // stats(options, callback)
  'updateMany', // updateMany(filter, update, options, callback)
  'updateOne', // updateOne(filter, update, options, callback)
] ;

// All of the operations above take `options` and `callback` as their final parameters, but some of them
// take additional parameters as well. For those operations, this is a map of
// { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
// positional arguments when we add them to the span's `data` object later
const OPERATION_SIGNATURES

 = {
  // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
  // see https://github.com/getsentry/sentry-javascript/pull/3102
  bulkWrite: ['operations'],
  countDocuments: ['query'],
  createIndex: ['fieldOrSpec'],
  createIndexes: ['indexSpecs'],
  deleteMany: ['filter'],
  deleteOne: ['filter'],
  distinct: ['key', 'query'],
  dropIndex: ['indexName'],
  find: ['query'],
  findOne: ['query'],
  findOneAndDelete: ['filter'],
  findOneAndReplace: ['filter', 'replacement'],
  findOneAndUpdate: ['filter', 'update'],
  indexExists: ['indexes'],
  insertMany: ['docs'],
  insertOne: ['doc'],
  mapReduce: ['map', 'reduce'],
  rename: ['newName'],
  replaceOne: ['filter', 'doc'],
  updateMany: ['filter', 'update'],
  updateOne: ['filter', 'update'],
};

function isCursor(maybeCursor) {
  return maybeCursor && typeof maybeCursor === 'object' && maybeCursor.once && typeof maybeCursor.once === 'function';
}

/** Tracing integration for mongo package */
class Mongo  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Mongo';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Mongo.id;
    this._operations = Array.isArray(options.operations) ? options.operations : (OPERATIONS );
    this._describeOperations = 'describeOperations' in options ? options.describeOperations : true;
    this._useMongoose = !!options.useMongoose;
  }

  /** @inheritdoc */
   loadDependency() {
    const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)(moduleName));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Mongo Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error(`Mongo Integration was unable to require \`${moduleName}\` package.`);
      return;
    }

    this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
  }

  /**
   * Patches original collection methods
   */
   _instrumentOperations(collection, operations, getCurrentHub) {
    operations.forEach((operation) => this._patchOperation(collection, operation, getCurrentHub));
  }

  /**
   * Patches original collection to utilize our tracing functionality
   */
   _patchOperation(collection, operation, getCurrentHub) {
    if (!(operation in collection.prototype)) return;

    const getSpanContext = this._getSpanContextFromOperationArguments.bind(this);

    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(collection.prototype, operation, function (orig) {
      return function ( ...args) {
        const lastArg = args[args.length - 1];
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);

        // Check if the operation was passed a callback. (mapReduce requires a different check, as
        // its (non-callback) arguments can also be functions.)
        if (typeof lastArg !== 'function' || (operation === 'mapReduce' && args.length === 2)) {
          const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5(getSpanContext(this, operation, args))]);
          const maybePromiseOrCursor = orig.call(this, ...args);

          if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isThenable */ .J8)(maybePromiseOrCursor)) {
            return maybePromiseOrCursor.then((res) => {
              (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
              return res;
            });
          }
          // If the operation returns a Cursor
          // we need to attach a listener to it to finish the span when the cursor is closed.
          else if (isCursor(maybePromiseOrCursor)) {
            const cursor = maybePromiseOrCursor ;

            try {
              cursor.once('close', () => {
                (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
              });
            } catch (e) {
              // If the cursor is already closed, `once` will throw an error. In that case, we can
              // finish the span immediately.
              (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
            }

            return cursor;
          } else {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
            return maybePromiseOrCursor;
          }
        }

        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _14 => _14.startChild, 'call', _15 => _15(getSpanContext(this, operation, args.slice(0, -1)))]);

        return orig.call(this, ...args.slice(0, -1), function (err, result) {
          (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _16 => _16.finish, 'call', _17 => _17()]);
          lastArg(err, result);
        });
      };
    });
  }

  /**
   * Form a SpanContext based on the user input to a given operation.
   */
   _getSpanContextFromOperationArguments(
    collection,
    operation,
    args,
  ) {
    const data = {
      'db.system': 'mongodb',
      'db.name': collection.dbName,
      'db.operation': operation,
      'db.mongodb.collection': collection.collectionName,
    };
    const spanContext = {
      op: 'db',
      // TODO v8: Use `${collection.collectionName}.${operation}`
      description: operation,
      data,
    };

    // If the operation takes no arguments besides `options` and `callback`, or if argument
    // collection is disabled for this operation, just return early.
    const signature = OPERATION_SIGNATURES[operation];
    const shouldDescribe = Array.isArray(this._describeOperations)
      ? this._describeOperations.includes(operation)
      : this._describeOperations;

    if (!signature || !shouldDescribe) {
      return spanContext;
    }

    try {
      // Special case for `mapReduce`, as the only one accepting functions as arguments.
      if (operation === 'mapReduce') {
        const [map, reduce] = args ;
        data[signature[0]] = typeof map === 'string' ? map : map.name || '<anonymous>';
        data[signature[1]] = typeof reduce === 'string' ? reduce : reduce.name || '<anonymous>';
      } else {
        for (let i = 0; i < signature.length; i++) {
          data[`db.mongodb.${signature[i]}`] = JSON.stringify(args[i]);
        }
      }
    } catch (_oO) {
      // no-empty
    }

    return spanContext;
  }
}Mongo.__initStatic();


//# sourceMappingURL=mongo.js.map


/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ Mysql)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4307);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2176);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(535);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7990);




/** Tracing integration for node-mysql package */
class Mysql  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Mysql';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = Mysql.id;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('mysql/lib/Connection.js'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Mysql Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Mysql Integration was unable to require `mysql` package.');
      return;
    }

    let mySqlConfig = undefined;

    try {
      pkg.prototype.connect = new Proxy(pkg.prototype.connect, {
        apply(wrappingTarget, thisArg, args) {
          if (!mySqlConfig) {
            mySqlConfig = thisArg.config;
          }
          return wrappingTarget.apply(thisArg, args);
        },
      });
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Mysql Integration was unable to instrument `mysql` config.');
    }

    function spanDataFromConfig() {
      if (!mySqlConfig) {
        return {};
      }
      return {
        'server.address': mySqlConfig.host,
        'server.port': mySqlConfig.port,
        'db.user': mySqlConfig.user,
      };
    }

    // The original function will have one of these signatures:
    //    function (callback) => void
    //    function (options, callback) => void
    //    function (options, values, callback) => void
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .fill */ .hl)(pkg, 'createQuery', function (orig) {
      return function ( options, values, callback) {
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);
        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
          description: typeof options === 'string' ? options : (options ).sql,
          op: 'db',
          data: {
            ...spanDataFromConfig(),
            'db.system': 'mysql',
          },
        })]);

        if (typeof callback === 'function') {
          return orig.call(this, options, values, function (err, result, fields) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
            callback(err, result, fields);
          });
        }

        if (typeof values === 'function') {
          return orig.call(this, options, function (err, result, fields) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            values(err, result, fields);
          });
        }

        return orig.call(this, options, values, callback);
      };
    });
  }
}Mysql.__initStatic();


//# sourceMappingURL=mysql.js.map


/***/ }),

/***/ 1370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Postgres)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4307);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2176);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(535);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7597);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7990);




/** Tracing integration for node-postgres package */
class Postgres  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Postgres';}

  /**
   * @inheritDoc
   */

   constructor(options = {}) {
    this.name = Postgres.id;
    this._usePgNative = !!options.usePgNative;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .loadModule */ .$y)('pg'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('Postgres Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error('Postgres Integration was unable to require `pg` package.');
      return;
    }

    if (this._usePgNative && !(0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([pkg, 'access', _2 => _2.native, 'optionalAccess', _3 => _3.Client])) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.error("Postgres Integration was unable to access 'pg-native' bindings.");
      return;
    }

    const { Client } = this._usePgNative ? pkg.native : pkg;

    /**
     * function (query, callback) => void
     * function (query, params, callback) => void
     * function (query) => Promise
     * function (query, params) => Promise
     * function (pg.Cursor) => pg.Cursor
     */
    (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .fill */ .hl)(Client.prototype, 'query', function (orig) {
      return function ( config, values, callback) {
        const scope = getCurrentHub().getScope();
        const parentSpan = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([scope, 'optionalAccess', _4 => _4.getSpan, 'call', _5 => _5()]);

        const data = {
          'db.system': 'postgresql',
        };

        try {
          if (this.database) {
            data['db.name'] = this.database;
          }
          if (this.host) {
            data['server.address'] = this.host;
          }
          if (this.port) {
            data['server.port'] = this.port;
          }
          if (this.user) {
            data['db.user'] = this.user;
          }
        } catch (e) {
          // ignore
        }

        const span = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([parentSpan, 'optionalAccess', _6 => _6.startChild, 'call', _7 => _7({
          description: typeof config === 'string' ? config : (config ).text,
          op: 'db',
          data,
        })]);

        if (typeof callback === 'function') {
          return orig.call(this, config, values, function (err, result) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            callback(err, result);
          });
        }

        if (typeof values === 'function') {
          return orig.call(this, config, function (err, result) {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
            values(err, result);
          });
        }

        const rv = typeof values !== 'undefined' ? orig.call(this, config, values) : orig.call(this, config);

        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .isThenable */ .J8)(rv)) {
          return rv.then((res) => {
            (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
            return res;
          });
        }

        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__/* ._optionalChain */ .x)([span, 'optionalAccess', _14 => _14.finish, 'call', _15 => _15()]);
        return rv;
      };
    });
  }
}Postgres.__initStatic();


//# sourceMappingURL=postgres.js.map


/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Prisma)
/* harmony export */ });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5659);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1250);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(535);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2343);
/* harmony import */ var _utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7990);




function isValidPrismaClient(possibleClient) {
  return !!possibleClient && !!(possibleClient )['$use'];
}

/** Tracing integration for @prisma/client package */
class Prisma  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Prisma';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Prisma.id;

    // We instrument the PrismaClient inside the constructor and not inside `setupOnce` because in some cases of server-side
    // bundling (Next.js) multiple Prisma clients can be instantiated, even though users don't intend to. When instrumenting
    // in setupOnce we can only ever instrument one client.
    // https://github.com/getsentry/sentry-javascript/issues/7216#issuecomment-1602375012
    // In the future we might explore providing a dedicated PrismaClient middleware instead of this hack.
    if (isValidPrismaClient(options.client) && !options.client._sentryInstrumented) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .addNonEnumerableProperty */ .xp)(options.client , '_sentryInstrumented', true);

      options.client.$use((params, next) => {
        if ((0,_utils_node_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldDisableAutoInstrumentation */ .K)(_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentHub */ .Gd)) {
          return next(params);
        }

        const action = params.action;
        const model = params.model;
        return (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .trace */ .g)(
          { name: model ? `${model} ${action}` : action, op: 'db.sql.prisma', data: { 'db.system': 'prisma' } },
          () => next(params),
        );
      });
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .kg.warn('Unsupported Prisma client provided to PrismaIntegration. Provided client:', options.client);
    }
  }

  /**
   * @inheritDoc
   */
   setupOnce() {
    // Noop - here for backwards compatibility
  }
} Prisma.__initStatic();


//# sourceMappingURL=prisma.js.map


/***/ }),

/***/ 7990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ shouldDisableAutoInstrumentation)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4307);


/**
 * Check if Sentry auto-instrumentation should be disabled.
 *
 * @param getCurrentHub A method to fetch the current hub
 * @returns boolean
 */
function shouldDisableAutoInstrumentation(getCurrentHub) {
  const clientOptions = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__/* ._optionalChain */ .x)([getCurrentHub, 'call', _ => _(), 'access', _2 => _2.getClient, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getOptions, 'call', _5 => _5()]);
  const instrumenter = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__/* ._optionalChain */ .x)([clientOptions, 'optionalAccess', _6 => _6.instrumenter]) || 'sentry';

  return instrumenter !== 'sentry';
}


//# sourceMappingURL=node-utils.js.map


/***/ }),

/***/ 1131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ DEFAULT_ENVIRONMENT)
/* harmony export */ });
const DEFAULT_ENVIRONMENT = 'production';


//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 5659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $b: () => (/* binding */ setAsyncContextStrategy),
/* harmony export */   Gd: () => (/* binding */ getCurrentHub),
/* harmony export */   Ok: () => (/* binding */ runWithAsyncContext),
/* harmony export */   Xb: () => (/* binding */ Hub),
/* harmony export */   cu: () => (/* binding */ getMainCarrier),
/* harmony export */   j0: () => (/* binding */ setHubOnCarrier),
/* harmony export */   pj: () => (/* binding */ makeMain),
/* harmony export */   uZ: () => (/* binding */ ensureHubOnCarrier),
/* harmony export */   vi: () => (/* binding */ getHubFromCarrier)
/* harmony export */ });
/* unused harmony export API_VERSION */
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2844);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1170);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1235);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1131);
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9015);





/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
const API_VERSION = 4;

/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
const DEFAULT_BREADCRUMBS = 100;

/**
 * @inheritDoc
 */
class Hub  {
  /** Is a {@link Layer}[] containing the client and scope */

  /** Contains the last event id of a captured event.  */

  /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   */
   constructor(client, scope = new _scope_js__WEBPACK_IMPORTED_MODULE_0__/* .Scope */ .s(),   _version = API_VERSION) {this._version = _version;
    this._stack = [{ scope }];
    if (client) {
      this.bindClient(client);
    }
  }

  /**
   * @inheritDoc
   */
   isOlderThan(version) {
    return this._version < version;
  }

  /**
   * @inheritDoc
   */
   bindClient(client) {
    const top = this.getStackTop();
    top.client = client;
    if (client && client.setupIntegrations) {
      client.setupIntegrations();
    }
  }

  /**
   * @inheritDoc
   */
   pushScope() {
    // We want to clone the content of prev scope
    const scope = _scope_js__WEBPACK_IMPORTED_MODULE_0__/* .Scope */ .s.clone(this.getScope());
    this.getStack().push({
      client: this.getClient(),
      scope,
    });
    return scope;
  }

  /**
   * @inheritDoc
   */
   popScope() {
    if (this.getStack().length <= 1) return false;
    return !!this.getStack().pop();
  }

  /**
   * @inheritDoc
   */
   withScope(callback) {
    const scope = this.pushScope();
    try {
      callback(scope);
    } finally {
      this.popScope();
    }
  }

  /**
   * @inheritDoc
   */
   getClient() {
    return this.getStackTop().client ;
  }

  /** Returns the scope of the top stack. */
   getScope() {
    return this.getStackTop().scope;
  }

  /** Returns the scope stack for domains or the process. */
   getStack() {
    return this._stack;
  }

  /** Returns the topmost scope layer in the order domain > local > process. */
   getStackTop() {
    return this._stack[this._stack.length - 1];
  }

  /**
   * @inheritDoc
   */
   captureException(exception, hint) {
    const eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)());
    const syntheticException = new Error('Sentry syntheticException');
    this._withClient((client, scope) => {
      client.captureException(
        exception,
        {
          originalException: exception,
          syntheticException,
          ...hint,
          event_id: eventId,
        },
        scope,
      );
    });
    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureMessage(
    message,
    // eslint-disable-next-line deprecation/deprecation
    level,
    hint,
  ) {
    const eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)());
    const syntheticException = new Error(message);
    this._withClient((client, scope) => {
      client.captureMessage(
        message,
        level,
        {
          originalException: message,
          syntheticException,
          ...hint,
          event_id: eventId,
        },
        scope,
      );
    });
    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureEvent(event, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)();
    if (!event.type) {
      this._lastEventId = eventId;
    }

    this._withClient((client, scope) => {
      client.captureEvent(event, { ...hint, event_id: eventId }, scope);
    });
    return eventId;
  }

  /**
   * @inheritDoc
   */
   lastEventId() {
    return this._lastEventId;
  }

  /**
   * @inheritDoc
   */
   addBreadcrumb(breadcrumb, hint) {
    const { scope, client } = this.getStackTop();

    if (!client) return;

    const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } =
      (client.getOptions && client.getOptions()) || {};

    if (maxBreadcrumbs <= 0) return;

    const timestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .dateTimestampInSeconds */ .yW)();
    const mergedBreadcrumb = { timestamp, ...breadcrumb };
    const finalBreadcrumb = beforeBreadcrumb
      ? ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .consoleSandbox */ .Cf)(() => beforeBreadcrumb(mergedBreadcrumb, hint)) )
      : mergedBreadcrumb;

    if (finalBreadcrumb === null) return;

    if (client.emit) {
      client.emit('beforeAddBreadcrumb', finalBreadcrumb, hint);
    }

    scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
  }

  /**
   * @inheritDoc
   */
   setUser(user) {
    this.getScope().setUser(user);
  }

  /**
   * @inheritDoc
   */
   setTags(tags) {
    this.getScope().setTags(tags);
  }

  /**
   * @inheritDoc
   */
   setExtras(extras) {
    this.getScope().setExtras(extras);
  }

  /**
   * @inheritDoc
   */
   setTag(key, value) {
    this.getScope().setTag(key, value);
  }

  /**
   * @inheritDoc
   */
   setExtra(key, extra) {
    this.getScope().setExtra(key, extra);
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
   setContext(name, context) {
    this.getScope().setContext(name, context);
  }

  /**
   * @inheritDoc
   */
   configureScope(callback) {
    const { scope, client } = this.getStackTop();
    if (client) {
      callback(scope);
    }
  }

  /**
   * @inheritDoc
   */
   run(callback) {
    const oldHub = makeMain(this);
    try {
      callback(this);
    } finally {
      makeMain(oldHub);
    }
  }

  /**
   * @inheritDoc
   */
   getIntegration(integration) {
    const client = this.getClient();
    if (!client) return null;
    try {
      return client.getIntegration(integration);
    } catch (_oO) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
      return null;
    }
  }

  /**
   * @inheritDoc
   */
   startTransaction(context, customSamplingContext) {
    const result = this._callExtensionMethod('startTransaction', context, customSamplingContext);

    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && !result) {
      // eslint-disable-next-line no-console
      console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
    }

    return result;
  }

  /**
   * @inheritDoc
   */
   traceHeaders() {
    return this._callExtensionMethod('traceHeaders');
  }

  /**
   * @inheritDoc
   */
   captureSession(endSession = false) {
    // both send the update and pull the session from the scope
    if (endSession) {
      return this.endSession();
    }

    // only send the update
    this._sendSessionUpdate();
  }

  /**
   * @inheritDoc
   */
   endSession() {
    const layer = this.getStackTop();
    const scope = layer.scope;
    const session = scope.getSession();
    if (session) {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_4__/* .closeSession */ .RJ)(session);
    }
    this._sendSessionUpdate();

    // the session is over; take it off of the scope
    scope.setSession();
  }

  /**
   * @inheritDoc
   */
   startSession(context) {
    const { scope, client } = this.getStackTop();
    const { release, environment = _constants_js__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_ENVIRONMENT */ .J } = (client && client.getOptions()) || {};

    // Will fetch userAgent if called from browser sdk
    const { userAgent } = _sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .GLOBAL_OBJ */ .n2.navigator || {};

    const session = (0,_session_js__WEBPACK_IMPORTED_MODULE_4__/* .makeSession */ .Hv)({
      release,
      environment,
      user: scope.getUser(),
      ...(userAgent && { userAgent }),
      ...context,
    });

    // End existing session if there's one
    const currentSession = scope.getSession && scope.getSession();
    if (currentSession && currentSession.status === 'ok') {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_4__/* .updateSession */ .CT)(currentSession, { status: 'exited' });
    }
    this.endSession();

    // Afterwards we set the new session on the scope
    scope.setSession(session);

    return session;
  }

  /**
   * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
   * when Tracing is used.
   */
   shouldSendDefaultPii() {
    const client = this.getClient();
    const options = client && client.getOptions();
    return Boolean(options && options.sendDefaultPii);
  }

  /**
   * Sends the current Session on the scope
   */
   _sendSessionUpdate() {
    const { scope, client } = this.getStackTop();

    const session = scope.getSession();
    if (session && client && client.captureSession) {
      client.captureSession(session);
    }
  }

  /**
   * Internal helper function to call a method on the top client if it exists.
   *
   * @param method The method to call on the client.
   * @param args Arguments to pass to the client function.
   */
   _withClient(callback) {
    const { scope, client } = this.getStackTop();
    if (client) {
      callback(client, scope);
    }
  }

  /**
   * Calls global extension method and binding current instance to the function call
   */
  // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
   _callExtensionMethod(method, ...args) {
    const carrier = getMainCarrier();
    const sentry = carrier.__SENTRY__;
    if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
      return sentry.extensions[method].apply(this, args);
    }
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.warn(`Extension method ${method} couldn't be found, doing nothing.`);
  }
}

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
  _sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .GLOBAL_OBJ */ .n2.__SENTRY__ = _sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .GLOBAL_OBJ */ .n2.__SENTRY__ || {
    extensions: {},
    hub: undefined,
  };
  return _sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .GLOBAL_OBJ */ .n2;
}

/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
  const registry = getMainCarrier();
  const oldHub = getHubFromCarrier(registry);
  setHubOnCarrier(registry, hub);
  return oldHub;
}

/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
  // Get main carrier (global for every environment)
  const registry = getMainCarrier();

  if (registry.__SENTRY__ && registry.__SENTRY__.acs) {
    const hub = registry.__SENTRY__.acs.getCurrentHub();

    if (hub) {
      return hub;
    }
  }

  // Return hub that lives on a global object
  return getGlobalHub(registry);
}

function getGlobalHub(registry = getMainCarrier()) {
  // If there's no hub, or its an old API, assign a new one
  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
    setHubOnCarrier(registry, new Hub());
  }

  // Return hub that lives on a global object
  return getHubFromCarrier(registry);
}

/**
 * @private Private API with no semver guarantees!
 *
 * If the carrier does not contain a hub, a new hub is created with the global hub client and scope.
 */
function ensureHubOnCarrier(carrier, parent = getGlobalHub()) {
  // If there's no hub on current domain, or it's an old API, assign a new one
  if (!hasHubOnCarrier(carrier) || getHubFromCarrier(carrier).isOlderThan(API_VERSION)) {
    const globalHubTopStack = parent.getStackTop();
    setHubOnCarrier(carrier, new Hub(globalHubTopStack.client, _scope_js__WEBPACK_IMPORTED_MODULE_0__/* .Scope */ .s.clone(globalHubTopStack.scope)));
  }
}

/**
 * @private Private API with no semver guarantees!
 *
 * Sets the global async context strategy
 */
function setAsyncContextStrategy(strategy) {
  // Get main carrier (global for every environment)
  const registry = getMainCarrier();
  registry.__SENTRY__ = registry.__SENTRY__ || {};
  registry.__SENTRY__.acs = strategy;
}

/**
 * Runs the supplied callback in its own async context. Async Context strategies are defined per SDK.
 *
 * @param callback The callback to run in its own async context
 * @param options Options to pass to the async context strategy
 * @returns The result of the callback
 */
function runWithAsyncContext(callback, options = {}) {
  const registry = getMainCarrier();

  if (registry.__SENTRY__ && registry.__SENTRY__.acs) {
    return registry.__SENTRY__.acs.runWithAsyncContext(callback, options);
  }

  // if there was no strategy, fallback to just calling the callback
  return callback();
}

/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
  return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}

/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
  return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .getGlobalSingleton */ .YO)('hub', () => new Hub(), carrier);
}

/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
  if (!carrier) return false;
  const __SENTRY__ = (carrier.__SENTRY__ = carrier.__SENTRY__ || {});
  __SENTRY__.hub = hub;
  return true;
}


//# sourceMappingURL=hub.js.map


/***/ }),

/***/ 350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ addGlobalEventProcessor),
/* harmony export */   s: () => (/* binding */ Scope)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7597);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1170);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6893);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2844);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1235);
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9015);



/**
 * Default value for maximum number of breadcrumbs added to an event.
 */
const DEFAULT_MAX_BREADCRUMBS = 100;

/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
class Scope  {
  /** Flag if notifying is happening. */

  /** Callback for client to receive scope changes. */

  /** Callback list that will be called after {@link applyToEvent}. */

  /** Array of breadcrumbs. */

  /** User */

  /** Tags */

  /** Extra */

  /** Contexts */

  /** Attachments */

  /** Propagation Context for distributed tracing */

  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */

  /** Fingerprint */

  /** Severity */
  // eslint-disable-next-line deprecation/deprecation

  /** Transaction Name */

  /** Span */

  /** Session */

  /** Request Mode Session Status */

  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.

   constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = generatePropagationContext();
  }

  /**
   * Inherit values from the parent scope.
   * @param scope to clone.
   */
   static clone(scope) {
    const newScope = new Scope();
    if (scope) {
      newScope._breadcrumbs = [...scope._breadcrumbs];
      newScope._tags = { ...scope._tags };
      newScope._extra = { ...scope._extra };
      newScope._contexts = { ...scope._contexts };
      newScope._user = scope._user;
      newScope._level = scope._level;
      newScope._span = scope._span;
      newScope._session = scope._session;
      newScope._transactionName = scope._transactionName;
      newScope._fingerprint = scope._fingerprint;
      newScope._eventProcessors = [...scope._eventProcessors];
      newScope._requestSession = scope._requestSession;
      newScope._attachments = [...scope._attachments];
      newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
      newScope._propagationContext = { ...scope._propagationContext };
    }
    return newScope;
  }

  /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */
   addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }

  /**
   * @inheritDoc
   */
   addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }

  /**
   * @inheritDoc
   */
   setUser(user) {
    this._user = user || {};
    if (this._session) {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_0__/* .updateSession */ .CT)(this._session, { user });
    }
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getUser() {
    return this._user;
  }

  /**
   * @inheritDoc
   */
   getRequestSession() {
    return this._requestSession;
  }

  /**
   * @inheritDoc
   */
   setRequestSession(requestSession) {
    this._requestSession = requestSession;
    return this;
  }

  /**
   * @inheritDoc
   */
   setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setTag(key, value) {
    this._tags = { ...this._tags, [key]: value };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setLevel(
    // eslint-disable-next-line deprecation/deprecation
    level,
  ) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setContext(key, context) {
    if (context === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }

    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setSpan(span) {
    this._span = span;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getSpan() {
    return this._span;
  }

  /**
   * @inheritDoc
   */
   getTransaction() {
    // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
    // have a pointer to the currently-active transaction.
    const span = this.getSpan();
    return span && span.transaction;
  }

  /**
   * @inheritDoc
   */
   setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getSession() {
    return this._session;
  }

  /**
   * @inheritDoc
   */
   update(captureContext) {
    if (!captureContext) {
      return this;
    }

    if (typeof captureContext === 'function') {
      const updatedScope = (captureContext )(this);
      return updatedScope instanceof Scope ? updatedScope : this;
    }

    if (captureContext instanceof Scope) {
      this._tags = { ...this._tags, ...captureContext._tags };
      this._extra = { ...this._extra, ...captureContext._extra };
      this._contexts = { ...this._contexts, ...captureContext._contexts };
      if (captureContext._user && Object.keys(captureContext._user).length) {
        this._user = captureContext._user;
      }
      if (captureContext._level) {
        this._level = captureContext._level;
      }
      if (captureContext._fingerprint) {
        this._fingerprint = captureContext._fingerprint;
      }
      if (captureContext._requestSession) {
        this._requestSession = captureContext._requestSession;
      }
      if (captureContext._propagationContext) {
        this._propagationContext = captureContext._propagationContext;
      }
    } else if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .PO)(captureContext)) {
      // eslint-disable-next-line no-param-reassign
      captureContext = captureContext ;
      this._tags = { ...this._tags, ...captureContext.tags };
      this._extra = { ...this._extra, ...captureContext.extra };
      this._contexts = { ...this._contexts, ...captureContext.contexts };
      if (captureContext.user) {
        this._user = captureContext.user;
      }
      if (captureContext.level) {
        this._level = captureContext.level;
      }
      if (captureContext.fingerprint) {
        this._fingerprint = captureContext.fingerprint;
      }
      if (captureContext.requestSession) {
        this._requestSession = captureContext.requestSession;
      }
      if (captureContext.propagationContext) {
        this._propagationContext = captureContext.propagationContext;
      }
    }

    return this;
  }

  /**
   * @inheritDoc
   */
   clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._requestSession = undefined;
    this._span = undefined;
    this._session = undefined;
    this._notifyScopeListeners();
    this._attachments = [];
    this._propagationContext = generatePropagationContext();
    return this;
  }

  /**
   * @inheritDoc
   */
   addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;

    // No data has been changed, so don't notify scope listeners
    if (maxCrumbs <= 0) {
      return this;
    }

    const mergedBreadcrumb = {
      timestamp: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .dateTimestampInSeconds */ .yW)(),
      ...breadcrumb,
    };
    this._breadcrumbs = [...this._breadcrumbs, mergedBreadcrumb].slice(-maxCrumbs);
    this._notifyScopeListeners();

    return this;
  }

  /**
   * @inheritDoc
   */
   getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }

  /**
   * @inheritDoc
   */
   clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }

  /**
   * @inheritDoc
   */
   getAttachments() {
    return this._attachments;
  }

  /**
   * @inheritDoc
   */
   clearAttachments() {
    this._attachments = [];
    return this;
  }

  /**
   * Applies data from the scope to the event and runs all event processors on it.
   *
   * @param event Event
   * @param hint Object containing additional information about the original exception, for use by the event processors.
   * @hidden
   */
   applyToEvent(event, hint = {}) {
    if (this._extra && Object.keys(this._extra).length) {
      event.extra = { ...this._extra, ...event.extra };
    }
    if (this._tags && Object.keys(this._tags).length) {
      event.tags = { ...this._tags, ...event.tags };
    }
    if (this._user && Object.keys(this._user).length) {
      event.user = { ...this._user, ...event.user };
    }
    if (this._contexts && Object.keys(this._contexts).length) {
      event.contexts = { ...this._contexts, ...event.contexts };
    }
    if (this._level) {
      event.level = this._level;
    }
    if (this._transactionName) {
      event.transaction = this._transactionName;
    }

    // We want to set the trace context for normal events only if there isn't already
    // a trace context on the event. There is a product feature in place where we link
    // errors with transaction and it relies on that.
    if (this._span) {
      event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
      const transaction = this._span.transaction;
      if (transaction) {
        event.sdkProcessingMetadata = {
          dynamicSamplingContext: transaction.getDynamicSamplingContext(),
          ...event.sdkProcessingMetadata,
        };
        const transactionName = transaction.name;
        if (transactionName) {
          event.tags = { transaction: transactionName, ...event.tags };
        }
      }
    }

    this._applyFingerprint(event);

    event.breadcrumbs = [...(event.breadcrumbs || []), ...this._breadcrumbs];
    event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;

    event.sdkProcessingMetadata = {
      ...event.sdkProcessingMetadata,
      ...this._sdkProcessingMetadata,
      propagationContext: this._propagationContext,
    };

    return this._notifyEventProcessors([...getGlobalEventProcessors(), ...this._eventProcessors], event, hint);
  }

  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry
   */
   setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };

    return this;
  }

  /**
   * @inheritDoc
   */
   setPropagationContext(context) {
    this._propagationContext = context;
    return this;
  }

  /**
   * @inheritDoc
   */
   getPropagationContext() {
    return this._propagationContext;
  }

  /**
   * This will be called after {@link applyToEvent} is finished.
   */
   _notifyEventProcessors(
    processors,
    event,
    hint,
    index = 0,
  ) {
    return new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .SyncPromise */ .cW((resolve, reject) => {
      const processor = processors[index];
      if (event === null || typeof processor !== 'function') {
        resolve(event);
      } else {
        const result = processor({ ...event }, hint) ;

        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          processor.id &&
          result === null &&
          _sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .kg.log(`Event processor "${processor.id}" dropped event`);

        if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .isThenable */ .J8)(result)) {
          void result
            .then(final => this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve))
            .then(null, reject);
        } else {
          void this._notifyEventProcessors(processors, result, hint, index + 1)
            .then(resolve)
            .then(null, reject);
        }
      }
    });
  }

  /**
   * This will be called on every set call.
   */
   _notifyScopeListeners() {
    // We need this check for this._notifyingListeners to be able to work on scope during updates
    // If this check is not here we'll produce endless recursion when something is done with the scope
    // during the callback.
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(callback => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }

  /**
   * Applies fingerprint from the scope to the event if there's one,
   * uses message if there's one instead or get rid of empty fingerprint
   */
   _applyFingerprint(event) {
    // Make sure it's an array first and we actually have something in place
    event.fingerprint = event.fingerprint ? (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .arrayify */ .lE)(event.fingerprint) : [];

    // If we have something on the scope, then merge it with event
    if (this._fingerprint) {
      event.fingerprint = event.fingerprint.concat(this._fingerprint);
    }

    // If we have no data at all, remove empty array default
    if (event.fingerprint && !event.fingerprint.length) {
      delete event.fingerprint;
    }
  }
}

/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
  return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__/* .getGlobalSingleton */ .YO)('globalEventProcessors', () => []);
}

/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
  getGlobalEventProcessors().push(callback);
}

function generatePropagationContext() {
  return {
    traceId: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .uuid4 */ .DM)(),
    spanId: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .uuid4 */ .DM)().substring(16),
    sampled: false,
  };
}


//# sourceMappingURL=scope.js.map


/***/ }),

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CT: () => (/* binding */ updateSession),
/* harmony export */   Hv: () => (/* binding */ makeSession),
/* harmony export */   RJ: () => (/* binding */ closeSession)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1170);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2844);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(535);


/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */
function makeSession(context) {
  // Both timestamp and started are in seconds since the UNIX epoch.
  const startingTime = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .timestampInSeconds */ .ph)();

  const session = {
    sid: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: 'ok',
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session),
  };

  if (context) {
    updateSession(session, context);
  }

  return session;
}

/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see BaseClient.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */
// eslint-disable-next-line complexity
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }

    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }

  session.timestamp = context.timestamp || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .timestampInSeconds */ .ph)();

  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    // Good enough uuid validation. — Kamil
    session.sid = context.sid.length === 32 ? context.sid : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)();
  }
  if (context.init !== undefined) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === 'number') {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = undefined;
  } else if (typeof context.duration === 'number') {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === 'number') {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}

/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = { status };
  } else if (session.status === 'ok') {
    context = { status: 'exited' };
  }

  updateSession(session, context);
}

/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */
function sessionToJSON(session) {
  return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .dropUndefinedKeys */ .Jr)({
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1000).toISOString(),
    timestamp: new Date(session.timestamp * 1000).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === 'number' || typeof session.did === 'string' ? `${session.did}` : undefined,
    duration: session.duration,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent,
    },
  });
}


//# sourceMappingURL=session.js.map


/***/ }),

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getDynamicSamplingContextFromClient)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(535);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1131);



/**
 * Creates a dynamic sampling context from a client.
 *
 * Dispatchs the `createDsc` lifecycle hook as a side effect.
 */
function getDynamicSamplingContextFromClient(
  trace_id,
  client,
  scope,
) {
  const options = client.getOptions();

  const { publicKey: public_key } = client.getDsn() || {};
  const { segment: user_segment } = (scope && scope.getUser()) || {};

  const dsc = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .dropUndefinedKeys */ .Jr)({
    environment: options.environment || _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENVIRONMENT */ .J,
    release: options.release,
    user_segment,
    public_key,
    trace_id,
  }) ;

  client.emit && client.emit('createDsc', dsc);

  return dsc;
}


//# sourceMappingURL=dynamicSamplingContext.js.map


/***/ }),

/***/ 6890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ addTracingExtensions),
  l: () => (/* binding */ startIdleTransaction)
});

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(2343);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(7597);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/hub.js
var hub = __webpack_require__(5659);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/utils/hasTracingEnabled.js
var hasTracingEnabled = __webpack_require__(7522);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/instrument.js + 2 modules
var instrument = __webpack_require__(1688);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/utils.js
var utils = __webpack_require__(9791);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/tracing/errors.js



let errorsInstrumented = false;

/**
 * Configures global error listeners
 */
function registerErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }

  errorsInstrumented = true;
  (0,instrument/* addInstrumentationHandler */.oq)('error', errorCallback);
  (0,instrument/* addInstrumentationHandler */.oq)('unhandledrejection', errorCallback);
}

/**
 * If an error or unhandled promise occurs, we mark the active transaction as failed
 */
function errorCallback() {
  const activeTransaction = (0,utils/* getActiveTransaction */.x1)();
  if (activeTransaction) {
    const status = 'internal_error';
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`[Tracing] Transaction: ${status} -> Global error occured`);
    activeTransaction.setStatus(status);
  }
}

// The function name will be lost when bundling but we need to be able to identify this listener later to maintain the
// node.js default exit behaviour
errorCallback.tag = 'sentry_tracingErrorCallback';


//# sourceMappingURL=errors.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/idletransaction.js
var idletransaction = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/transaction.js
var tracing_transaction = __webpack_require__(8069);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/tracing/hubextensions.js







/** Returns all trace headers that are currently on the top scope. */
function traceHeaders() {
  const scope = this.getScope();
  const span = scope.getSpan();

  return span
    ? {
        'sentry-trace': span.toTraceparent(),
      }
    : {};
}

/**
 * Makes a sampling decision for the given transaction and stores it on the transaction.
 *
 * Called every time a transaction is created. Only transactions which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 *
 * @param transaction: The transaction needing a sampling decision
 * @param options: The current client's options, so we can access `tracesSampleRate` and/or `tracesSampler`
 * @param samplingContext: Default and user-provided data which may be used to help make the decision
 *
 * @returns The given transaction with its `sampled` value set
 */
function sample(
  transaction,
  options,
  samplingContext,
) {
  // nothing to do if tracing is not enabled
  if (!(0,hasTracingEnabled/* hasTracingEnabled */.z)(options)) {
    transaction.sampled = false;
    return transaction;
  }

  // if the user has forced a sampling decision by passing a `sampled` value in their transaction context, go with that
  if (transaction.sampled !== undefined) {
    transaction.setMetadata({
      sampleRate: Number(transaction.sampled),
    });
    return transaction;
  }

  // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` nor `enableTracing` were defined, so one of these should
  // work; prefer the hook if so
  let sampleRate;
  if (typeof options.tracesSampler === 'function') {
    sampleRate = options.tracesSampler(samplingContext);
    transaction.setMetadata({
      sampleRate: Number(sampleRate),
    });
  } else if (samplingContext.parentSampled !== undefined) {
    sampleRate = samplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== 'undefined') {
    sampleRate = options.tracesSampleRate;
    transaction.setMetadata({
      sampleRate: Number(sampleRate),
    });
  } else {
    // When `enableTracing === true`, we use a sample rate of 100%
    sampleRate = 1;
    transaction.setMetadata({
      sampleRate,
    });
  }

  // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
  // only valid values are booleans or numbers between 0 and 1.)
  if (!isValidSampleRate(sampleRate)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('[Tracing] Discarding transaction because of invalid sample rate.');
    transaction.sampled = false;
    return transaction;
  }

  // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
  if (!sampleRate) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.log(
        `[Tracing] Discarding transaction because ${
          typeof options.tracesSampler === 'function'
            ? 'tracesSampler returned 0 or false'
            : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
        }`,
      );
    transaction.sampled = false;
    return transaction;
  }

  // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
  // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
  transaction.sampled = Math.random() < (sampleRate );

  // if we're not going to keep it, we're done
  if (!transaction.sampled) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.log(
        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
          sampleRate,
        )})`,
      );
    return transaction;
  }

  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
  return transaction;
}

/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 */
function isValidSampleRate(rate) {
  // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((0,is/* isNaN */.i2)(rate) || !(typeof rate === 'number' || typeof rate === 'boolean')) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          rate,
        )} of type ${JSON.stringify(typeof rate)}.`,
      );
    return false;
  }

  // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
  if (rate < 0 || rate > 1) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
    return false;
  }
  return true;
}

/**
 * Creates a new transaction and adds a sampling decision if it doesn't yet have one.
 *
 * The Hub.startTransaction method delegates to this method to do its work, passing the Hub instance in as `this`, as if
 * it had been called on the hub directly. Exists as a separate function so that it can be injected into the class as an
 * "extension method."
 *
 * @param this: The Hub starting the transaction
 * @param transactionContext: Data used to configure the transaction
 * @param CustomSamplingContext: Optional data to be provided to the `tracesSampler` function (if any)
 *
 * @returns The new transaction
 *
 * @see {@link Hub.startTransaction}
 */
function _startTransaction(

  transactionContext,
  customSamplingContext,
) {
  const client = this.getClient();
  const options = (client && client.getOptions()) || {};

  const configInstrumenter = options.instrumenter || 'sentry';
  const transactionInstrumenter = transactionContext.instrumenter || 'sentry';

  if (configInstrumenter !== transactionInstrumenter) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.error(
        `A transaction was started with instrumenter=\`${transactionInstrumenter}\`, but the SDK is configured with the \`${configInstrumenter}\` instrumenter.
The transaction will not be sampled. Please use the ${configInstrumenter} instrumentation to start transactions.`,
      );

    transactionContext.sampled = false;
  }

  let transaction = new tracing_transaction/* Transaction */.Y(transactionContext, this);
  transaction = sample(transaction, options, {
    parentSampled: transactionContext.parentSampled,
    transactionContext,
    ...customSamplingContext,
  });
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && (options._experiments.maxSpans ));
  }
  if (client && client.emit) {
    client.emit('startTransaction', transaction);
  }
  return transaction;
}

/**
 * Create new idle transaction.
 */
function startIdleTransaction(
  hub,
  transactionContext,
  idleTimeout,
  finalTimeout,
  onScope,
  customSamplingContext,
  heartbeatInterval,
) {
  const client = hub.getClient();
  const options = (client && client.getOptions()) || {};

  let transaction = new idletransaction/* IdleTransaction */.io(transactionContext, hub, idleTimeout, finalTimeout, heartbeatInterval, onScope);
  transaction = sample(transaction, options, {
    parentSampled: transactionContext.parentSampled,
    transactionContext,
    ...customSamplingContext,
  });
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && (options._experiments.maxSpans ));
  }
  if (client && client.emit) {
    client.emit('startTransaction', transaction);
  }
  return transaction;
}

/**
 * Adds tracing extensions to the global hub.
 */
function addTracingExtensions() {
  const carrier = (0,hub/* getMainCarrier */.cu)();
  if (!carrier.__SENTRY__) {
    return;
  }
  carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
  if (!carrier.__SENTRY__.extensions.startTransaction) {
    carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
  }
  if (!carrier.__SENTRY__.extensions.traceHeaders) {
    carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
  }

  registerErrorInstrumentation();
}


//# sourceMappingURL=hubextensions.js.map


/***/ }),

/***/ 5544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AT: () => (/* binding */ TRACING_DEFAULTS),
/* harmony export */   io: () => (/* binding */ IdleTransaction)
/* harmony export */ });
/* unused harmony export IdleTransactionSpanRecorder */
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1170);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2343);
/* harmony import */ var _span_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8903);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8069);




const TRACING_DEFAULTS = {
  idleTimeout: 1000,
  finalTimeout: 30000,
  heartbeatInterval: 5000,
};

const FINISH_REASON_TAG = 'finishReason';

const IDLE_TRANSACTION_FINISH_REASONS = [
  'heartbeatFailed',
  'idleTimeout',
  'documentHidden',
  'finalTimeout',
  'externalFinish',
  'cancelled',
];

/**
 * @inheritDoc
 */
class IdleTransactionSpanRecorder extends _span_js__WEBPACK_IMPORTED_MODULE_0__/* .SpanRecorder */ .gB {
   constructor(
      _pushActivity,
      _popActivity,
     transactionSpanId,
    maxlen,
  ) {
    super(maxlen);this._pushActivity = _pushActivity;this._popActivity = _popActivity;this.transactionSpanId = transactionSpanId;  }

  /**
   * @inheritDoc
   */
   add(span) {
    // We should make sure we do not push and pop activities for
    // the transaction that this span recorder belongs to.
    if (span.spanId !== this.transactionSpanId) {
      // We patch span.finish() to pop an activity after setting an endTimestamp.
      span.finish = (endTimestamp) => {
        span.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .timestampInSeconds */ .ph)();
        this._popActivity(span.spanId);
      };

      // We should only push new activities if the span does not have an end timestamp.
      if (span.endTimestamp === undefined) {
        this._pushActivity(span.spanId);
      }
    }

    super.add(span);
  }
}

/**
 * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
 * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
 * put itself on the scope on creation.
 */
class IdleTransaction extends _transaction_js__WEBPACK_IMPORTED_MODULE_2__/* .Transaction */ .Y {
  // Activities store a list of active spans

  // Track state of activities in previous heartbeat

  // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.

  // We should not use heartbeat if we finished a transaction

  // Idle timeout was canceled and we should finish the transaction with the last span end.

  /**
   * Timer that tracks Transaction idleTimeout
   */

   constructor(
    transactionContext,
      _idleHub,
    /**
     * The time to wait in ms until the idle transaction will be finished. This timer is started each time
     * there are no active spans on this transaction.
     */
      _idleTimeout = TRACING_DEFAULTS.idleTimeout,
    /**
     * The final value in ms that a transaction cannot exceed
     */
      _finalTimeout = TRACING_DEFAULTS.finalTimeout,
      _heartbeatInterval = TRACING_DEFAULTS.heartbeatInterval,
    // Whether or not the transaction should put itself on the scope when it starts and pop itself off when it ends
      _onScope = false,
  ) {
    super(transactionContext, _idleHub);this._idleHub = _idleHub;this._idleTimeout = _idleTimeout;this._finalTimeout = _finalTimeout;this._heartbeatInterval = _heartbeatInterval;this._onScope = _onScope;
    this.activities = {};
    this._heartbeatCounter = 0;
    this._finished = false;
    this._idleTimeoutCanceledPermanently = false;
    this._beforeFinishCallbacks = [];
    this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[4];

    if (_onScope) {
      // We set the transaction here on the scope so error events pick up the trace
      // context and attach it to the error.
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`);
      _idleHub.configureScope(scope => scope.setSpan(this));
    }

    this._restartIdleTimeout();
    setTimeout(() => {
      if (!this._finished) {
        this.setStatus('deadline_exceeded');
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[3];
        this.finish();
      }
    }, this._finalTimeout);
  }

  /** {@inheritDoc} */
   finish(endTimestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .timestampInSeconds */ .ph)()) {
    this._finished = true;
    this.activities = {};

    if (this.op === 'ui.action.click') {
      this.setTag(FINISH_REASON_TAG, this._finishReason);
    }

    if (this.spanRecorder) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] finishing IdleTransaction', new Date(endTimestamp * 1000).toISOString(), this.op);

      for (const callback of this._beforeFinishCallbacks) {
        callback(this, endTimestamp);
      }

      this.spanRecorder.spans = this.spanRecorder.spans.filter((span) => {
        // If we are dealing with the transaction itself, we just return it
        if (span.spanId === this.spanId) {
          return true;
        }

        // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
        if (!span.endTimestamp) {
          span.endTimestamp = endTimestamp;
          span.setStatus('cancelled');
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(span, undefined, 2));
        }

        const spanStartedBeforeTransactionFinish = span.startTimestamp < endTimestamp;

        // Add a delta with idle timeout so that we prevent false positives
        const timeoutWithMarginOfError = (this._finalTimeout + this._idleTimeout) / 1000;
        const spanEndedBeforeFinalTimeout = span.endTimestamp - this.startTimestamp < timeoutWithMarginOfError;

        if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
          const stringifiedSpan = JSON.stringify(span, undefined, 2);
          if (!spanStartedBeforeTransactionFinish) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] discarding Span since it happened after Transaction was finished', stringifiedSpan);
          } else if (!spanEndedBeforeFinalTimeout) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] discarding Span since it finished after Transaction final timeout', stringifiedSpan);
          }
        }

        return spanStartedBeforeTransactionFinish && spanEndedBeforeFinalTimeout;
      });

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] flushing IdleTransaction');
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] No active IdleTransaction');
    }

    // if `this._onScope` is `true`, the transaction put itself on the scope when it started
    if (this._onScope) {
      const scope = this._idleHub.getScope();
      if (scope.getTransaction() === this) {
        scope.setSpan(undefined);
      }
    }

    return super.finish(endTimestamp);
  }

  /**
   * Register a callback function that gets excecuted before the transaction finishes.
   * Useful for cleanup or if you want to add any additional spans based on current context.
   *
   * This is exposed because users have no other way of running something before an idle transaction
   * finishes.
   */
   registerBeforeFinishCallback(callback) {
    this._beforeFinishCallbacks.push(callback);
  }

  /**
   * @inheritDoc
   */
   initSpanRecorder(maxlen) {
    if (!this.spanRecorder) {
      const pushActivity = (id) => {
        if (this._finished) {
          return;
        }
        this._pushActivity(id);
      };
      const popActivity = (id) => {
        if (this._finished) {
          return;
        }
        this._popActivity(id);
      };

      this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);

      // Start heartbeat so that transactions do not run forever.
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('Starting heartbeat');
      this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  }

  /**
   * Cancels the existing idle timeout, if there is one.
   * @param restartOnChildSpanChange Default is `true`.
   *                                 If set to false the transaction will end
   *                                 with the last child span.
   */
   cancelIdleTimeout(
    endTimestamp,
    {
      restartOnChildSpanChange,
    }

 = {
      restartOnChildSpanChange: true,
    },
  ) {
    this._idleTimeoutCanceledPermanently = restartOnChildSpanChange === false;
    if (this._idleTimeoutID) {
      clearTimeout(this._idleTimeoutID);
      this._idleTimeoutID = undefined;

      if (Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5];
        this.finish(endTimestamp);
      }
    }
  }

  /**
   * Temporary method used to externally set the transaction's `finishReason`
   *
   * ** WARNING**
   * This is for the purpose of experimentation only and will be removed in the near future, do not use!
   *
   * @internal
   *
   */
   setFinishReason(reason) {
    this._finishReason = reason;
  }

  /**
   * Restarts idle timeout, if there is no running idle timeout it will start one.
   */
   _restartIdleTimeout(endTimestamp) {
    this.cancelIdleTimeout();
    this._idleTimeoutID = setTimeout(() => {
      if (!this._finished && Object.keys(this.activities).length === 0) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[1];
        this.finish(endTimestamp);
      }
    }, this._idleTimeout);
  }

  /**
   * Start tracking a specific activity.
   * @param spanId The span id that represents the activity
   */
   _pushActivity(spanId) {
    this.cancelIdleTimeout(undefined, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently });
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log(`[Tracing] pushActivity: ${spanId}`);
    this.activities[spanId] = true;
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] new activities count', Object.keys(this.activities).length);
  }

  /**
   * Remove an activity from usage
   * @param spanId The span id that represents the activity
   */
   _popActivity(spanId) {
    if (this.activities[spanId]) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log(`[Tracing] popActivity ${spanId}`);
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.activities[spanId];
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] new activities count', Object.keys(this.activities).length);
    }

    if (Object.keys(this.activities).length === 0) {
      const endTimestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .timestampInSeconds */ .ph)();
      if (this._idleTimeoutCanceledPermanently) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5];
        this.finish(endTimestamp);
      } else {
        // We need to add the timeout here to have the real endtimestamp of the transaction
        // Remember timestampInSeconds is in seconds, timeout is in ms
        this._restartIdleTimeout(endTimestamp + this._idleTimeout / 1000);
      }
    }
  }

  /**
   * Checks when entries of this.activities are not changing for 3 beats.
   * If this occurs we finish the transaction.
   */
   _beat() {
    // We should not be running heartbeat if the idle transaction is finished.
    if (this._finished) {
      return;
    }

    const heartbeatString = Object.keys(this.activities).join('');

    if (heartbeatString === this._prevHeartbeatString) {
      this._heartbeatCounter++;
    } else {
      this._heartbeatCounter = 1;
    }

    this._prevHeartbeatString = heartbeatString;

    if (this._heartbeatCounter >= 3) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log('[Tracing] Transaction finished because of no change for 3 heart beats');
      this.setStatus('deadline_exceeded');
      this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[0];
      this.finish();
    } else {
      this._pingHeartbeat();
    }
  }

  /**
   * Pings the heartbeat
   */
   _pingHeartbeat() {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
    setTimeout(() => {
      this._beat();
    }, this._heartbeatInterval);
  }
}


//# sourceMappingURL=idletransaction.js.map


/***/ }),

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dr: () => (/* binding */ Span),
/* harmony export */   Zd: () => (/* binding */ spanStatusfromHttpCode),
/* harmony export */   gB: () => (/* binding */ SpanRecorder)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2844);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1170);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7638);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(535);


/**
 * Keeps track of finished spans for a given transaction
 * @internal
 * @hideconstructor
 * @hidden
 */
class SpanRecorder {

   constructor(maxlen = 1000) {
    this._maxlen = maxlen;
    this.spans = [];
  }

  /**
   * This is just so that we don't run out of memory while recording a lot
   * of spans. At some point we just stop and flush out the start of the
   * trace tree (i.e.the first n spans with the smallest
   * start_timestamp).
   */
   add(span) {
    if (this.spans.length > this._maxlen) {
      span.spanRecorder = undefined;
    } else {
      this.spans.push(span);
    }
  }
}

/**
 * Span contains all data about a span
 */
class Span  {
  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * Internal keeper of the status
   */

  /**
   * @inheritDoc
   */

  /**
   * Timestamp in seconds when the span was created.
   */

  /**
   * Timestamp in seconds when the span ended.
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  /**
   * List of spans that were finalized
   */

  /**
   * @inheritDoc
   */

  /**
   * The instrumenter that created this span.
   */

  /**
   * You should never call the constructor manually, always use `Sentry.startTransaction()`
   * or call `startChild()` on an existing span.
   * @internal
   * @hideconstructor
   * @hidden
   */
   constructor(spanContext) {
    this.traceId = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .uuid4 */ .DM)();
    this.spanId = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .uuid4 */ .DM)().substring(16);
    this.startTimestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .timestampInSeconds */ .ph)();
    this.tags = {};
    this.data = {};
    this.instrumenter = 'sentry';

    if (!spanContext) {
      return this;
    }
    if (spanContext.traceId) {
      this.traceId = spanContext.traceId;
    }
    if (spanContext.spanId) {
      this.spanId = spanContext.spanId;
    }
    if (spanContext.parentSpanId) {
      this.parentSpanId = spanContext.parentSpanId;
    }
    // We want to include booleans as well here
    if ('sampled' in spanContext) {
      this.sampled = spanContext.sampled;
    }
    if (spanContext.op) {
      this.op = spanContext.op;
    }
    if (spanContext.description) {
      this.description = spanContext.description;
    }
    if (spanContext.data) {
      this.data = spanContext.data;
    }
    if (spanContext.tags) {
      this.tags = spanContext.tags;
    }
    if (spanContext.status) {
      this.status = spanContext.status;
    }
    if (spanContext.startTimestamp) {
      this.startTimestamp = spanContext.startTimestamp;
    }
    if (spanContext.endTimestamp) {
      this.endTimestamp = spanContext.endTimestamp;
    }
    if (spanContext.instrumenter) {
      this.instrumenter = spanContext.instrumenter;
    }
  }

  /**
   * @inheritDoc
   */
   startChild(
    spanContext,
  ) {
    const childSpan = new Span({
      ...spanContext,
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId,
    });

    childSpan.spanRecorder = this.spanRecorder;
    if (childSpan.spanRecorder) {
      childSpan.spanRecorder.add(childSpan);
    }

    childSpan.transaction = this.transaction;

    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && childSpan.transaction) {
      const opStr = (spanContext && spanContext.op) || '< unknown op >';
      const nameStr = childSpan.transaction.name || '< unknown name >';
      const idStr = childSpan.transaction.spanId;

      const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
      childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = { logMessage };
      _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log(logMessage);
    }

    return childSpan;
  }

  /**
   * @inheritDoc
   */
   setTag(key, value) {
    this.tags = { ...this.tags, [key]: value };
    return this;
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
   setData(key, value) {
    this.data = { ...this.data, [key]: value };
    return this;
  }

  /**
   * @inheritDoc
   */
   setStatus(value) {
    this.status = value;
    return this;
  }

  /**
   * @inheritDoc
   */
   setHttpStatus(httpStatus) {
    this.setTag('http.status_code', String(httpStatus));
    this.setData('http.response.status_code', httpStatus);
    const spanStatus = spanStatusfromHttpCode(httpStatus);
    if (spanStatus !== 'unknown_error') {
      this.setStatus(spanStatus);
    }
    return this;
  }

  /**
   * @inheritDoc
   */
   isSuccess() {
    return this.status === 'ok';
  }

  /**
   * @inheritDoc
   */
   finish(endTimestamp) {
    if (
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      // Don't call this for transactions
      this.transaction &&
      this.transaction.spanId !== this.spanId
    ) {
      const { logMessage } = this.transaction.metadata.spanMetadata[this.spanId];
      if (logMessage) {
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log((logMessage ).replace('Starting', 'Finishing'));
      }
    }

    this.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__/* .timestampInSeconds */ .ph)();
  }

  /**
   * @inheritDoc
   */
   toTraceparent() {
    return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSentryTraceHeader */ .$p)(this.traceId, this.spanId, this.sampled);
  }

  /**
   * @inheritDoc
   */
   toContext() {
    return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .dropUndefinedKeys */ .Jr)({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId,
    });
  }

  /**
   * @inheritDoc
   */
   updateWithContext(spanContext) {
    this.data = spanContext.data || {};
    this.description = spanContext.description;
    this.endTimestamp = spanContext.endTimestamp;
    this.op = spanContext.op;
    this.parentSpanId = spanContext.parentSpanId;
    this.sampled = spanContext.sampled;
    this.spanId = spanContext.spanId || this.spanId;
    this.startTimestamp = spanContext.startTimestamp || this.startTimestamp;
    this.status = spanContext.status;
    this.tags = spanContext.tags || {};
    this.traceId = spanContext.traceId || this.traceId;

    return this;
  }

  /**
   * @inheritDoc
   */
   getTraceContext() {
    return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .dropUndefinedKeys */ .Jr)({
      data: Object.keys(this.data).length > 0 ? this.data : undefined,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
      trace_id: this.traceId,
    });
  }

  /**
   * @inheritDoc
   */
   toJSON()

 {
    return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__/* .dropUndefinedKeys */ .Jr)({
      data: Object.keys(this.data).length > 0 ? this.data : undefined,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
      timestamp: this.endTimestamp,
      trace_id: this.traceId,
    });
  }
}

/**
 * Converts a HTTP status code into a {@link SpanStatusType}.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or unknown_error.
 */
function spanStatusfromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return 'ok';
  }

  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return 'unauthenticated';
      case 403:
        return 'permission_denied';
      case 404:
        return 'not_found';
      case 409:
        return 'already_exists';
      case 413:
        return 'failed_precondition';
      case 429:
        return 'resource_exhausted';
      default:
        return 'invalid_argument';
    }
  }

  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return 'unimplemented';
      case 503:
        return 'unavailable';
      case 504:
        return 'deadline_exceeded';
      default:
        return 'internal_error';
    }
  }

  return 'unknown_error';
}


//# sourceMappingURL=span.js.map


/***/ }),

/***/ 1250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7597);
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5659);
/* harmony import */ var _utils_hasTracingEnabled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7522);




/**
 * Wraps a function with a transaction/span and finishes the span after the function is done.
 *
 * Note that if you have not enabled tracing extensions via `addTracingExtensions`
 * or you didn't set `tracesSampleRate`, this function will not generate spans
 * and the `span` returned from the callback will be undefined.
 *
 * This function is meant to be used internally and may break at any time. Use at your own risk.
 *
 * @internal
 * @private
 */
function trace(
  context,
  callback,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onError = () => {},
) {
  const ctx = { ...context };
  // If a name is set and a description is not, set the description to the name.
  if (ctx.name !== undefined && ctx.description === undefined) {
    ctx.description = ctx.name;
  }

  const hub = (0,_hub_js__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentHub */ .Gd)();
  const scope = hub.getScope();

  const parentSpan = scope.getSpan();

  function getActiveSpan() {
    if (!(0,_utils_hasTracingEnabled_js__WEBPACK_IMPORTED_MODULE_1__/* .hasTracingEnabled */ .z)()) {
      return undefined;
    }
    return parentSpan ? parentSpan.startChild(ctx) : hub.startTransaction(ctx);
  }

  const activeSpan = getActiveSpan();
  scope.setSpan(activeSpan);

  function finishAndSetSpan() {
    activeSpan && activeSpan.finish();
    hub.getScope().setSpan(parentSpan);
  }

  let maybePromiseResult;
  try {
    maybePromiseResult = callback(activeSpan);
  } catch (e) {
    activeSpan && activeSpan.setStatus('internal_error');
    onError(e);
    finishAndSetSpan();
    throw e;
  }

  if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .isThenable */ .J8)(maybePromiseResult)) {
    Promise.resolve(maybePromiseResult).then(
      () => {
        finishAndSetSpan();
      },
      e => {
        activeSpan && activeSpan.setStatus('internal_error');
        onError(e);
        finishAndSetSpan();
      },
    );
  } else {
    finishAndSetSpan();
  }

  return maybePromiseResult;
}


//# sourceMappingURL=trace.js.map


/***/ }),

/***/ 8069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(535);
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5659);
/* harmony import */ var _dynamicSamplingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(454);
/* harmony import */ var _span_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8903);





/** JSDoc */
class Transaction extends _span_js__WEBPACK_IMPORTED_MODULE_0__/* .Span */ .Dr  {

  /**
   * The reference to the current hub.
   */

  /**
   * This constructor should never be called manually. Those instrumenting tracing should use
   * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
   * @internal
   * @hideconstructor
   * @hidden
   */
   constructor(transactionContext, hub) {
    super(transactionContext);

    this._measurements = {};
    this._contexts = {};

    this._hub = hub || (0,_hub_js__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentHub */ .Gd)();

    this._name = transactionContext.name || '';

    this.metadata = {
      source: 'custom',
      ...transactionContext.metadata,
      spanMetadata: {},
    };

    this._trimEnd = transactionContext.trimEnd;

    // this is because transactions are also spans, and spans have a transaction pointer
    this.transaction = this;

    // If Dynamic Sampling Context is provided during the creation of the transaction, we freeze it as it usually means
    // there is incoming Dynamic Sampling Context. (Either through an incoming request, a baggage meta-tag, or other means)
    const incomingDynamicSamplingContext = this.metadata.dynamicSamplingContext;
    if (incomingDynamicSamplingContext) {
      // We shallow copy this in case anything writes to the original reference of the passed in `dynamicSamplingContext`
      this._frozenDynamicSamplingContext = { ...incomingDynamicSamplingContext };
    }
  }

  /** Getter for `name` property */
   get name() {
    return this._name;
  }

  /** Setter for `name` property, which also sets `source` as custom */
   set name(newName) {
    this.setName(newName);
  }

  /**
   * JSDoc
   */
   setName(name, source = 'custom') {
    this._name = name;
    this.metadata.source = source;
  }

  /**
   * Attaches SpanRecorder to the span itself
   * @param maxlen maximum number of spans that can be recorded
   */
   initSpanRecorder(maxlen = 1000) {
    if (!this.spanRecorder) {
      this.spanRecorder = new _span_js__WEBPACK_IMPORTED_MODULE_0__/* .SpanRecorder */ .gB(maxlen);
    }
    this.spanRecorder.add(this);
  }

  /**
   * @inheritDoc
   */
   setContext(key, context) {
    if (context === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
  }

  /**
   * @inheritDoc
   */
   setMeasurement(name, value, unit = '') {
    this._measurements[name] = { value, unit };
  }

  /**
   * @inheritDoc
   */
   setMetadata(newMetadata) {
    this.metadata = { ...this.metadata, ...newMetadata };
  }

  /**
   * @inheritDoc
   */
   finish(endTimestamp) {
    // This transaction is already finished, so we should not flush it again.
    if (this.endTimestamp !== undefined) {
      return undefined;
    }

    if (!this.name) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
      this.name = '<unlabeled transaction>';
    }

    // just sets the end timestamp
    super.finish(endTimestamp);

    const client = this._hub.getClient();
    if (client && client.emit) {
      client.emit('finishTransaction', this);
    }

    if (this.sampled !== true) {
      // At this point if `sampled !== true` we want to discard the transaction.
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');

      if (client) {
        client.recordDroppedEvent('sample_rate', 'transaction');
      }

      return undefined;
    }

    const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter(s => s !== this && s.endTimestamp) : [];

    if (this._trimEnd && finishedSpans.length > 0) {
      this.endTimestamp = finishedSpans.reduce((prev, current) => {
        if (prev.endTimestamp && current.endTimestamp) {
          return prev.endTimestamp > current.endTimestamp ? prev : current;
        }
        return prev;
      }).endTimestamp;
    }

    const metadata = this.metadata;

    const transaction = {
      contexts: {
        ...this._contexts,
        // We don't want to override trace context
        trace: this.getTraceContext(),
      },
      spans: finishedSpans,
      start_timestamp: this.startTimestamp,
      tags: this.tags,
      timestamp: this.endTimestamp,
      transaction: this.name,
      type: 'transaction',
      sdkProcessingMetadata: {
        ...metadata,
        dynamicSamplingContext: this.getDynamicSamplingContext(),
      },
      ...(metadata.source && {
        transaction_info: {
          source: metadata.source,
        },
      }),
    };

    const hasMeasurements = Object.keys(this._measurements).length > 0;

    if (hasMeasurements) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log(
          '[Measurements] Adding measurements to transaction',
          JSON.stringify(this._measurements, undefined, 2),
        );
      transaction.measurements = this._measurements;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);

    return this._hub.captureEvent(transaction);
  }

  /**
   * @inheritDoc
   */
   toContext() {
    const spanContext = super.toContext();

    return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__/* .dropUndefinedKeys */ .Jr)({
      ...spanContext,
      name: this.name,
      trimEnd: this._trimEnd,
    });
  }

  /**
   * @inheritDoc
   */
   updateWithContext(transactionContext) {
    super.updateWithContext(transactionContext);

    this.name = transactionContext.name || '';

    this._trimEnd = transactionContext.trimEnd;

    return this;
  }

  /**
   * @inheritdoc
   *
   * @experimental
   */
   getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext) {
      return this._frozenDynamicSamplingContext;
    }

    const hub = this._hub || (0,_hub_js__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentHub */ .Gd)();
    const client = hub.getClient();

    if (!client) return {};

    const scope = hub.getScope();
    const dsc = (0,_dynamicSamplingContext_js__WEBPACK_IMPORTED_MODULE_4__/* .getDynamicSamplingContextFromClient */ ._)(this.traceId, client, scope);

    const maybeSampleRate = this.metadata.sampleRate;
    if (maybeSampleRate !== undefined) {
      dsc.sample_rate = `${maybeSampleRate}`;
    }

    // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
    const source = this.metadata.source;
    if (source && source !== 'url') {
      dsc.transaction = this.name;
    }

    if (this.sampled !== undefined) {
      dsc.sampled = String(this.sampled);
    }

    // Uncomment if we want to make DSC immutable
    // this._frozenDynamicSamplingContext = dsc;

    return dsc;
  }

  /**
   * Override the current hub with a new one.
   * Used if you want another hub to finish the transaction.
   *
   * @internal
   */
   setHub(hub) {
    this._hub = hub;
  }
}


//# sourceMappingURL=transaction.js.map


/***/ }),

/***/ 9791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x1: () => (/* binding */ getActiveTransaction)
/* harmony export */ });
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5659);



/** Grabs active transaction off scope, if any */
function getActiveTransaction(maybeHub) {
  const hub = maybeHub || (0,_hub_js__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentHub */ .Gd)();
  const scope = hub.getScope();
  return scope.getTransaction() ;
}


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ 7522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ hasTracingEnabled)
/* harmony export */ });
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5659);


// Treeshakable guard to remove all code related to tracing

/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */
function hasTracingEnabled(
  maybeOptions,
) {
  if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) {
    return false;
  }

  const client = (0,_hub_js__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentHub */ .Gd)().getClient();
  const options = maybeOptions || (client && client.getOptions());
  return !!options && (options.enableTracing || 'tracesSampleRate' in options || 'tracesSampler' in options);
}


//# sourceMappingURL=hasTracingEnabled.js.map


/***/ }),

/***/ 9938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_USER_INCLUDES: () => (/* reexport */ DEFAULT_USER_INCLUDES),
  Handlers: () => (/* reexport */ handlers_namespaceObject),
  Hub: () => (/* reexport */ esm_hub/* Hub */.Xb),
  Integrations: () => (/* binding */ INTEGRATIONS),
  NodeClient: () => (/* reexport */ NodeClient),
  SDK_VERSION: () => (/* reexport */ SDK_VERSION),
  Scope: () => (/* reexport */ esm_scope/* Scope */.s),
  addBreadcrumb: () => (/* reexport */ addBreadcrumb),
  addGlobalEventProcessor: () => (/* reexport */ esm_scope/* addGlobalEventProcessor */.c),
  addRequestDataToEvent: () => (/* reexport */ addRequestDataToEvent),
  autoDiscoverNodePerformanceMonitoringIntegrations: () => (/* reexport */ autoDiscoverNodePerformanceMonitoringIntegrations),
  captureCheckIn: () => (/* reexport */ captureCheckIn),
  captureEvent: () => (/* reexport */ captureEvent),
  captureException: () => (/* reexport */ captureException),
  captureMessage: () => (/* reexport */ captureMessage),
  close: () => (/* reexport */ exports_close),
  configureScope: () => (/* reexport */ configureScope),
  createTransport: () => (/* reexport */ createTransport),
  deepReadDirSync: () => (/* reexport */ deepReadDirSync),
  defaultIntegrations: () => (/* reexport */ defaultIntegrations),
  defaultStackParser: () => (/* reexport */ defaultStackParser),
  extractRequestData: () => (/* reexport */ extractRequestData),
  extractTraceparentData: () => (/* reexport */ tracing/* extractTraceparentData */.qG),
  flush: () => (/* reexport */ flush),
  getActiveTransaction: () => (/* reexport */ utils/* getActiveTransaction */.x1),
  getCurrentHub: () => (/* reexport */ esm_hub/* getCurrentHub */.Gd),
  getHubFromCarrier: () => (/* reexport */ esm_hub/* getHubFromCarrier */.vi),
  getModuleFromFilename: () => (/* reexport */ getModuleFromFilename),
  getSentryRelease: () => (/* reexport */ getSentryRelease),
  init: () => (/* reexport */ init),
  lastEventId: () => (/* reexport */ lastEventId),
  makeMain: () => (/* reexport */ esm_hub/* makeMain */.pj),
  makeNodeTransport: () => (/* reexport */ makeNodeTransport),
  runWithAsyncContext: () => (/* reexport */ esm_hub/* runWithAsyncContext */.Ok),
  setContext: () => (/* reexport */ setContext),
  setExtra: () => (/* reexport */ setExtra),
  setExtras: () => (/* reexport */ setExtras),
  setTag: () => (/* reexport */ setTag),
  setTags: () => (/* reexport */ setTags),
  setUser: () => (/* reexport */ setUser),
  spanStatusfromHttpCode: () => (/* reexport */ span/* spanStatusfromHttpCode */.Zd),
  startTransaction: () => (/* reexport */ startTransaction),
  trace: () => (/* reexport */ trace/* trace */.g),
  withScope: () => (/* reexport */ withScope)
});

// NAMESPACE OBJECT: ./node_modules/@sentry/core/esm/integrations/index.js
var integrations_namespaceObject = {};
__webpack_require__.r(integrations_namespaceObject);
__webpack_require__.d(integrations_namespaceObject, {
  FunctionToString: () => (FunctionToString),
  InboundFilters: () => (InboundFilters)
});

// NAMESPACE OBJECT: ./node_modules/@sentry/node/esm/handlers.js
var handlers_namespaceObject = {};
__webpack_require__.r(handlers_namespaceObject);
__webpack_require__.d(handlers_namespaceObject, {
  errorHandler: () => (errorHandler),
  extractRequestData: () => (requestDataDeprecated_extractRequestData),
  parseRequest: () => (parseRequest),
  requestHandler: () => (requestHandler),
  tracingHandler: () => (tracingHandler),
  trpcMiddleware: () => (trpcMiddleware)
});

// NAMESPACE OBJECT: ./node_modules/@sentry/node/esm/integrations/index.js
var esm_integrations_namespaceObject = {};
__webpack_require__.r(esm_integrations_namespaceObject);
__webpack_require__.d(esm_integrations_namespaceObject, {
  Console: () => (Console),
  Context: () => (Context),
  ContextLines: () => (ContextLines),
  Http: () => (Http),
  LinkedErrors: () => (LinkedErrors),
  LocalVariables: () => (LocalVariables),
  Modules: () => (Modules),
  OnUncaughtException: () => (OnUncaughtException),
  OnUnhandledRejection: () => (OnUnhandledRejection),
  RequestData: () => (RequestData),
  Undici: () => (undici/* Undici */.Y)
});

// NAMESPACE OBJECT: ./node_modules/@sentry/node/esm/tracing/integrations.js
var tracing_integrations_namespaceObject = {};
__webpack_require__.r(tracing_integrations_namespaceObject);
__webpack_require__.d(tracing_integrations_namespaceObject, {
  Apollo: () => (apollo/* Apollo */._),
  Express: () => (express/* Express */.N),
  GraphQL: () => (graphql/* GraphQL */.k),
  Mongo: () => (mongo/* Mongo */._),
  Mysql: () => (mysql/* Mysql */.m),
  Postgres: () => (postgres/* Postgres */.E),
  Prisma: () => (prisma/* Prisma */.g)
});

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/object.js
var object = __webpack_require__(535);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/functiontostring.js


let originalFunctionToString;

/** Patch toString calls to return proper name for wrapped functions */
class FunctionToString  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'FunctionToString';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = FunctionToString.id;
  }

  /**
   * @inheritDoc
   */
   setupOnce() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    originalFunctionToString = Function.prototype.toString;

    // intrinsics (like Function.prototype) might be immutable in some environments
    // e.g. Node with --frozen-intrinsics, XS (an embedded JavaScript engine) or SES (a JavaScript proposal)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Function.prototype.toString = function ( ...args) {
        const context = (0,object/* getOriginalFunction */.HK)(this) || this;
        return originalFunctionToString.apply(context, args);
      };
    } catch (e) {
      // ignore errors here, just don't patch this
    }
  }
} FunctionToString.__initStatic();


//# sourceMappingURL=functiontostring.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(2343);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/misc.js
var misc = __webpack_require__(2844);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/string.js
var string = __webpack_require__(7321);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/inboundfilters.js


// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
const DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];

const DEFAULT_IGNORE_TRANSACTIONS = [
  /^.*healthcheck.*$/,
  /^.*healthy.*$/,
  /^.*live.*$/,
  /^.*ready.*$/,
  /^.*heartbeat.*$/,
  /^.*\/health$/,
  /^.*\/healthz$/,
];

/** Options for the InboundFilters integration */

/** Inbound filters configurable by the user */
class InboundFilters  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'InboundFilters';}

  /**
   * @inheritDoc
   */

   constructor(options = {}) {
    this.name = InboundFilters.id;
    this._options = options;
  }

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    const eventProcess = (event) => {
      const hub = getCurrentHub();
      if (hub) {
        const self = hub.getIntegration(InboundFilters);
        if (self) {
          const client = hub.getClient();
          const clientOptions = client ? client.getOptions() : {};
          const options = _mergeOptions(self._options, clientOptions);
          return _shouldDropEvent(event, options) ? null : event;
        }
      }
      return event;
    };

    eventProcess.id = this.name;
    addGlobalEventProcessor(eventProcess);
  }
} InboundFilters.__initStatic();

/** JSDoc */
function _mergeOptions(
  internalOptions = {},
  clientOptions = {},
) {
  return {
    allowUrls: [...(internalOptions.allowUrls || []), ...(clientOptions.allowUrls || [])],
    denyUrls: [...(internalOptions.denyUrls || []), ...(clientOptions.denyUrls || [])],
    ignoreErrors: [
      ...(internalOptions.ignoreErrors || []),
      ...(clientOptions.ignoreErrors || []),
      ...(internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS),
    ],
    ignoreTransactions: [
      ...(internalOptions.ignoreTransactions || []),
      ...(clientOptions.ignoreTransactions || []),
      ...(internalOptions.disableTransactionDefaults ? [] : DEFAULT_IGNORE_TRANSACTIONS),
    ],
    ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true,
  };
}

/** JSDoc */
function _shouldDropEvent(event, options) {
  if (options.ignoreInternal && _isSentryError(event)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,misc/* getEventDescription */.jH)(event)}`);
    return true;
  }
  if (_isIgnoredError(event, options.ignoreErrors)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,misc/* getEventDescription */.jH)(event)}`,
      );
    return true;
  }
  if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,misc/* getEventDescription */.jH)(event)}`,
      );
    return true;
  }
  if (_isDeniedUrl(event, options.denyUrls)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn(
        `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,misc/* getEventDescription */.jH)(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
      );
    return true;
  }
  if (!_isAllowedUrl(event, options.allowUrls)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,misc/* getEventDescription */.jH)(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
      );
    return true;
  }
  return false;
}

function _isIgnoredError(event, ignoreErrors) {
  // If event.type, this is not an error
  if (event.type || !ignoreErrors || !ignoreErrors.length) {
    return false;
  }

  return _getPossibleEventMessages(event).some(message => (0,string/* stringMatchesSomePattern */.U0)(message, ignoreErrors));
}

function _isIgnoredTransaction(event, ignoreTransactions) {
  if (event.type !== 'transaction' || !ignoreTransactions || !ignoreTransactions.length) {
    return false;
  }

  const name = event.transaction;
  return name ? (0,string/* stringMatchesSomePattern */.U0)(name, ignoreTransactions) : false;
}

function _isDeniedUrl(event, denyUrls) {
  // TODO: Use Glob instead?
  if (!denyUrls || !denyUrls.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : (0,string/* stringMatchesSomePattern */.U0)(url, denyUrls);
}

function _isAllowedUrl(event, allowUrls) {
  // TODO: Use Glob instead?
  if (!allowUrls || !allowUrls.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : (0,string/* stringMatchesSomePattern */.U0)(url, allowUrls);
}

function _getPossibleEventMessages(event) {
  if (event.message) {
    return [event.message];
  }
  if (event.exception) {
    const { values } = event.exception;
    try {
      const { type = '', value = '' } = (values && values[values.length - 1]) || {};
      return [`${value}`, `${type}: ${value}`];
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.error(`Cannot extract message for event ${(0,misc/* getEventDescription */.jH)(event)}`);
      return [];
    }
  }
  return [];
}

function _isSentryError(event) {
  try {
    // @ts-ignore can't be a sentry error if undefined
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return event.exception.values[0].type === 'SentryError';
  } catch (e) {
    // ignore
  }
  return false;
}

function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];

    if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
      return frame.filename || null;
    }
  }

  return null;
}

function _getEventFilterUrl(event) {
  try {
    let frames;
    try {
      // @ts-ignore we only care about frames if the whole thing here is defined
      frames = event.exception.values[0].stacktrace.frames;
    } catch (e) {
      // ignore
    }
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.error(`Cannot extract url for event ${(0,misc/* getEventDescription */.jH)(event)}`);
    return null;
  }
}


//# sourceMappingURL=inboundfilters.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/index.js


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/version.js
const SDK_VERSION = '7.63.0';


//# sourceMappingURL=version.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/hub.js
var esm_hub = __webpack_require__(5659);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/exports.js



// Note: All functions in this file are typed with a return value of `ReturnType<Hub[HUB_FUNCTION]>`,
// where HUB_FUNCTION is some method on the Hub class.
//
// This is done to make sure the top level SDK methods stay in sync with the hub methods.
// Although every method here has an explicit return type, some of them (that map to void returns) do not
// contain `return` keywords. This is done to save on bundle size, as `return` is not minifiable.

/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @param captureContext Additional scope data to apply to exception event.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
  return (0,esm_hub/* getCurrentHub */.Gd)().captureException(exception, { captureContext });
}

/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param Severity Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(
  message,
  // eslint-disable-next-line deprecation/deprecation
  captureContext,
) {
  // This is necessary to provide explicit scopes upgrade, without changing the original
  // arity of the `captureMessage(message, level)` method.
  const level = typeof captureContext === 'string' ? captureContext : undefined;
  const context = typeof captureContext !== 'string' ? { captureContext } : undefined;
  return (0,esm_hub/* getCurrentHub */.Gd)().captureMessage(message, level, context);
}

/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event, hint) {
  return (0,esm_hub/* getCurrentHub */.Gd)().captureEvent(event, hint);
}

/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
  (0,esm_hub/* getCurrentHub */.Gd)().configureScope(callback);
}

/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
  (0,esm_hub/* getCurrentHub */.Gd)().addBreadcrumb(breadcrumb);
}

/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
  (0,esm_hub/* getCurrentHub */.Gd)().setContext(name, context);
}

/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
  (0,esm_hub/* getCurrentHub */.Gd)().setExtras(extras);
}

/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
  (0,esm_hub/* getCurrentHub */.Gd)().setExtra(key, extra);
}

/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
  (0,esm_hub/* getCurrentHub */.Gd)().setTags(tags);
}

/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
  (0,esm_hub/* getCurrentHub */.Gd)().setTag(key, value);
}

/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
  (0,esm_hub/* getCurrentHub */.Gd)().setUser(user);
}

/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
  (0,esm_hub/* getCurrentHub */.Gd)().withScope(callback);
}

/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * NOTE: This function should only be used for *manual* instrumentation. Auto-instrumentation should call
 * `startTransaction` directly on the hub.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */
function startTransaction(
  context,
  customSamplingContext,
) {
  return (0,esm_hub/* getCurrentHub */.Gd)().startTransaction({ ...context }, customSamplingContext);
}

/**
 * Create a cron monitor check in and send it to Sentry.
 *
 * @param checkIn An object that describes a check in.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
function captureCheckIn(checkIn, upsertMonitorConfig) {
  const hub = (0,esm_hub/* getCurrentHub */.Gd)();
  const scope = hub.getScope();
  const client = hub.getClient();
  if (!client) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Cannot capture check-in. No client defined.');
  } else if (!client.captureCheckIn) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Cannot capture check-in. Client does not support sending check-ins.');
  } else {
    return client.captureCheckIn(checkIn, upsertMonitorConfig, scope);
  }

  return (0,misc/* uuid4 */.DM)();
}

/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function flush(timeout) {
  const client = (0,esm_hub/* getCurrentHub */.Gd)().getClient();
  if (client) {
    return client.flush(timeout);
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Cannot flush events. No client defined.');
  return Promise.resolve(false);
}

/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function exports_close(timeout) {
  const client = (0,esm_hub/* getCurrentHub */.Gd)().getClient();
  if (client) {
    return client.close(timeout);
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Cannot flush events and disable SDK. No client defined.');
  return Promise.resolve(false);
}

/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
  return (0,esm_hub/* getCurrentHub */.Gd)().lastEventId();
}


//# sourceMappingURL=exports.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/error.js
/** An error emitted by Sentry SDKs and related utilities. */
class SentryError extends Error {
  /** Display name of this error instance. */

   constructor( message, logLevel = 'warn') {
    super(message);this.message = message;
    this.name = new.target.prototype.constructor.name;
    // This sets the prototype to be `Error`, not `SentryError`. It's unclear why we do this, but commenting this line
    // out causes various (seemingly totally unrelated) playwright tests consistently time out. FYI, this makes
    // instances of `SentryError` fail `obj instanceof SentryError` checks.
    Object.setPrototypeOf(this, new.target.prototype);
    this.logLevel = logLevel;
  }
}


//# sourceMappingURL=error.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/syncpromise.js
var syncpromise = __webpack_require__(6893);
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/promisebuffer.js



/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */
function makePromiseBuffer(limit) {
  const buffer = [];

  function isReady() {
    return limit === undefined || buffer.length < limit;
  }

  /**
   * Remove a promise from the queue.
   *
   * @param task Can be any PromiseLike<T>
   * @returns Removed promise.
   */
  function remove(task) {
    return buffer.splice(buffer.indexOf(task), 1)[0];
  }

  /**
   * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
   *
   * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
   *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
   *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
   *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
   *        limit check.
   * @returns The original promise.
   */
  function add(taskProducer) {
    if (!isReady()) {
      return (0,syncpromise/* rejectedSyncPromise */.$2)(new SentryError('Not adding Promise because buffer limit was reached.'));
    }

    // start the task and add its promise to the queue
    const task = taskProducer();
    if (buffer.indexOf(task) === -1) {
      buffer.push(task);
    }
    void task
      .then(() => remove(task))
      // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
      // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
      // have promises, so TS has to polyfill when down-compiling.)
      .then(null, () =>
        remove(task).then(null, () => {
          // We have to add another catch here because `remove()` starts a new promise chain.
        }),
      );
    return task;
  }

  /**
   * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
   * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
   * `false` otherwise
   */
  function drain(timeout) {
    return new syncpromise/* SyncPromise */.cW((resolve, reject) => {
      let counter = buffer.length;

      if (!counter) {
        return resolve(true);
      }

      // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
      const capturedSetTimeout = setTimeout(() => {
        if (timeout && timeout > 0) {
          resolve(false);
        }
      }, timeout);

      // if all promises resolve in time, cancel the timer and resolve to `true`
      buffer.forEach(item => {
        void (0,syncpromise/* resolvedSyncPromise */.WD)(item).then(() => {
          if (!--counter) {
            clearTimeout(capturedSetTimeout);
            resolve(true);
          }
        }, reject);
      });
    });
  }

  return {
    $: buffer,
    add,
    drain,
  };
}


//# sourceMappingURL=promisebuffer.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/dsn.js


/** Regular expression used to parse a Dsn. */
const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function isValidProtocol(protocol) {
  return protocol === 'http' || protocol === 'https';
}

/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
function dsn_dsnToString(dsn, withPassword = false) {
  const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
  return (
    `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` +
    `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`
  );
}

/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
 */
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);

  if (!match) {
    // This should be logged to the console
    // eslint-disable-next-line no-console
    console.error(`Invalid Sentry Dsn: ${str}`);
    return undefined;
  }

  const [protocol, publicKey, pass = '', host, port = '', lastPath] = match.slice(1);
  let path = '';
  let projectId = lastPath;

  const split = projectId.split('/');
  if (split.length > 1) {
    path = split.slice(0, -1).join('/');
    projectId = split.pop() ;
  }

  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }

  return dsnFromComponents({ host, pass, path, projectId, port, protocol: protocol , publicKey });
}

function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || '',
    pass: components.pass || '',
    host: components.host,
    port: components.port || '',
    path: components.path || '',
    projectId: components.projectId,
  };
}

function validateDsn(dsn) {
  if (!(typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
    return true;
  }

  const { port, projectId, protocol } = dsn;

  const requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
  const hasMissingRequiredComponent = requiredComponents.find(component => {
    if (!dsn[component]) {
      logger/* logger */.kg.error(`Invalid Sentry Dsn: ${component} missing`);
      return true;
    }
    return false;
  });

  if (hasMissingRequiredComponent) {
    return false;
  }

  if (!projectId.match(/^\d+$/)) {
    logger/* logger */.kg.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
  }

  if (!isValidProtocol(protocol)) {
    logger/* logger */.kg.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    return false;
  }

  if (port && isNaN(parseInt(port, 10))) {
    logger/* logger */.kg.error(`Invalid Sentry Dsn: Invalid port ${port}`);
    return false;
  }

  return true;
}

/**
 * Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
 * @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
 */
function dsn_makeDsn(from) {
  const components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
  if (!components || !validateDsn(components)) {
    return undefined;
  }
  return components;
}


//# sourceMappingURL=dsn.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(7597);
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/memo.js
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper to decycle json objects
 */
function memoBuilder() {
  const hasWeakSet = typeof WeakSet === 'function';
  const inner = hasWeakSet ? new WeakSet() : [];
  function memoize(obj) {
    if (hasWeakSet) {
      if (inner.has(obj)) {
        return true;
      }
      inner.add(obj);
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < inner.length; i++) {
      const value = inner[i];
      if (value === obj) {
        return true;
      }
    }
    inner.push(obj);
    return false;
  }

  function unmemoize(obj) {
    if (hasWeakSet) {
      inner.delete(obj);
    } else {
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === obj) {
          inner.splice(i, 1);
          break;
        }
      }
    }
  }
  return [memoize, unmemoize];
}


//# sourceMappingURL=memo.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/stacktrace.js + 1 modules
var stacktrace = __webpack_require__(6147);
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/normalize.js





/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normallized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(input, depth = 100, maxProperties = +Infinity) {
  try {
    // since we're at the outermost level, we don't provide a key
    return visit('', input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}

/** JSDoc */
function normalizeToSize(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object,
  // Default Node.js REPL depth
  depth = 3,
  // 100kB, as 200kB is max payload size, so half sounds reasonable
  maxSize = 100 * 1024,
) {
  const normalized = normalize(object, depth);

  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }

  return normalized ;
}

/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */
function visit(
  key,
  value,
  depth = +Infinity,
  maxProperties = +Infinity,
  memo = memoBuilder(),
) {
  const [memoize, unmemoize] = memo;

  // Get the simple cases out of the way first
  if (
    value == null || // this matches null and undefined -> eqeq not eqeqeq
    (['number', 'boolean', 'string'].includes(typeof value) && !(0,is/* isNaN */.i2)(value))
  ) {
    return value ;
  }

  const stringified = stringifyValue(key, value);

  // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
  // Everything else will have already been serialized, so if we don't see that pattern, we're done.
  if (!stringified.startsWith('[object ')) {
    return stringified;
  }

  // From here on, we can assert that `value` is either an object or an array.

  // Do not normalize objects that we know have already been normalized. As a general rule, the
  // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
  // have already been normalized.
  if ((value )['__sentry_skip_normalization__']) {
    return value ;
  }

  // We can set `__sentry_override_normalization_depth__` on an object to ensure that from there
  // We keep a certain amount of depth.
  // This should be used sparingly, e.g. we use it for the redux integration to ensure we get a certain amount of state.
  const remainingDepth =
    typeof (value )['__sentry_override_normalization_depth__'] === 'number'
      ? ((value )['__sentry_override_normalization_depth__'] )
      : depth;

  // We're also done if we've reached the max depth
  if (remainingDepth === 0) {
    // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
    return stringified.replace('object ', '');
  }

  // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
  if (memoize(value)) {
    return '[Circular ~]';
  }

  // If the value has a `toJSON` method, we call it to extract more information
  const valueWithToJSON = value ;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      // We need to normalize the return value of `.toJSON()` in case it has circular references
      return visit('', jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch (err) {
      // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
    }
  }

  // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
  // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
  // property/entry, and keep track of the number of items we add to it.
  const normalized = (Array.isArray(value) ? [] : {}) ;
  let numAdded = 0;

  // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
  // properties are non-enumerable and otherwise would get missed.
  const visitable = (0,object/* convertToPlainObject */.Sh)(value );

  for (const visitKey in visitable) {
    // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }

    if (numAdded >= maxProperties) {
      normalized[visitKey] = '[MaxProperties ~]';
      break;
    }

    // Recursively visit all the child nodes
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);

    numAdded++;
  }

  // Once we've visited all the branches, remove the parent from memo storage
  unmemoize(value);

  // Return accumulated values
  return normalized;
}

/* eslint-disable complexity */
/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
function stringifyValue(
  key,
  // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
  // our internal use, it'll do
  value,
) {
  try {
    if (key === 'domain' && value && typeof value === 'object' && (value )._events) {
      return '[Domain]';
    }

    if (key === 'domainEmitter') {
      return '[DomainEmitter]';
    }

    // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.

    if (typeof global !== 'undefined' && value === global) {
      return '[Global]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
      return '[Window]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
      return '[Document]';
    }

    // React's SyntheticEvent thingy
    if ((0,is/* isSyntheticEvent */.Cy)(value)) {
      return '[SyntheticEvent]';
    }

    if (typeof value === 'number' && value !== value) {
      return '[NaN]';
    }

    if (typeof value === 'function') {
      return `[Function: ${(0,stacktrace/* getFunctionName */.$P)(value)}]`;
    }

    if (typeof value === 'symbol') {
      return `[${String(value)}]`;
    }

    // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
    if (typeof value === 'bigint') {
      return `[BigInt: ${String(value)}]`;
    }

    // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
    // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
    // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
    // we can make sure that only plain objects come out that way.
    const objName = getConstructorName(value);

    // Handle HTML Elements
    if (/^HTML(\w*)Element$/.test(objName)) {
      return `[HTMLElement: ${objName}]`;
    }

    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
/* eslint-enable complexity */

function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);

  return prototype ? prototype.constructor.name : 'null prototype';
}

/** Calculates bytes size of input string */
function utf8Length(value) {
  // eslint-disable-next-line no-bitwise
  return ~-encodeURI(value).split(/%..|./).length;
}

/** Calculates bytes size of input object */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}


//# sourceMappingURL=normalize.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/envelope.js




/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function createEnvelope(headers, items = []) {
  return [headers, items] ;
}

/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]] ;
}

/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 *
 * If the callback returns true, the rest of the items will be skipped.
 */
function forEachEnvelopeItem(
  envelope,
  callback,
) {
  const envelopeItems = envelope[1];

  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);

    if (result) {
      return true;
    }
  }

  return false;
}

/**
 * Returns true if the envelope contains any of the given envelope item types
 */
function envelopeContainsItemType(envelope, types) {
  return forEachEnvelopeItem(envelope, (_, type) => types.includes(type));
}

/**
 * Encode a string to UTF8.
 */
function encodeUTF8(input, textEncoder) {
  const utf8 = textEncoder || new TextEncoder();
  return utf8.encode(input);
}

/**
 * Serializes an envelope.
 */
function serializeEnvelope(envelope, textEncoder) {
  const [envHeaders, items] = envelope;

  // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
  let parts = JSON.stringify(envHeaders);

  function append(next) {
    if (typeof parts === 'string') {
      parts = typeof next === 'string' ? parts + next : [encodeUTF8(parts, textEncoder), next];
    } else {
      parts.push(typeof next === 'string' ? encodeUTF8(next, textEncoder) : next);
    }
  }

  for (const item of items) {
    const [itemHeaders, payload] = item;

    append(`\n${JSON.stringify(itemHeaders)}\n`);

    if (typeof payload === 'string' || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch (e) {
        // In case, despite all our efforts to keep `payload` circular-dependency-free, `JSON.strinify()` still
        // fails, we try again after normalizing it again with infinite normalization depth. This of course has a
        // performance impact but in this case a performance hit is better than throwing.
        stringifiedPayload = JSON.stringify(normalize(payload));
      }
      append(stringifiedPayload);
    }
  }

  return typeof parts === 'string' ? parts : concatBuffers(parts);
}

function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);

  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(buffer, offset);
    offset += buffer.length;
  }

  return merged;
}

/**
 * Parses an envelope
 */
function parseEnvelope(
  env,
  textEncoder,
  textDecoder,
) {
  let buffer = typeof env === 'string' ? textEncoder.encode(env) : env;

  function readBinary(length) {
    const bin = buffer.subarray(0, length);
    // Replace the buffer with the remaining data excluding trailing newline
    buffer = buffer.subarray(length + 1);
    return bin;
  }

  function readJson() {
    let i = buffer.indexOf(0xa);
    // If we couldn't find a newline, we must have found the end of the buffer
    if (i < 0) {
      i = buffer.length;
    }

    return JSON.parse(textDecoder.decode(readBinary(i))) ;
  }

  const envelopeHeader = readJson();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = [];

  while (buffer.length) {
    const itemHeader = readJson();
    const binaryLength = typeof itemHeader.length === 'number' ? itemHeader.length : undefined;

    items.push([itemHeader, binaryLength ? readBinary(binaryLength) : readJson()]);
  }

  return [envelopeHeader, items];
}

/**
 * Creates attachment envelope items
 */
function createAttachmentEnvelopeItem(
  attachment,
  textEncoder,
) {
  const buffer = typeof attachment.data === 'string' ? encodeUTF8(attachment.data, textEncoder) : attachment.data;

  return [
    (0,object/* dropUndefinedKeys */.Jr)({
      type: 'attachment',
      length: buffer.length,
      filename: attachment.filename,
      content_type: attachment.contentType,
      attachment_type: attachment.attachmentType,
    }),
    buffer,
  ];
}

const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: 'session',
  sessions: 'session',
  attachment: 'attachment',
  transaction: 'transaction',
  event: 'error',
  client_report: 'internal',
  user_report: 'default',
  profile: 'profile',
  replay_event: 'replay',
  replay_recording: 'replay',
  check_in: 'monitor',
};

/**
 * Maps the type of an envelope item to a data category.
 */
function envelopeItemTypeToDataCategory(type) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}

/** Extracts the minimal SDK info from from the metadata or an events */
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!metadataOrEvent || !metadataOrEvent.sdk) {
    return;
  }
  const { name, version } = metadataOrEvent.sdk;
  return { name, version };
}

/**
 * Creates event envelope headers, based on event, sdk info and tunnel
 * Note: This function was extracted from the core package to make it available in Replay
 */
function createEventEnvelopeHeaders(
  event,
  sdkInfo,
  tunnel,
  dsn,
) {
  const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: event.event_id ,
    sent_at: new Date().toISOString(),
    ...(sdkInfo && { sdk: sdkInfo }),
    ...(!!tunnel && { dsn: dsn_dsnToString(dsn) }),
    ...(dynamicSamplingContext && {
      trace: (0,object/* dropUndefinedKeys */.Jr)({ ...dynamicSamplingContext }),
    }),
  };
}


//# sourceMappingURL=envelope.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/ratelimit.js
// Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend

const DEFAULT_RETRY_AFTER = 60 * 1000; // 60 seconds

/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */
function parseRetryAfterHeader(header, now = Date.now()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1000;
  }

  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }

  return DEFAULT_RETRY_AFTER;
}

/**
 * Gets the time that the given category is disabled until for rate limiting.
 * In case no category-specific limit is set but a general rate limit across all categories is active,
 * that time is returned.
 *
 * @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
 */
function disabledUntil(limits, category) {
  return limits[category] || limits.all || 0;
}

/**
 * Checks if a category is rate limited
 */
function isRateLimited(limits, category, now = Date.now()) {
  return disabledUntil(limits, category) > now;
}

/**
 * Update ratelimits from incoming headers.
 *
 * @return the updated RateLimits object.
 */
function updateRateLimits(
  limits,
  { statusCode, headers },
  now = Date.now(),
) {
  const updatedRateLimits = {
    ...limits,
  };

  // "The name is case-insensitive."
  // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
  const rateLimitHeader = headers && headers['x-sentry-rate-limits'];
  const retryAfterHeader = headers && headers['retry-after'];

  if (rateLimitHeader) {
    /**
     * rate limit headers are of the form
     *     <header>,<header>,..
     * where each <header> is of the form
     *     <retry_after>: <categories>: <scope>: <reason_code>
     * where
     *     <retry_after> is a delay in seconds
     *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
     *         <category>;<category>;...
     *     <scope> is what's being limited (org, project, or key) - ignored by SDK
     *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
     */
    for (const limit of rateLimitHeader.trim().split(',')) {
      const [retryAfter, categories] = limit.split(':', 2);
      const headerDelay = parseInt(retryAfter, 10);
      const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
      if (!categories) {
        updatedRateLimits.all = now + delay;
      } else {
        for (const category of categories.split(';')) {
          updatedRateLimits[category] = now + delay;
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1000;
  }

  return updatedRateLimits;
}


//# sourceMappingURL=ratelimit.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/transports/base.js


const DEFAULT_TRANSPORT_BUFFER_SIZE = 30;

/**
 * Creates an instance of a Sentry `Transport`
 *
 * @param options
 * @param makeRequest
 */
function createTransport(
  options,
  makeRequest,
  buffer = makePromiseBuffer(
    options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE,
  ),
) {
  let rateLimits = {};
  const flush = (timeout) => buffer.drain(timeout);

  function send(envelope) {
    const filteredEnvelopeItems = [];

    // Drop rate limited items from envelope
    forEachEnvelopeItem(envelope, (item, type) => {
      const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
      if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent('ratelimit_backoff', envelopeItemDataCategory, event);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });

    // Skip sending if envelope is empty after filtering out rate limited events
    if (filteredEnvelopeItems.length === 0) {
      return (0,syncpromise/* resolvedSyncPromise */.WD)();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems );

    // Creates client report for each item in an envelope
    const recordEnvelopeLoss = (reason) => {
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
      });
    };

    const requestTask = () =>
      makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
        response => {
          // We don't want to throw on NOK responses, but we want to at least log them
          if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
          }

          rateLimits = updateRateLimits(rateLimits, response);
          return response;
        },
        error => {
          recordEnvelopeLoss('network_error');
          throw error;
        },
      );

    return buffer.add(requestTask).then(
      result => result,
      error => {
        if (error instanceof SentryError) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.error('Skipped sending event because buffer is full.');
          recordEnvelopeLoss('queue_overflow');
          return (0,syncpromise/* resolvedSyncPromise */.WD)();
        } else {
          throw error;
        }
      },
    );
  }

  // We use this to identifify if the transport is the base transport
  // TODO (v8): Remove this again as we'll no longer need it
  send.__sentry__baseTransport__ = true;

  return {
    send,
    flush,
  };
}

function getEventForEnvelopeItem(item, type) {
  if (type !== 'event' && type !== 'transaction') {
    return undefined;
  }

  return Array.isArray(item) ? (item )[1] : undefined;
}


//# sourceMappingURL=base.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/scope.js
var esm_scope = __webpack_require__(350);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/tracing.js
var tracing = __webpack_require__(7638);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/utils.js
var utils = __webpack_require__(9791);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/span.js
var span = __webpack_require__(8903);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/trace.js
var trace = __webpack_require__(1250);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/lazy.js
var lazy = __webpack_require__(6046);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/tracing/index.js



/**
 * Automatically detects and returns integrations that will work with your dependencies.
 */
function autoDiscoverNodePerformanceMonitoringIntegrations() {
  const loadedIntegrations = lazy/* lazyLoadedNodePerformanceMonitoringIntegrations */.G
    .map(tryLoad => {
      try {
        return tryLoad();
      } catch (_) {
        return undefined;
      }
    })
    .filter(integration => !!integration) ;

  if (loadedIntegrations.length === 0) {
    logger/* logger */.kg.warn('Performance monitoring integrations could not be automatically loaded.');
  }

  // Only return integrations where their dependencies loaded successfully.
  return loadedIntegrations.filter(integration => !!integration.loadDependency());
}


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js
var _optionalChain = __webpack_require__(4307);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/api.js


const SENTRY_API_VERSION = '7';

/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : '';
  const port = dsn.port ? `:${dsn.port}` : '';
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ''}/api/`;
}

/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}

/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn, sdkInfo) {
  return (0,object/* urlEncode */._j)({
    // We send only the minimum set of required information. See
    // https://github.com/getsentry/sentry-javascript/issues/2572.
    sentry_key: dsn.publicKey,
    sentry_version: SENTRY_API_VERSION,
    ...(sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }),
  });
}

/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getEnvelopeEndpointWithUrlEncodedAuth(
  dsn,
  // TODO (v8): Remove `tunnelOrOptions` in favor of `options`, and use the substitute code below
  // options: ClientOptions = {} as ClientOptions,
  tunnelOrOptions = {} ,
) {
  // TODO (v8): Use this code instead
  // const { tunnel, _metadata = {} } = options;
  // return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, _metadata.sdk)}`;

  const tunnel = typeof tunnelOrOptions === 'string' ? tunnelOrOptions : tunnelOrOptions.tunnel;
  const sdkInfo =
    typeof tunnelOrOptions === 'string' || !tunnelOrOptions._metadata ? undefined : tunnelOrOptions._metadata.sdk;

  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}

/** Returns the url to the report dialog endpoint. */
function getReportDialogEndpoint(
  dsnLike,
  dialogOptions

,
) {
  const dsn = makeDsn(dsnLike);
  if (!dsn) {
    return '';
  }

  const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;

  let encodedOptions = `dsn=${dsnToString(dsn)}`;
  for (const key in dialogOptions) {
    if (key === 'dsn') {
      continue;
    }

    if (key === 'user') {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key] )}`;
    }
  }

  return `${endpoint}?${encodedOptions}`;
}


//# sourceMappingURL=api.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/envelope.js


/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
  if (!sdkInfo) {
    return event;
  }
  event.sdk = event.sdk || {};
  event.sdk.name = event.sdk.name || sdkInfo.name;
  event.sdk.version = event.sdk.version || sdkInfo.version;
  event.sdk.integrations = [...(event.sdk.integrations || []), ...(sdkInfo.integrations || [])];
  event.sdk.packages = [...(event.sdk.packages || []), ...(sdkInfo.packages || [])];
  return event;
}

/** Creates an envelope from a Session */
function createSessionEnvelope(
  session,
  dsn,
  metadata,
  tunnel,
) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = {
    sent_at: new Date().toISOString(),
    ...(sdkInfo && { sdk: sdkInfo }),
    ...(!!tunnel && { dsn: dsn_dsnToString(dsn) }),
  };

  const envelopeItem =
    'aggregates' in session ? [{ type: 'sessions' }, session] : [{ type: 'session' }, session.toJSON()];

  return createEnvelope(envelopeHeaders, [envelopeItem]);
}

/**
 * Create an Envelope from an event.
 */
function createEventEnvelope(
  event,
  dsn,
  metadata,
  tunnel,
) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);

  /*
    Note: Due to TS, event.type may be `replay_event`, theoretically.
    In practice, we never call `createEventEnvelope` with `replay_event` type,
    and we'd have to adjut a looot of types to make this work properly.
    We want to avoid casting this around, as that could lead to bugs (e.g. when we add another type)
    So the safe choice is to really guard against the replay_event type here.
  */
  const eventType = event.type && event.type !== 'replay_event' ? event.type : 'event';

  enhanceEventWithSdkInfo(event, metadata && metadata.sdk);

  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);

  // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
  // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
  // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
  // of this `delete`, lest we miss putting it back in the next time the property is in use.)
  delete event.sdkProcessingMetadata;

  const eventItem = [{ type: eventType }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}


//# sourceMappingURL=envelope.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integration.js




const installedIntegrations = [];

/** Map of integrations assigned to a client */

/**
 * Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
 * preseve the order of integrations in the array.
 *
 * @private
 */
function filterDuplicates(integrations) {
  const integrationsByName = {};

  integrations.forEach(currentInstance => {
    const { name } = currentInstance;

    const existingInstance = integrationsByName[name];

    // We want integrations later in the array to overwrite earlier ones of the same type, except that we never want a
    // default instance to overwrite an existing user instance
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }

    integrationsByName[name] = currentInstance;
  });

  return Object.keys(integrationsByName).map(k => integrationsByName[k]);
}

/** Gets integrations to install */
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;

  // We flag default instances, so that later we can tell them apart from any user-created instances of the same class
  defaultIntegrations.forEach(integration => {
    integration.isDefaultInstance = true;
  });

  let integrations;

  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === 'function') {
    integrations = (0,misc/* arrayify */.lE)(userIntegrations(defaultIntegrations));
  } else {
    integrations = defaultIntegrations;
  }

  const finalIntegrations = filterDuplicates(integrations);

  // The `Debug` integration prints copies of the `event` and `hint` which will be passed to `beforeSend` or
  // `beforeSendTransaction`. It therefore has to run after all other integrations, so that the changes of all event
  // processors will be reflected in the printed values. For lack of a more elegant way to guarantee that, we therefore
  // locate it and, assuming it exists, pop it out of its current spot and shove it onto the end of the array.
  const debugIndex = findIndex(finalIntegrations, integration => integration.name === 'Debug');
  if (debugIndex !== -1) {
    const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
    finalIntegrations.push(debugInstance);
  }

  return finalIntegrations;
}

/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(integrations) {
  const integrationIndex = {};

  integrations.forEach(integration => {
    // guard against empty provided integrations
    if (integration) {
      setupIntegration(integration, integrationIndex);
    }
  });

  return integrationIndex;
}

/** Setup a single integration.  */
function setupIntegration(integration, integrationIndex) {
  integrationIndex[integration.name] = integration;

  if (installedIntegrations.indexOf(integration.name) === -1) {
    integration.setupOnce(esm_scope/* addGlobalEventProcessor */.c, esm_hub/* getCurrentHub */.Gd);
    installedIntegrations.push(integration.name);
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`Integration installed: ${integration.name}`);
  }
}

// Polyfill for Array.findIndex(), which is not supported in ES5
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return i;
    }
  }

  return -1;
}


//# sourceMappingURL=integration.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/session.js
var esm_session = __webpack_require__(9015);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
var tracing_dynamicSamplingContext = __webpack_require__(454);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/time.js
var time = __webpack_require__(1170);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/worldwide.js
var worldwide = __webpack_require__(1235);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/constants.js
var constants = __webpack_require__(1131);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/utils/prepareEvent.js




/**
 * Adds common information to events.
 *
 * The information includes release and environment from `options`,
 * breadcrumbs and context (extra, tags and user) from the scope.
 *
 * Information that is already present in the event is never overwritten. For
 * nested objects, such as the context, keys are merged.
 *
 * Note: This also triggers callbacks for `addGlobalEventProcessor`, but not `beforeSend`.
 *
 * @param event The original event.
 * @param hint May contain additional information about the original exception.
 * @param scope A scope containing event metadata.
 * @returns A new event with more information.
 * @hidden
 */
function prepareEvent(
  options,
  event,
  hint,
  scope,
) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || (0,misc/* uuid4 */.DM)(),
    timestamp: event.timestamp || (0,time/* dateTimestampInSeconds */.yW)(),
  };
  const integrations = hint.integrations || options.integrations.map(i => i.name);

  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);

  // Only put debug IDs onto frames for error events.
  if (event.type === undefined) {
    applyDebugIds(prepared, options.stackParser);
  }

  // If we have scope given to us, use it as the base for further modifications.
  // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
  let finalScope = scope;
  if (hint.captureContext) {
    finalScope = esm_scope/* Scope */.s.clone(finalScope).update(hint.captureContext);
  }

  // We prepare the result here with a resolved Event.
  let result = (0,syncpromise/* resolvedSyncPromise */.WD)(prepared);

  // This should be the last thing called, since we want that
  // {@link Hub.addEventProcessor} gets the finished prepared event.
  //
  // We need to check for the existence of `finalScope.getAttachments`
  // because `getAttachments` can be undefined if users are using an older version
  // of `@sentry/core` that does not have the `getAttachments` method.
  // See: https://github.com/getsentry/sentry-javascript/issues/5229
  if (finalScope) {
    // Collect attachments from the hint and scope
    if (finalScope.getAttachments) {
      const attachments = [...(hint.attachments || []), ...finalScope.getAttachments()];

      if (attachments.length) {
        hint.attachments = attachments;
      }
    }

    // In case we have a hub we reassign it.
    result = finalScope.applyToEvent(prepared, hint);
  }

  return result.then(evt => {
    if (evt) {
      // We apply the debug_meta field only after all event processors have ran, so that if any event processors modified
      // file names (e.g.the RewriteFrames integration) the filename -> debug ID relationship isn't destroyed.
      // This should not cause any PII issues, since we're only moving data that is already on the event and not adding
      // any new data
      applyDebugMeta(evt);
    }

    if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}

/**
 *  Enhances event using the client configuration.
 *  It takes care of all "static" values like environment, release and `dist`,
 *  as well as truncating overly long values.
 * @param event event instance to be enhanced
 */
function applyClientOptions(event, options) {
  const { environment, release, dist, maxValueLength = 250 } = options;

  if (!('environment' in event)) {
    event.environment = 'environment' in options ? environment : constants/* DEFAULT_ENVIRONMENT */.J;
  }

  if (event.release === undefined && release !== undefined) {
    event.release = release;
  }

  if (event.dist === undefined && dist !== undefined) {
    event.dist = dist;
  }

  if (event.message) {
    event.message = (0,string/* truncate */.$G)(event.message, maxValueLength);
  }

  const exception = event.exception && event.exception.values && event.exception.values[0];
  if (exception && exception.value) {
    exception.value = (0,string/* truncate */.$G)(exception.value, maxValueLength);
  }

  const request = event.request;
  if (request && request.url) {
    request.url = (0,string/* truncate */.$G)(request.url, maxValueLength);
  }
}

const debugIdStackParserCache = new WeakMap();

/**
 * Puts debug IDs into the stack frames of an error event.
 */
function applyDebugIds(event, stackParser) {
  const debugIdMap = worldwide/* GLOBAL_OBJ */.n2._sentryDebugIds;

  if (!debugIdMap) {
    return;
  }

  let debugIdStackFramesCache;
  const cachedDebugIdStackFrameCache = debugIdStackParserCache.get(stackParser);
  if (cachedDebugIdStackFrameCache) {
    debugIdStackFramesCache = cachedDebugIdStackFrameCache;
  } else {
    debugIdStackFramesCache = new Map();
    debugIdStackParserCache.set(stackParser, debugIdStackFramesCache);
  }

  // Build a map of filename -> debug_id
  const filenameDebugIdMap = Object.keys(debugIdMap).reduce((acc, debugIdStackTrace) => {
    let parsedStack;
    const cachedParsedStack = debugIdStackFramesCache.get(debugIdStackTrace);
    if (cachedParsedStack) {
      parsedStack = cachedParsedStack;
    } else {
      parsedStack = stackParser(debugIdStackTrace);
      debugIdStackFramesCache.set(debugIdStackTrace, parsedStack);
    }

    for (let i = parsedStack.length - 1; i >= 0; i--) {
      const stackFrame = parsedStack[i];
      if (stackFrame.filename) {
        acc[stackFrame.filename] = debugIdMap[debugIdStackTrace];
        break;
      }
    }
    return acc;
  }, {});

  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      exception.stacktrace.frames.forEach(frame => {
        if (frame.filename) {
          frame.debug_id = filenameDebugIdMap[frame.filename];
        }
      });
    });
  } catch (e) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }
}

/**
 * Moves debug IDs from the stack frames of an error event into the debug_meta field.
 */
function applyDebugMeta(event) {
  // Extract debug IDs and filenames from the stack frames on the event.
  const filenameDebugIdMap = {};
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      exception.stacktrace.frames.forEach(frame => {
        if (frame.debug_id) {
          if (frame.abs_path) {
            filenameDebugIdMap[frame.abs_path] = frame.debug_id;
          } else if (frame.filename) {
            filenameDebugIdMap[frame.filename] = frame.debug_id;
          }
          delete frame.debug_id;
        }
      });
    });
  } catch (e) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }

  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }

  // Fill debug_meta information
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.keys(filenameDebugIdMap).forEach(filename => {
    images.push({
      type: 'sourcemap',
      code_file: filename,
      debug_id: filenameDebugIdMap[filename],
    });
  });
}

/**
 * This function adds all used integrations to the SDK info in the event.
 * @param event The event that will be filled with all integrations.
 */
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...(event.sdk.integrations || []), ...integrationNames];
  }
}

/**
 * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
 * Normalized keys:
 * - `breadcrumbs.data`
 * - `user`
 * - `contexts`
 * - `extra`
 * @param event Event
 * @returns Normalized event
 */
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }

  const normalized = {
    ...event,
    ...(event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map(b => ({
        ...b,
        ...(b.data && {
          data: normalize(b.data, depth, maxBreadth),
        }),
      })),
    }),
    ...(event.user && {
      user: normalize(event.user, depth, maxBreadth),
    }),
    ...(event.contexts && {
      contexts: normalize(event.contexts, depth, maxBreadth),
    }),
    ...(event.extra && {
      extra: normalize(event.extra, depth, maxBreadth),
    }),
  };

  // event.contexts.trace stores information about a Transaction. Similarly,
  // event.spans[] stores information about child Spans. Given that a
  // Transaction is conceptually a Span, normalization should apply to both
  // Transactions and Spans consistently.
  // For now the decision is to skip normalization of Transactions and Spans,
  // so this block overwrites the normalized event to add back the original
  // Transaction information prior to normalization.
  if (event.contexts && event.contexts.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;

    // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
    }
  }

  // event.spans[].data may contain circular/dangerous data so we need to normalize it
  if (event.spans) {
    normalized.spans = event.spans.map(span => {
      // We cannot use the spread operator here because `toJSON` on `span` is non-enumerable
      if (span.data) {
        span.data = normalize(span.data, depth, maxBreadth);
      }
      return span;
    });
  }

  return normalized;
}


//# sourceMappingURL=prepareEvent.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/baseclient.js








const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";

/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */
class BaseClient {
  /** Options passed to the SDK. */

  /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */

  /** Array of set up integrations. */

  /** Indicates whether this client's integrations have been set up. */

  /** Number of calls being processed */

  /** Holds flushable  */

  // eslint-disable-next-line @typescript-eslint/ban-types

  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
   constructor(options) {
    this._options = options;
    this._integrations = {};
    this._integrationsInitialized = false;
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};

    if (options.dsn) {
      this._dsn = dsn_makeDsn(options.dsn);
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('No DSN provided, client will not do anything.');
    }

    if (this._dsn) {
      const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
      this._transport = options.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...options.transportOptions,
        url,
      });
    }
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
   captureException(exception, hint, scope) {
    // ensure we haven't captured this very object before
    if ((0,misc/* checkOrSetAlreadyCaught */.YO)(exception)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(ALREADY_SEEN_ERROR);
      return;
    }

    let eventId = hint && hint.event_id;

    this._process(
      this.eventFromException(exception, hint)
        .then(event => this._captureEvent(event, hint, scope))
        .then(result => {
          eventId = result;
        }),
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureMessage(
    message,
    // eslint-disable-next-line deprecation/deprecation
    level,
    hint,
    scope,
  ) {
    let eventId = hint && hint.event_id;

    const promisedEvent = (0,is/* isPrimitive */.pt)(message)
      ? this.eventFromMessage(String(message), level, hint)
      : this.eventFromException(message, hint);

    this._process(
      promisedEvent
        .then(event => this._captureEvent(event, hint, scope))
        .then(result => {
          eventId = result;
        }),
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureEvent(event, hint, scope) {
    // ensure we haven't captured this very object before
    if (hint && hint.originalException && (0,misc/* checkOrSetAlreadyCaught */.YO)(hint.originalException)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(ALREADY_SEEN_ERROR);
      return;
    }

    let eventId = hint && hint.event_id;

    this._process(
      this._captureEvent(event, hint, scope).then(result => {
        eventId = result;
      }),
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureSession(session) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('SDK not enabled, will not capture session.');
      return;
    }

    if (!(typeof session.release === 'string')) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Discarded session because of missing or non-string release');
    } else {
      this.sendSession(session);
      // After sending, we set init false to indicate it's not the first occurrence
      (0,esm_session/* updateSession */.CT)(session, { init: false });
    }
  }

  /**
   * @inheritDoc
   */
   getDsn() {
    return this._dsn;
  }

  /**
   * @inheritDoc
   */
   getOptions() {
    return this._options;
  }

  /**
   * @see SdkMetadata in @sentry/types
   *
   * @return The metadata of the SDK
   */
   getSdkMetadata() {
    return this._options._metadata;
  }

  /**
   * @inheritDoc
   */
   getTransport() {
    return this._transport;
  }

  /**
   * @inheritDoc
   */
   flush(timeout) {
    const transport = this._transport;
    if (transport) {
      return this._isClientDoneProcessing(timeout).then(clientFinished => {
        return transport.flush(timeout).then(transportFlushed => clientFinished && transportFlushed);
      });
    } else {
      return (0,syncpromise/* resolvedSyncPromise */.WD)(true);
    }
  }

  /**
   * @inheritDoc
   */
   close(timeout) {
    return this.flush(timeout).then(result => {
      this.getOptions().enabled = false;
      return result;
    });
  }

  /**
   * Sets up the integrations
   */
   setupIntegrations() {
    if (this._isEnabled() && !this._integrationsInitialized) {
      this._integrations = setupIntegrations(this._options.integrations);
      this._integrationsInitialized = true;
    }
  }

  /**
   * Gets an installed integration by its `id`.
   *
   * @returns The installed integration or `undefined` if no integration with that `id` was installed.
   */
   getIntegrationById(integrationId) {
    return this._integrations[integrationId];
  }

  /**
   * @inheritDoc
   */
   getIntegration(integration) {
    try {
      return (this._integrations[integration.id] ) || null;
    } catch (_oO) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
      return null;
    }
  }

  /**
   * @inheritDoc
   */
   addIntegration(integration) {
    setupIntegration(integration, this._integrations);
  }

  /**
   * @inheritDoc
   */
   sendEvent(event, hint = {}) {
    if (this._dsn) {
      let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);

      for (const attachment of hint.attachments || []) {
        env = addItemToEnvelope(
          env,
          createAttachmentEnvelopeItem(
            attachment,
            this._options.transportOptions && this._options.transportOptions.textEncoder,
          ),
        );
      }

      const promise = this._sendEnvelope(env);
      if (promise) {
        promise.then(sendResponse => this.emit('afterSendEvent', event, sendResponse), null);
      }
    }
  }

  /**
   * @inheritDoc
   */
   sendSession(session) {
    if (this._dsn) {
      const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
      void this._sendEnvelope(env);
    }
  }

  /**
   * @inheritDoc
   */
   recordDroppedEvent(reason, category, _event) {
    // Note: we use `event` in replay, where we overwrite this hook.

    if (this._options.sendClientReports) {
      // We want to track each category (error, transaction, session, replay_event) separately
      // but still keep the distinction between different type of outcomes.
      // We could use nested maps, but it's much easier to read and type this way.
      // A correct type for map-based implementation if we want to go that route
      // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
      // With typescript 4.1 we could even use template literal types
      const key = `${reason}:${category}`;
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`Adding outcome: "${key}"`);

      // The following works because undefined + 1 === NaN and NaN is falsy
      this._outcomes[key] = this._outcomes[key] + 1 || 1;
    }
  }

  // Keep on() & emit() signatures in sync with types' client.ts interface

  /** @inheritdoc */

  /** @inheritdoc */
   on(hook, callback) {
    if (!this._hooks[hook]) {
      this._hooks[hook] = [];
    }

    // @ts-ignore We assue the types are correct
    this._hooks[hook].push(callback);
  }

  /** @inheritdoc */

  /** @inheritdoc */
   emit(hook, ...rest) {
    if (this._hooks[hook]) {
      // @ts-ignore we cannot enforce the callback to match the hook
      this._hooks[hook].forEach(callback => callback(...rest));
    }
  }

  /** Updates existing session based on the provided event */
   _updateSessionFromEvent(session, event) {
    let crashed = false;
    let errored = false;
    const exceptions = event.exception && event.exception.values;

    if (exceptions) {
      errored = true;

      for (const ex of exceptions) {
        const mechanism = ex.mechanism;
        if (mechanism && mechanism.handled === false) {
          crashed = true;
          break;
        }
      }
    }

    // A session is updated and that session update is sent in only one of the two following scenarios:
    // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
    // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
    const sessionNonTerminal = session.status === 'ok';
    const shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);

    if (shouldUpdateAndSend) {
      (0,esm_session/* updateSession */.CT)(session, {
        ...(crashed && { status: 'crashed' }),
        errors: session.errors || Number(errored || crashed),
      });
      this.captureSession(session);
    }
  }

  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
   _isClientDoneProcessing(timeout) {
    return new syncpromise/* SyncPromise */.cW(resolve => {
      let ticked = 0;
      const tick = 1;

      const interval = setInterval(() => {
        if (this._numProcessing == 0) {
          clearInterval(interval);
          resolve(true);
        } else {
          ticked += tick;
          if (timeout && ticked >= timeout) {
            clearInterval(interval);
            resolve(false);
          }
        }
      }, tick);
    });
  }

  /** Determines whether this SDK is enabled and a valid Dsn is present. */
   _isEnabled() {
    return this.getOptions().enabled !== false && this._dsn !== undefined;
  }

  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   */
   _prepareEvent(event, hint, scope) {
    const options = this.getOptions();
    const integrations = Object.keys(this._integrations);
    if (!hint.integrations && integrations.length > 0) {
      hint.integrations = integrations;
    }
    return prepareEvent(options, event, hint, scope).then(evt => {
      if (evt === null) {
        return evt;
      }

      // If a trace context is not set on the event, we use the propagationContext set on the event to
      // generate a trace context. If the propagationContext does not have a dynamic sampling context, we
      // also generate one for it.
      const { propagationContext } = evt.sdkProcessingMetadata || {};
      const trace = evt.contexts && evt.contexts.trace;
      if (!trace && propagationContext) {
        const { traceId: trace_id, spanId, parentSpanId, dsc } = propagationContext ;
        evt.contexts = {
          trace: {
            trace_id,
            span_id: spanId,
            parent_span_id: parentSpanId,
          },
          ...evt.contexts,
        };

        const dynamicSamplingContext = dsc ? dsc : (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromClient */._)(trace_id, this, scope);

        evt.sdkProcessingMetadata = {
          dynamicSamplingContext,
          ...evt.sdkProcessingMetadata,
        };
      }
      return evt;
    });
  }

  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
   _captureEvent(event, hint = {}, scope) {
    return this._processEvent(event, hint, scope).then(
      finalEvent => {
        return finalEvent.event_id;
      },
      reason => {
        if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
          // If something's gone wrong, log the error as a warning. If it's just us having used a `SentryError` for
          // control flow, log just the message (no stack) as a log-level log.
          const sentryError = reason ;
          if (sentryError.logLevel === 'log') {
            logger/* logger */.kg.log(sentryError.message);
          } else {
            logger/* logger */.kg.warn(sentryError);
          }
        }
        return undefined;
      },
    );
  }

  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
   _processEvent(event, hint, scope) {
    const options = this.getOptions();
    const { sampleRate } = options;

    if (!this._isEnabled()) {
      return (0,syncpromise/* rejectedSyncPromise */.$2)(new SentryError('SDK not enabled, will not capture event.', 'log'));
    }

    const isTransaction = isTransactionEvent(event);
    const isError = isErrorEvent(event);
    const eventType = event.type || 'error';
    const beforeSendLabel = `before send for type \`${eventType}\``;

    // 1.0 === 100% events are sent
    // 0.0 === 0% events are sent
    // Sampling for transaction happens somewhere else
    if (isError && typeof sampleRate === 'number' && Math.random() > sampleRate) {
      this.recordDroppedEvent('sample_rate', 'error', event);
      return (0,syncpromise/* rejectedSyncPromise */.$2)(
        new SentryError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
          'log',
        ),
      );
    }

    const dataCategory = eventType === 'replay_event' ? 'replay' : eventType;

    return this._prepareEvent(event, hint, scope)
      .then(prepared => {
        if (prepared === null) {
          this.recordDroppedEvent('event_processor', dataCategory, event);
          throw new SentryError('An event processor returned `null`, will not send event.', 'log');
        }

        const isInternalException = hint.data && (hint.data ).__sentry__ === true;
        if (isInternalException) {
          return prepared;
        }

        const result = processBeforeSend(options, prepared, hint);
        return _validateBeforeSendResult(result, beforeSendLabel);
      })
      .then(processedEvent => {
        if (processedEvent === null) {
          this.recordDroppedEvent('before_send', dataCategory, event);
          throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, 'log');
        }

        const session = scope && scope.getSession();
        if (!isTransaction && session) {
          this._updateSessionFromEvent(session, processedEvent);
        }

        // None of the Sentry built event processor will update transaction name,
        // so if the transaction name has been changed by an event processor, we know
        // it has to come from custom event processor added by a user
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = 'custom';
          processedEvent.transaction_info = {
            ...transactionInfo,
            source,
          };
        }

        this.sendEvent(processedEvent, hint);
        return processedEvent;
      })
      .then(null, reason => {
        if (reason instanceof SentryError) {
          throw reason;
        }

        this.captureException(reason, {
          data: {
            __sentry__: true,
          },
          originalException: reason,
        });
        throw new SentryError(
          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`,
        );
      });
  }

  /**
   * Occupies the client with processing and event
   */
   _process(promise) {
    this._numProcessing++;
    void promise.then(
      value => {
        this._numProcessing--;
        return value;
      },
      reason => {
        this._numProcessing--;
        return reason;
      },
    );
  }

  /**
   * @inheritdoc
   */
   _sendEnvelope(envelope) {
    if (this._transport && this._dsn) {
      this.emit('beforeEnvelope', envelope);

      return this._transport.send(envelope).then(null, reason => {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.error('Error while sending event:', reason);
      });
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.error('Transport disabled');
    }
  }

  /**
   * Clears outcomes on this client and returns them.
   */
   _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.keys(outcomes).map(key => {
      const [reason, category] = key.split(':') ;
      return {
        reason,
        category,
        quantity: outcomes[key],
      };
    });
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types

}

/**
 * Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
 */
function _validateBeforeSendResult(
  beforeSendResult,
  beforeSendLabel,
) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if ((0,is/* isThenable */.J8)(beforeSendResult)) {
    return beforeSendResult.then(
      event => {
        if (!(0,is/* isPlainObject */.PO)(event) && event !== null) {
          throw new SentryError(invalidValueError);
        }
        return event;
      },
      e => {
        throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
      },
    );
  } else if (!(0,is/* isPlainObject */.PO)(beforeSendResult) && beforeSendResult !== null) {
    throw new SentryError(invalidValueError);
  }
  return beforeSendResult;
}

/**
 * Process the matching `beforeSendXXX` callback.
 */
function processBeforeSend(
  options,
  event,
  hint,
) {
  const { beforeSend, beforeSendTransaction } = options;

  if (isErrorEvent(event) && beforeSend) {
    return beforeSend(event, hint);
  }

  if (isTransactionEvent(event) && beforeSendTransaction) {
    return beforeSendTransaction(event, hint);
  }

  return event;
}

function isErrorEvent(event) {
  return event.type === undefined;
}

function isTransactionEvent(event) {
  return event.type === 'transaction';
}


//# sourceMappingURL=baseclient.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/hubextensions.js + 1 modules
var hubextensions = __webpack_require__(6890);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/sessionflusher.js



/**
 * @inheritdoc
 */
class SessionFlusher  {

   constructor(client, attrs) {
    this._client = client;
    this.flushTimeout = 60;
    this._pendingAggregates = {};
    this._isEnabled = true;

    // Call to setInterval, so that flush is called every 60 seconds
    this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1000);
    this._sessionAttrs = attrs;
  }

  /** Checks if `pendingAggregates` has entries, and if it does flushes them by calling `sendSession` */
   flush() {
    const sessionAggregates = this.getSessionAggregates();
    if (sessionAggregates.aggregates.length === 0) {
      return;
    }
    this._pendingAggregates = {};
    this._client.sendSession(sessionAggregates);
  }

  /** Massages the entries in `pendingAggregates` and returns aggregated sessions */
   getSessionAggregates() {
    const aggregates = Object.keys(this._pendingAggregates).map((key) => {
      return this._pendingAggregates[parseInt(key)];
    });

    const sessionAggregates = {
      attrs: this._sessionAttrs,
      aggregates,
    };
    return (0,object/* dropUndefinedKeys */.Jr)(sessionAggregates);
  }

  /** JSDoc */
   close() {
    clearInterval(this._intervalId);
    this._isEnabled = false;
    this.flush();
  }

  /**
   * Wrapper function for _incrementSessionStatusCount that checks if the instance of SessionFlusher is enabled then
   * fetches the session status of the request from `Scope.getRequestSession().status` on the scope and passes them to
   * `_incrementSessionStatusCount` along with the start date
   */
   incrementSessionStatusCount() {
    if (!this._isEnabled) {
      return;
    }
    const scope = (0,esm_hub/* getCurrentHub */.Gd)().getScope();
    const requestSession = scope.getRequestSession();

    if (requestSession && requestSession.status) {
      this._incrementSessionStatusCount(requestSession.status, new Date());
      // This is not entirely necessarily but is added as a safe guard to indicate the bounds of a request and so in
      // case captureRequestSession is called more than once to prevent double count
      scope.setRequestSession(undefined);
      /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    }
  }

  /**
   * Increments status bucket in pendingAggregates buffer (internal state) corresponding to status of
   * the session received
   */
   _incrementSessionStatusCount(status, date) {
    // Truncate minutes and seconds on Session Started attribute to have one minute bucket keys
    const sessionStartedTrunc = new Date(date).setSeconds(0, 0);
    this._pendingAggregates[sessionStartedTrunc] = this._pendingAggregates[sessionStartedTrunc] || {};

    // corresponds to aggregated sessions in one specific minute bucket
    // for example, {"started":"2021-03-16T08:00:00.000Z","exited":4, "errored": 1}
    const aggregationCounts = this._pendingAggregates[sessionStartedTrunc];
    if (!aggregationCounts.started) {
      aggregationCounts.started = new Date(sessionStartedTrunc).toISOString();
    }

    switch (status) {
      case 'errored':
        aggregationCounts.errored = (aggregationCounts.errored || 0) + 1;
        return aggregationCounts.errored;
      case 'ok':
        aggregationCounts.exited = (aggregationCounts.exited || 0) + 1;
        return aggregationCounts.exited;
      default:
        aggregationCounts.crashed = (aggregationCounts.crashed || 0) + 1;
        return aggregationCounts.crashed;
    }
  }
}


//# sourceMappingURL=sessionflusher.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/checkin.js


/**
 * Create envelope from check in item.
 */
function createCheckInEnvelope(
  checkIn,
  dynamicSamplingContext,
  metadata,
  tunnel,
  dsn,
) {
  const headers = {
    sent_at: new Date().toISOString(),
  };

  if (metadata && metadata.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version,
    };
  }

  if (!!tunnel && !!dsn) {
    headers.dsn = dsn_dsnToString(dsn);
  }

  if (dynamicSamplingContext) {
    headers.trace = (0,object/* dropUndefinedKeys */.Jr)(dynamicSamplingContext) ;
  }

  const item = createCheckInEnvelopeItem(checkIn);
  return createEnvelope(headers, [item]);
}

function createCheckInEnvelopeItem(checkIn) {
  const checkInHeaders = {
    type: 'check_in',
  };
  return [checkInHeaders, checkIn];
}


//# sourceMappingURL=checkin.js.map

// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(2037);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(3837);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/eventbuilder.js



/**
 * Extracts stack frames from the error.stack string
 */
function parseStackFrames(stackParser, error) {
  return stackParser(error.stack || '', 1);
}

/**
 * Extracts stack frames from the error and builds a Sentry Exception
 */
function exceptionFromError(stackParser, error) {
  const exception = {
    type: error.name || error.constructor.name,
    value: error.message,
  };

  const frames = parseStackFrames(stackParser, error);
  if (frames.length) {
    exception.stacktrace = { frames };
  }

  return exception;
}

/**
 * Builds and Event from a Exception
 * @hidden
 */
function eventFromUnknownInput(stackParser, exception, hint) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ex = exception;
  const providedMechanism =
    hint && hint.data && (hint.data ).mechanism;
  const mechanism = providedMechanism || {
    handled: true,
    type: 'generic',
  };

  if (!(0,is/* isError */.VZ)(exception)) {
    if ((0,is/* isPlainObject */.PO)(exception)) {
      // This will allow us to group events based on top-level keys
      // which is much better than creating new group when any key/value change
      const message = `Non-Error exception captured with keys: ${(0,object/* extractExceptionKeysForMessage */.zf)(exception)}`;

      const hub = (0,esm_hub/* getCurrentHub */.Gd)();
      const client = hub.getClient();
      const normalizeDepth = client && client.getOptions().normalizeDepth;
      hub.configureScope(scope => {
        scope.setExtra('__serialized__', normalizeToSize(exception, normalizeDepth));
      });

      ex = (hint && hint.syntheticException) || new Error(message);
      (ex ).message = message;
    } else {
      // This handles when someone does: `throw "something awesome";`
      // We use synthesized Error here so we can extract a (rough) stack trace.
      ex = (hint && hint.syntheticException) || new Error(exception );
      (ex ).message = exception ;
    }
    mechanism.synthetic = true;
  }

  const event = {
    exception: {
      values: [exceptionFromError(stackParser, ex )],
    },
  };

  (0,misc/* addExceptionTypeValue */.Db)(event, undefined, undefined);
  (0,misc/* addExceptionMechanism */.EG)(event, mechanism);

  return {
    ...event,
    event_id: hint && hint.event_id,
  };
}

/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(
  stackParser,
  message,
  // eslint-disable-next-line deprecation/deprecation
  level = 'info',
  hint,
  attachStacktrace,
) {
  const event = {
    event_id: hint && hint.event_id,
    level,
    message,
  };

  if (attachStacktrace && hint && hint.syntheticException) {
    const frames = parseStackFrames(stackParser, hint.syntheticException);
    if (frames.length) {
      event.exception = {
        values: [
          {
            value: message,
            stacktrace: { frames },
          },
        ],
      };
    }
  }

  return event;
}


//# sourceMappingURL=eventbuilder.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/client.js







/**
 * The Sentry Node SDK Client.
 *
 * @see NodeClientOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
class NodeClient extends BaseClient {

  /**
   * Creates a new Node SDK instance.
   * @param options Configuration options for this SDK.
   */
   constructor(options) {
    options._metadata = options._metadata || {};
    options._metadata.sdk = options._metadata.sdk || {
      name: 'sentry.javascript.node',
      packages: [
        {
          name: 'npm:@sentry/node',
          version: SDK_VERSION,
        },
      ],
      version: SDK_VERSION,
    };

    // Until node supports global TextEncoder in all versions we support, we are forced to pass it from util
    options.transportOptions = {
      textEncoder: new external_util_.TextEncoder(),
      ...options.transportOptions,
    };

    // The Node client always supports tracing
    (0,hubextensions/* addTracingExtensions */.T)();

    super(options);
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
   captureException(exception, hint, scope) {
    // Check if the flag `autoSessionTracking` is enabled, and if `_sessionFlusher` exists because it is initialised only
    // when the `requestHandler` middleware is used, and hence the expectation is to have SessionAggregates payload
    // sent to the Server only when the `requestHandler` middleware is used
    if (this._options.autoSessionTracking && this._sessionFlusher && scope) {
      const requestSession = scope.getRequestSession();

      // Necessary checks to ensure this is code block is executed only within a request
      // Should override the status only if `requestSession.status` is `Ok`, which is its initial stage
      if (requestSession && requestSession.status === 'ok') {
        requestSession.status = 'errored';
      }
    }

    return super.captureException(exception, hint, scope);
  }

  /**
   * @inheritDoc
   */
   captureEvent(event, hint, scope) {
    // Check if the flag `autoSessionTracking` is enabled, and if `_sessionFlusher` exists because it is initialised only
    // when the `requestHandler` middleware is used, and hence the expectation is to have SessionAggregates payload
    // sent to the Server only when the `requestHandler` middleware is used
    if (this._options.autoSessionTracking && this._sessionFlusher && scope) {
      const eventType = event.type || 'exception';
      const isException =
        eventType === 'exception' && event.exception && event.exception.values && event.exception.values.length > 0;

      // If the event is of type Exception, then a request session should be captured
      if (isException) {
        const requestSession = scope.getRequestSession();

        // Ensure that this is happening within the bounds of a request, and make sure not to override
        // Session Status if Errored / Crashed
        if (requestSession && requestSession.status === 'ok') {
          requestSession.status = 'errored';
        }
      }
    }

    return super.captureEvent(event, hint, scope);
  }

  /**
   *
   * @inheritdoc
   */
   close(timeout) {
    (0,_optionalChain/* _optionalChain */.x)([this, 'access', _ => _._sessionFlusher, 'optionalAccess', _2 => _2.close, 'call', _3 => _3()]);
    return super.close(timeout);
  }

  /** Method that initialises an instance of SessionFlusher on Client */
   initSessionFlusher() {
    const { release, environment } = this._options;
    if (!release) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Cannot initialise an instance of SessionFlusher if no release is provided!');
    } else {
      this._sessionFlusher = new SessionFlusher(this, {
        release,
        environment,
      });
    }
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
   eventFromException(exception, hint) {
    return (0,syncpromise/* resolvedSyncPromise */.WD)(eventFromUnknownInput(this._options.stackParser, exception, hint));
  }

  /**
   * @inheritDoc
   */
   eventFromMessage(
    message,
    // eslint-disable-next-line deprecation/deprecation
    level = 'info',
    hint,
  ) {
    return (0,syncpromise/* resolvedSyncPromise */.WD)(
      eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace),
    );
  }

  /**
   * Create a cron monitor check in and send it to Sentry.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   * @returns A string representing the id of the check in.
   */
   captureCheckIn(checkIn, monitorConfig, scope) {
    const id = checkIn.status !== 'in_progress' && checkIn.checkInId ? checkIn.checkInId : (0,misc/* uuid4 */.DM)();
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('SDK not enabled, will not capture checkin.');
      return id;
    }

    const options = this.getOptions();
    const { release, environment, tunnel } = options;

    const serializedCheckIn = {
      check_in_id: id,
      monitor_slug: checkIn.monitorSlug,
      status: checkIn.status,
      release,
      environment,
    };

    if (checkIn.status !== 'in_progress') {
      serializedCheckIn.duration = checkIn.duration;
    }

    if (monitorConfig) {
      serializedCheckIn.monitor_config = {
        schedule: monitorConfig.schedule,
        checkin_margin: monitorConfig.checkinMargin,
        max_runtime: monitorConfig.maxRuntime,
        timezone: monitorConfig.timezone,
      };
    }

    const [dynamicSamplingContext, traceContext] = this._getTraceInfoFromScope(scope);
    if (traceContext) {
      serializedCheckIn.contexts = {
        trace: traceContext,
      };
    }

    const envelope = createCheckInEnvelope(
      serializedCheckIn,
      dynamicSamplingContext,
      this.getSdkMetadata(),
      tunnel,
      this.getDsn(),
    );

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.info('Sending checkin:', checkIn.monitorSlug, checkIn.status);
    void this._sendEnvelope(envelope);
    return id;
  }

  /**
   * @inheritDoc
   */
   _prepareEvent(event, hint, scope) {
    event.platform = event.platform || 'node';
    event.contexts = {
      ...event.contexts,
      runtime: (0,_optionalChain/* _optionalChain */.x)([event, 'access', _4 => _4.contexts, 'optionalAccess', _5 => _5.runtime]) || {
        name: 'node',
        version: global.process.version,
      },
    };
    event.server_name =
      event.server_name || this.getOptions().serverName || global.process.env.SENTRY_NAME || external_os_.hostname();
    return super._prepareEvent(event, hint, scope);
  }

  /**
   * Method responsible for capturing/ending a request session by calling `incrementSessionStatusCount` to increment
   * appropriate session aggregates bucket
   */
   _captureRequestSession() {
    if (!this._sessionFlusher) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Discarded request mode session because autoSessionTracking option was disabled');
    } else {
      this._sessionFlusher.incrementSessionStatusCount();
    }
  }

  /** Extract trace information from scope */
   _getTraceInfoFromScope(
    scope,
  ) {
    if (!scope) {
      return [undefined, undefined];
    }

    const span = scope.getSpan();
    if (span) {
      return [(0,_optionalChain/* _optionalChain */.x)([span, 'optionalAccess', _6 => _6.transaction, 'optionalAccess', _7 => _7.getDynamicSamplingContext, 'call', _8 => _8()]), (0,_optionalChain/* _optionalChain */.x)([span, 'optionalAccess', _9 => _9.getTraceContext, 'call', _10 => _10()])];
    }

    const { traceId, spanId, parentSpanId, dsc } = scope.getPropagationContext();
    const traceContext = {
      trace_id: traceId,
      span_id: spanId,
      parent_span_id: parentSpanId,
    };
    if (dsc) {
      return [dsc, traceContext];
    }

    return [(0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromClient */._)(traceId, this, scope), traceContext];
  }
}


//# sourceMappingURL=client.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js
// https://github.com/alangpierce/sucrase/tree/265887868966917f3b924ce38dfad01fbab1329f
//
// The MIT License (MIT)
//
// Copyright (c) 2012-2018 various contributors (see AUTHORS)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
 * Polyfill for the nullish coalescing operator (`??`).
 *
 * Note that the RHS is wrapped in a function so that if it's a computed value, that evaluation won't happen unless the
 * LHS evaluates to a nullish value, to mimic the operator's short-circuiting behavior.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param lhs The value of the expression to the left of the `??`
 * @param rhsFn A function returning the value of the expression to the right of the `??`
 * @returns The LHS value, unless it's `null` or `undefined`, in which case, the RHS value
 */
function _nullishCoalesce(lhs, rhsFn) {
  // by checking for loose equality to `null`, we catch both `null` and `undefined`
  return lhs != null ? lhs : rhsFn();
}

// Sucrase version:
// function _nullishCoalesce(lhs, rhsFn) {
//   if (lhs != null) {
//     return lhs;
//   } else {
//     return rhsFn();
//   }
// }


//# sourceMappingURL=_nullishCoalesce.js.map

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(3685);
// EXTERNAL MODULE: external "https"
var external_https_ = __webpack_require__(5687);
// EXTERNAL MODULE: ./node_modules/https-proxy-agent/dist/index.js
var dist = __webpack_require__(6018);
// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(2781);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(7310);
;// CONCATENATED MODULE: external "zlib"
const external_zlib_namespaceObject = require("zlib");
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/transports/http.js









// Estimated maximum size for reasonable standalone event
const GZIP_THRESHOLD = 1024 * 32;

/**
 * Gets a stream from a Uint8Array or string
 * Readable.from is ideal but was added in node.js v12.3.0 and v10.17.0
 */
function streamFromBody(body) {
  return new external_stream_.Readable({
    read() {
      this.push(body);
      this.push(null);
    },
  });
}

/**
 * Creates a Transport that uses native the native 'http' and 'https' modules to send events to Sentry.
 */
function makeNodeTransport(options) {
  let urlSegments;

  try {
    urlSegments = new external_url_.URL(options.url);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(
      '[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.',
    );
    return createTransport(options, () => Promise.resolve({}));
  }

  const isHttps = urlSegments.protocol === 'https:';

  // Proxy prioritization: http => `options.proxy` | `process.env.http_proxy`
  // Proxy prioritization: https => `options.proxy` | `process.env.https_proxy` | `process.env.http_proxy`
  const proxy = applyNoProxyOption(
    urlSegments,
    options.proxy || (isHttps ? process.env.https_proxy : undefined) || process.env.http_proxy,
  );

  const nativeHttpModule = isHttps ? external_https_ : external_http_;
  const keepAlive = options.keepAlive === undefined ? false : options.keepAlive;

  // TODO(v7): Evaluate if we can set keepAlive to true. This would involve testing for memory leaks in older node
  // versions(>= 8) as they had memory leaks when using it: #2555
  const agent = proxy
    ? (new dist.HttpsProxyAgent(proxy) )
    : new nativeHttpModule.Agent({ keepAlive, maxSockets: 30, timeout: 2000 });

  const requestExecutor = createRequestExecutor(options, _nullishCoalesce(options.httpModule, () => ( nativeHttpModule)), agent);
  return createTransport(options, requestExecutor);
}

/**
 * Honors the `no_proxy` env variable with the highest priority to allow for hosts exclusion.
 *
 * @param transportUrl The URL the transport intends to send events to.
 * @param proxy The client configured proxy.
 * @returns A proxy the transport should use.
 */
function applyNoProxyOption(transportUrlSegments, proxy) {
  const { no_proxy } = process.env;

  const urlIsExemptFromProxy =
    no_proxy &&
    no_proxy
      .split(',')
      .some(
        exemption => transportUrlSegments.host.endsWith(exemption) || transportUrlSegments.hostname.endsWith(exemption),
      );

  if (urlIsExemptFromProxy) {
    return undefined;
  } else {
    return proxy;
  }
}

/**
 * Creates a RequestExecutor to be used with `createTransport`.
 */
function createRequestExecutor(
  options,
  httpModule,
  agent,
) {
  const { hostname, pathname, port, protocol, search } = new external_url_.URL(options.url);
  return function makeRequest(request) {
    return new Promise((resolve, reject) => {
      let body = streamFromBody(request.body);

      const headers = { ...options.headers };

      if (request.body.length > GZIP_THRESHOLD) {
        headers['content-encoding'] = 'gzip';
        body = body.pipe((0,external_zlib_namespaceObject.createGzip)());
      }

      const req = httpModule.request(
        {
          method: 'POST',
          agent,
          headers,
          hostname,
          path: `${pathname}${search}`,
          port,
          protocol,
          ca: options.caCerts,
        },
        res => {
          res.on('data', () => {
            // Drain socket
          });

          res.on('end', () => {
            // Drain socket
          });

          res.setEncoding('utf8');

          // "Key-value pairs of header names and values. Header names are lower-cased."
          // https://nodejs.org/api/http.html#http_message_headers
          const retryAfterHeader = _nullishCoalesce(res.headers['retry-after'], () => ( null));
          const rateLimitsHeader = _nullishCoalesce(res.headers['x-sentry-rate-limits'], () => ( null));

          resolve({
            statusCode: res.statusCode,
            headers: {
              'retry-after': retryAfterHeader,
              'x-sentry-rate-limits': Array.isArray(rateLimitsHeader) ? rateLimitsHeader[0] : rateLimitsHeader,
            },
          });
        },
      );

      req.on('error', reject);
      body.pipe(req);
    });
  };
}


//# sourceMappingURL=http.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/sdk.js



/** A class object that can instantiate Client objects. */

/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(
  clientClass,
  options,
) {
  if (options.debug === true) {
    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
      logger/* logger */.kg.enable();
    } else {
      // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
      // eslint-disable-next-line no-console
      console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
    }
  }
  const hub = (0,esm_hub/* getCurrentHub */.Gd)();
  const scope = hub.getScope();
  scope.update(options.initialScope);

  const client = new clientClass(options);
  hub.bindClient(client);
}


//# sourceMappingURL=sdk.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/node/esm/nodeVersion.js
var nodeVersion = __webpack_require__(9656);
;// CONCATENATED MODULE: external "domain"
const external_domain_namespaceObject = require("domain");
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/async/domain.js




function getActiveDomain() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  return external_domain_namespaceObject.active ;
}

function getCurrentHub() {
  const activeDomain = getActiveDomain();

  // If there's no active domain, just return undefined and the global hub will be used
  if (!activeDomain) {
    return undefined;
  }

  (0,esm_hub/* ensureHubOnCarrier */.uZ)(activeDomain);

  return (0,esm_hub/* getHubFromCarrier */.vi)(activeDomain);
}

function createNewHub(parent) {
  const carrier = {};
  (0,esm_hub/* ensureHubOnCarrier */.uZ)(carrier, parent);
  return (0,esm_hub/* getHubFromCarrier */.vi)(carrier);
}

function runWithAsyncContext(callback, options) {
  const activeDomain = getActiveDomain();

  if (activeDomain && (0,_optionalChain/* _optionalChain */.x)([options, 'optionalAccess', _ => _.reuseExisting])) {
    // We're already in a domain, so we don't need to create a new one, just call the callback with the current hub
    return callback();
  }

  const local = external_domain_namespaceObject.create() ;

  const parentHub = activeDomain ? (0,esm_hub/* getHubFromCarrier */.vi)(activeDomain) : undefined;
  const newHub = createNewHub(parentHub);
  (0,esm_hub/* setHubOnCarrier */.j0)(local, newHub);

  return local.bind(() => {
    return callback();
  })();
}

/**
 * Sets the async context strategy to use Node.js domains.
 */
function setDomainAsyncContextStrategy() {
  (0,esm_hub/* setAsyncContextStrategy */.$b)({ getCurrentHub, runWithAsyncContext });
}


//# sourceMappingURL=domain.js.map

;// CONCATENATED MODULE: external "async_hooks"
const external_async_hooks_namespaceObject = require("async_hooks");
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/async/hooks.js




/**
 * Sets the async context strategy to use AsyncLocalStorage which requires Node v12.17.0 or v13.10.0.
 */
function setHooksAsyncContextStrategy() {
  const asyncStorage = new external_async_hooks_namespaceObject.AsyncLocalStorage();

  function getCurrentHub() {
    return asyncStorage.getStore();
  }

  function createNewHub(parent) {
    const carrier = {};
    (0,esm_hub/* ensureHubOnCarrier */.uZ)(carrier, parent);
    return (0,esm_hub/* getHubFromCarrier */.vi)(carrier);
  }

  function runWithAsyncContext(callback, options) {
    const existingHub = getCurrentHub();

    if (existingHub && (0,_optionalChain/* _optionalChain */.x)([options, 'optionalAccess', _ => _.reuseExisting])) {
      // We're already in an async context, so we don't need to create a new one
      // just call the callback with the current hub
      return callback();
    }

    const newHub = createNewHub(existingHub);

    return asyncStorage.run(newHub, () => {
      return callback();
    });
  }

  (0,esm_hub/* setAsyncContextStrategy */.$b)({ getCurrentHub, runWithAsyncContext });
}


//# sourceMappingURL=hooks.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/async/index.js




/**
 * Sets the correct async context strategy for Node.js
 *
 * Node.js >= 14 uses AsyncLocalStorage
 * Node.js < 14 uses domains
 */
function setNodeAsyncContextStrategy() {
  if (nodeVersion/* NODE_VERSION */.V.major && nodeVersion/* NODE_VERSION */.V.major >= 14) {
    setHooksAsyncContextStrategy();
  } else {
    setDomainAsyncContextStrategy();
  }
}


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/severity.js
// Note: Ideally the `SeverityLevel` type would be derived from `validSeverityLevels`, but that would mean either
//
// a) moving `validSeverityLevels` to `@sentry/types`,
// b) moving the`SeverityLevel` type here, or
// c) importing `validSeverityLevels` from here into `@sentry/types`.
//
// Option A would make `@sentry/types` a runtime dependency of `@sentry/utils` (not good), and options B and C would
// create a circular dependency between `@sentry/types` and `@sentry/utils` (also not good). So a TODO accompanying the
// type, reminding anyone who changes it to change this list also, will have to do.

const validSeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];

/**
 * Converts a string-based level into a member of the deprecated {@link Severity} enum.
 *
 * @deprecated `severityFromString` is deprecated. Please use `severityLevelFromString` instead.
 *
 * @param level String representation of Severity
 * @returns Severity
 */
function severityFromString(level) {
  return severityLevelFromString(level) ;
}

/**
 * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
 *
 * @param level String representation of desired `SeverityLevel`.
 * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
 */
function severityLevelFromString(level) {
  return (level === 'warn' ? 'warning' : validSeverityLevels.includes(level) ? level : 'log') ;
}


//# sourceMappingURL=severity.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/console.js




/** Console module integration */
class Console  {constructor() { Console.prototype.__init.call(this); }
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Console';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Console.id;}

  /**
   * @inheritDoc
   */
   setupOnce() {
    for (const level of ['debug', 'info', 'warn', 'error', 'log']) {
      (0,object/* fill */.hl)(console, level, createConsoleWrapper(level));
    }
  }
} Console.__initStatic();

/**
 * Wrapper function that'll be used for every console level
 */
function createConsoleWrapper(level) {
  return function consoleWrapper(originalConsoleMethod) {
    const sentryLevel = severityLevelFromString(level);

    /* eslint-disable prefer-rest-params */
    return function () {
      if ((0,esm_hub/* getCurrentHub */.Gd)().getIntegration(Console)) {
        (0,esm_hub/* getCurrentHub */.Gd)().addBreadcrumb(
          {
            category: 'console',
            level: sentryLevel,
            message: external_util_.format.apply(undefined, arguments),
          },
          {
            input: [...arguments],
            level,
          },
        );
      }

      originalConsoleMethod.apply(this, arguments);
    };
    /* eslint-enable prefer-rest-params */
  };
}


//# sourceMappingURL=console.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/baggage.js
var baggage = __webpack_require__(9181);
// EXTERNAL MODULE: ./node_modules/lru_map/lru.js
var lru = __webpack_require__(7612);
// EXTERNAL MODULE: ./node_modules/@sentry/node/esm/integrations/utils/http.js
var http = __webpack_require__(7578);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/http.js







/**
 * The http module integration instruments Node's internal http module. It creates breadcrumbs, transactions for outgoing
 * http requests and attaches trace data when tracing is enabled via its `tracing` option.
 */
class Http  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Http';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Http.id;}

  /**
   * @inheritDoc
   */
   constructor(options = {}) {Http.prototype.__init.call(this);
    this._breadcrumbs = typeof options.breadcrumbs === 'undefined' ? true : options.breadcrumbs;
    this._tracing = !options.tracing ? undefined : options.tracing === true ? {} : options.tracing;
  }

  /**
   * @inheritDoc
   */
   setupOnce(
    _addGlobalEventProcessor,
    setupOnceGetCurrentHub,
  ) {
    // No need to instrument if we don't want to track anything
    if (!this._breadcrumbs && !this._tracing) {
      return;
    }

    const clientOptions = (0,_optionalChain/* _optionalChain */.x)([setupOnceGetCurrentHub, 'call', _ => _(), 'access', _2 => _2.getClient, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getOptions, 'call', _5 => _5()]);

    // Do not auto-instrument for other instrumenter
    if (clientOptions && clientOptions.instrumenter !== 'sentry') {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('HTTP Integration is skipped because of instrumenter configuration.');
      return;
    }

    const shouldCreateSpanForRequest =
      // eslint-disable-next-line deprecation/deprecation
      (0,_optionalChain/* _optionalChain */.x)([this, 'access', _6 => _6._tracing, 'optionalAccess', _7 => _7.shouldCreateSpanForRequest]) || (0,_optionalChain/* _optionalChain */.x)([clientOptions, 'optionalAccess', _8 => _8.shouldCreateSpanForRequest]);
    // eslint-disable-next-line deprecation/deprecation
    const tracePropagationTargets = (0,_optionalChain/* _optionalChain */.x)([clientOptions, 'optionalAccess', _9 => _9.tracePropagationTargets]) || (0,_optionalChain/* _optionalChain */.x)([this, 'access', _10 => _10._tracing, 'optionalAccess', _11 => _11.tracePropagationTargets]);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const httpModule = __webpack_require__(3685);
    const wrappedHttpHandlerMaker = _createWrappedRequestMethodFactory(
      httpModule,
      this._breadcrumbs,
      shouldCreateSpanForRequest,
      tracePropagationTargets,
    );
    (0,object/* fill */.hl)(httpModule, 'get', wrappedHttpHandlerMaker);
    (0,object/* fill */.hl)(httpModule, 'request', wrappedHttpHandlerMaker);

    // NOTE: Prior to Node 9, `https` used internals of `http` module, thus we don't patch it.
    // If we do, we'd get double breadcrumbs and double spans for `https` calls.
    // It has been changed in Node 9, so for all versions equal and above, we patch `https` separately.
    if (nodeVersion/* NODE_VERSION */.V.major && nodeVersion/* NODE_VERSION */.V.major > 8) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const httpsModule = __webpack_require__(5687);
      const wrappedHttpsHandlerMaker = _createWrappedRequestMethodFactory(
        httpsModule,
        this._breadcrumbs,
        shouldCreateSpanForRequest,
        tracePropagationTargets,
      );
      (0,object/* fill */.hl)(httpsModule, 'get', wrappedHttpsHandlerMaker);
      (0,object/* fill */.hl)(httpsModule, 'request', wrappedHttpsHandlerMaker);
    }
  }
}Http.__initStatic();

// for ease of reading below

/**
 * Function which creates a function which creates wrapped versions of internal `request` and `get` calls within `http`
 * and `https` modules. (NB: Not a typo - this is a creator^2!)
 *
 * @param breadcrumbsEnabled Whether or not to record outgoing requests as breadcrumbs
 * @param tracingEnabled Whether or not to record outgoing requests as tracing spans
 *
 * @returns A function which accepts the exiting handler and returns a wrapped handler
 */
function _createWrappedRequestMethodFactory(
  httpModule,
  breadcrumbsEnabled,
  shouldCreateSpanForRequest,
  tracePropagationTargets,
) {
  // We're caching results so we don't have to recompute regexp every time we create a request.
  const createSpanUrlMap = new lru.LRUMap(100);
  const headersUrlMap = new lru.LRUMap(100);

  const shouldCreateSpan = (url) => {
    if (shouldCreateSpanForRequest === undefined) {
      return true;
    }

    const cachedDecision = createSpanUrlMap.get(url);
    if (cachedDecision !== undefined) {
      return cachedDecision;
    }

    const decision = shouldCreateSpanForRequest(url);
    createSpanUrlMap.set(url, decision);
    return decision;
  };

  const shouldAttachTraceData = (url) => {
    if (tracePropagationTargets === undefined) {
      return true;
    }

    const cachedDecision = headersUrlMap.get(url);
    if (cachedDecision !== undefined) {
      return cachedDecision;
    }

    const decision = (0,string/* stringMatchesSomePattern */.U0)(url, tracePropagationTargets);
    headersUrlMap.set(url, decision);
    return decision;
  };

  /**
   * Captures Breadcrumb based on provided request/response pair
   */
  function addRequestBreadcrumb(
    event,
    requestSpanData,
    req,
    res,
  ) {
    if (!(0,esm_hub/* getCurrentHub */.Gd)().getIntegration(Http)) {
      return;
    }

    (0,esm_hub/* getCurrentHub */.Gd)().addBreadcrumb(
      {
        category: 'http',
        data: {
          status_code: res && res.statusCode,
          ...requestSpanData,
        },
        type: 'http',
      },
      {
        event,
        request: req,
        response: res,
      },
    );
  }

  return function wrappedRequestMethodFactory(originalRequestMethod) {
    return function wrappedMethod( ...args) {
      const requestArgs = (0,http/* normalizeRequestArgs */.nY)(httpModule, args);
      const requestOptions = requestArgs[0];
      // eslint-disable-next-line deprecation/deprecation
      const rawRequestUrl = (0,http/* extractRawUrl */.lx)(requestOptions);
      const requestUrl = (0,http/* extractUrl */.CA)(requestOptions);

      // we don't want to record requests to Sentry as either breadcrumbs or spans, so just use the original method
      if ((0,http/* isSentryRequest */.ZB)(requestUrl)) {
        return originalRequestMethod.apply(httpModule, requestArgs);
      }

      const hub = (0,esm_hub/* getCurrentHub */.Gd)();
      const scope = hub.getScope();
      const parentSpan = scope.getSpan();

      const data = getRequestSpanData(requestUrl, requestOptions);

      const requestSpan = shouldCreateSpan(rawRequestUrl)
        ? (0,_optionalChain/* _optionalChain */.x)([parentSpan, 'optionalAccess', _12 => _12.startChild, 'call', _13 => _13({
            op: 'http.client',
            description: `${data['http.method']} ${data.url}`,
            data,
          })])
        : undefined;

      if (shouldAttachTraceData(rawRequestUrl)) {
        if (requestSpan) {
          const sentryTraceHeader = requestSpan.toTraceparent();
          const dynamicSamplingContext = (0,_optionalChain/* _optionalChain */.x)([requestSpan, 'optionalAccess', _14 => _14.transaction, 'optionalAccess', _15 => _15.getDynamicSamplingContext, 'call', _16 => _16()]);
          addHeadersToRequestOptions(requestOptions, requestUrl, sentryTraceHeader, dynamicSamplingContext);
        } else {
          const client = hub.getClient();
          const { traceId, sampled, dsc } = scope.getPropagationContext();
          const sentryTraceHeader = (0,tracing/* generateSentryTraceHeader */.$p)(traceId, undefined, sampled);
          const dynamicSamplingContext =
            dsc || (client ? (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromClient */._)(traceId, client, scope) : undefined);
          addHeadersToRequestOptions(requestOptions, requestUrl, sentryTraceHeader, dynamicSamplingContext);
        }
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger/* logger */.kg.log(
            `[Tracing] Not adding sentry-trace header to outgoing request (${requestUrl}) due to mismatching tracePropagationTargets option.`,
          );
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return originalRequestMethod
        .apply(httpModule, requestArgs)
        .once('response', function ( res) {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const req = this;
          if (breadcrumbsEnabled) {
            addRequestBreadcrumb('response', data, req, res);
          }
          if (requestSpan) {
            if (res.statusCode) {
              requestSpan.setHttpStatus(res.statusCode);
            }
            requestSpan.description = (0,http/* cleanSpanDescription */.Dt)(requestSpan.description, requestOptions, req);
            requestSpan.finish();
          }
        })
        .once('error', function () {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const req = this;

          if (breadcrumbsEnabled) {
            addRequestBreadcrumb('error', data, req);
          }
          if (requestSpan) {
            requestSpan.setHttpStatus(500);
            requestSpan.description = (0,http/* cleanSpanDescription */.Dt)(requestSpan.description, requestOptions, req);
            requestSpan.finish();
          }
        });
    };
  };
}

function addHeadersToRequestOptions(
  requestOptions,
  requestUrl,
  sentryTraceHeader,
  dynamicSamplingContext,
) {
  // Don't overwrite sentry-trace and baggage header if it's already set.
  const headers = requestOptions.headers || {};
  if (headers['sentry-trace']) {
    return;
  }

  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
    logger/* logger */.kg.log(`[Tracing] Adding sentry-trace header ${sentryTraceHeader} to outgoing request to "${requestUrl}": `);
  const sentryBaggage = (0,baggage/* dynamicSamplingContextToSentryBaggageHeader */.IQ)(dynamicSamplingContext);
  const sentryBaggageHeader =
    sentryBaggage && sentryBaggage.length > 0 ? normalizeBaggageHeader(requestOptions, sentryBaggage) : undefined;

  requestOptions.headers = {
    ...requestOptions.headers,
    'sentry-trace': sentryTraceHeader,
    // Setting a header to `undefined` will crash in node so we only set the baggage header when it's defined
    ...(sentryBaggageHeader && { baggage: sentryBaggageHeader }),
  };
}

function getRequestSpanData(requestUrl, requestOptions) {
  const method = requestOptions.method || 'GET';
  const data = {
    url: requestUrl,
    'http.method': method,
  };
  if (requestOptions.hash) {
    // strip leading "#"
    data['http.fragment'] = requestOptions.hash.substring(1);
  }
  if (requestOptions.search) {
    // strip leading "?"
    data['http.query'] = requestOptions.search.substring(1);
  }
  return data;
}

function normalizeBaggageHeader(
  requestOptions,
  sentryBaggageHeader,
) {
  if (!requestOptions.headers || !requestOptions.headers.baggage) {
    return sentryBaggageHeader;
  } else if (!sentryBaggageHeader) {
    return requestOptions.headers.baggage ;
  } else if (Array.isArray(requestOptions.headers.baggage)) {
    return [...requestOptions.headers.baggage, sentryBaggageHeader];
  }
  // Type-cast explanation:
  // Technically this the following could be of type `(number | string)[]` but for the sake of simplicity
  // we say this is undefined behaviour, since it would not be baggage spec conform if the user did this.
  return [requestOptions.headers.baggage, sentryBaggageHeader] ;
}


//# sourceMappingURL=http.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/utils/errorhandling.js



const DEFAULT_SHUTDOWN_TIMEOUT = 2000;

/**
 * @hidden
 */
function logAndExitProcess(error) {
  // eslint-disable-next-line no-console
  console.error(error && error.stack ? error.stack : error);

  const client = (0,esm_hub/* getCurrentHub */.Gd)().getClient();

  if (client === undefined) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('No NodeClient was defined, we are exiting the process now.');
    global.process.exit(1);
  }

  const options = client.getOptions();
  const timeout =
    (options && options.shutdownTimeout && options.shutdownTimeout > 0 && options.shutdownTimeout) ||
    DEFAULT_SHUTDOWN_TIMEOUT;
  client.close(timeout).then(
    (result) => {
      if (!result) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('We reached the timeout for emptying the request buffer, still exiting now!');
      }
      global.process.exit(1);
    },
    error => {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.error(error);
    },
  );
}


//# sourceMappingURL=errorhandling.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/onuncaughtexception.js




/** Global Exception handler */
class OnUncaughtException  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'OnUncaughtException';}

  /**
   * @inheritDoc
   */
   __init() {this.name = OnUncaughtException.id;}

  /**
   * @inheritDoc
   */
    __init2() {this.handler = this._makeErrorHandler();}

  // CAREFUL: Please think twice before updating the way _options looks because the Next.js SDK depends on it in `index.server.ts`

  /**
   * @inheritDoc
   */
   constructor(options = {}) {OnUncaughtException.prototype.__init.call(this);OnUncaughtException.prototype.__init2.call(this);
    this._options = {
      exitEvenIfOtherHandlersAreRegistered: true,
      ...options,
    };
  }

  /**
   * @inheritDoc
   */
   setupOnce() {
    global.process.on('uncaughtException', this.handler);
  }

  /**
   * @hidden
   */
   _makeErrorHandler() {
    const timeout = 2000;
    let caughtFirstError = false;
    let caughtSecondError = false;
    let calledFatalError = false;
    let firstError;

    return (error) => {
      let onFatalError = logAndExitProcess;
      const client = (0,esm_hub/* getCurrentHub */.Gd)().getClient();

      if (this._options.onFatalError) {
        onFatalError = this._options.onFatalError;
      } else if (client && client.getOptions().onFatalError) {
        onFatalError = client.getOptions().onFatalError ;
      }

      // Attaching a listener to `uncaughtException` will prevent the node process from exiting. We generally do not
      // want to alter this behaviour so we check for other listeners that users may have attached themselves and adjust
      // exit behaviour of the SDK accordingly:
      // - If other listeners are attached, do not exit.
      // - If the only listener attached is ours, exit.
      const userProvidedListenersCount = (
        global.process.listeners('uncaughtException')
      ).reduce((acc, listener) => {
        if (
          // There are 3 listeners we ignore:
          listener.name === 'domainUncaughtExceptionClear' || // as soon as we're using domains this listener is attached by node itself
          (listener.tag && listener.tag === 'sentry_tracingErrorCallback') || // the handler we register for tracing
          listener === this.handler // the handler we register in this integration
        ) {
          return acc;
        } else {
          return acc + 1;
        }
      }, 0);

      const processWouldExit = userProvidedListenersCount === 0;
      const shouldApplyFatalHandlingLogic = this._options.exitEvenIfOtherHandlersAreRegistered || processWouldExit;

      if (!caughtFirstError) {
        const hub = (0,esm_hub/* getCurrentHub */.Gd)();

        // this is the first uncaught error and the ultimate reason for shutting down
        // we want to do absolutely everything possible to ensure it gets captured
        // also we want to make sure we don't go recursion crazy if more errors happen after this one
        firstError = error;
        caughtFirstError = true;

        if (hub.getIntegration(OnUncaughtException)) {
          hub.withScope((scope) => {
            scope.setLevel('fatal');
            hub.captureException(error, {
              originalException: error,
              data: { mechanism: { handled: false, type: 'onuncaughtexception' } },
            });
            if (!calledFatalError && shouldApplyFatalHandlingLogic) {
              calledFatalError = true;
              onFatalError(error);
            }
          });
        } else {
          if (!calledFatalError && shouldApplyFatalHandlingLogic) {
            calledFatalError = true;
            onFatalError(error);
          }
        }
      } else {
        if (shouldApplyFatalHandlingLogic) {
          if (calledFatalError) {
            // we hit an error *after* calling onFatalError - pretty boned at this point, just shut it down
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
              logger/* logger */.kg.warn(
                'uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown',
              );
            logAndExitProcess(error);
          } else if (!caughtSecondError) {
            // two cases for how we can hit this branch:
            //   - capturing of first error blew up and we just caught the exception from that
            //     - quit trying to capture, proceed with shutdown
            //   - a second independent error happened while waiting for first error to capture
            //     - want to avoid causing premature shutdown before first error capture finishes
            // it's hard to immediately tell case 1 from case 2 without doing some fancy/questionable domain stuff
            // so let's instead just delay a bit before we proceed with our action here
            // in case 1, we just wait a bit unnecessarily but ultimately do the same thing
            // in case 2, the delay hopefully made us wait long enough for the capture to finish
            // two potential nonideal outcomes:
            //   nonideal case 1: capturing fails fast, we sit around for a few seconds unnecessarily before proceeding correctly by calling onFatalError
            //   nonideal case 2: case 2 happens, 1st error is captured but slowly, timeout completes before capture and we treat second error as the sendErr of (nonexistent) failure from trying to capture first error
            // note that after hitting this branch, we might catch more errors where (caughtSecondError && !calledFatalError)
            //   we ignore them - they don't matter to us, we're just waiting for the second error timeout to finish
            caughtSecondError = true;
            setTimeout(() => {
              if (!calledFatalError) {
                // it was probably case 1, let's treat err as the sendErr and call onFatalError
                calledFatalError = true;
                onFatalError(firstError, error);
              }
            }, timeout); // capturing could take at least sendTimeout to fail, plus an arbitrary second for how long it takes to collect surrounding source etc
          }
        }
      }
    };
  }
} OnUncaughtException.__initStatic();


//# sourceMappingURL=onuncaughtexception.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/onunhandledrejection.js




/** Global Promise Rejection handler */
class OnUnhandledRejection  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'OnUnhandledRejection';}

  /**
   * @inheritDoc
   */
   __init() {this.name = OnUnhandledRejection.id;}

  /**
   * @inheritDoc
   */
   constructor(
      _options

 = { mode: 'warn' },
  ) {this._options = _options;OnUnhandledRejection.prototype.__init.call(this);}

  /**
   * @inheritDoc
   */
   setupOnce() {
    global.process.on('unhandledRejection', this.sendUnhandledPromise.bind(this));
  }

  /**
   * Send an exception with reason
   * @param reason string
   * @param promise promise
   */
   sendUnhandledPromise(reason, promise) {
    const hub = (0,esm_hub/* getCurrentHub */.Gd)();
    if (hub.getIntegration(OnUnhandledRejection)) {
      hub.withScope((scope) => {
        scope.setExtra('unhandledPromiseRejection', true);
        hub.captureException(reason, {
          originalException: promise,
          data: { mechanism: { handled: false, type: 'onunhandledrejection' } },
        });
      });
    }
    this._handleRejection(reason);
  }

  /**
   * Handler for `mode` option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
   _handleRejection(reason) {
    // https://github.com/nodejs/node/blob/7cf6f9e964aa00772965391c23acda6d71972a9a/lib/internal/process/promises.js#L234-L240
    const rejectionWarning =
      'This error originated either by ' +
      'throwing inside of an async function without a catch block, ' +
      'or by rejecting a promise which was not handled with .catch().' +
      ' The promise rejected with the reason:';

    /* eslint-disable no-console */
    if (this._options.mode === 'warn') {
      (0,logger/* consoleSandbox */.Cf)(() => {
        console.warn(rejectionWarning);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.error(reason && reason.stack ? reason.stack : reason);
      });
    } else if (this._options.mode === 'strict') {
      (0,logger/* consoleSandbox */.Cf)(() => {
        console.warn(rejectionWarning);
      });
      logAndExitProcess(reason);
    }
    /* eslint-enable no-console */
  }
} OnUnhandledRejection.__initStatic();


//# sourceMappingURL=onunhandledrejection.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/aggregate-errors.js



/**
 * Creates exceptions inside `event.exception.values` for errors that are nested on properties based on the `key` parameter.
 */
function applyAggregateErrorsToEvent(
  exceptionFromErrorImplementation,
  parser,
  maxValueLimit = 250,
  key,
  limit,
  event,
  hint,
) {
  if (!event.exception || !event.exception.values || !hint || !(0,is/* isInstanceOf */.V9)(hint.originalException, Error)) {
    return;
  }

  // Generally speaking the last item in `event.exception.values` is the exception originating from the original Error
  const originalException =
    event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : undefined;

  // We only create exception grouping if there is an exception in the event.
  if (originalException) {
    event.exception.values = truncateAggregateExceptions(
      aggregateExceptionsFromError(
        exceptionFromErrorImplementation,
        parser,
        limit,
        hint.originalException ,
        key,
        event.exception.values,
        originalException,
        0,
      ),
      maxValueLimit,
    );
  }
}

function aggregateExceptionsFromError(
  exceptionFromErrorImplementation,
  parser,
  limit,
  error,
  key,
  prevExceptions,
  exception,
  exceptionId,
) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }

  let newExceptions = [...prevExceptions];

  if ((0,is/* isInstanceOf */.V9)(error[key], Error)) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId);
    const newException = exceptionFromErrorImplementation(parser, error[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      error[key],
      key,
      [newException, ...newExceptions],
      newException,
      newExceptionId,
    );
  }

  // This will create exception grouping for AggregateErrors
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
  if (Array.isArray(error.errors)) {
    error.errors.forEach((childError, i) => {
      if ((0,is/* isInstanceOf */.V9)(childError, Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId,
        );
      }
    });
  }

  return newExceptions;
}

function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
  // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
  exception.mechanism = exception.mechanism || { type: 'generic', handled: true };

  exception.mechanism = {
    ...exception.mechanism,
    is_exception_group: true,
    exception_id: exceptionId,
  };
}

function applyExceptionGroupFieldsForChildException(
  exception,
  source,
  exceptionId,
  parentId,
) {
  // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
  exception.mechanism = exception.mechanism || { type: 'generic', handled: true };

  exception.mechanism = {
    ...exception.mechanism,
    type: 'chained',
    source,
    exception_id: exceptionId,
    parent_id: parentId,
  };
}

/**
 * Truncate the message (exception.value) of all exceptions in the event.
 * Because this event processor is ran after `applyClientOptions`,
 * we need to truncate the message of the added exceptions here.
 */
function truncateAggregateExceptions(exceptions, maxValueLength) {
  return exceptions.map(exception => {
    if (exception.value) {
      exception.value = (0,string/* truncate */.$G)(exception.value, maxValueLength);
    }
    return exception;
  });
}


//# sourceMappingURL=aggregate-errors.js.map

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/contextlines.js





const FILE_CONTENT_CACHE = new lru.LRUMap(100);
const DEFAULT_LINES_OF_CONTEXT = 7;

// TODO: Replace with promisify when minimum supported node >= v8
function readTextFileAsync(path) {
  return new Promise((resolve, reject) => {
    (0,external_fs_.readFile)(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

/** Add node modules / packages to the event */
class ContextLines  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'ContextLines';}

  /**
   * @inheritDoc
   */
   __init() {this.name = ContextLines.id;}

   constructor(  _options = {}) {this._options = _options;ContextLines.prototype.__init.call(this);}

  /** Get's the number of context lines to add */
   get _contextLines() {
    return this._options.frameContextLines !== undefined ? this._options.frameContextLines : DEFAULT_LINES_OF_CONTEXT;
  }

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    addGlobalEventProcessor(event => {
      const self = getCurrentHub().getIntegration(ContextLines);
      if (!self) {
        return event;
      }
      return this.addSourceContext(event);
    });
  }

  /** Processes an event and adds context lines */
   async addSourceContext(event) {
    // keep a lookup map of which files we've already enqueued to read,
    // so we don't enqueue the same file multiple times which would cause multiple i/o reads
    const enqueuedReadSourceFileTasks = {};
    const readSourceFileTasks = [];

    if (this._contextLines > 0 && (0,_optionalChain/* _optionalChain */.x)([event, 'access', _2 => _2.exception, 'optionalAccess', _3 => _3.values])) {
      for (const exception of event.exception.values) {
        if (!(0,_optionalChain/* _optionalChain */.x)([exception, 'access', _4 => _4.stacktrace, 'optionalAccess', _5 => _5.frames])) {
          continue;
        }

        // We want to iterate in reverse order as calling cache.get will bump the file in our LRU cache.
        // This ends up prioritizes source context for frames at the top of the stack instead of the bottom.
        for (let i = exception.stacktrace.frames.length - 1; i >= 0; i--) {
          const frame = exception.stacktrace.frames[i];
          // Call cache.get to bump the file to the top of the cache and ensure we have not already
          // enqueued a read operation for this filename
          if (
            frame.filename &&
            !enqueuedReadSourceFileTasks[frame.filename] &&
            !FILE_CONTENT_CACHE.get(frame.filename)
          ) {
            readSourceFileTasks.push(_readSourceFile(frame.filename));
            enqueuedReadSourceFileTasks[frame.filename] = 1;
          }
        }
      }
    }

    // check if files to read > 0, if so, await all of them to be read before adding source contexts.
    // Normally, Promise.all here could be short circuited if one of the promises rejects, but we
    // are guarding from that by wrapping the i/o read operation in a try/catch.
    if (readSourceFileTasks.length > 0) {
      await Promise.all(readSourceFileTasks);
    }

    // Perform the same loop as above, but this time we can assume all files are in the cache
    // and attempt to add source context to frames.
    if (this._contextLines > 0 && (0,_optionalChain/* _optionalChain */.x)([event, 'access', _6 => _6.exception, 'optionalAccess', _7 => _7.values])) {
      for (const exception of event.exception.values) {
        if (exception.stacktrace && exception.stacktrace.frames) {
          await this.addSourceContextToFrames(exception.stacktrace.frames);
        }
      }
    }

    return event;
  }

  /** Adds context lines to frames */
   addSourceContextToFrames(frames) {
    for (const frame of frames) {
      // Only add context if we have a filename and it hasn't already been added
      if (frame.filename && frame.context_line === undefined) {
        const sourceFileLines = FILE_CONTENT_CACHE.get(frame.filename);

        if (sourceFileLines) {
          try {
            (0,misc/* addContextToFrame */.go)(sourceFileLines, frame, this._contextLines);
          } catch (e) {
            // anomaly, being defensive in case
            // unlikely to ever happen in practice but can definitely happen in theory
          }
        }
      }
    }
  }
}ContextLines.__initStatic();

/**
 * Reads file contents and caches them in a global LRU cache.
 * If reading fails, mark the file as null in the cache so we don't try again.
 *
 * @param filename filepath to read content from.
 */
async function _readSourceFile(filename) {
  const cachedFile = FILE_CONTENT_CACHE.get(filename);

  // We have already attempted to read this file and failed, do not try again
  if (cachedFile === null) {
    return null;
  }

  // We have a cache hit, return it
  if (cachedFile !== undefined) {
    return cachedFile;
  }

  // Guard from throwing if readFile fails, this enables us to use Promise.all and
  // not have it short circuiting if one of the promises rejects + since context lines are added
  // on a best effort basis, we want to throw here anyways.

  // If we made it to here, it means that our file is not cache nor marked as failed, so attempt to read it
  let content = null;
  try {
    const rawFileContents = await readTextFileAsync(filename);
    content = rawFileContents.split('\n');
  } catch (_) {
    // if we fail, we will mark the file as null in the cache and short circuit next time we try to read it
  }

  FILE_CONTENT_CACHE.set(filename, content);
  return content;
}


//# sourceMappingURL=contextlines.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/linkederrors.js




const DEFAULT_KEY = 'cause';
const DEFAULT_LIMIT = 5;

/** Adds SDK info to an event. */
class LinkedErrors  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'LinkedErrors';}

  /**
   * @inheritDoc
   */
    __init() {this.name = LinkedErrors.id;}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {LinkedErrors.prototype.__init.call(this);
    this._key = options.key || DEFAULT_KEY;
    this._limit = options.limit || DEFAULT_LIMIT;
  }

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    addGlobalEventProcessor(async (event, hint) => {
      const hub = getCurrentHub();
      const client = hub.getClient();
      const self = hub.getIntegration(LinkedErrors);

      if (!client || !self) {
        return event;
      }

      const options = client.getOptions();

      applyAggregateErrorsToEvent(
        exceptionFromError,
        options.stackParser,
        options.maxValueLength,
        self._key,
        self._limit,
        event,
        hint,
      );

      // If the ContextLines integration is enabled, we add source code context to linked errors
      // because we can't guarantee the order that integrations are run.
      const contextLines = getCurrentHub().getIntegration(ContextLines);
      if (contextLines) {
        await contextLines.addSourceContext(event);
      }

      return event;
    });
  }
} LinkedErrors.__initStatic();


//# sourceMappingURL=linkederrors.js.map

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/modules.js



let moduleCache;

/** Extract information about paths */
function getPaths() {
  try {
    return __webpack_require__.c ? Object.keys(__webpack_require__.c ) : [];
  } catch (e) {
    return [];
  }
}

/** Extract information about package.json modules */
function collectModules()

 {
  const mainPaths = (__webpack_require__.c[__webpack_require__.s] && __webpack_require__.c[__webpack_require__.s].paths) || [];
  const paths = getPaths();
  const infos

 = {};
  const seen

 = {};

  paths.forEach(path => {
    let dir = path;

    /** Traverse directories upward in the search of package.json file */
    const updir = () => {
      const orig = dir;
      dir = (0,external_path_.dirname)(orig);

      if (!dir || orig === dir || seen[orig]) {
        return undefined;
      }
      if (mainPaths.indexOf(dir) < 0) {
        return updir();
      }

      const pkgfile = (0,external_path_.join)(orig, 'package.json');
      seen[orig] = true;

      if (!(0,external_fs_.existsSync)(pkgfile)) {
        return updir();
      }

      try {
        const info = JSON.parse((0,external_fs_.readFileSync)(pkgfile, 'utf8'))

;
        infos[info.name] = info.version;
      } catch (_oO) {
        // no-empty
      }
    };

    updir();
  });

  return infos;
}

/** Add node modules / packages to the event */
class Modules  {constructor() { Modules.prototype.__init.call(this); }
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Modules';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Modules.id;}

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    addGlobalEventProcessor(event => {
      if (!getCurrentHub().getIntegration(Modules)) {
        return event;
      }
      return {
        ...event,
        modules: {
          ...event.modules,
          ...this._getModules(),
        },
      };
    });
  }

  /** Fetches the list of modules and the versions loaded by the entry file for your node.js app. */
   _getModules() {
    if (!moduleCache) {
      moduleCache = collectModules();
    }
    return moduleCache;
  }
} Modules.__initStatic();


//# sourceMappingURL=modules.js.map

;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/context.js







// TODO: Required until we drop support for Node v8
const readFileAsync = (0,external_util_.promisify)(external_fs_.readFile);
const readDirAsync = (0,external_util_.promisify)(external_fs_.readdir);

/** Add node modules / packages to the event */
class Context  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Context';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Context.id;}

  /**
   * Caches context so it's only evaluated once
   */

   constructor(
      _options = {
      app: true,
      os: true,
      device: true,
      culture: true,
      cloudResource: true,
    },
  ) {this._options = _options;Context.prototype.__init.call(this);}

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor) {
    addGlobalEventProcessor(event => this.addContext(event));
  }

  /** Processes an event and adds context */
   async addContext(event) {
    if (this._cachedContext === undefined) {
      this._cachedContext = this._getContexts();
    }

    const updatedContext = this._updateContext(await this._cachedContext);

    event.contexts = {
      ...event.contexts,
      app: { ...updatedContext.app, ...(0,_optionalChain/* _optionalChain */.x)([event, 'access', _ => _.contexts, 'optionalAccess', _2 => _2.app]) },
      os: { ...updatedContext.os, ...(0,_optionalChain/* _optionalChain */.x)([event, 'access', _3 => _3.contexts, 'optionalAccess', _4 => _4.os]) },
      device: { ...updatedContext.device, ...(0,_optionalChain/* _optionalChain */.x)([event, 'access', _5 => _5.contexts, 'optionalAccess', _6 => _6.device]) },
      culture: { ...updatedContext.culture, ...(0,_optionalChain/* _optionalChain */.x)([event, 'access', _7 => _7.contexts, 'optionalAccess', _8 => _8.culture]) },
      cloud_resource: { ...updatedContext.cloud_resource, ...(0,_optionalChain/* _optionalChain */.x)([event, 'access', _9 => _9.contexts, 'optionalAccess', _10 => _10.cloud_resource]) },
    };

    return event;
  }

  /**
   * Updates the context with dynamic values that can change
   */
   _updateContext(contexts) {
    // Only update properties if they exist
    if ((0,_optionalChain/* _optionalChain */.x)([contexts, 'optionalAccess', _11 => _11.app, 'optionalAccess', _12 => _12.app_memory])) {
      contexts.app.app_memory = process.memoryUsage().rss;
    }

    if ((0,_optionalChain/* _optionalChain */.x)([contexts, 'optionalAccess', _13 => _13.device, 'optionalAccess', _14 => _14.free_memory])) {
      contexts.device.free_memory = external_os_.freemem();
    }

    return contexts;
  }

  /**
   * Gets the contexts for the current environment
   */
   async _getContexts() {
    const contexts = {};

    if (this._options.os) {
      contexts.os = await getOsContext();
    }

    if (this._options.app) {
      contexts.app = getAppContext();
    }

    if (this._options.device) {
      contexts.device = getDeviceContext(this._options.device);
    }

    if (this._options.culture) {
      const culture = getCultureContext();

      if (culture) {
        contexts.culture = culture;
      }
    }

    if (this._options.cloudResource) {
      contexts.cloud_resource = getCloudResourceContext();
    }

    return contexts;
  }
}Context.__initStatic();

/**
 * Returns the operating system context.
 *
 * Based on the current platform, this uses a different strategy to provide the
 * most accurate OS information. Since this might involve spawning subprocesses
 * or accessing the file system, this should only be executed lazily and cached.
 *
 *  - On macOS (Darwin), this will execute the `sw_vers` utility. The context
 *    has a `name`, `version`, `build` and `kernel_version` set.
 *  - On Linux, this will try to load a distribution release from `/etc` and set
 *    the `name`, `version` and `kernel_version` fields.
 *  - On all other platforms, only a `name` and `version` will be returned. Note
 *    that `version` might actually be the kernel version.
 */
async function getOsContext() {
  const platformId = external_os_.platform();
  switch (platformId) {
    case 'darwin':
      return getDarwinInfo();
    case 'linux':
      return getLinuxInfo();
    default:
      return {
        name: PLATFORM_NAMES[platformId] || platformId,
        version: external_os_.release(),
      };
  }
}

function getCultureContext() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    if (typeof (process.versions ).icu !== 'string') {
      // Node was built without ICU support
      return;
    }

    // Check that node was built with full Intl support. Its possible it was built without support for non-English
    // locales which will make resolvedOptions inaccurate
    //
    // https://nodejs.org/api/intl.html#detecting-internationalization-support
    const january = new Date(9e8);
    const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
    if (spanish.format(january) === 'enero') {
      const options = Intl.DateTimeFormat().resolvedOptions();

      return {
        locale: options.locale,
        timezone: options.timeZone,
      };
    }
  } catch (err) {
    //
  }

  return;
}

function getAppContext() {
  const app_memory = process.memoryUsage().rss;
  const app_start_time = new Date(Date.now() - process.uptime() * 1000).toISOString();

  return { app_start_time, app_memory };
}

/**
 * Gets device information from os
 */
function getDeviceContext(deviceOpt) {
  const device = {};

  // Sometimes os.uptime() throws due to lacking permissions: https://github.com/getsentry/sentry-javascript/issues/8202
  let uptime;
  try {
    uptime = external_os_.uptime && external_os_.uptime();
  } catch (e) {
    // noop
  }

  // os.uptime or its return value seem to be undefined in certain environments (e.g. Azure functions).
  // Hence, we only set boot time, if we get a valid uptime value.
  // @see https://github.com/getsentry/sentry-javascript/issues/5856
  if (typeof uptime === 'number') {
    device.boot_time = new Date(Date.now() - uptime * 1000).toISOString();
  }

  device.arch = external_os_.arch();

  if (deviceOpt === true || deviceOpt.memory) {
    device.memory_size = external_os_.totalmem();
    device.free_memory = external_os_.freemem();
  }

  if (deviceOpt === true || deviceOpt.cpu) {
    const cpuInfo = external_os_.cpus();
    if (cpuInfo && cpuInfo.length) {
      const firstCpu = cpuInfo[0];

      device.processor_count = cpuInfo.length;
      device.cpu_description = firstCpu.model;
      device.processor_frequency = firstCpu.speed;
    }
  }

  return device;
}

/** Mapping of Node's platform names to actual OS names. */
const PLATFORM_NAMES = {
  aix: 'IBM AIX',
  freebsd: 'FreeBSD',
  openbsd: 'OpenBSD',
  sunos: 'SunOS',
  win32: 'Windows',
};

/** Linux version file to check for a distribution. */

/** Mapping of linux release files located in /etc to distributions. */
const LINUX_DISTROS = [
  { name: 'fedora-release', distros: ['Fedora'] },
  { name: 'redhat-release', distros: ['Red Hat Linux', 'Centos'] },
  { name: 'redhat_version', distros: ['Red Hat Linux'] },
  { name: 'SuSE-release', distros: ['SUSE Linux'] },
  { name: 'lsb-release', distros: ['Ubuntu Linux', 'Arch Linux'] },
  { name: 'debian_version', distros: ['Debian'] },
  { name: 'debian_release', distros: ['Debian'] },
  { name: 'arch-release', distros: ['Arch Linux'] },
  { name: 'gentoo-release', distros: ['Gentoo Linux'] },
  { name: 'novell-release', distros: ['SUSE Linux'] },
  { name: 'alpine-release', distros: ['Alpine Linux'] },
];

/** Functions to extract the OS version from Linux release files. */
const LINUX_VERSIONS

 = {
  alpine: content => content,
  arch: content => matchFirst(/distrib_release=(.*)/, content),
  centos: content => matchFirst(/release ([^ ]+)/, content),
  debian: content => content,
  fedora: content => matchFirst(/release (..)/, content),
  mint: content => matchFirst(/distrib_release=(.*)/, content),
  red: content => matchFirst(/release ([^ ]+)/, content),
  suse: content => matchFirst(/VERSION = (.*)\n/, content),
  ubuntu: content => matchFirst(/distrib_release=(.*)/, content),
};

/**
 * Executes a regular expression with one capture group.
 *
 * @param regex A regular expression to execute.
 * @param text Content to execute the RegEx on.
 * @returns The captured string if matched; otherwise undefined.
 */
function matchFirst(regex, text) {
  const match = regex.exec(text);
  return match ? match[1] : undefined;
}

/** Loads the macOS operating system context. */
async function getDarwinInfo() {
  // Default values that will be used in case no operating system information
  // can be loaded. The default version is computed via heuristics from the
  // kernel version, but the build ID is missing.
  const darwinInfo = {
    kernel_version: external_os_.release(),
    name: 'Mac OS X',
    version: `10.${Number(external_os_.release().split('.')[0]) - 4}`,
  };

  try {
    // We try to load the actual macOS version by executing the `sw_vers` tool.
    // This tool should be available on every standard macOS installation. In
    // case this fails, we stick with the values computed above.

    const output = await new Promise((resolve, reject) => {
      (0,external_child_process_namespaceObject.execFile)('/usr/bin/sw_vers', (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });

    darwinInfo.name = matchFirst(/^ProductName:\s+(.*)$/m, output);
    darwinInfo.version = matchFirst(/^ProductVersion:\s+(.*)$/m, output);
    darwinInfo.build = matchFirst(/^BuildVersion:\s+(.*)$/m, output);
  } catch (e) {
    // ignore
  }

  return darwinInfo;
}

/** Returns a distribution identifier to look up version callbacks. */
function getLinuxDistroId(name) {
  return name.split(' ')[0].toLowerCase();
}

/** Loads the Linux operating system context. */
async function getLinuxInfo() {
  // By default, we cannot assume anything about the distribution or Linux
  // version. `os.release()` returns the kernel version and we assume a generic
  // "Linux" name, which will be replaced down below.
  const linuxInfo = {
    kernel_version: external_os_.release(),
    name: 'Linux',
  };

  try {
    // We start guessing the distribution by listing files in the /etc
    // directory. This is were most Linux distributions (except Knoppix) store
    // release files with certain distribution-dependent meta data. We search
    // for exactly one known file defined in `LINUX_DISTROS` and exit if none
    // are found. In case there are more than one file, we just stick with the
    // first one.
    const etcFiles = await readDirAsync('/etc');
    const distroFile = LINUX_DISTROS.find(file => etcFiles.includes(file.name));
    if (!distroFile) {
      return linuxInfo;
    }

    // Once that file is known, load its contents. To make searching in those
    // files easier, we lowercase the file contents. Since these files are
    // usually quite small, this should not allocate too much memory and we only
    // hold on to it for a very short amount of time.
    const distroPath = (0,external_path_.join)('/etc', distroFile.name);
    const contents = ((await readFileAsync(distroPath, { encoding: 'utf-8' })) ).toLowerCase();

    // Some Linux distributions store their release information in the same file
    // (e.g. RHEL and Centos). In those cases, we scan the file for an
    // identifier, that basically consists of the first word of the linux
    // distribution name (e.g. "red" for Red Hat). In case there is no match, we
    // just assume the first distribution in our list.
    const { distros } = distroFile;
    linuxInfo.name = distros.find(d => contents.indexOf(getLinuxDistroId(d)) >= 0) || distros[0];

    // Based on the found distribution, we can now compute the actual version
    // number. This is different for every distribution, so several strategies
    // are computed in `LINUX_VERSIONS`.
    const id = getLinuxDistroId(linuxInfo.name);
    linuxInfo.version = LINUX_VERSIONS[id](contents);
  } catch (e) {
    // ignore
  }

  return linuxInfo;
}

/**
 * Grabs some information about hosting provider based on best effort.
 */
function getCloudResourceContext() {
  if (process.env.VERCEL) {
    // https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#system-environment-variables
    return {
      'cloud.provider': 'vercel',
      'cloud.region': process.env.VERCEL_REGION,
    };
  } else if (process.env.AWS_REGION) {
    // https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html
    return {
      'cloud.provider': 'aws',
      'cloud.region': process.env.AWS_REGION,
      'cloud.platform': process.env.AWS_EXECUTION_ENV,
    };
  } else if (process.env.GCP_PROJECT) {
    // https://cloud.google.com/composer/docs/how-to/managing/environment-variables#reserved_variables
    return {
      'cloud.provider': 'gcp',
    };
  } else if (process.env.ALIYUN_REGION_ID) {
    // TODO: find where I found these environment variables - at least gc.github.com returns something
    return {
      'cloud.provider': 'alibaba_cloud',
      'cloud.region': process.env.ALIYUN_REGION_ID,
    };
  } else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) {
    // https://learn.microsoft.com/en-us/azure/app-service/reference-app-settings?tabs=kudu%2Cdotnet#app-environment
    return {
      'cloud.provider': 'azure',
      'cloud.region': process.env.REGION_NAME,
    };
  } else if (process.env.IBM_CLOUD_REGION) {
    // TODO: find where I found these environment variables - at least gc.github.com returns something
    return {
      'cloud.provider': 'ibm_cloud',
      'cloud.region': process.env.IBM_CLOUD_REGION,
    };
  } else if (process.env.TENCENTCLOUD_REGION) {
    // https://www.tencentcloud.com/document/product/583/32748
    return {
      'cloud.provider': 'tencent_cloud',
      'cloud.region': process.env.TENCENTCLOUD_REGION,
      'cloud.account.id': process.env.TENCENTCLOUD_APPID,
      'cloud.availability_zone': process.env.TENCENTCLOUD_ZONE,
    };
  } else if (process.env.NETLIFY) {
    // https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
    return {
      'cloud.provider': 'netlify',
    };
  } else if (process.env.FLY_REGION) {
    // https://fly.io/docs/reference/runtime-environment/
    return {
      'cloud.provider': 'fly.io',
      'cloud.region': process.env.FLY_REGION,
    };
  } else if (process.env.DYNO) {
    // https://devcenter.heroku.com/articles/dynos#local-environment-variables
    return {
      'cloud.provider': 'heroku',
    };
  } else {
    return undefined;
  }
}


//# sourceMappingURL=context.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/requestdata.js
var requestdata = __webpack_require__(442);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/url.js
var url = __webpack_require__(6956);
// EXTERNAL MODULE: ./node_modules/cookie/index.js
var cookie = __webpack_require__(6489);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/requestdata.js





const DEFAULT_INCLUDES = {
  ip: false,
  request: true,
  transaction: true,
  user: true,
};
const DEFAULT_REQUEST_INCLUDES = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'];
const DEFAULT_USER_INCLUDES = ['id', 'username', 'email'];

/**
 * Extracts a complete and parameterized path from the request object and uses it to construct transaction name.
 * If the parameterized transaction name cannot be extracted, we fall back to the raw URL.
 *
 * Additionally, this function determines and returns the transaction name source
 *
 * eg. GET /mountpoint/user/:id
 *
 * @param req A request object
 * @param options What to include in the transaction name (method, path, or a custom route name to be
 *                used instead of the request's route)
 *
 * @returns A tuple of the fully constructed transaction name [0] and its source [1] (can be either 'route' or 'url')
 */
function extractPathForTransaction(
  req,
  options = {},
) {
  const method = req.method && req.method.toUpperCase();

  let path = '';
  let source = 'url';

  // Check to see if there's a parameterized route we can use (as there is in Express)
  if (options.customRoute || req.route) {
    path = options.customRoute || `${req.baseUrl || ''}${req.route && req.route.path}`;
    source = 'route';
  }

  // Otherwise, just take the original URL
  else if (req.originalUrl || req.url) {
    path = (0,url/* stripUrlQueryAndFragment */.rt)(req.originalUrl || req.url || '');
  }

  let name = '';
  if (options.method && method) {
    name += method;
  }
  if (options.method && options.path) {
    name += ' ';
  }
  if (options.path && path) {
    name += path;
  }

  return [name, source];
}

/** JSDoc */
function extractTransaction(req, type) {
  switch (type) {
    case 'path': {
      return extractPathForTransaction(req, { path: true })[0];
    }
    case 'handler': {
      return (req.route && req.route.stack && req.route.stack[0] && req.route.stack[0].name) || '<anonymous>';
    }
    case 'methodPath':
    default: {
      return extractPathForTransaction(req, { path: true, method: true })[0];
    }
  }
}

/** JSDoc */
function extractUserData(
  user

,
  keys,
) {
  const extractedUser = {};
  const attributes = Array.isArray(keys) ? keys : DEFAULT_USER_INCLUDES;

  attributes.forEach(key => {
    if (user && key in user) {
      extractedUser[key] = user[key];
    }
  });

  return extractedUser;
}

/**
 * Normalize data from the request object
 *
 * @param req The request object from which to extract data
 * @param options.include An optional array of keys to include in the normalized data. Defaults to
 * DEFAULT_REQUEST_INCLUDES if not provided.
 * @param options.deps Injected, platform-specific dependencies
 *
 * @returns An object containing normalized request data
 */
function extractRequestData(
  req,
  options

,
) {
  const { include = DEFAULT_REQUEST_INCLUDES } = options || {};
  const requestData = {};

  // headers:
  //   node, express, koa, nextjs: req.headers
  const headers = (req.headers || {})

;
  // method:
  //   node, express, koa, nextjs: req.method
  const method = req.method;
  // host:
  //   express: req.hostname in > 4 and req.host in < 4
  //   koa: req.host
  //   node, nextjs: req.headers.host
  const host = req.hostname || req.host || headers.host || '<no host>';
  // protocol:
  //   node, nextjs: <n/a>
  //   express, koa: req.protocol
  const protocol = req.protocol === 'https' || (req.socket && req.socket.encrypted) ? 'https' : 'http';
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  const originalUrl = req.originalUrl || req.url || '';
  // absolute url
  const absoluteUrl = originalUrl.startsWith(protocol) ? originalUrl : `${protocol}://${host}${originalUrl}`;
  include.forEach(key => {
    switch (key) {
      case 'headers': {
        requestData.headers = headers;

        // Remove the Cookie header in case cookie data should not be included in the event
        if (!include.includes('cookies')) {
          delete (requestData.headers ).cookie;
        }

        break;
      }
      case 'method': {
        requestData.method = method;
        break;
      }
      case 'url': {
        requestData.url = absoluteUrl;
        break;
      }
      case 'cookies': {
        // cookies:
        //   node, express, koa: req.headers.cookie
        //   vercel, sails.js, express (w/ cookie middleware), nextjs: req.cookies
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        requestData.cookies =
          // TODO (v8 / #5257): We're only sending the empty object for backwards compatibility, so the last bit can
          // come off in v8
          req.cookies || (headers.cookie && cookie/* parse */.Q(headers.cookie)) || {};
        break;
      }
      case 'query_string': {
        // query string:
        //   node: req.url (raw)
        //   express, koa, nextjs: req.query
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        requestData.query_string = extractQueryParams(req);
        break;
      }
      case 'data': {
        if (method === 'GET' || method === 'HEAD') {
          break;
        }
        // body data:
        //   express, koa, nextjs: req.body
        //
        //   when using node by itself, you have to read the incoming stream(see
        //   https://nodejs.dev/learn/get-http-request-body-data-using-nodejs); if a user is doing that, we can't know
        //   where they're going to store the final result, so they'll have to capture this data themselves
        if (req.body !== undefined) {
          requestData.data = (0,is/* isString */.HD)(req.body) ? req.body : JSON.stringify(normalize(req.body));
        }
        break;
      }
      default: {
        if ({}.hasOwnProperty.call(req, key)) {
          requestData[key] = (req )[key];
        }
      }
    }
  });

  return requestData;
}

/**
 * Add data from the given request to the given event
 *
 * @param event The event to which the request data will be added
 * @param req Request object
 * @param options.include Flags to control what data is included
 *
 * @returns The mutated `Event` object
 */
function addRequestDataToEvent(
  event,
  req,
  options,
) {
  const include = {
    ...DEFAULT_INCLUDES,
    ...(0,_optionalChain/* _optionalChain */.x)([options, 'optionalAccess', _ => _.include]),
  };

  if (include.request) {
    const extractedRequestData = Array.isArray(include.request)
      ? extractRequestData(req, { include: include.request })
      : extractRequestData(req);

    event.request = {
      ...event.request,
      ...extractedRequestData,
    };
  }

  if (include.user) {
    const extractedUser = req.user && (0,is/* isPlainObject */.PO)(req.user) ? extractUserData(req.user, include.user) : {};

    if (Object.keys(extractedUser).length) {
      event.user = {
        ...event.user,
        ...extractedUser,
      };
    }
  }

  // client ip:
  //   node, nextjs: req.socket.remoteAddress
  //   express, koa: req.ip
  if (include.ip) {
    const ip = req.ip || (req.socket && req.socket.remoteAddress);
    if (ip) {
      event.user = {
        ...event.user,
        ip_address: ip,
      };
    }
  }

  if (include.transaction && !event.transaction) {
    // TODO do we even need this anymore?
    // TODO make this work for nextjs
    event.transaction = extractTransaction(req, include.transaction);
  }

  return event;
}

function extractQueryParams(req) {
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  let originalUrl = req.originalUrl || req.url || '';

  if (!originalUrl) {
    return;
  }

  // The `URL` constructor can't handle internal URLs of the form `/some/path/here`, so stick a dummy protocol and
  // hostname on the beginning. Since the point here is just to grab the query string, it doesn't matter what we use.
  if (originalUrl.startsWith('/')) {
    originalUrl = `http://dogs.are.great${originalUrl}`;
  }

  return (
    req.query ||
    (typeof URL !== undefined && new URL(originalUrl).search.replace('?', '')) ||
    // In Node 8, `URL` isn't in the global scope, so we have to use the built-in module from Node
    external_url_.parse(originalUrl).query ||
    undefined
  );
}


//# sourceMappingURL=requestdata.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/requestdata.js



const DEFAULT_OPTIONS = {
  include: {
    cookies: true,
    data: true,
    headers: true,
    ip: false,
    query_string: true,
    url: true,
    user: {
      id: true,
      username: true,
      email: true,
    },
  },
  transactionNamingScheme: 'methodPath',
};

/** Add data about a request to an event. Primarily for use in Node-based SDKs, but included in `@sentry/integrations`
 * so it can be used in cross-platform SDKs like `@sentry/nextjs`. */
class RequestData  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'RequestData';}

  /**
   * @inheritDoc
   */
   __init() {this.name = RequestData.id;}

  /**
   * Function for adding request data to event. Defaults to `addRequestDataToEvent` from `@sentry/node` for now, but
   * left as a property so this integration can be moved to `@sentry/core` as a base class in case we decide to use
   * something similar in browser-based SDKs in the future.
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {RequestData.prototype.__init.call(this);
    this._addRequestData = addRequestDataToEvent;
    this._options = {
      ...DEFAULT_OPTIONS,
      ...options,
      include: {
        // @ts-ignore It's mad because `method` isn't a known `include` key. (It's only here and not set by default in
        // `addRequestDataToEvent` for legacy reasons. TODO (v8): Change that.)
        method: true,
        ...DEFAULT_OPTIONS.include,
        ...options.include,
        user:
          options.include && typeof options.include.user === 'boolean'
            ? options.include.user
            : {
                ...DEFAULT_OPTIONS.include.user,
                // Unclear why TS still thinks `options.include.user` could be a boolean at this point
                ...((options.include || {}).user ),
              },
      },
    };
  }

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    // Note: In the long run, most of the logic here should probably move into the request data utility functions. For
    // the moment it lives here, though, until https://github.com/getsentry/sentry-javascript/issues/5718 is addressed.
    // (TL;DR: Those functions touch many parts of the repo in many different ways, and need to be clened up. Once
    // that's happened, it will be easier to add this logic in without worrying about unexpected side effects.)
    const { transactionNamingScheme } = this._options;

    addGlobalEventProcessor(event => {
      const hub = getCurrentHub();
      const self = hub.getIntegration(RequestData);

      const { sdkProcessingMetadata = {} } = event;
      const req = sdkProcessingMetadata.request;

      // If the globally installed instance of this integration isn't associated with the current hub, `self` will be
      // undefined
      if (!self || !req) {
        return event;
      }

      // The Express request handler takes a similar `include` option to that which can be passed to this integration.
      // If passed there, we store it in `sdkProcessingMetadata`. TODO(v8): Force express and GCP people to use this
      // integration, so that all of this passing and conversion isn't necessary
      const addRequestDataOptions =
        sdkProcessingMetadata.requestDataOptionsFromExpressHandler ||
        sdkProcessingMetadata.requestDataOptionsFromGCPWrapper ||
        convertReqDataIntegrationOptsToAddReqDataOpts(this._options);

      const processedEvent = this._addRequestData(event, req, addRequestDataOptions);

      // Transaction events already have the right `transaction` value
      if (event.type === 'transaction' || transactionNamingScheme === 'handler') {
        return processedEvent;
      }

      // In all other cases, use the request's associated transaction (if any) to overwrite the event's `transaction`
      // value with a high-quality one
      const reqWithTransaction = req ;
      const transaction = reqWithTransaction._sentryTransaction;
      if (transaction) {
        // TODO (v8): Remove the nextjs check and just base it on `transactionNamingScheme` for all SDKs. (We have to
        // keep it the way it is for the moment, because changing the names of transactions in Sentry has the potential
        // to break things like alert rules.)
        const shouldIncludeMethodInTransactionName =
          getSDKName(hub) === 'sentry.javascript.nextjs'
            ? transaction.name.startsWith('/api')
            : transactionNamingScheme !== 'path';

        const [transactionValue] = (0,requestdata/* extractPathForTransaction */.oA)(req, {
          path: true,
          method: shouldIncludeMethodInTransactionName,
          customRoute: transaction.name,
        });

        processedEvent.transaction = transactionValue;
      }

      return processedEvent;
    });
  }
} RequestData.__initStatic();

/** Convert this integration's options to match what `addRequestDataToEvent` expects */
/** TODO: Can possibly be deleted once https://github.com/getsentry/sentry-javascript/issues/5718 is fixed */
function convertReqDataIntegrationOptsToAddReqDataOpts(
  integrationOptions,
) {
  const {
    transactionNamingScheme,
    include: { ip, user, ...requestOptions },
  } = integrationOptions;

  const requestIncludeKeys = [];
  for (const [key, value] of Object.entries(requestOptions)) {
    if (value) {
      requestIncludeKeys.push(key);
    }
  }

  let addReqDataUserOpt;
  if (user === undefined) {
    addReqDataUserOpt = true;
  } else if (typeof user === 'boolean') {
    addReqDataUserOpt = user;
  } else {
    const userIncludeKeys = [];
    for (const [key, value] of Object.entries(user)) {
      if (value) {
        userIncludeKeys.push(key);
      }
    }
    addReqDataUserOpt = userIncludeKeys;
  }

  return {
    include: {
      ip,
      user: addReqDataUserOpt,
      request: requestIncludeKeys.length !== 0 ? requestIncludeKeys : undefined,
      transaction: transactionNamingScheme,
    },
  };
}

function getSDKName(hub) {
  try {
    // For a long chain like this, it's fewer bytes to combine a try-catch with assuming everything is there than to
    // write out a long chain of `a && a.b && a.b.c && ...`
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return hub.getClient().getOptions()._metadata.sdk.name;
  } catch (err) {
    // In theory we should never get here
    return undefined;
  }
}


//# sourceMappingURL=requestdata.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/localvariables.js





/** Creates a container for callbacks to be called sequentially */
function createCallbackList(complete) {
  // A collection of callbacks to be executed last to first
  let callbacks = [];

  let completedCalled = false;
  function checkedComplete(result) {
    callbacks = [];
    if (completedCalled) {
      return;
    }
    completedCalled = true;
    complete(result);
  }

  // complete should be called last
  callbacks.push(checkedComplete);

  function add(fn) {
    callbacks.push(fn);
  }

  function next(result) {
    const popped = callbacks.pop() || checkedComplete;

    try {
      popped(result);
    } catch (_) {
      // If there is an error, we still want to call the complete callback
      checkedComplete(result);
    }
  }

  return { add, next };
}

/**
 * Promise API is available as `Experimental` and in Node 19 only.
 *
 * Callback-based API is `Stable` since v14 and `Experimental` since v8.
 * Because of that, we are creating our own `AsyncSession` class.
 *
 * https://nodejs.org/docs/latest-v19.x/api/inspector.html#promises-api
 * https://nodejs.org/docs/latest-v14.x/api/inspector.html
 */
class AsyncSession  {

  /** Throws if inspector API is not available */
   constructor() {
    /*
    TODO: We really should get rid of this require statement below for a couple of reasons:
    1. It makes the integration unusable in the SvelteKit SDK, as it's not possible to use `require`
       in SvelteKit server code (at least not by default).
    2. Throwing in a constructor is bad practice

    More context for a future attempt to fix this:
    We already tried replacing it with import but didn't get it to work because of async problems.
    We still called import in the constructor but assigned to a promise which we "awaited" in
    `configureAndConnect`. However, this broke the Node integration tests as no local variables
    were reported any more. We probably missed a place where we need to await the promise, too.
    */

    // Node can be built without inspector support so this can throw
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Session } = __webpack_require__(1405);
    this._session = new Session();
  }

  /** @inheritdoc */
   configureAndConnect(onPause, captureAll) {
    this._session.connect();

    this._session.on('Debugger.paused', event => {
      onPause(event, () => {
        // After the pause work is complete, resume execution or the exception context memory is leaked
        this._session.post('Debugger.resume');
      });
    });

    this._session.post('Debugger.enable');
    this._session.post('Debugger.setPauseOnExceptions', { state: captureAll ? 'all' : 'uncaught' });
  }

  /** @inheritdoc */
   getLocalVariables(objectId, complete) {
    this._getProperties(objectId, props => {
      const { add, next } = createCallbackList(complete);

      for (const prop of props) {
        if ((0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _2 => _2.value, 'optionalAccess', _3 => _3.objectId]) && (0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _4 => _4.value, 'access', _5 => _5.className]) === 'Array') {
          const id = prop.value.objectId;
          add(vars => this._unrollArray(id, prop.name, vars, next));
        } else if ((0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _6 => _6.value, 'optionalAccess', _7 => _7.objectId]) && (0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _8 => _8.value, 'optionalAccess', _9 => _9.className]) === 'Object') {
          const id = prop.value.objectId;
          add(vars => this._unrollObject(id, prop.name, vars, next));
        } else if ((0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _10 => _10.value, 'optionalAccess', _11 => _11.value]) || (0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _12 => _12.value, 'optionalAccess', _13 => _13.description])) {
          add(vars => this._unrollOther(prop, vars, next));
        }
      }

      next({});
    });
  }

  /**
   * Gets all the PropertyDescriptors of an object
   */
   _getProperties(objectId, next) {
    this._session.post(
      'Runtime.getProperties',
      {
        objectId,
        ownProperties: true,
      },
      (err, params) => {
        if (err) {
          next([]);
        } else {
          next(params.result);
        }
      },
    );
  }

  /**
   * Unrolls an array property
   */
   _unrollArray(objectId, name, vars, next) {
    this._getProperties(objectId, props => {
      vars[name] = props
        .filter(v => v.name !== 'length' && !isNaN(parseInt(v.name, 10)))
        .sort((a, b) => parseInt(a.name, 10) - parseInt(b.name, 10))
        .map(v => (0,_optionalChain/* _optionalChain */.x)([v, 'optionalAccess', _14 => _14.value, 'optionalAccess', _15 => _15.value]));

      next(vars);
    });
  }

  /**
   * Unrolls an object property
   */
   _unrollObject(objectId, name, vars, next) {
    this._getProperties(objectId, props => {
      vars[name] = props
        .map(v => [v.name, (0,_optionalChain/* _optionalChain */.x)([v, 'optionalAccess', _16 => _16.value, 'optionalAccess', _17 => _17.value])])
        .reduce((obj, [key, val]) => {
          obj[key] = val;
          return obj;
        }, {} );

      next(vars);
    });
  }

  /**
   * Unrolls other properties
   */
   _unrollOther(prop, vars, next) {
    if ((0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _18 => _18.value, 'optionalAccess', _19 => _19.value])) {
      vars[prop.name] = prop.value.value;
    } else if ((0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _20 => _20.value, 'optionalAccess', _21 => _21.description]) && (0,_optionalChain/* _optionalChain */.x)([prop, 'optionalAccess', _22 => _22.value, 'optionalAccess', _23 => _23.type]) !== 'function') {
      vars[prop.name] = `<${prop.value.description}>`;
    }

    next(vars);
  }
}

/**
 * When using Vercel pkg, the inspector module is not available.
 * https://github.com/getsentry/sentry-javascript/issues/6769
 */
function tryNewAsyncSession() {
  try {
    return new AsyncSession();
  } catch (e) {
    return undefined;
  }
}

// Add types for the exception event data

/** Could this be an anonymous function? */
function isAnonymous(name) {
  return name !== undefined && ['', '?', '<anonymous>'].includes(name);
}

/** Do the function names appear to match? */
function functionNamesMatch(a, b) {
  return a === b || (isAnonymous(a) && isAnonymous(b));
}

/** Creates a unique hash from stack frames */
function hashFrames(frames) {
  if (frames === undefined) {
    return;
  }

  // Only hash the 10 most recent frames (ie. the last 10)
  return frames.slice(-10).reduce((acc, frame) => `${acc},${frame.function},${frame.lineno},${frame.colno}`, '');
}

/**
 * We use the stack parser to create a unique hash from the exception stack trace
 * This is used to lookup vars when the exception passes through the event processor
 */
function hashFromStack(stackParser, stack) {
  if (stack === undefined) {
    return undefined;
  }

  return hashFrames(stackParser(stack, 1));
}

/**
 * Adds local variables to exception frames
 */
class LocalVariables  {
   static __initStatic() {this.id = 'LocalVariables';}

    __init() {this.name = LocalVariables.id;}

    __init2() {this._cachedFrames = new lru.LRUMap(20);}

   constructor(
      _options = {},
      _session = tryNewAsyncSession(),
  ) {this._options = _options;this._session = _session;LocalVariables.prototype.__init.call(this);LocalVariables.prototype.__init2.call(this);}

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    this._setup(addGlobalEventProcessor, (0,_optionalChain/* _optionalChain */.x)([getCurrentHub, 'call', _24 => _24(), 'access', _25 => _25.getClient, 'call', _26 => _26(), 'optionalAccess', _27 => _27.getOptions, 'call', _28 => _28()]));
  }

  /** Setup in a way that's easier to call from tests */
   _setup(
    addGlobalEventProcessor,
    clientOptions,
  ) {
    if (this._session && (0,_optionalChain/* _optionalChain */.x)([clientOptions, 'optionalAccess', _29 => _29.includeLocalVariables])) {
      // Only setup this integration if the Node version is >= v18
      // https://github.com/getsentry/sentry-javascript/issues/7697
      const unsupportedNodeVersion = (nodeVersion/* NODE_VERSION */.V.major || 0) < 18;

      if (unsupportedNodeVersion) {
        logger/* logger */.kg.log('The `LocalVariables` integration is only supported on Node >= v18.');
        return;
      }

      this._session.configureAndConnect(
        (ev, complete) =>
          this._handlePaused(clientOptions.stackParser, ev , complete),
        !!this._options.captureAllExceptions,
      );

      addGlobalEventProcessor(async event => this._addLocalVariables(event));
    }
  }

  /**
   * Handle the pause event
   */
   _handlePaused(
    stackParser,
    { params: { reason, data, callFrames } },
    complete,
  ) {
    if (reason !== 'exception' && reason !== 'promiseRejection') {
      complete();
      return;
    }

    // data.description contains the original error.stack
    const exceptionHash = hashFromStack(stackParser, (0,_optionalChain/* _optionalChain */.x)([data, 'optionalAccess', _30 => _30.description]));

    if (exceptionHash == undefined) {
      complete();
      return;
    }

    const { add, next } = createCallbackList(frames => {
      this._cachedFrames.set(exceptionHash, frames);
      complete();
    });

    // Because we're queuing up and making all these calls synchronously, we can potentially overflow the stack
    // For this reason we only attempt to get local variables for the first 5 frames
    for (let i = 0; i < Math.min(callFrames.length, 5); i++) {
      const { scopeChain, functionName, this: obj } = callFrames[i];

      const localScope = scopeChain.find(scope => scope.type === 'local');

      // obj.className is undefined in ESM modules
      const fn = obj.className === 'global' || !obj.className ? functionName : `${obj.className}.${functionName}`;

      if ((0,_optionalChain/* _optionalChain */.x)([localScope, 'optionalAccess', _31 => _31.object, 'access', _32 => _32.objectId]) === undefined) {
        add(frames => {
          frames[i] = { function: fn };
          next(frames);
        });
      } else {
        const id = localScope.object.objectId;
        add(frames =>
          (0,_optionalChain/* _optionalChain */.x)([this, 'access', _33 => _33._session, 'optionalAccess', _34 => _34.getLocalVariables, 'call', _35 => _35(id, vars => {
            frames[i] = { function: fn, vars };
            next(frames);
          })]),
        );
      }
    }

    next([]);
  }

  /**
   * Adds local variables event stack frames.
   */
   _addLocalVariables(event) {
    for (const exception of (0,_optionalChain/* _optionalChain */.x)([event, 'optionalAccess', _36 => _36.exception, 'optionalAccess', _37 => _37.values]) || []) {
      this._addLocalVariablesToException(exception);
    }

    return event;
  }

  /**
   * Adds local variables to the exception stack frames.
   */
   _addLocalVariablesToException(exception) {
    const hash = hashFrames((0,_optionalChain/* _optionalChain */.x)([exception, 'optionalAccess', _38 => _38.stacktrace, 'optionalAccess', _39 => _39.frames]));

    if (hash === undefined) {
      return;
    }

    // Check if we have local variables for an exception that matches the hash
    // delete is identical to get but also removes the entry from the cache
    const cachedFrames = this._cachedFrames.delete(hash);

    if (cachedFrames === undefined) {
      return;
    }

    const frameCount = (0,_optionalChain/* _optionalChain */.x)([exception, 'access', _40 => _40.stacktrace, 'optionalAccess', _41 => _41.frames, 'optionalAccess', _42 => _42.length]) || 0;

    for (let i = 0; i < frameCount; i++) {
      // Sentry frames are in reverse order
      const frameIndex = frameCount - i - 1;

      // Drop out if we run out of frames to match up
      if (!(0,_optionalChain/* _optionalChain */.x)([exception, 'optionalAccess', _43 => _43.stacktrace, 'optionalAccess', _44 => _44.frames, 'optionalAccess', _45 => _45[frameIndex]]) || !cachedFrames[i]) {
        break;
      }

      if (
        // We need to have vars to add
        cachedFrames[i].vars === undefined ||
        // We're not interested in frames that are not in_app because the vars are not relevant
        exception.stacktrace.frames[frameIndex].in_app === false ||
        // The function names need to match
        !functionNamesMatch(exception.stacktrace.frames[frameIndex].function, cachedFrames[i].function)
      ) {
        continue;
      }

      exception.stacktrace.frames[frameIndex].vars = cachedFrames[i].vars;
    }
  }
}LocalVariables.__initStatic();


//# sourceMappingURL=localvariables.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/node/esm/integrations/undici/index.js
var undici = __webpack_require__(1249);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/module.js


const isWindowsPlatform = external_path_.sep === '\\';

/** normalizes Windows paths */
function normalizeWindowsPath(path) {
  return path
    .replace(/^[A-Z]:/, '') // remove Windows-style prefix
    .replace(/\\/g, '/'); // replace all `\` instances with `/`
}

/** Gets the module from a filename */
function getModuleFromFilename(
  filename,
  normalizeWindowsPathSeparator = isWindowsPlatform,
) {
  if (!filename) {
    return;
  }

  const normalizedFilename = normalizeWindowsPathSeparator ? normalizeWindowsPath(filename) : filename;

  // eslint-disable-next-line prefer-const
  let { root, dir, base: basename, ext } = external_path_.posix.parse(normalizedFilename);

  const base = ( true && __webpack_require__.c[__webpack_require__.s] && __webpack_require__.c[__webpack_require__.s].filename && dir) || global.process.cwd();

  const normalizedBase = `${base}/`;

  // It's specifically a module
  let file = basename;

  if (ext === '.js') {
    file = file.slice(0, file.length - '.js'.length);
  }

  if (!root && !dir) {
    // No dirname whatsoever
    dir = '.';
  }

  let n = dir.lastIndexOf('/node_modules/');
  if (n > -1) {
    // /node_modules/ is 14 chars
    return `${dir.slice(n + 14).replace(/\//g, '.')}:${file}`;
  }
  // Let's see if it's a part of the main module
  // To be a part of main module, it has to share the same base
  n = `${dir}/`.lastIndexOf(normalizedBase, 0);

  if (n === 0) {
    let moduleName = dir.slice(normalizedBase.length).replace(/\//g, '.');
    if (moduleName) {
      moduleName += ':';
    }
    moduleName += file;
    return moduleName;
  }
  return file;
}


//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/sdk.js



















/* eslint-disable max-lines */

const defaultIntegrations = [
  // Common
  new InboundFilters(),
  new FunctionToString(),
  // Native Wrappers
  new Console(),
  new Http(),
  new undici/* Undici */.Y(),
  // Global Handlers
  new OnUncaughtException(),
  new OnUnhandledRejection(),
  // Event Info
  new ContextLines(),
  new LocalVariables(),
  new Context(),
  new Modules(),
  new RequestData(),
  // Misc
  new LinkedErrors(),
];

/**
 * The Sentry Node SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible in the
 * main entry module. To set context information or send manual events, use the
 * provided methods.
 *
 * @example
 * ```
 *
 * const { init } = require('@sentry/node');
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * const { configureScope } = require('@sentry/node');
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * const { addBreadcrumb } = require('@sentry/node');
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * const Sentry = require('@sentry/node');
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link NodeOptions} for documentation on configuration options.
 */
function init(options = {}) {
  const carrier = (0,esm_hub/* getMainCarrier */.cu)();

  setNodeAsyncContextStrategy();

  const autoloadedIntegrations = (0,_optionalChain/* _optionalChain */.x)([carrier, 'access', _ => _.__SENTRY__, 'optionalAccess', _2 => _2.integrations]) || [];

  options.defaultIntegrations =
    options.defaultIntegrations === false
      ? []
      : [
          ...(Array.isArray(options.defaultIntegrations) ? options.defaultIntegrations : defaultIntegrations),
          ...autoloadedIntegrations,
        ];

  if (options.dsn === undefined && process.env.SENTRY_DSN) {
    options.dsn = process.env.SENTRY_DSN;
  }

  const sentryTracesSampleRate = process.env.SENTRY_TRACES_SAMPLE_RATE;
  if (options.tracesSampleRate === undefined && sentryTracesSampleRate) {
    const tracesSampleRate = parseFloat(sentryTracesSampleRate);
    if (isFinite(tracesSampleRate)) {
      options.tracesSampleRate = tracesSampleRate;
    }
  }

  if (options.release === undefined) {
    const detectedRelease = getSentryRelease();
    if (detectedRelease !== undefined) {
      options.release = detectedRelease;
    } else {
      // If release is not provided, then we should disable autoSessionTracking
      options.autoSessionTracking = false;
    }
  }

  if (options.environment === undefined && process.env.SENTRY_ENVIRONMENT) {
    options.environment = process.env.SENTRY_ENVIRONMENT;
  }

  if (options.autoSessionTracking === undefined && options.dsn !== undefined) {
    options.autoSessionTracking = true;
  }

  if (options.instrumenter === undefined) {
    options.instrumenter = 'sentry';
  }

  // TODO(v7): Refactor this to reduce the logic above
  const clientOptions = {
    ...options,
    stackParser: (0,stacktrace/* stackParserFromStackParserOptions */.Sq)(options.stackParser || defaultStackParser),
    integrations: getIntegrationsToSetup(options),
    transport: options.transport || makeNodeTransport,
  };

  initAndBind(options.clientClass || NodeClient, clientOptions);

  if (options.autoSessionTracking) {
    startSessionTracking();
  }

  updateScopeFromEnvVariables();
}

/**
 * Function that takes an instance of NodeClient and checks if autoSessionTracking option is enabled for that client
 */
function isAutoSessionTrackingEnabled(client) {
  if (client === undefined) {
    return false;
  }
  const clientOptions = client && client.getOptions();
  if (clientOptions && clientOptions.autoSessionTracking !== undefined) {
    return clientOptions.autoSessionTracking;
  }
  return false;
}

/**
 * Returns a release dynamically from environment variables.
 */
function getSentryRelease(fallback) {
  // Always read first as Sentry takes this as precedence
  if (process.env.SENTRY_RELEASE) {
    return process.env.SENTRY_RELEASE;
  }

  // This supports the variable that sentry-webpack-plugin injects
  if (worldwide/* GLOBAL_OBJ */.n2.SENTRY_RELEASE && worldwide/* GLOBAL_OBJ */.n2.SENTRY_RELEASE.id) {
    return worldwide/* GLOBAL_OBJ */.n2.SENTRY_RELEASE.id;
  }

  return (
    // GitHub Actions - https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables
    process.env.GITHUB_SHA ||
    // Netlify - https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
    process.env.COMMIT_REF ||
    // Vercel - https://vercel.com/docs/v2/build-step#system-environment-variables
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.VERCEL_GITHUB_COMMIT_SHA ||
    process.env.VERCEL_GITLAB_COMMIT_SHA ||
    process.env.VERCEL_BITBUCKET_COMMIT_SHA ||
    // Zeit (now known as Vercel)
    process.env.ZEIT_GITHUB_COMMIT_SHA ||
    process.env.ZEIT_GITLAB_COMMIT_SHA ||
    process.env.ZEIT_BITBUCKET_COMMIT_SHA ||
    fallback
  );
}

/** Node.js stack parser */
const defaultStackParser = (0,stacktrace/* createStackParser */.pE)((0,stacktrace/* nodeStackLineParser */.Ep)(getModuleFromFilename));

/**
 * Enable automatic Session Tracking for the node process.
 */
function startSessionTracking() {
  const hub = (0,esm_hub/* getCurrentHub */.Gd)();
  hub.startSession();
  // Emitted in the case of healthy sessions, error of `mechanism.handled: true` and unhandledrejections because
  // The 'beforeExit' event is not emitted for conditions causing explicit termination,
  // such as calling process.exit() or uncaught exceptions.
  // Ref: https://nodejs.org/api/process.html#process_event_beforeexit
  process.on('beforeExit', () => {
    const session = hub.getScope().getSession();
    const terminalStates = ['exited', 'crashed'];
    // Only call endSession, if the Session exists on Scope and SessionStatus is not a
    // Terminal Status i.e. Exited or Crashed because
    // "When a session is moved away from ok it must not be updated anymore."
    // Ref: https://develop.sentry.dev/sdk/sessions/
    if (session && !terminalStates.includes(session.status)) hub.endSession();
  });
}

/**
 * Update scope and propagation context based on environmental variables.
 *
 * See https://github.com/getsentry/rfcs/blob/main/text/0071-continue-trace-over-process-boundaries.md
 * for more details.
 */
function updateScopeFromEnvVariables() {
  const sentryUseEnvironment = (process.env.SENTRY_USE_ENVIRONMENT || '').toLowerCase();
  if (!['false', 'n', 'no', 'off', '0'].includes(sentryUseEnvironment)) {
    const sentryTraceEnv = process.env.SENTRY_TRACE;
    const baggageEnv = process.env.SENTRY_BAGGAGE;
    const { propagationContext } = (0,tracing/* tracingContextFromHeaders */.KA)(sentryTraceEnv, baggageEnv);
    (0,esm_hub/* getCurrentHub */.Gd)().getScope().setPropagationContext(propagationContext);
  }
}


//# sourceMappingURL=sdk.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/utils.js



/**
 * Recursively read the contents of a directory.
 *
 * @param targetDir Absolute or relative path of the directory to scan. All returned paths will be relative to this
 * directory.
 * @returns Array holding all relative paths
 */
function deepReadDirSync(targetDir) {
  const targetDirAbsPath = external_path_.resolve(targetDir);

  if (!external_fs_.existsSync(targetDirAbsPath)) {
    throw new Error(`Cannot read contents of ${targetDirAbsPath}. Directory does not exist.`);
  }

  if (!external_fs_.statSync(targetDirAbsPath).isDirectory()) {
    throw new Error(`Cannot read contents of ${targetDirAbsPath}, because it is not a directory.`);
  }

  // This does the same thing as its containing function, `deepReadDirSync` (except that - purely for convenience - it
  // deals in absolute paths rather than relative ones). We need this to be separate from the outer function to preserve
  // the difference between `targetDirAbsPath` and `currentDirAbsPath`.
  const deepReadCurrentDir = (currentDirAbsPath) => {
    return external_fs_.readdirSync(currentDirAbsPath).reduce((absPaths, itemName) => {
      const itemAbsPath = external_path_.join(currentDirAbsPath, itemName);

      if (external_fs_.statSync(itemAbsPath).isDirectory()) {
        return absPaths.concat(deepReadCurrentDir(itemAbsPath));
      }

      absPaths.push(itemAbsPath);
      return absPaths;
    }, []);
  };

  return deepReadCurrentDir(targetDirAbsPath).map(absPath => external_path_.relative(targetDirAbsPath, absPath));
}


//# sourceMappingURL=utils.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/utils/hasTracingEnabled.js
var hasTracingEnabled = __webpack_require__(7522);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/requestDataDeprecated.js


/**
 * @deprecated `Handlers.ExpressRequest` is deprecated and will be removed in v8. Use `PolymorphicRequest` instead.
 */

/**
 * Normalizes data from the request object, accounting for framework differences.
 *
 * @deprecated `Handlers.extractRequestData` is deprecated and will be removed in v8. Use `extractRequestData` instead.
 *
 * @param req The request object from which to extract data
 * @param keys An optional array of keys to include in the normalized data.
 * @returns An object containing normalized request data
 */
function requestDataDeprecated_extractRequestData(req, keys) {
  return extractRequestData(req, { include: keys });
}

/**
 * Options deciding what parts of the request to use when enhancing an event
 *
 * @deprecated `Handlers.ParseRequestOptions` is deprecated and will be removed in v8. Use
 * `AddRequestDataToEventOptions` in `@sentry/utils` instead.
 */

/**
 * Enriches passed event with request data.
 *
 * @deprecated `Handlers.parseRequest` is deprecated and will be removed in v8. Use `addRequestDataToEvent` instead.
 *
 * @param event Will be mutated and enriched with req data
 * @param req Request object
 * @param options object containing flags to enable functionality
 * @hidden
 */
function parseRequest(event, req, options = {}) {
  return addRequestDataToEvent(event, req, { include: options });
}


//# sourceMappingURL=requestDataDeprecated.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/handlers.js







/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Express-compatible tracing handler.
 * @see Exposed as `Handlers.tracingHandler`
 */
function tracingHandler()

 {
  return function sentryTracingMiddleware(
    req,
    res,
    next,
  ) {
    const hub = (0,esm_hub/* getCurrentHub */.Gd)();
    const options = (0,_optionalChain/* _optionalChain */.x)([hub, 'access', _ => _.getClient, 'call', _2 => _2(), 'optionalAccess', _3 => _3.getOptions, 'call', _4 => _4()]);

    if (
      !options ||
      options.instrumenter !== 'sentry' ||
      (0,_optionalChain/* _optionalChain */.x)([req, 'access', _5 => _5.method, 'optionalAccess', _6 => _6.toUpperCase, 'call', _7 => _7()]) === 'OPTIONS' ||
      (0,_optionalChain/* _optionalChain */.x)([req, 'access', _8 => _8.method, 'optionalAccess', _9 => _9.toUpperCase, 'call', _10 => _10()]) === 'HEAD'
    ) {
      return next();
    }

    const sentryTrace = req.headers && (0,is/* isString */.HD)(req.headers['sentry-trace']) ? req.headers['sentry-trace'] : undefined;
    const baggage = (0,_optionalChain/* _optionalChain */.x)([req, 'access', _11 => _11.headers, 'optionalAccess', _12 => _12.baggage]);
    const { traceparentData, dynamicSamplingContext, propagationContext } = (0,tracing/* tracingContextFromHeaders */.KA)(
      sentryTrace,
      baggage,
    );
    hub.getScope().setPropagationContext(propagationContext);

    if (!(0,hasTracingEnabled/* hasTracingEnabled */.z)(options)) {
      return next();
    }

    const [name, source] = (0,requestdata/* extractPathForTransaction */.oA)(req, { path: true, method: true });
    const transaction = startTransaction(
      {
        name,
        op: 'http.server',
        ...traceparentData,
        metadata: {
          dynamicSamplingContext: traceparentData && !dynamicSamplingContext ? {} : dynamicSamplingContext,
          // The request should already have been stored in `scope.sdkProcessingMetadata` (which will become
          // `event.sdkProcessingMetadata` the same way the metadata here will) by `sentryRequestMiddleware`, but on the
          // off chance someone is using `sentryTracingMiddleware` without `sentryRequestMiddleware`, it doesn't hurt to
          // be sure
          request: req,
          source,
        },
      },
      // extra context passed to the tracesSampler
      { request: extractRequestData(req) },
    );

    // We put the transaction on the scope so users can attach children to it
    hub.configureScope(scope => {
      scope.setSpan(transaction);
    });

    // We also set __sentry_transaction on the response so people can grab the transaction there to add
    // spans to it later.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (res ).__sentry_transaction = transaction;

    res.once('finish', () => {
      // Push `transaction.finish` to the next event loop so open spans have a chance to finish before the transaction
      // closes
      setImmediate(() => {
        (0,requestdata/* addRequestDataToTransaction */.dB)(transaction, req);
        transaction.setHttpStatus(res.statusCode);
        transaction.finish();
      });
    });

    next();
  };
}

/**
 * Backwards compatibility shim which can be removed in v8. Forces the given options to follow the
 * `AddRequestDataToEventOptions` interface.
 *
 * TODO (v8): Get rid of this, and stop passing `requestDataOptionsFromExpressHandler` to `setSDKProcessingMetadata`.
 */
function convertReqHandlerOptsToAddReqDataOpts(
  reqHandlerOptions = {},
) {
  let addRequestDataOptions;

  if ('include' in reqHandlerOptions) {
    addRequestDataOptions = { include: reqHandlerOptions.include };
  } else {
    // eslint-disable-next-line deprecation/deprecation
    const { ip, request, transaction, user } = reqHandlerOptions ;

    if (ip || request || transaction || user) {
      addRequestDataOptions = { include: (0,object/* dropUndefinedKeys */.Jr)({ ip, request, transaction, user }) };
    }
  }

  return addRequestDataOptions;
}

/**
 * Express compatible request handler.
 * @see Exposed as `Handlers.requestHandler`
 */
function requestHandler(
  options,
) {
  // TODO (v8): Get rid of this
  const requestDataOptions = convertReqHandlerOptsToAddReqDataOpts(options);

  const currentHub = (0,esm_hub/* getCurrentHub */.Gd)();
  const client = currentHub.getClient();
  // Initialise an instance of SessionFlusher on the client when `autoSessionTracking` is enabled and the
  // `requestHandler` middleware is used indicating that we are running in SessionAggregates mode
  if (client && isAutoSessionTrackingEnabled(client)) {
    client.initSessionFlusher();

    // If Scope contains a Single mode Session, it is removed in favor of using Session Aggregates mode
    const scope = currentHub.getScope();
    if (scope.getSession()) {
      scope.setSession();
    }
  }

  return function sentryRequestMiddleware(
    req,
    res,
    next,
  ) {
    if (options && options.flushTimeout && options.flushTimeout > 0) {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      const _end = res.end;
      res.end = function (chunk, encoding, cb) {
        void flush(options.flushTimeout)
          .then(() => {
            _end.call(this, chunk, encoding, cb);
          })
          .then(null, e => {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.error(e);
            _end.call(this, chunk, encoding, cb);
          });
      };
    }
    (0,esm_hub/* runWithAsyncContext */.Ok)(() => {
      const currentHub = (0,esm_hub/* getCurrentHub */.Gd)();
      currentHub.configureScope(scope => {
        scope.setSDKProcessingMetadata({
          request: req,
          // TODO (v8): Stop passing this
          requestDataOptionsFromExpressHandler: requestDataOptions,
        });

        const client = currentHub.getClient();
        if (isAutoSessionTrackingEnabled(client)) {
          const scope = currentHub.getScope();
          if (scope) {
            // Set `status` of `RequestSession` to Ok, at the beginning of the request
            scope.setRequestSession({ status: 'ok' });
          }
        }
      });

      res.once('finish', () => {
        const client = currentHub.getClient();
        if (isAutoSessionTrackingEnabled(client)) {
          setImmediate(() => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (client && (client )._captureRequestSession) {
              // Calling _captureRequestSession to capture request session at the end of the request by incrementing
              // the correct SessionAggregates bucket i.e. crashed, errored or exited
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              (client )._captureRequestSession();
            }
          });
        }
      });
      next();
    });
  };
}

/** JSDoc */

/** JSDoc */
function getStatusCodeFromResponse(error) {
  const statusCode = error.status || error.statusCode || error.status_code || (error.output && error.output.statusCode);
  return statusCode ? parseInt(statusCode , 10) : 500;
}

/** Returns true if response code is internal server error */
function defaultShouldHandleError(error) {
  const status = getStatusCodeFromResponse(error);
  return status >= 500;
}

/**
 * Express compatible error handler.
 * @see Exposed as `Handlers.errorHandler`
 */
function errorHandler(options

)

 {
  return function sentryErrorMiddleware(
    error,
    _req,
    res,
    next,
  ) {
    const shouldHandleError = (options && options.shouldHandleError) || defaultShouldHandleError;

    if (shouldHandleError(error)) {
      withScope(_scope => {
        // The request should already have been stored in `scope.sdkProcessingMetadata` by `sentryRequestMiddleware`,
        // but on the off chance someone is using `sentryErrorMiddleware` without `sentryRequestMiddleware`, it doesn't
        // hurt to be sure
        _scope.setSDKProcessingMetadata({ request: _req });

        // For some reason we need to set the transaction on the scope again
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const transaction = (res ).__sentry_transaction ;
        if (transaction && _scope.getSpan() === undefined) {
          _scope.setSpan(transaction);
        }

        const client = (0,esm_hub/* getCurrentHub */.Gd)().getClient();
        if (client && isAutoSessionTrackingEnabled(client)) {
          // Check if the `SessionFlusher` is instantiated on the client to go into this branch that marks the
          // `requestSession.status` as `Crashed`, and this check is necessary because the `SessionFlusher` is only
          // instantiated when the the`requestHandler` middleware is initialised, which indicates that we should be
          // running in SessionAggregates mode
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          const isSessionAggregatesMode = (client )._sessionFlusher !== undefined;
          if (isSessionAggregatesMode) {
            const requestSession = _scope.getRequestSession();
            // If an error bubbles to the `errorHandler`, then this is an unhandled error, and should be reported as a
            // Crashed session. The `_requestSession.status` is checked to ensure that this error is happening within
            // the bounds of a request, and if so the status is updated
            if (requestSession && requestSession.status !== undefined) {
              requestSession.status = 'crashed';
            }
          }
        }

        _scope.addEventProcessor(event => {
          (0,misc/* addExceptionMechanism */.EG)(event, { type: 'middleware', handled: false });
          return event;
        });

        const eventId = captureException(error);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (res ).sentry = eventId;
        next(error);
      });

      return;
    }

    next(error);
  };
}

/**
 * Sentry tRPC middleware that names the handling transaction after the called procedure.
 *
 * Use the Sentry tRPC middleware in combination with the Sentry server integration,
 * e.g. Express Request Handlers or Next.js SDK.
 */
function trpcMiddleware(options = {}) {
  return function ({ path, type, next, rawInput }) {
    const hub = (0,esm_hub/* getCurrentHub */.Gd)();
    const clientOptions = (0,_optionalChain/* _optionalChain */.x)([hub, 'access', _13 => _13.getClient, 'call', _14 => _14(), 'optionalAccess', _15 => _15.getOptions, 'call', _16 => _16()]);
    const sentryTransaction = hub.getScope().getTransaction();

    if (sentryTransaction) {
      sentryTransaction.setName(`trpc/${path}`, 'route');
      sentryTransaction.op = 'rpc.server';

      const trpcContext = {
        procedure_type: type,
      };

      if (options.attachRpcInput !== undefined ? options.attachRpcInput : (0,_optionalChain/* _optionalChain */.x)([clientOptions, 'optionalAccess', _17 => _17.sendDefaultPii])) {
        trpcContext.input = normalize(rawInput);
      }

      sentryTransaction.setContext('trpc', trpcContext);
    }

    return next();
  };
}


//# sourceMappingURL=handlers.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/integrations/index.js











//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/apollo.js
var apollo = __webpack_require__(2716);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/express.js
var express = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/graphql.js
var graphql = __webpack_require__(1791);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/mongo.js
var mongo = __webpack_require__(6169);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/mysql.js
var mysql = __webpack_require__(24);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/postgres.js
var postgres = __webpack_require__(1370);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/prisma.js
var prisma = __webpack_require__(9889);
;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/tracing/integrations.js

//# sourceMappingURL=integrations.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/node/esm/index.js














const INTEGRATIONS = {
  ...integrations_namespaceObject,
  ...esm_integrations_namespaceObject,
  ...tracing_integrations_namespaceObject,
};


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Undici)
/* harmony export */ });
/* unused harmony export ChannelName */
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4307);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5659);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(454);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2176);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7321);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9181);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7638);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6956);
/* harmony import */ var lru_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7612);
/* harmony import */ var lru_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nodeVersion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9656);
/* harmony import */ var _utils_http_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7578);
/* module decorator */ module = __webpack_require__.hmd(module);







var ChannelName;(function (ChannelName) {
  // https://github.com/nodejs/undici/blob/e6fc80f809d1217814c044f52ed40ef13f21e43c/docs/api/DiagnosticsChannel.md#undicirequestcreate
  const RequestCreate = 'undici:request:create'; ChannelName["RequestCreate"] = RequestCreate;
  const RequestEnd = 'undici:request:headers'; ChannelName["RequestEnd"] = RequestEnd;
  const RequestError = 'undici:request:error'; ChannelName["RequestError"] = RequestError;
})(ChannelName || (ChannelName = {}));

// Please note that you cannot use `console.log` to debug the callbacks registered to the `diagnostics_channel` API.
// To debug, you can use `writeFileSync` to write to a file:
// https://nodejs.org/api/async_hooks.html#printing-in-asynchook-callbacks
//
// import { writeFileSync } from 'fs';
// import { format } from 'util';
//
// function debug(...args: any): void {
//   // Use a function like this one when debugging inside an AsyncHook callback
//   // @ts-ignore any
//   writeFileSync('log.out', `${format(...args)}\n`, { flag: 'a' });
// }

/**
 * Instruments outgoing HTTP requests made with the `undici` package via
 * Node's `diagnostics_channel` API.
 *
 * Supports Undici 4.7.0 or higher.
 *
 * Requires Node 16.17.0 or higher.
 */
class Undici  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Undici';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Undici.id;}

    __init2() {this._createSpanUrlMap = new lru_map__WEBPACK_IMPORTED_MODULE_0__.LRUMap(100);}
    __init3() {this._headersUrlMap = new lru_map__WEBPACK_IMPORTED_MODULE_0__.LRUMap(100);}

   constructor(_options = {}) {Undici.prototype.__init.call(this);Undici.prototype.__init2.call(this);Undici.prototype.__init3.call(this);Undici.prototype.__init4.call(this);Undici.prototype.__init5.call(this);Undici.prototype.__init6.call(this);
    this._options = {
      breadcrumbs: _options.breadcrumbs === undefined ? true : _options.breadcrumbs,
      shouldCreateSpanForRequest: _options.shouldCreateSpanForRequest,
    };
  }

  /**
   * @inheritDoc
   */
   setupOnce(_addGlobalEventProcessor) {
    // Requires Node 16+ to use the diagnostics_channel API.
    if (_nodeVersion_js__WEBPACK_IMPORTED_MODULE_1__/* .NODE_VERSION */ .V.major && _nodeVersion_js__WEBPACK_IMPORTED_MODULE_1__/* .NODE_VERSION */ .V.major < 16) {
      return;
    }

    let ds;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      ds = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__/* .dynamicRequire */ .l$)(module, 'diagnostics_channel') ;
    } catch (e) {
      // no-op
    }

    if (!ds || !ds.subscribe) {
      return;
    }

    // https://github.com/nodejs/undici/blob/e6fc80f809d1217814c044f52ed40ef13f21e43c/docs/api/DiagnosticsChannel.md
    ds.subscribe(ChannelName.RequestCreate, this._onRequestCreate);
    ds.subscribe(ChannelName.RequestEnd, this._onRequestEnd);
    ds.subscribe(ChannelName.RequestError, this._onRequestError);
  }

  /** Helper that wraps shouldCreateSpanForRequest option */
   _shouldCreateSpan(url) {
    if (this._options.shouldCreateSpanForRequest === undefined) {
      return true;
    }

    const cachedDecision = this._createSpanUrlMap.get(url);
    if (cachedDecision !== undefined) {
      return cachedDecision;
    }

    const decision = this._options.shouldCreateSpanForRequest(url);
    this._createSpanUrlMap.set(url, decision);
    return decision;
  }

   __init4() {this._onRequestCreate = (message) => {
    const hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getCurrentHub */ .Gd)();
    if (!hub.getIntegration(Undici)) {
      return;
    }

    const { request } = message ;

    const stringUrl = request.origin ? request.origin.toString() + request.path : request.path;

    if ((0,_utils_http_js__WEBPACK_IMPORTED_MODULE_4__/* .isSentryRequest */ .ZB)(stringUrl) || request.__sentry_span__ !== undefined) {
      return;
    }

    const client = hub.getClient();
    if (!client) {
      return;
    }

    const clientOptions = client.getOptions();
    const scope = hub.getScope();

    const parentSpan = scope.getSpan();

    const span = this._shouldCreateSpan(stringUrl) ? createRequestSpan(parentSpan, request, stringUrl) : undefined;
    if (span) {
      request.__sentry_span__ = span;
    }

    const shouldAttachTraceData = (url) => {
      if (clientOptions.tracePropagationTargets === undefined) {
        return true;
      }

      const cachedDecision = this._headersUrlMap.get(url);
      if (cachedDecision !== undefined) {
        return cachedDecision;
      }

      const decision = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__/* .stringMatchesSomePattern */ .U0)(url, clientOptions.tracePropagationTargets);
      this._headersUrlMap.set(url, decision);
      return decision;
    };

    if (shouldAttachTraceData(stringUrl)) {
      if (span) {
        const dynamicSamplingContext = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_6__/* ._optionalChain */ .x)([span, 'optionalAccess', _4 => _4.transaction, 'optionalAccess', _5 => _5.getDynamicSamplingContext, 'call', _6 => _6()]);
        const sentryBaggageHeader = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__/* .dynamicSamplingContextToSentryBaggageHeader */ .IQ)(dynamicSamplingContext);

        setHeadersOnRequest(request, span.toTraceparent(), sentryBaggageHeader);
      } else {
        const { traceId, sampled, dsc } = scope.getPropagationContext();
        const sentryTrace = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_8__/* .generateSentryTraceHeader */ .$p)(traceId, undefined, sampled);
        const dynamicSamplingContext = dsc || (0,_sentry_core__WEBPACK_IMPORTED_MODULE_9__/* .getDynamicSamplingContextFromClient */ ._)(traceId, client, scope);
        const sentryBaggageHeader = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__/* .dynamicSamplingContextToSentryBaggageHeader */ .IQ)(dynamicSamplingContext);
        setHeadersOnRequest(request, sentryTrace, sentryBaggageHeader);
      }
    }
  };}

   __init5() {this._onRequestEnd = (message) => {
    const hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getCurrentHub */ .Gd)();
    if (!hub.getIntegration(Undici)) {
      return;
    }

    const { request, response } = message ;

    const stringUrl = request.origin ? request.origin.toString() + request.path : request.path;

    if ((0,_utils_http_js__WEBPACK_IMPORTED_MODULE_4__/* .isSentryRequest */ .ZB)(stringUrl)) {
      return;
    }

    const span = request.__sentry_span__;
    if (span) {
      span.setHttpStatus(response.statusCode);
      span.finish();
    }

    if (this._options.breadcrumbs) {
      hub.addBreadcrumb(
        {
          category: 'http',
          data: {
            method: request.method,
            status_code: response.statusCode,
            url: stringUrl,
          },
          type: 'http',
        },
        {
          event: 'response',
          request,
          response,
        },
      );
    }
  };}

   __init6() {this._onRequestError = (message) => {
    const hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getCurrentHub */ .Gd)();
    if (!hub.getIntegration(Undici)) {
      return;
    }

    const { request } = message ;

    const stringUrl = request.origin ? request.origin.toString() + request.path : request.path;

    if ((0,_utils_http_js__WEBPACK_IMPORTED_MODULE_4__/* .isSentryRequest */ .ZB)(stringUrl)) {
      return;
    }

    const span = request.__sentry_span__;
    if (span) {
      span.setStatus('internal_error');
      span.finish();
    }

    if (this._options.breadcrumbs) {
      hub.addBreadcrumb(
        {
          category: 'http',
          data: {
            method: request.method,
            url: stringUrl,
          },
          level: 'error',
          type: 'http',
        },
        {
          event: 'error',
          request,
        },
      );
    }
  };}
}Undici.__initStatic();

function setHeadersOnRequest(
  request,
  sentryTrace,
  sentryBaggageHeader,
) {
  if (request.__sentry_has_headers__) {
    return;
  }

  request.addHeader('sentry-trace', sentryTrace);
  if (sentryBaggageHeader) {
    request.addHeader('baggage', sentryBaggageHeader);
  }

  request.__sentry_has_headers__ = true;
}

function createRequestSpan(
  activeSpan,
  request,
  stringUrl,
) {
  const url = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__/* .parseUrl */ .en)(stringUrl);

  const method = request.method || 'GET';
  const data = {
    'http.method': method,
  };
  if (url.search) {
    data['http.query'] = url.search;
  }
  if (url.hash) {
    data['http.fragment'] = url.hash;
  }
  return (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_6__/* ._optionalChain */ .x)([activeSpan, 'optionalAccess', _7 => _7.startChild, 'call', _8 => _8({
    op: 'http.client',
    description: `${method} ${(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__/* .getSanitizedUrlString */ .tF)(url)}`,
    data,
  })]);
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CA: () => (/* binding */ extractUrl),
/* harmony export */   Dt: () => (/* binding */ cleanSpanDescription),
/* harmony export */   ZB: () => (/* binding */ isSentryRequest),
/* harmony export */   lx: () => (/* binding */ extractRawUrl),
/* harmony export */   nY: () => (/* binding */ normalizeRequestArgs)
/* harmony export */ });
/* unused harmony export urlToOptions */
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4307);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5659);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7310);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nodeVersion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9656);





/**
 * Checks whether given url points to Sentry server
 * @param url url to verify
 */
function isSentryRequest(url) {
  const dsn = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentHub */ .Gd, 'call', _ => _(), 'access', _2 => _2.getClient, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getDsn, 'call', _5 => _5()]);
  return dsn ? url.includes(dsn.host) : false;
}

/**
 * Assembles a URL that's passed to the users to filter on.
 * It can include raw (potentially PII containing) data, which we'll allow users to access to filter
 * but won't include in spans or breadcrumbs.
 *
 * @param requestOptions RequestOptions object containing the component parts for a URL
 * @returns Fully-formed URL
 */
// TODO (v8): This function should include auth, query and fragment (it's breaking, so we need to wait for v8)
function extractRawUrl(requestOptions) {
  const protocol = requestOptions.protocol || '';
  const hostname = requestOptions.hostname || requestOptions.host || '';
  // Don't log standard :80 (http) and :443 (https) ports to reduce the noise
  const port =
    !requestOptions.port || requestOptions.port === 80 || requestOptions.port === 443 ? '' : `:${requestOptions.port}`;
  const path = requestOptions.path ? requestOptions.path : '/';
  return `${protocol}//${hostname}${port}${path}`;
}

/**
 * Assemble a URL to be used for breadcrumbs and spans.
 *
 * @param requestOptions RequestOptions object containing the component parts for a URL
 * @returns Fully-formed URL
 */
function extractUrl(requestOptions) {
  const protocol = requestOptions.protocol || '';
  const hostname = requestOptions.hostname || requestOptions.host || '';
  // Don't log standard :80 (http) and :443 (https) ports to reduce the noise
  const port =
    !requestOptions.port || requestOptions.port === 80 || requestOptions.port === 443 ? '' : `:${requestOptions.port}`;
  // do not include search or hash in span descriptions, per https://develop.sentry.dev/sdk/data-handling/#structuring-data
  const path = requestOptions.pathname || '/';
  // always filter authority, see https://develop.sentry.dev/sdk/data-handling/#structuring-data
  const authority = requestOptions.auth ? redactAuthority(requestOptions.auth) : '';

  return `${protocol}//${authority}${hostname}${port}${path}`;
}

function redactAuthority(auth) {
  const [user, password] = auth.split(':');
  return `${user ? '[Filtered]' : ''}:${password ? '[Filtered]' : ''}@`;
}

/**
 * Handle various edge cases in the span description (for spans representing http(s) requests).
 *
 * @param description current `description` property of the span representing the request
 * @param requestOptions Configuration data for the request
 * @param Request Request object
 *
 * @returns The cleaned description
 */
function cleanSpanDescription(
  description,
  requestOptions,
  request,
) {
  // nothing to clean
  if (!description) {
    return description;
  }

  // eslint-disable-next-line prefer-const
  let [method, requestUrl] = description.split(' ');

  // superagent sticks the protocol in a weird place (we check for host because if both host *and* protocol are missing,
  // we're likely dealing with an internal route and this doesn't apply)
  if (requestOptions.host && !requestOptions.protocol) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    requestOptions.protocol = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([(request ), 'optionalAccess', _6 => _6.agent, 'optionalAccess', _7 => _7.protocol]); // worst comes to worst, this is undefined and nothing changes
    // This URL contains the filtered authority ([filtered]:[filtered]@example.com) but no fragment or query params
    requestUrl = extractUrl(requestOptions);
  }

  // internal routes can end up starting with a triple slash rather than a single one
  if ((0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([requestUrl, 'optionalAccess', _8 => _8.startsWith, 'call', _9 => _9('///')])) {
    requestUrl = requestUrl.slice(2);
  }

  return `${method} ${requestUrl}`;
}

// the node types are missing a few properties which node's `urlToOptions` function spits out

/**
 * Convert a URL object into a RequestOptions object.
 *
 * Copied from Node's internals (where it's used in http(s).request() and http(s).get()), modified only to use the
 * RequestOptions type above.
 *
 * See https://github.com/nodejs/node/blob/master/lib/internal/url.js.
 */
function urlToOptions(url) {
  const options = {
    protocol: url.protocol,
    hostname:
      typeof url.hostname === 'string' && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
    hash: url.hash,
    search: url.search,
    pathname: url.pathname,
    path: `${url.pathname || ''}${url.search || ''}`,
    href: url.href,
  };
  if (url.port !== '') {
    options.port = Number(url.port);
  }
  if (url.username || url.password) {
    options.auth = `${url.username}:${url.password}`;
  }
  return options;
}

/**
 * Normalize inputs to `http(s).request()` and `http(s).get()`.
 *
 * Legal inputs to `http(s).request()` and `http(s).get()` can take one of ten forms:
 *     [ RequestOptions | string | URL ],
 *     [ RequestOptions | string | URL, RequestCallback ],
 *     [ string | URL, RequestOptions ], and
 *     [ string | URL, RequestOptions, RequestCallback ].
 *
 * This standardizes to one of two forms: [ RequestOptions ] and [ RequestOptions, RequestCallback ]. A similar thing is
 * done as the first step of `http(s).request()` and `http(s).get()`; this just does it early so that we can interact
 * with the args in a standard way.
 *
 * @param requestArgs The inputs to `http(s).request()` or `http(s).get()`, as an array.
 *
 * @returns Equivalent args of the form [ RequestOptions ] or [ RequestOptions, RequestCallback ].
 */
function normalizeRequestArgs(
  httpModule,
  requestArgs,
) {
  let callback, requestOptions;

  // pop off the callback, if there is one
  if (typeof requestArgs[requestArgs.length - 1] === 'function') {
    callback = requestArgs.pop() ;
  }

  // create a RequestOptions object of whatever's at index 0
  if (typeof requestArgs[0] === 'string') {
    requestOptions = urlToOptions(new url__WEBPACK_IMPORTED_MODULE_0__.URL(requestArgs[0]));
  } else if (requestArgs[0] instanceof url__WEBPACK_IMPORTED_MODULE_0__.URL) {
    requestOptions = urlToOptions(requestArgs[0]);
  } else {
    requestOptions = requestArgs[0];
  }

  // if the options were given separately from the URL, fold them in
  if (requestArgs.length === 2) {
    requestOptions = { ...requestOptions, ...requestArgs[1] };
  }

  // Figure out the protocol if it's currently missing
  if (requestOptions.protocol === undefined) {
    // Worst case we end up populating protocol with undefined, which it already is
    /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */

    // NOTE: Prior to Node 9, `https` used internals of `http` module, thus we don't patch it.
    // Because of that, we cannot rely on `httpModule` to provide us with valid protocol,
    // as it will always return `http`, even when using `https` module.
    //
    // See test/integrations/http.test.ts for more details on Node <=v8 protocol issue.
    if (_nodeVersion_js__WEBPACK_IMPORTED_MODULE_3__/* .NODE_VERSION */ .V.major && _nodeVersion_js__WEBPACK_IMPORTED_MODULE_3__/* .NODE_VERSION */ .V.major > 8) {
      requestOptions.protocol =
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([((0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([httpModule, 'optionalAccess', _10 => _10.globalAgent]) ), 'optionalAccess', _11 => _11.protocol]) ||
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([(requestOptions.agent ), 'optionalAccess', _12 => _12.protocol]) ||
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([(requestOptions._defaultAgent ), 'optionalAccess', _13 => _13.protocol]);
    } else {
      requestOptions.protocol =
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([(requestOptions.agent ), 'optionalAccess', _14 => _14.protocol]) ||
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([(requestOptions._defaultAgent ), 'optionalAccess', _15 => _15.protocol]) ||
        (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([((0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_1__/* ._optionalChain */ .x)([httpModule, 'optionalAccess', _16 => _16.globalAgent]) ), 'optionalAccess', _17 => _17.protocol]);
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */
  }

  // return args in standardized form
  if (callback) {
    return [requestOptions, callback];
  } else {
    return [requestOptions];
  }
}


//# sourceMappingURL=http.js.map


/***/ }),

/***/ 9656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ NODE_VERSION)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2844);


const NODE_VERSION = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__/* .parseSemver */ .J4)(process.versions.node);


//# sourceMappingURL=nodeVersion.js.map


/***/ }),

/***/ 5605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BROWSER_TRACING_INTEGRATION_ID: () => (/* binding */ esm_BROWSER_TRACING_INTEGRATION_ID),
  BrowserTracing: () => (/* binding */ esm_BrowserTracing),
  IdleTransaction: () => (/* binding */ IdleTransaction),
  Integrations: () => (/* binding */ Integrations),
  Span: () => (/* binding */ Span),
  SpanStatus: () => (/* binding */ esm_SpanStatus),
  TRACEPARENT_REGEXP: () => (/* binding */ TRACEPARENT_REGEXP),
  Transaction: () => (/* binding */ Transaction),
  addExtensionMethods: () => (/* binding */ addExtensionMethods),
  defaultRequestInstrumentationOptions: () => (/* binding */ esm_defaultRequestInstrumentationOptions),
  extractTraceparentData: () => (/* binding */ extractTraceparentData),
  getActiveTransaction: () => (/* binding */ getActiveTransaction),
  hasTracingEnabled: () => (/* binding */ esm_hasTracingEnabled),
  instrumentOutgoingRequests: () => (/* binding */ esm_instrumentOutgoingRequests),
  spanStatusfromHttpCode: () => (/* binding */ spanStatusfromHttpCode),
  startIdleTransaction: () => (/* binding */ startIdleTransaction),
  stripUrlQueryAndFragment: () => (/* binding */ stripUrlQueryAndFragment)
});

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/idletransaction.js
var idletransaction = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/hubextensions.js + 1 modules
var hubextensions = __webpack_require__(6890);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/utils.js
var utils = __webpack_require__(9791);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(2343);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/tracing.js
var tracing = __webpack_require__(7638);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/browser.js
var browser = __webpack_require__(8464);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/worldwide.js
var worldwide = __webpack_require__(1235);
;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/types.js


const WINDOW = worldwide/* GLOBAL_OBJ */.n2 ;


//# sourceMappingURL=types.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/backgroundtab.js




/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */
function registerBackgroundTabDetection() {
  if (WINDOW && WINDOW.document) {
    WINDOW.document.addEventListener('visibilitychange', () => {
      const activeTransaction = (0,utils/* getActiveTransaction */.x1)() ;
      if (WINDOW.document.hidden && activeTransaction) {
        const statusType = 'cancelled';

        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger/* logger */.kg.log(
            `[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`,
          );
        // We should not set status if it is already set, this prevent important statuses like
        // error or data loss from being overwritten on transaction.
        if (!activeTransaction.status) {
          activeTransaction.setStatus(statusType);
        }
        activeTransaction.setTag('visibilitychange', 'document.hidden');
        activeTransaction.finish();
      }
    });
  } else {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger/* logger */.kg.warn('[Tracing] Could not set up background tab detection due to lack of global document');
  }
}


//# sourceMappingURL=backgroundtab.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/time.js
var esm_time = __webpack_require__(1170);
;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/bindReporter.js
const bindReporter = (
  callback,
  metric,
  reportAllChanges,
) => {
  let prevValue;
  let delta;
  return (forceReport) => {
    if (metric.value >= 0) {
      if (forceReport || reportAllChanges) {
        delta = metric.value - (prevValue || 0);

        // Report the metric if there's a non-zero delta or if no previous
        // value exists (which can happen in the case of the document becoming
        // hidden when the metric value is 0).
        // See: https://github.com/GoogleChrome/web-vitals/issues/14
        if (delta || prevValue === undefined) {
          prevValue = metric.value;
          metric.delta = delta;
          callback(metric);
        }
      }
    }
  };
};


//# sourceMappingURL=bindReporter.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/generateUniqueID.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */
const generateUniqueID = () => {
  return `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};


//# sourceMappingURL=generateUniqueID.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/getNavigationEntry.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getNavigationEntryFromPerformanceTiming = () => {
  // eslint-disable-next-line deprecation/deprecation
  const timing = WINDOW.performance.timing;
  // eslint-disable-next-line deprecation/deprecation
  const type = WINDOW.performance.navigation.type;

  const navigationEntry = {
    entryType: 'navigation',
    startTime: 0,
    type: type == 2 ? 'back_forward' : type === 1 ? 'reload' : 'navigate',
  };

  for (const key in timing) {
    if (key !== 'navigationStart' && key !== 'toJSON') {
      // eslint-disable-next-line deprecation/deprecation
      navigationEntry[key] = Math.max((timing[key ] ) - timing.navigationStart, 0);
    }
  }
  return navigationEntry ;
};

const getNavigationEntry = () => {
  if (WINDOW.__WEB_VITALS_POLYFILL__) {
    return (
      WINDOW.performance &&
      ((performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) ||
        getNavigationEntryFromPerformanceTiming())
    );
  } else {
    return WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  }
};


//# sourceMappingURL=getNavigationEntry.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/getActivationStart.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getActivationStart = () => {
  const navEntry = getNavigationEntry();
  return (navEntry && navEntry.activationStart) || 0;
};


//# sourceMappingURL=getActivationStart.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/initMetric.js





/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const initMetric = (name, value) => {
  const navEntry = getNavigationEntry();
  let navigationType = 'navigate';

  if (navEntry) {
    if (WINDOW.document.prerendering || getActivationStart() > 0) {
      navigationType = 'prerender';
    } else {
      navigationType = navEntry.type.replace(/_/g, '-') ;
    }
  }

  return {
    name,
    value: typeof value === 'undefined' ? -1 : value,
    rating: 'good', // Will be updated if the value changes.
    delta: 0,
    entries: [],
    id: generateUniqueID(),
    navigationType,
  };
};


//# sourceMappingURL=initMetric.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/observe.js
/**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */
const observe = (
  type,
  callback,
  opts,
) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      const po = new PerformanceObserver(list => {
        callback(list.getEntries() );
      });
      po.observe(
        Object.assign(
          {
            type,
            buffered: true,
          },
          opts || {},
        ) ,
      );
      return po;
    }
  } catch (e) {
    // Do nothing.
  }
  return;
};


//# sourceMappingURL=observe.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/onHidden.js


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const onHidden = (cb, once) => {
  const onHiddenOrPageHide = (event) => {
    if (event.type === 'pagehide' || WINDOW.document.visibilityState === 'hidden') {
      cb(event);
      if (once) {
        removeEventListener('visibilitychange', onHiddenOrPageHide, true);
        removeEventListener('pagehide', onHiddenOrPageHide, true);
      }
    }
  };
  addEventListener('visibilitychange', onHiddenOrPageHide, true);
  // Some browsers have buggy implementations of visibilitychange,
  // so we use pagehide in addition, just to be safe.
  addEventListener('pagehide', onHiddenOrPageHide, true);
};


//# sourceMappingURL=onHidden.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/getCLS.js





/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Calculates the [CLS](https://web.dev/cls/) value for the current page and
 * calls the `callback` function once the value is ready to be reported, along
 * with all `layout-shift` performance entries that were used in the metric
 * value calculation. The reported value is a `double` (corresponding to a
 * [layout shift score](https://web.dev/cls/#layout-shift-score)).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** CLS should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */
const onCLS = (onReport) => {
  const metric = initMetric('CLS', 0);
  let report;

  let sessionValue = 0;
  let sessionEntries = [];

  // const handleEntries = (entries: Metric['entries']) => {
  const handleEntries = (entries) => {
    entries.forEach(entry => {
      // Only count layout shifts without recent user input.
      if (!entry.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

        // If the entry occurred less than 1 second after the previous entry and
        // less than 5 seconds after the first entry in the session, include the
        // entry in the current session. Otherwise, start a new session.
        if (
          sessionValue &&
          sessionEntries.length !== 0 &&
          entry.startTime - lastSessionEntry.startTime < 1000 &&
          entry.startTime - firstSessionEntry.startTime < 5000
        ) {
          sessionValue += entry.value;
          sessionEntries.push(entry);
        } else {
          sessionValue = entry.value;
          sessionEntries = [entry];
        }

        // If the current session value is larger than the current CLS value,
        // update CLS and the entries contributing to it.
        if (sessionValue > metric.value) {
          metric.value = sessionValue;
          metric.entries = sessionEntries;
          if (report) {
            report();
          }
        }
      }
    });
  };

  const po = observe('layout-shift', handleEntries);
  if (po) {
    report = bindReporter(onReport, metric);

    const stopListening = () => {
      handleEntries(po.takeRecords() );
      report(true);
    };

    onHidden(stopListening);

    return stopListening;
  }

  return;
};


//# sourceMappingURL=getCLS.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js



/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let firstHiddenTime = -1;

const initHiddenTime = () => {
  // If the document is hidden and not prerendering, assume it was always
  // hidden and the page was loaded in the background.
  return WINDOW.document.visibilityState === 'hidden' && !WINDOW.document.prerendering ? 0 : Infinity;
};

const trackChanges = () => {
  // Update the time if/when the document becomes hidden.
  onHidden(({ timeStamp }) => {
    firstHiddenTime = timeStamp;
  }, true);
};

const getVisibilityWatcher = (

) => {
  if (firstHiddenTime < 0) {
    // If the document is hidden when this code runs, assume it was hidden
    // since navigation start. This isn't a perfect heuristic, but it's the
    // best we can do until an API is available to support querying past
    // visibilityState.
    firstHiddenTime = initHiddenTime();
    trackChanges();
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    },
  };
};


//# sourceMappingURL=getVisibilityWatcher.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/getFID.js






/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Calculates the [FID](https://web.dev/fid/) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `first-input` performance entry used to determine the value. The
 * reported value is a `DOMHighResTimeStamp`.
 *
 * _**Important:** since FID is only reported after the user interacts with the
 * page, it's possible that it will not be reported for some page loads._
 */
const onFID = (onReport) => {
  const visibilityWatcher = getVisibilityWatcher();
  const metric = initMetric('FID');
  // eslint-disable-next-line prefer-const
  let report;

  const handleEntry = (entry) => {
    // Only report if the page wasn't hidden prior to the first input.
    if (entry.startTime < visibilityWatcher.firstHiddenTime) {
      metric.value = entry.processingStart - entry.startTime;
      metric.entries.push(entry);
      report(true);
    }
  };

  const handleEntries = (entries) => {
    (entries ).forEach(handleEntry);
  };

  const po = observe('first-input', handleEntries);
  report = bindReporter(onReport, metric);

  if (po) {
    onHidden(() => {
      handleEntries(po.takeRecords() );
      po.disconnect();
    }, true);
  }
};


//# sourceMappingURL=getFID.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/web-vitals/getLCP.js







/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const reportedMetricIDs = {};

/**
 * Calculates the [LCP](https://web.dev/lcp/) value for the current page and
 * calls the `callback` function once the value is ready (along with the
 * relevant `largest-contentful-paint` performance entry used to determine the
 * value). The reported value is a `DOMHighResTimeStamp`.
 */
const onLCP = (onReport) => {
  const visibilityWatcher = getVisibilityWatcher();
  const metric = initMetric('LCP');
  let report;

  const handleEntries = (entries) => {
    const lastEntry = entries[entries.length - 1] ;
    if (lastEntry) {
      // The startTime attribute returns the value of the renderTime if it is
      // not 0, and the value of the loadTime otherwise. The activationStart
      // reference is used because LCP should be relative to page activation
      // rather than navigation start if the page was prerendered.
      const value = Math.max(lastEntry.startTime - getActivationStart(), 0);

      // Only report if the page wasn't hidden prior to LCP.
      if (value < visibilityWatcher.firstHiddenTime) {
        metric.value = value;
        metric.entries = [lastEntry];
        report();
      }
    }
  };

  const po = observe('largest-contentful-paint', handleEntries);

  if (po) {
    report = bindReporter(onReport, metric);

    const stopListening = () => {
      if (!reportedMetricIDs[metric.id]) {
        handleEntries(po.takeRecords() );
        po.disconnect();
        reportedMetricIDs[metric.id] = true;
        report(true);
      }
    };

    // Stop listening after input. Note: while scrolling is an input that
    // stop LCP observation, it's unreliable since it can be programmatically
    // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
    ['keydown', 'click'].forEach(type => {
      addEventListener(type, stopListening, { once: true, capture: true });
    });

    onHidden(stopListening, true);

    return stopListening;
  }

  return;
};


//# sourceMappingURL=getLCP.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/metrics/utils.js
/**
 * Checks if a given value is a valid measurement value.
 */
function isMeasurementValue(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */
function _startChild(transaction, { startTimestamp, ...ctx }) {
  if (startTimestamp && transaction.startTimestamp > startTimestamp) {
    transaction.startTimestamp = startTimestamp;
  }

  return transaction.startChild({
    startTimestamp,
    ...ctx,
  });
}


//# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/metrics/index.js










/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */
function msToSec(time) {
  return time / 1000;
}

function getBrowserPerformanceAPI() {
  // @ts-ignore we want to make sure all of these are available, even if TS is sure they are
  return WINDOW && WINDOW.addEventListener && WINDOW.performance;
}

let _performanceCursor = 0;

let _measurements = {};
let _lcpEntry;
let _clsEntry;

/**
 * Start tracking web vitals
 *
 * @returns A function that forces web vitals collection
 */
function startTrackingWebVitals() {
  const performance = getBrowserPerformanceAPI();
  if (performance && esm_time/* browserPerformanceTimeOrigin */.Z1) {
    // @ts-ignore we want to make sure all of these are available, even if TS is sure they are
    if (performance.mark) {
      WINDOW.performance.mark('sentry-tracing-init');
    }
    _trackFID();
    const clsCallback = _trackCLS();
    const lcpCallback = _trackLCP();

    return () => {
      if (clsCallback) {
        clsCallback();
      }
      if (lcpCallback) {
        lcpCallback();
      }
    };
  }

  return () => undefined;
}

/**
 * Start tracking long tasks.
 */
function startTrackingLongTasks() {
  const entryHandler = (entries) => {
    for (const entry of entries) {
      const transaction = (0,utils/* getActiveTransaction */.x1)() ;
      if (!transaction) {
        return;
      }
      const startTime = msToSec((esm_time/* browserPerformanceTimeOrigin */.Z1 ) + entry.startTime);
      const duration = msToSec(entry.duration);

      transaction.startChild({
        description: 'Main UI thread blocked',
        op: 'ui.long-task',
        startTimestamp: startTime,
        endTimestamp: startTime + duration,
      });
    }
  };

  observe('longtask', entryHandler);
}

/**
 * Start tracking interaction events.
 */
function startTrackingInteractions() {
  const entryHandler = (entries) => {
    for (const entry of entries) {
      const transaction = (0,utils/* getActiveTransaction */.x1)() ;
      if (!transaction) {
        return;
      }

      if (entry.name === 'click') {
        const startTime = msToSec((esm_time/* browserPerformanceTimeOrigin */.Z1 ) + entry.startTime);
        const duration = msToSec(entry.duration);

        transaction.startChild({
          description: (0,browser/* htmlTreeAsString */.Rt)(entry.target),
          op: `ui.interaction.${entry.name}`,
          startTimestamp: startTime,
          endTimestamp: startTime + duration,
        });
      }
    }
  };

  observe('event', entryHandler, { durationThreshold: 0 });
}

/** Starts tracking the Cumulative Layout Shift on the current page. */
function _trackCLS() {
  // See:
  // https://web.dev/evolving-cls/
  // https://web.dev/cls-web-tooling/
  return onCLS(metric => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding CLS');
    _measurements['cls'] = { value: metric.value, unit: '' };
    _clsEntry = entry ;
  });
}

/** Starts tracking the Largest Contentful Paint on the current page. */
function _trackLCP() {
  return onLCP(metric => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding LCP');
    _measurements['lcp'] = { value: metric.value, unit: 'millisecond' };
    _lcpEntry = entry ;
  });
}

/** Starts tracking the First Input Delay on the current page. */
function _trackFID() {
  onFID(metric => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }

    const timeOrigin = msToSec(esm_time/* browserPerformanceTimeOrigin */.Z1 );
    const startTime = msToSec(entry.startTime);
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding FID');
    _measurements['fid'] = { value: metric.value, unit: 'millisecond' };
    _measurements['mark.fid'] = { value: timeOrigin + startTime, unit: 'second' };
  });
}

/** Add performance related spans to a transaction */
function addPerformanceEntries(transaction) {
  const performance = getBrowserPerformanceAPI();
  if (!performance || !WINDOW.performance.getEntries || !esm_time/* browserPerformanceTimeOrigin */.Z1) {
    // Gatekeeper if performance API not available
    return;
  }

  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Tracing] Adding & adjusting spans using Performance API');
  const timeOrigin = msToSec(esm_time/* browserPerformanceTimeOrigin */.Z1);

  const performanceEntries = performance.getEntries();

  let responseStartTimestamp;
  let requestStartTimestamp;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  performanceEntries.slice(_performanceCursor).forEach((entry) => {
    const startTime = msToSec(entry.startTime);
    const duration = msToSec(entry.duration);

    if (transaction.op === 'navigation' && timeOrigin + startTime < transaction.startTimestamp) {
      return;
    }

    switch (entry.entryType) {
      case 'navigation': {
        _addNavigationSpans(transaction, entry, timeOrigin);
        responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
        requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
        break;
      }
      case 'mark':
      case 'paint':
      case 'measure': {
        _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);

        // capture web vitals
        const firstHidden = getVisibilityWatcher();
        // Only report if the page wasn't hidden prior to the web vital.
        const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;

        if (entry.name === 'first-paint' && shouldRecord) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding FP');
          _measurements['fp'] = { value: entry.startTime, unit: 'millisecond' };
        }
        if (entry.name === 'first-contentful-paint' && shouldRecord) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding FCP');
          _measurements['fcp'] = { value: entry.startTime, unit: 'millisecond' };
        }
        break;
      }
      case 'resource': {
        const resourceName = (entry.name ).replace(WINDOW.location.origin, '');
        _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
        break;
      }
      // Ignore other entry types.
    }
  });

  _performanceCursor = Math.max(performanceEntries.length - 1, 0);

  _trackNavigator(transaction);

  // Measurements are only available for pageload transactions
  if (transaction.op === 'pageload') {
    // Generate TTFB (Time to First Byte), which measured as the time between the beginning of the transaction and the
    // start of the response in milliseconds
    if (typeof responseStartTimestamp === 'number') {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding TTFB');
      _measurements['ttfb'] = {
        value: (responseStartTimestamp - transaction.startTimestamp) * 1000,
        unit: 'millisecond',
      };

      if (typeof requestStartTimestamp === 'number' && requestStartTimestamp <= responseStartTimestamp) {
        // Capture the time spent making the request and receiving the first byte of the response.
        // This is the time between the start of the request and the start of the response in milliseconds.
        _measurements['ttfb.requestTime'] = {
          value: (responseStartTimestamp - requestStartTimestamp) * 1000,
          unit: 'millisecond',
        };
      }
    }

    ['fcp', 'fp', 'lcp'].forEach(name => {
      if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) {
        return;
      }
      // The web vitals, fcp, fp, lcp, and ttfb, all measure relative to timeOrigin.
      // Unfortunately, timeOrigin is not captured within the transaction span data, so these web vitals will need
      // to be adjusted to be relative to transaction.startTimestamp.
      const oldValue = _measurements[name].value;
      const measurementTimestamp = timeOrigin + msToSec(oldValue);

      // normalizedValue should be in milliseconds
      const normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1000);
      const delta = normalizedValue - oldValue;

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
      _measurements[name].value = normalizedValue;
    });

    const fidMark = _measurements['mark.fid'];
    if (fidMark && _measurements['fid']) {
      // create span for FID
      _startChild(transaction, {
        description: 'first input delay',
        endTimestamp: fidMark.value + msToSec(_measurements['fid'].value),
        op: 'ui.action',
        startTimestamp: fidMark.value,
      });

      // Delete mark.fid as we don't want it to be part of final payload
      delete _measurements['mark.fid'];
    }

    // If FCP is not recorded we should not record the cls value
    // according to the new definition of CLS.
    if (!('fcp' in _measurements)) {
      delete _measurements.cls;
    }

    Object.keys(_measurements).forEach(measurementName => {
      transaction.setMeasurement(
        measurementName,
        _measurements[measurementName].value,
        _measurements[measurementName].unit,
      );
    });

    _tagMetricInfo(transaction);
  }

  _lcpEntry = undefined;
  _clsEntry = undefined;
  _measurements = {};
}

/** Create measure related spans */
function _addMeasureSpans(
  transaction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry,
  startTime,
  duration,
  timeOrigin,
) {
  const measureStartTimestamp = timeOrigin + startTime;
  const measureEndTimestamp = measureStartTimestamp + duration;

  _startChild(transaction, {
    description: entry.name ,
    endTimestamp: measureEndTimestamp,
    op: entry.entryType ,
    startTimestamp: measureStartTimestamp,
  });

  return measureStartTimestamp;
}

/** Instrument navigation entries */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _addNavigationSpans(transaction, entry, timeOrigin) {
  ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach(event => {
    _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
  });
  _addPerformanceNavigationTiming(transaction, entry, 'secureConnection', timeOrigin, 'TLS/SSL', 'connectEnd');
  _addPerformanceNavigationTiming(transaction, entry, 'fetch', timeOrigin, 'cache', 'domainLookupStart');
  _addPerformanceNavigationTiming(transaction, entry, 'domainLookup', timeOrigin, 'DNS');
  _addRequest(transaction, entry, timeOrigin);
}

/** Create performance navigation related spans */
function _addPerformanceNavigationTiming(
  transaction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry,
  event,
  timeOrigin,
  description,
  eventEnd,
) {
  const end = eventEnd ? (entry[eventEnd] ) : (entry[`${event}End`] );
  const start = entry[`${event}Start`] ;
  if (!start || !end) {
    return;
  }
  _startChild(transaction, {
    op: 'browser',
    description: description || event,
    startTimestamp: timeOrigin + msToSec(start),
    endTimestamp: timeOrigin + msToSec(end),
  });
}

/** Create request and response related spans */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _addRequest(transaction, entry, timeOrigin) {
  _startChild(transaction, {
    op: 'browser',
    description: 'request',
    startTimestamp: timeOrigin + msToSec(entry.requestStart ),
    endTimestamp: timeOrigin + msToSec(entry.responseEnd ),
  });

  _startChild(transaction, {
    op: 'browser',
    description: 'response',
    startTimestamp: timeOrigin + msToSec(entry.responseStart ),
    endTimestamp: timeOrigin + msToSec(entry.responseEnd ),
  });
}

/** Create resource-related spans */
function _addResourceSpans(
  transaction,
  entry,
  resourceName,
  startTime,
  duration,
  timeOrigin,
) {
  // we already instrument based on fetch and xhr, so we don't need to
  // duplicate spans here.
  if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = {};
  if ('transferSize' in entry) {
    data['http.response_transfer_size'] = entry.transferSize;
  }
  if ('encodedBodySize' in entry) {
    data['http.response_content_length'] = entry.encodedBodySize;
  }
  if ('decodedBodySize' in entry) {
    data['http.decoded_response_content_length'] = entry.decodedBodySize;
  }
  if ('renderBlockingStatus' in entry) {
    data['resource.render_blocking_status'] = entry.renderBlockingStatus;
  }

  const startTimestamp = timeOrigin + startTime;
  const endTimestamp = startTimestamp + duration;

  _startChild(transaction, {
    description: resourceName,
    endTimestamp,
    op: entry.initiatorType ? `resource.${entry.initiatorType}` : 'resource.other',
    startTimestamp,
    data,
  });
}

/**
 * Capture the information of the user agent.
 */
function _trackNavigator(transaction) {
  const navigator = WINDOW.navigator ;
  if (!navigator) {
    return;
  }

  // track network connectivity
  const connection = navigator.connection;
  if (connection) {
    if (connection.effectiveType) {
      transaction.setTag('effectiveConnectionType', connection.effectiveType);
    }

    if (connection.type) {
      transaction.setTag('connectionType', connection.type);
    }

    if (isMeasurementValue(connection.rtt)) {
      _measurements['connection.rtt'] = { value: connection.rtt, unit: 'millisecond' };
    }
  }

  if (isMeasurementValue(navigator.deviceMemory)) {
    transaction.setTag('deviceMemory', `${navigator.deviceMemory} GB`);
  }

  if (isMeasurementValue(navigator.hardwareConcurrency)) {
    transaction.setTag('hardwareConcurrency', String(navigator.hardwareConcurrency));
  }
}

/** Add LCP / CLS data to transaction to allow debugging */
function _tagMetricInfo(transaction) {
  if (_lcpEntry) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding LCP Data');

    // Capture Properties of the LCP element that contributes to the LCP.

    if (_lcpEntry.element) {
      transaction.setTag('lcp.element', (0,browser/* htmlTreeAsString */.Rt)(_lcpEntry.element));
    }

    if (_lcpEntry.id) {
      transaction.setTag('lcp.id', _lcpEntry.id);
    }

    if (_lcpEntry.url) {
      // Trim URL to the first 200 characters.
      transaction.setTag('lcp.url', _lcpEntry.url.trim().slice(0, 200));
    }

    transaction.setTag('lcp.size', _lcpEntry.size);
  }

  // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
  if (_clsEntry && _clsEntry.sources) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log('[Measurements] Adding CLS Data');
    _clsEntry.sources.forEach((source, index) =>
      transaction.setTag(`cls.source.${index + 1}`, (0,browser/* htmlTreeAsString */.Rt)(source.node)),
    );
  }
}


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/utils/hasTracingEnabled.js
var hasTracingEnabled = __webpack_require__(7522);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/hub.js
var esm_hub = __webpack_require__(5659);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
var tracing_dynamicSamplingContext = __webpack_require__(454);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/instrument.js + 2 modules
var instrument = __webpack_require__(1688);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/string.js
var string = __webpack_require__(7321);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/baggage.js
var baggage = __webpack_require__(9181);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(7597);
;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/request.js



/* eslint-disable max-lines */

const DEFAULT_TRACE_PROPAGATION_TARGETS = ['localhost', /^\/(?!\/)/];

/** Options for Request Instrumentation */

const defaultRequestInstrumentationOptions = {
  traceFetch: true,
  traceXHR: true,
  enableHTTPTimings: true,
  // TODO (v8): Remove this property
  tracingOrigins: DEFAULT_TRACE_PROPAGATION_TARGETS,
  tracePropagationTargets: DEFAULT_TRACE_PROPAGATION_TARGETS,
};

/** Registers span creators for xhr and fetch requests  */
function instrumentOutgoingRequests(_options) {
  const {
    traceFetch,
    traceXHR,
    tracePropagationTargets,
    // eslint-disable-next-line deprecation/deprecation
    tracingOrigins,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
  } = {
    traceFetch: defaultRequestInstrumentationOptions.traceFetch,
    traceXHR: defaultRequestInstrumentationOptions.traceXHR,
    ..._options,
  };

  const shouldCreateSpan =
    typeof shouldCreateSpanForRequest === 'function' ? shouldCreateSpanForRequest : (_) => true;

  // TODO(v8) Remove tracingOrigins here
  // The only reason we're passing it in here is because this instrumentOutgoingRequests function is publicly exported
  // and we don't want to break the API. We can remove it in v8.
  const shouldAttachHeadersWithTargets = (url) =>
    shouldAttachHeaders(url, tracePropagationTargets || tracingOrigins);

  const spans = {};

  if (traceFetch) {
    (0,instrument/* addInstrumentationHandler */.oq)('fetch', (handlerData) => {
      const createdSpan = fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      if (enableHTTPTimings && createdSpan) {
        addHTTPTimings(createdSpan);
      }
    });
  }

  if (traceXHR) {
    (0,instrument/* addInstrumentationHandler */.oq)('xhr', (handlerData) => {
      const createdSpan = xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      if (enableHTTPTimings && createdSpan) {
        addHTTPTimings(createdSpan);
      }
    });
  }
}

/**
 * Creates a temporary observer to listen to the next fetch/xhr resourcing timings,
 * so that when timings hit their per-browser limit they don't need to be removed.
 *
 * @param span A span that has yet to be finished, must contain `url` on data.
 */
function addHTTPTimings(span) {
  const url = span.data.url;
  const observer = new PerformanceObserver(list => {
    const entries = list.getEntries() ;
    entries.forEach(entry => {
      if ((entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest') && entry.name.endsWith(url)) {
        const spanData = resourceTimingEntryToSpanData(entry);
        spanData.forEach(data => span.setData(...data));
        observer.disconnect();
      }
    });
  });
  observer.observe({
    entryTypes: ['resource'],
  });
}

/**
 * Converts ALPN protocol ids to name and version.
 *
 * (https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
 * @param nextHopProtocol PerformanceResourceTiming.nextHopProtocol
 */
function extractNetworkProtocol(nextHopProtocol) {
  let name = 'unknown';
  let version = 'unknown';
  let _name = '';
  for (const char of nextHopProtocol) {
    // http/1.1 etc.
    if (char === '/') {
      [name, version] = nextHopProtocol.split('/');
      break;
    }
    // h2, h3 etc.
    if (!isNaN(Number(char))) {
      name = _name === 'h' ? 'http' : _name;
      version = nextHopProtocol.split(_name)[1];
      break;
    }
    _name += char;
  }
  if (_name === nextHopProtocol) {
    // webrtc, ftp, etc.
    name = _name;
  }
  return { name, version };
}

function getAbsoluteTime(time) {
  return ((esm_time/* browserPerformanceTimeOrigin */.Z1 || performance.timeOrigin) + time) / 1000;
}

function resourceTimingEntryToSpanData(resourceTiming) {
  const { name, version } = extractNetworkProtocol(resourceTiming.nextHopProtocol);

  const timingSpanData = [];

  timingSpanData.push(['network.protocol.version', version], ['network.protocol.name', name]);

  if (!esm_time/* browserPerformanceTimeOrigin */.Z1) {
    return timingSpanData;
  }
  return [
    ...timingSpanData,
    ['http.request.redirect_start', getAbsoluteTime(resourceTiming.redirectStart)],
    ['http.request.fetch_start', getAbsoluteTime(resourceTiming.fetchStart)],
    ['http.request.domain_lookup_start', getAbsoluteTime(resourceTiming.domainLookupStart)],
    ['http.request.domain_lookup_end', getAbsoluteTime(resourceTiming.domainLookupEnd)],
    ['http.request.connect_start', getAbsoluteTime(resourceTiming.connectStart)],
    ['http.request.secure_connection_start', getAbsoluteTime(resourceTiming.secureConnectionStart)],
    ['http.request.connection_end', getAbsoluteTime(resourceTiming.connectEnd)],
    ['http.request.request_start', getAbsoluteTime(resourceTiming.requestStart)],
    ['http.request.response_start', getAbsoluteTime(resourceTiming.responseStart)],
    ['http.request.response_end', getAbsoluteTime(resourceTiming.responseEnd)],
  ];
}

/**
 * A function that determines whether to attach tracing headers to a request.
 * This was extracted from `instrumentOutgoingRequests` to make it easier to test shouldAttachHeaders.
 * We only export this fuction for testing purposes.
 */
function shouldAttachHeaders(url, tracePropagationTargets) {
  return (0,string/* stringMatchesSomePattern */.U0)(url, tracePropagationTargets || DEFAULT_TRACE_PROPAGATION_TARGETS);
}

/**
 * Create and track fetch request spans
 *
 * @returns Span if a span was created, otherwise void.
 */
function fetchCallback(
  handlerData,
  shouldCreateSpan,
  shouldAttachHeaders,
  spans,
) {
  if (!(0,hasTracingEnabled/* hasTracingEnabled */.z)() || !handlerData.fetchData) {
    return undefined;
  }

  const shouldCreateSpanResult = shouldCreateSpan(handlerData.fetchData.url);

  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId) return;

    const span = spans[spanId];
    if (span) {
      if (handlerData.response) {
        // TODO (kmclb) remove this once types PR goes through
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        span.setHttpStatus(handlerData.response.status);

        const contentLength =
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          handlerData.response && handlerData.response.headers && handlerData.response.headers.get('content-length');

        const contentLengthNum = parseInt(contentLength);
        if (contentLengthNum > 0) {
          span.setData('http.response_content_length', contentLengthNum);
        }
      } else if (handlerData.error) {
        span.setStatus('internal_error');
      }
      span.finish();

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return undefined;
  }

  const hub = (0,esm_hub/* getCurrentHub */.Gd)();
  const scope = hub.getScope();
  const client = hub.getClient();
  const parentSpan = scope.getSpan();

  const { method, url } = handlerData.fetchData;

  const span =
    shouldCreateSpanResult && parentSpan
      ? parentSpan.startChild({
          data: {
            url,
            type: 'fetch',
            'http.method': method,
          },
          description: `${method} ${url}`,
          op: 'http.client',
        })
      : undefined;

  if (span) {
    handlerData.fetchData.__span = span.spanId;
    spans[span.spanId] = span;
  }

  if (shouldAttachHeaders(handlerData.fetchData.url) && client) {
    const request = handlerData.args[0];

    // In case the user hasn't set the second argument of a fetch call we default it to `{}`.
    handlerData.args[1] = handlerData.args[1] || {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options = handlerData.args[1];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    options.headers = addTracingHeadersToFetchRequest(request, client, scope, options, span);
  }

  return span;
}

/**
 * Adds sentry-trace and baggage headers to the various forms of fetch headers
 */
function addTracingHeadersToFetchRequest(
  request, // unknown is actually type Request but we can't export DOM types from this package,
  client,
  scope,
  options

,
  requestSpan,
) {
  const span = requestSpan || scope.getSpan();

  const transaction = span && span.transaction;

  const { traceId, sampled, dsc } = scope.getPropagationContext();

  const sentryTraceHeader = span ? span.toTraceparent() : (0,tracing/* generateSentryTraceHeader */.$p)(traceId, undefined, sampled);
  const dynamicSamplingContext = transaction
    ? transaction.getDynamicSamplingContext()
    : dsc
    ? dsc
    : (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromClient */._)(traceId, client, scope);

  const sentryBaggageHeader = (0,baggage/* dynamicSamplingContextToSentryBaggageHeader */.IQ)(dynamicSamplingContext);

  const headers =
    typeof Request !== 'undefined' && (0,is/* isInstanceOf */.V9)(request, Request) ? (request ).headers : options.headers;

  if (!headers) {
    return { 'sentry-trace': sentryTraceHeader, baggage: sentryBaggageHeader };
  } else if (typeof Headers !== 'undefined' && (0,is/* isInstanceOf */.V9)(headers, Headers)) {
    const newHeaders = new Headers(headers );

    newHeaders.append('sentry-trace', sentryTraceHeader);

    if (sentryBaggageHeader) {
      // If the same header is appended multiple times the browser will merge the values into a single request header.
      // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
      newHeaders.append(baggage/* BAGGAGE_HEADER_NAME */.bU, sentryBaggageHeader);
    }

    return newHeaders ;
  } else if (Array.isArray(headers)) {
    const newHeaders = [...headers, ['sentry-trace', sentryTraceHeader]];

    if (sentryBaggageHeader) {
      // If there are multiple entries with the same key, the browser will merge the values into a single request header.
      // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
      newHeaders.push([baggage/* BAGGAGE_HEADER_NAME */.bU, sentryBaggageHeader]);
    }

    return newHeaders ;
  } else {
    const existingBaggageHeader = 'baggage' in headers ? headers.baggage : undefined;
    const newBaggageHeaders = [];

    if (Array.isArray(existingBaggageHeader)) {
      newBaggageHeaders.push(...existingBaggageHeader);
    } else if (existingBaggageHeader) {
      newBaggageHeaders.push(existingBaggageHeader);
    }

    if (sentryBaggageHeader) {
      newBaggageHeaders.push(sentryBaggageHeader);
    }

    return {
      ...(headers ),
      'sentry-trace': sentryTraceHeader,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(',') : undefined,
    };
  }
}

/**
 * Create and track xhr request spans
 *
 * @returns Span if a span was created, otherwise void.
 */
// eslint-disable-next-line complexity
function xhrCallback(
  handlerData,
  shouldCreateSpan,
  shouldAttachHeaders,
  spans,
) {
  const xhr = handlerData.xhr;
  const sentryXhrData = xhr && xhr[instrument/* SENTRY_XHR_DATA_KEY */.xU];

  if (!(0,hasTracingEnabled/* hasTracingEnabled */.z)() || (xhr && xhr.__sentry_own_request__) || !xhr || !sentryXhrData) {
    return undefined;
  }

  const shouldCreateSpanResult = shouldCreateSpan(sentryXhrData.url);

  // check first if the request has finished and is tracked by an existing span which should now end
  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = xhr.__sentry_xhr_span_id__;
    if (!spanId) return;

    const span = spans[spanId];
    if (span) {
      span.setHttpStatus(sentryXhrData.status_code);
      span.finish();

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return undefined;
  }

  const hub = (0,esm_hub/* getCurrentHub */.Gd)();
  const scope = hub.getScope();
  const parentSpan = scope.getSpan();

  const span =
    shouldCreateSpanResult && parentSpan
      ? parentSpan.startChild({
          data: {
            ...sentryXhrData.data,
            type: 'xhr',
            'http.method': sentryXhrData.method,
            url: sentryXhrData.url,
          },
          description: `${sentryXhrData.method} ${sentryXhrData.url}`,
          op: 'http.client',
        })
      : undefined;

  if (span) {
    xhr.__sentry_xhr_span_id__ = span.spanId;
    spans[xhr.__sentry_xhr_span_id__] = span;
  }

  if (xhr.setRequestHeader && shouldAttachHeaders(sentryXhrData.url)) {
    if (span) {
      const transaction = span && span.transaction;
      const dynamicSamplingContext = transaction && transaction.getDynamicSamplingContext();
      const sentryBaggageHeader = (0,baggage/* dynamicSamplingContextToSentryBaggageHeader */.IQ)(dynamicSamplingContext);
      setHeaderOnXhr(xhr, span.toTraceparent(), sentryBaggageHeader);
    } else {
      const client = hub.getClient();
      const { traceId, sampled, dsc } = scope.getPropagationContext();
      const sentryTraceHeader = (0,tracing/* generateSentryTraceHeader */.$p)(traceId, undefined, sampled);
      const dynamicSamplingContext =
        dsc || (client ? (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromClient */._)(traceId, client, scope) : undefined);
      const sentryBaggageHeader = (0,baggage/* dynamicSamplingContextToSentryBaggageHeader */.IQ)(dynamicSamplingContext);
      setHeaderOnXhr(xhr, sentryTraceHeader, sentryBaggageHeader);
    }
  }

  return span;
}

function setHeaderOnXhr(
  xhr,
  sentryTraceHeader,
  sentryBaggageHeader,
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    xhr.setRequestHeader('sentry-trace', sentryTraceHeader);
    if (sentryBaggageHeader) {
      // From MDN: "If this method is called several times with the same header, the values are merged into one single request header."
      // We can therefore simply set a baggage header without checking what was there before
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      xhr.setRequestHeader(baggage/* BAGGAGE_HEADER_NAME */.bU, sentryBaggageHeader);
    }
  } catch (_) {
    // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
  }
}


//# sourceMappingURL=request.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/router.js



/**
 * Default function implementing pageload and navigation transactions
 */
function instrumentRoutingWithDefaults(
  customStartTransaction,
  startTransactionOnPageLoad = true,
  startTransactionOnLocationChange = true,
) {
  if (!WINDOW || !WINDOW.location) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('Could not initialize routing instrumentation due to invalid location');
    return;
  }

  let startingUrl = WINDOW.location.href;

  let activeTransaction;
  if (startTransactionOnPageLoad) {
    activeTransaction = customStartTransaction({
      name: WINDOW.location.pathname,
      // pageload should always start at timeOrigin (and needs to be in s, not ms)
      startTimestamp: esm_time/* browserPerformanceTimeOrigin */.Z1 ? esm_time/* browserPerformanceTimeOrigin */.Z1 / 1000 : undefined,
      op: 'pageload',
      metadata: { source: 'url' },
    });
  }

  if (startTransactionOnLocationChange) {
    (0,instrument/* addInstrumentationHandler */.oq)('history', ({ to, from }) => {
      /**
       * This early return is there to account for some cases where a navigation transaction starts right after
       * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
       * create an uneccessary navigation transaction.
       *
       * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
       * only be caused in certain development environments where the usage of a hot module reloader is causing
       * errors.
       */
      if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
        startingUrl = undefined;
        return;
      }

      if (from !== to) {
        startingUrl = undefined;
        if (activeTransaction) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
          // If there's an open transaction on the scope, we need to finish it before creating an new one.
          activeTransaction.finish();
        }
        activeTransaction = customStartTransaction({
          name: WINDOW.location.pathname,
          op: 'navigation',
          metadata: { source: 'url' },
        });
      }
    });
  }
}


//# sourceMappingURL=router.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry-internal/tracing/esm/browser/browsertracing.js








const BROWSER_TRACING_INTEGRATION_ID = 'BrowserTracing';

/** Options for Browser Tracing integration */

const DEFAULT_BROWSER_TRACING_OPTIONS = {
  ...idletransaction/* TRACING_DEFAULTS */.AT,
  markBackgroundTransactions: true,
  routingInstrumentation: instrumentRoutingWithDefaults,
  startTransactionOnLocationChange: true,
  startTransactionOnPageLoad: true,
  enableLongTask: true,
  _experiments: {},
  ...defaultRequestInstrumentationOptions,
};

/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library. This integration uses {@see IdleTransaction} to create transactions.
 */
class BrowserTracing  {
  // This class currently doesn't have a static `id` field like the other integration classes, because it prevented
  // @sentry/tracing from being treeshaken. Tree shakers do not like static fields, because they behave like side effects.
  // TODO: Come up with a better plan, than using static fields on integration classes, and use that plan on all
  // integrations.

  /** Browser Tracing integration options */

  /**
   * @inheritDoc
   */

   constructor(_options) {
    this.name = BROWSER_TRACING_INTEGRATION_ID;
    this._hasSetTracePropagationTargets = false;

    (0,hubextensions/* addTracingExtensions */.T)();

    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
      this._hasSetTracePropagationTargets = !!(
        _options &&
        // eslint-disable-next-line deprecation/deprecation
        (_options.tracePropagationTargets || _options.tracingOrigins)
      );
    }

    this.options = {
      ...DEFAULT_BROWSER_TRACING_OPTIONS,
      ..._options,
    };

    // Special case: enableLongTask can be set in _experiments
    // TODO (v8): Remove this in v8
    if (this.options._experiments.enableLongTask !== undefined) {
      this.options.enableLongTask = this.options._experiments.enableLongTask;
    }

    // TODO (v8): remove this block after tracingOrigins is removed
    // Set tracePropagationTargets to tracingOrigins if specified by the user
    // In case both are specified, tracePropagationTargets takes precedence
    // eslint-disable-next-line deprecation/deprecation
    if (_options && !_options.tracePropagationTargets && _options.tracingOrigins) {
      // eslint-disable-next-line deprecation/deprecation
      this.options.tracePropagationTargets = _options.tracingOrigins;
    }

    this._collectWebVitals = startTrackingWebVitals();
    if (this.options.enableLongTask) {
      startTrackingLongTasks();
    }
    if (this.options._experiments.enableInteractions) {
      startTrackingInteractions();
    }
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    this._getCurrentHub = getCurrentHub;
    const hub = getCurrentHub();
    const client = hub.getClient();
    const clientOptions = client && client.getOptions();

    const {
      routingInstrumentation: instrumentRouting,
      startTransactionOnLocationChange,
      startTransactionOnPageLoad,
      markBackgroundTransactions,
      traceFetch,
      traceXHR,
      shouldCreateSpanForRequest,
      enableHTTPTimings,
      _experiments,
    } = this.options;

    const clientOptionsTracePropagationTargets = clientOptions && clientOptions.tracePropagationTargets;
    // There are three ways to configure tracePropagationTargets:
    // 1. via top level client option `tracePropagationTargets`
    // 2. via BrowserTracing option `tracePropagationTargets`
    // 3. via BrowserTracing option `tracingOrigins` (deprecated)
    //
    // To avoid confusion, favour top level client option `tracePropagationTargets`, and fallback to
    // BrowserTracing option `tracePropagationTargets` and then `tracingOrigins` (deprecated).
    // This is done as it minimizes bundle size (we don't have to have undefined checks).
    //
    // If both 1 and either one of 2 or 3 are set (from above), we log out a warning.
    const tracePropagationTargets = clientOptionsTracePropagationTargets || this.options.tracePropagationTargets;
    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && clientOptionsTracePropagationTargets) {
      logger/* logger */.kg.warn(
        '[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.',
      );
    }

    instrumentRouting(
      (context) => {
        const transaction = this._createRouteTransaction(context);

        this.options._experiments.onStartRouteTransaction &&
          this.options._experiments.onStartRouteTransaction(transaction, context, getCurrentHub);

        return transaction;
      },
      startTransactionOnPageLoad,
      startTransactionOnLocationChange,
    );

    if (markBackgroundTransactions) {
      registerBackgroundTabDetection();
    }

    if (_experiments.enableInteractions) {
      this._registerInteractionListener();
    }

    instrumentOutgoingRequests({
      traceFetch,
      traceXHR,
      tracePropagationTargets,
      shouldCreateSpanForRequest,
      enableHTTPTimings,
    });
  }

  /** Create routing idle transaction. */
   _createRouteTransaction(context) {
    if (!this._getCurrentHub) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
      return undefined;
    }

    const hub = this._getCurrentHub();

    const { beforeNavigate, idleTimeout, finalTimeout, heartbeatInterval } = this.options;

    const isPageloadTransaction = context.op === 'pageload';

    const sentryTrace = isPageloadTransaction ? getMetaContent('sentry-trace') : '';
    const baggage = isPageloadTransaction ? getMetaContent('baggage') : '';
    const { traceparentData, dynamicSamplingContext, propagationContext } = (0,tracing/* tracingContextFromHeaders */.KA)(
      sentryTrace,
      baggage,
    );

    const expandedContext = {
      ...context,
      ...traceparentData,
      metadata: {
        ...context.metadata,
        dynamicSamplingContext: traceparentData && !dynamicSamplingContext ? {} : dynamicSamplingContext,
      },
      trimEnd: true,
    };

    const modifiedContext = typeof beforeNavigate === 'function' ? beforeNavigate(expandedContext) : expandedContext;

    // For backwards compatibility reasons, beforeNavigate can return undefined to "drop" the transaction (prevent it
    // from being sent to Sentry).
    const finalContext = modifiedContext === undefined ? { ...expandedContext, sampled: false } : modifiedContext;

    // If `beforeNavigate` set a custom name, record that fact
    finalContext.metadata =
      finalContext.name !== expandedContext.name
        ? { ...finalContext.metadata, source: 'custom' }
        : finalContext.metadata;

    this._latestRouteName = finalContext.name;
    this._latestRouteSource = finalContext.metadata && finalContext.metadata.source;

    if (finalContext.sampled === false) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.log(`[Tracing] Starting ${finalContext.op} transaction on scope`);

    const { location } = WINDOW;

    const idleTransaction = (0,hubextensions/* startIdleTransaction */.l)(
      hub,
      finalContext,
      idleTimeout,
      finalTimeout,
      true,
      { location }, // for use in the tracesSampler
      heartbeatInterval,
    );

    const scope = hub.getScope();

    // If it's a pageload and there is a meta tag set
    // use the traceparentData as the propagation context
    if (isPageloadTransaction && traceparentData) {
      scope.setPropagationContext(propagationContext);
    } else {
      // Navigation transactions should set a new propagation context based on the
      // created idle transaction.
      scope.setPropagationContext({
        traceId: idleTransaction.traceId,
        spanId: idleTransaction.spanId,
        parentSpanId: idleTransaction.parentSpanId,
        sampled: !!idleTransaction.sampled,
      });
    }

    idleTransaction.registerBeforeFinishCallback(transaction => {
      this._collectWebVitals();
      addPerformanceEntries(transaction);
    });

    return idleTransaction ;
  }

  /** Start listener for interaction transactions */
   _registerInteractionListener() {
    let inflightInteractionTransaction;
    const registerInteractionTransaction = () => {
      const { idleTimeout, finalTimeout, heartbeatInterval } = this.options;
      const op = 'ui.action.click';

      const currentTransaction = (0,utils/* getActiveTransaction */.x1)();
      if (currentTransaction && currentTransaction.op && ['navigation', 'pageload'].includes(currentTransaction.op)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger/* logger */.kg.warn(
            `[Tracing] Did not create ${op} transaction because a pageload or navigation transaction is in progress.`,
          );
        return undefined;
      }

      if (inflightInteractionTransaction) {
        inflightInteractionTransaction.setFinishReason('interactionInterrupted');
        inflightInteractionTransaction.finish();
        inflightInteractionTransaction = undefined;
      }

      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn(`[Tracing] Did not create ${op} transaction because _getCurrentHub is invalid.`);
        return undefined;
      }

      if (!this._latestRouteName) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger/* logger */.kg.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
        return undefined;
      }

      const hub = this._getCurrentHub();
      const { location } = WINDOW;

      const context = {
        name: this._latestRouteName,
        op,
        trimEnd: true,
        metadata: {
          source: this._latestRouteSource || 'url',
        },
      };

      inflightInteractionTransaction = (0,hubextensions/* startIdleTransaction */.l)(
        hub,
        context,
        idleTimeout,
        finalTimeout,
        true,
        { location }, // for use in the tracesSampler
        heartbeatInterval,
      );
    };

    ['click'].forEach(type => {
      addEventListener(type, registerInteractionTransaction, { once: false, capture: true });
    });
  }
}

/** Returns the value of a meta tag */
function getMetaContent(metaName) {
  // Can't specify generic to `getDomElement` because tracing can be used
  // in a variety of environments, have to disable `no-unsafe-member-access`
  // as a result.
  const metaTag = (0,browser/* getDomElement */.qT)(`meta[name=${metaName}]`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return metaTag ? metaTag.getAttribute('content') : undefined;
}


//# sourceMappingURL=browsertracing.js.map

// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/extensions.js
var extensions = __webpack_require__(758);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/span.js
var span = __webpack_require__(8903);
// EXTERNAL MODULE: ./node_modules/@sentry/core/esm/tracing/transaction.js
var transaction = __webpack_require__(8069);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/url.js
var url = __webpack_require__(6956);
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/tracing/spanstatus.js
/** The status of an Span.
 *
 * @deprecated Use string literals - if you require type casting, cast to SpanStatusType type
 */
// eslint-disable-next-line import/export
var SpanStatus; (function (SpanStatus) {
  /** The operation completed successfully. */
  const Ok = 'ok'; SpanStatus["Ok"] = Ok;
  /** Deadline expired before operation could complete. */
  const DeadlineExceeded = 'deadline_exceeded'; SpanStatus["DeadlineExceeded"] = DeadlineExceeded;
  /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
  const Unauthenticated = 'unauthenticated'; SpanStatus["Unauthenticated"] = Unauthenticated;
  /** 403 Forbidden */
  const PermissionDenied = 'permission_denied'; SpanStatus["PermissionDenied"] = PermissionDenied;
  /** 404 Not Found. Some requested entity (file or directory) was not found. */
  const NotFound = 'not_found'; SpanStatus["NotFound"] = NotFound;
  /** 429 Too Many Requests */
  const ResourceExhausted = 'resource_exhausted'; SpanStatus["ResourceExhausted"] = ResourceExhausted;
  /** Client specified an invalid argument. 4xx. */
  const InvalidArgument = 'invalid_argument'; SpanStatus["InvalidArgument"] = InvalidArgument;
  /** 501 Not Implemented */
  const Unimplemented = 'unimplemented'; SpanStatus["Unimplemented"] = Unimplemented;
  /** 503 Service Unavailable */
  const Unavailable = 'unavailable'; SpanStatus["Unavailable"] = Unavailable;
  /** Other/generic 5xx. */
  const InternalError = 'internal_error'; SpanStatus["InternalError"] = InternalError;
  /** Unknown. Any non-standard HTTP status code. */
  const UnknownError = 'unknown_error'; SpanStatus["UnknownError"] = UnknownError;
  /** The operation was cancelled (typically by the user). */
  const Cancelled = 'cancelled'; SpanStatus["Cancelled"] = Cancelled;
  /** Already exists (409) */
  const AlreadyExists = 'already_exists'; SpanStatus["AlreadyExists"] = AlreadyExists;
  /** Operation was rejected because the system is not in a state required for the operation's */
  const FailedPrecondition = 'failed_precondition'; SpanStatus["FailedPrecondition"] = FailedPrecondition;
  /** The operation was aborted, typically due to a concurrency issue. */
  const Aborted = 'aborted'; SpanStatus["Aborted"] = Aborted;
  /** Operation was attempted past the valid range. */
  const OutOfRange = 'out_of_range'; SpanStatus["OutOfRange"] = OutOfRange;
  /** Unrecoverable data loss or corruption */
  const DataLoss = 'data_loss'; SpanStatus["DataLoss"] = DataLoss;
})(SpanStatus || (SpanStatus = {}));


//# sourceMappingURL=spanstatus.js.map

// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/apollo.js
var apollo = __webpack_require__(2716);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/express.js
var express = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/graphql.js
var graphql = __webpack_require__(1791);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/mongo.js
var mongo = __webpack_require__(6169);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/mysql.js
var mysql = __webpack_require__(24);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/postgres.js
var postgres = __webpack_require__(1370);
// EXTERNAL MODULE: ./node_modules/@sentry-internal/tracing/esm/node/integrations/prisma.js
var prisma = __webpack_require__(9889);
;// CONCATENATED MODULE: ./node_modules/@sentry/tracing/esm/index.js


// BrowserTracing is already exported as part of `Integrations` below (and for the moment will remain so for
// backwards compatibility), but that interferes with treeshaking, so we also export it separately
// here.
/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 * `BrowserTracing` can be imported from `@sentry/browser` or your framework SDK
 *
 * import { BrowserTracing } from '@sentry/browser';
 * new BrowserTracing()
 */
const esm_BrowserTracing = BrowserTracing;

// BrowserTracing is already exported as part of `Integrations` below (and for the moment will remain so for
// backwards compatibility), but that interferes with treeshaking, so we also export it separately
// here.
/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 * `BrowserTracing` can be imported from `@sentry/browser` or your framework SDK
 *
 * import { BrowserTracing } from '@sentry/browser';
 * new BrowserTracing()
 */

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */
const addExtensionMethods = extensions/* addExtensionMethods */.r;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `getActiveTransaction` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */
const getActiveTransaction = utils/* getActiveTransaction */.x1;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `extractTraceparentData` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */
const extractTraceparentData = tracing/* extractTraceparentData */.qG;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `spanStatusfromHttpCode` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */
const spanStatusfromHttpCode = span/* spanStatusfromHttpCode */.Zd;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `SpanStatusType` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `Transaction` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */
const Transaction = transaction/* Transaction */.Y;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `Transaction` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `Span` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */
const Span = span/* Span */.Dr;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `Span` can be imported from `@sentry/node`, `@sentry/browser`, or your framework SDK
 */

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */
const esm_BROWSER_TRACING_INTEGRATION_ID = BROWSER_TRACING_INTEGRATION_ID;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `defaultRequestInstrumentationOptions` can be imported from `@sentry/browser`, or your framework SDK
 */
const esm_defaultRequestInstrumentationOptions = defaultRequestInstrumentationOptions;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `hasTracingEnabled` can be imported from `@sentry/utils`
 */
const esm_hasTracingEnabled = hasTracingEnabled/* hasTracingEnabled */.z;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `stripUrlQueryAndFragment` can be imported from `@sentry/utils`
 */
const stripUrlQueryAndFragment = url/* stripUrlQueryAndFragment */.rt;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 *
 * `TRACEPARENT_REGEXP` can be imported from `@sentry/utils`
 */
const TRACEPARENT_REGEXP = tracing/* TRACEPARENT_REGEXP */.Ke;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */
const IdleTransaction = idletransaction/* IdleTransaction */.io;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */
const esm_instrumentOutgoingRequests = instrumentOutgoingRequests;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */
const startIdleTransaction = hubextensions/* startIdleTransaction */.l;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */
// eslint-disable-next-line deprecation/deprecation
const esm_SpanStatus = SpanStatus;

/**
 * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
 */
// eslint-disable-next-line deprecation/deprecation

const Integrations = {
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `BrowserTracing` can be imported from `@sentry/browser` or your framework SDK
   *
   * import { BrowserTracing } from '@sentry/browser';
   * new BrowserTracing()
   */
  // eslint-disable-next-line deprecation/deprecation
  BrowserTracing: esm_BrowserTracing,
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `Apollo` can be imported from `@sentry/node`
   *
   * import { Integrations } from '@sentry/node';
   * new Integrations.Apollo({ ... })
   */
  // eslint-disable-next-line deprecation/deprecation
  Apollo: apollo/* Apollo */._,
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `Express` can be imported from `@sentry/node`
   *
   * import { Integrations } from '@sentry/node';
   * new Integrations.Express({ ... })
   */
  // eslint-disable-next-line deprecation/deprecation
  Express: express/* Express */.N,
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `GraphQL` can be imported from `@sentry/node`
   *
   * import { Integrations } from '@sentry/node';
   * new Integrations.GraphQL({ ... })
   */
  // eslint-disable-next-line deprecation/deprecation
  GraphQL: graphql/* GraphQL */.k,
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `Mongo` can be imported from `@sentry/node`
   *
   * import { Integrations } from '@sentry/node';
   * new Integrations.Mongo({ ... })
   */
  // eslint-disable-next-line deprecation/deprecation
  Mongo: mongo/* Mongo */._,
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `Mysql` can be imported from `@sentry/node`
   *
   * import { Integrations } from '@sentry/node';
   * new Integrations.Mysql({ ... })
   */
  // eslint-disable-next-line deprecation/deprecation
  Mysql: mysql/* Mysql */.m,
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `Postgres` can be imported from `@sentry/node`
   *
   * import { Integrations } from '@sentry/node';
   * new Integrations.Postgres({ ... })
   */
  // eslint-disable-next-line deprecation/deprecation
  Postgres: postgres/* Postgres */.E,
  /**
   * @deprecated `@sentry/tracing` has been deprecated and will be moved to to `@sentry/node`, `@sentry/browser`, or your framework SDK in the next major version.
   * `Prisma` can be imported from `@sentry/node`
   *
   * import { Integrations } from '@sentry/node';
   * new Integrations.Prisma({ ... })
   */
  // eslint-disable-next-line deprecation/deprecation
  Prisma: prisma/* Prisma */.g,
};

// Treeshakable guard to remove all code related to tracing

// Guard for tree
if (typeof __SENTRY_TRACING__ === 'undefined' || __SENTRY_TRACING__) {
  // We are patching the global object with our hub extension methods
  (0,extensions/* addExtensionMethods */.r)();
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EN: () => (/* binding */ baggageHeaderToDynamicSamplingContext),
/* harmony export */   IQ: () => (/* binding */ dynamicSamplingContextToSentryBaggageHeader),
/* harmony export */   bU: () => (/* binding */ BAGGAGE_HEADER_NAME)
/* harmony export */ });
/* unused harmony exports MAX_BAGGAGE_STRING_LENGTH, SENTRY_BAGGAGE_KEY_PREFIX, SENTRY_BAGGAGE_KEY_PREFIX_REGEX */
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7597);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2343);



const BAGGAGE_HEADER_NAME = 'baggage';

const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';

const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;

/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */
const MAX_BAGGAGE_STRING_LENGTH = 8192;

/**
 * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
 * from it.
 *
 * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
 * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
 */
function baggageHeaderToDynamicSamplingContext(
  // Very liberal definition of what any incoming header might look like
  baggageHeader,
) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(baggageHeader) && !Array.isArray(baggageHeader)) {
    return undefined;
  }

  // Intermediary object to store baggage key value pairs of incoming baggage headers on.
  // It is later used to read Sentry-DSC-values from.
  let baggageObject = {};

  if (Array.isArray(baggageHeader)) {
    // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
    baggageObject = baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      return {
        ...acc,
        ...currBaggageObject,
      };
    }, {});
  } else {
    // Return undefined if baggage header is an empty string (technically an empty baggage header is not spec conform but
    // this is how we choose to handle it)
    if (!baggageHeader) {
      return undefined;
    }

    baggageObject = baggageHeaderToObject(baggageHeader);
  }

  // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});

  // Only return a dynamic sampling context object if there are keys in it.
  // A keyless object means there were no sentry values on the header, which means that there is no DSC.
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext ;
  } else {
    return undefined;
  }
}

/**
 * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
 *
 * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
 * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
 * `undefined` the function will return `undefined`.
 * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
 * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
 */
function dynamicSamplingContextToSentryBaggageHeader(
  // this also takes undefined for convenience and bundle size in other places
  dynamicSamplingContext,
) {
  if (!dynamicSamplingContext) {
    return undefined;
  }

  // Prefix all DSC keys with "sentry-" and put them into a new object
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {},
  );

  return objectToBaggageHeader(sentryPrefixedDSC);
}

/**
 * Will parse a baggage header, which is a simple key-value map, into a flat object.
 *
 * @param baggageHeader The baggage header to parse.
 * @returns a flat object containing all the key-value pairs from `baggageHeader`.
 */
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader
    .split(',')
    .map(baggageEntry => baggageEntry.split('=').map(keyOrValue => decodeURIComponent(keyOrValue.trim())))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}

/**
 * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
 *
 * @param object The object to turn into a baggage header.
 * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
 * is not spec compliant.
 */
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    // An empty baggage header is not spec compliant: We return undefined.
    return undefined;
  }

  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        _logger_js__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .kg.warn(
          `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`,
        );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, '');
}


//# sourceMappingURL=baggage.js.map


/***/ }),

/***/ 8464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rt: () => (/* binding */ htmlTreeAsString),
/* harmony export */   qT: () => (/* binding */ getDomElement)
/* harmony export */ });
/* unused harmony export getLocationHref */
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7597);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1235);



// eslint-disable-next-line deprecation/deprecation
const WINDOW = (0,_worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .getGlobalObject */ .Rf)();

const DEFAULT_MAX_STRING_LENGTH = 80;

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(
  elem,
  options = {},
) {

  // try/catch both:
  // - accessing event.target (see getsentry/raven-js#838, #768)
  // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
  // - can throw an exception in some circumstances.
  try {
    let currentElem = elem ;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = ' > ';
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = (!Array.isArray(options) && options.maxStringLength) || DEFAULT_MAX_STRING_LENGTH;

    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      // bail out if
      // - nextStr is the 'html' element
      // - the length of the string that would be created exceeds maxStringLength
      //   (ignore this limit if we are on the first iteration)
      if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength)) {
        break;
      }

      out.push(nextStr);

      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }

    return out.reverse().join(separator);
  } catch (_oO) {
    return '<unknown>';
  }
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
  const elem = el

;

  const out = [];
  let className;
  let classes;
  let key;
  let attr;
  let i;

  if (!elem || !elem.tagName) {
    return '';
  }

  out.push(elem.tagName.toLowerCase());

  // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
  const keyAttrPairs =
    keyAttrs && keyAttrs.length
      ? keyAttrs.filter(keyAttr => elem.getAttribute(keyAttr)).map(keyAttr => [keyAttr, elem.getAttribute(keyAttr)])
      : null;

  if (keyAttrPairs && keyAttrPairs.length) {
    keyAttrPairs.forEach(keyAttrPair => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }

    // eslint-disable-next-line prefer-const
    className = elem.className;
    if (className && (0,_is_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(className)) {
      classes = className.split(/\s+/);
      for (i = 0; i < classes.length; i++) {
        out.push(`.${classes[i]}`);
      }
    }
  }
  const allowedAttrs = ['aria-label', 'type', 'name', 'title', 'alt'];
  for (i = 0; i < allowedAttrs.length; i++) {
    key = allowedAttrs[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push(`[${key}="${attr}"]`);
    }
  }
  return out.join('');
}

/**
 * A safe form of location.href
 */
function getLocationHref() {
  try {
    return WINDOW.document.location.href;
  } catch (oO) {
    return '';
  }
}

/**
 * Gets a DOM element by using document.querySelector.
 *
 * This wrapper will first check for the existance of the function before
 * actually calling it so that we don't have to take care of this check,
 * every time we want to access the DOM.
 *
 * Reason: DOM/querySelector is not available in all environments.
 *
 * We have to cast to any because utils can be consumed by a variety of environments,
 * and we don't want to break TS users. If you know what element will be selected by
 * `document.querySelector`, specify it as part of the generic call. For example,
 * `const element = getDomElement<Element>('selector');`
 *
 * @param selector the selector string passed on to document.querySelector
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDomElement(selector) {
  if (WINDOW.document && WINDOW.document.querySelector) {
    return WINDOW.document.querySelector(selector) ;
  }
  return null;
}


//# sourceMappingURL=browser.js.map


/***/ }),

/***/ 4307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ _optionalChain)
/* harmony export */ });
/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 * See https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The value of the expression
 */
function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i] ;
    const fn = ops[i + 1] ;
    i += 2;
    // by checking for loose equality to `null`, we catch both `null` and `undefined`
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      // really we're meaning to return `undefined` as an actual value here, but it saves bytes not to write it
      return;
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => (value ).call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }
  return value;
}

// Sucrase version
// function _optionalChain(ops) {
//   let lastAccessLHS = undefined;
//   let value = ops[0];
//   let i = 1;
//   while (i < ops.length) {
//     const op = ops[i];
//     const fn = ops[i + 1];
//     i += 2;
//     if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
//       return undefined;
//     }
//     if (op === 'access' || op === 'optionalAccess') {
//       lastAccessLHS = value;
//       value = fn(value);
//     } else if (op === 'call' || op === 'optionalCall') {
//       value = fn((...args) => value.call(lastAccessLHS, ...args));
//       lastAccessLHS = undefined;
//     }
//   }
//   return value;
// }


//# sourceMappingURL=_optionalChain.js.map


/***/ }),

/***/ 1688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xU: () => (/* binding */ SENTRY_XHR_DATA_KEY),
  oq: () => (/* binding */ addInstrumentationHandler)
});

// UNUSED EXPORTS: parseFetchArgs

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(7597);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(2343);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/object.js
var object = __webpack_require__(535);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/stacktrace.js + 1 modules
var stacktrace = __webpack_require__(6147);
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/worldwide.js
var worldwide = __webpack_require__(1235);
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/supports.js



// eslint-disable-next-line deprecation/deprecation
const WINDOW = (0,worldwide/* getGlobalObject */.Rf)();

/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
  try {
    new ErrorEvent('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
  try {
    // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
    // 1 argument required, but only 0 present.
    // @ts-ignore It really needs 1 argument, not 0.
    new DOMError('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
  try {
    new DOMException('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
  if (!('fetch' in WINDOW)) {
    return false;
  }

  try {
    new Headers();
    new Request('http://www.example.com');
    new Response();
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
  return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}

/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
  if (!supportsFetch()) {
    return false;
  }

  // Fast path to avoid DOM I/O
  // eslint-disable-next-line @typescript-eslint/unbound-method
  if (isNativeFetch(WINDOW.fetch)) {
    return true;
  }

  // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
  // so create a "pure" iframe to see if that has native fetch
  let result = false;
  const doc = WINDOW.document;
  // eslint-disable-next-line deprecation/deprecation
  if (doc && typeof (doc.createElement ) === 'function') {
    try {
      const sandbox = doc.createElement('iframe');
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        result = isNativeFetch(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
    }
  }

  return result;
}

/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
  return 'ReportingObserver' in WINDOW;
}

/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
  // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
  // (see https://caniuse.com/#feat=referrer-policy),
  // it doesn't. And it throws an exception instead of ignoring this parameter...
  // REF: https://github.com/getsentry/raven-js/issues/1233

  if (!supportsFetch()) {
    return false;
  }

  try {
    new Request('_', {
      referrerPolicy: 'origin' ,
    });
    return true;
  } catch (e) {
    return false;
  }
}


//# sourceMappingURL=supports.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/vendor/supportsHistory.js


// Based on https://github.com/angular/angular.js/pull/13945/files

// eslint-disable-next-line deprecation/deprecation
const supportsHistory_WINDOW = (0,worldwide/* getGlobalObject */.Rf)();

/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
  // NOTE: in Chrome App environment, touching history.pushState, *even inside
  //       a try/catch block*, will cause Chrome to output an error to console.error
  // borrowed from: https://github.com/angular/angular.js/pull/13945/files
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chrome = (supportsHistory_WINDOW ).chrome;
  const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  const hasHistoryApi = 'history' in supportsHistory_WINDOW && !!supportsHistory_WINDOW.history.pushState && !!supportsHistory_WINDOW.history.replaceState;

  return !isChromePackagedApp && hasHistoryApi;
}


//# sourceMappingURL=supportsHistory.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/instrument.js








// eslint-disable-next-line deprecation/deprecation
const instrument_WINDOW = (0,worldwide/* getGlobalObject */.Rf)();

const SENTRY_XHR_DATA_KEY = '__sentry_xhr_v2__';

/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */

const handlers = {};
const instrumented = {};

/** Instruments given API */
function instrument(type) {
  if (instrumented[type]) {
    return;
  }

  instrumented[type] = true;

  switch (type) {
    case 'console':
      instrumentConsole();
      break;
    case 'dom':
      instrumentDOM();
      break;
    case 'xhr':
      instrumentXHR();
      break;
    case 'fetch':
      instrumentFetch();
      break;
    case 'history':
      instrumentHistory();
      break;
    case 'error':
      instrumentError();
      break;
    case 'unhandledrejection':
      instrumentUnhandledRejection();
      break;
    default:
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger/* logger */.kg.warn('unknown instrumentation type:', type);
      return;
  }
}

/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(type, callback) {
  handlers[type] = handlers[type] || [];
  (handlers[type] ).push(callback);
  instrument(type);
}

/** JSDoc */
function triggerHandlers(type, data) {
  if (!type || !handlers[type]) {
    return;
  }

  for (const handler of handlers[type] || []) {
    try {
      handler(data);
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger/* logger */.kg.error(
          `Error while triggering instrumentation handler.\nType: ${type}\nName: ${(0,stacktrace/* getFunctionName */.$P)(handler)}\nError:`,
          e,
        );
    }
  }
}

/** JSDoc */
function instrumentConsole() {
  if (!('console' in instrument_WINDOW)) {
    return;
  }

  logger/* CONSOLE_LEVELS */.RU.forEach(function (level) {
    if (!(level in instrument_WINDOW.console)) {
      return;
    }

    (0,object/* fill */.hl)(instrument_WINDOW.console, level, function (originalConsoleMethod) {
      return function (...args) {
        triggerHandlers('console', { args, level });

        // this fails for some browsers. :(
        if (originalConsoleMethod) {
          originalConsoleMethod.apply(instrument_WINDOW.console, args);
        }
      };
    });
  });
}

/** JSDoc */
function instrumentFetch() {
  if (!supportsNativeFetch()) {
    return;
  }

  (0,object/* fill */.hl)(instrument_WINDOW, 'fetch', function (originalFetch) {
    return function (...args) {
      const { method, url } = parseFetchArgs(args);

      const handlerData = {
        args,
        fetchData: {
          method,
          url,
        },
        startTimestamp: Date.now(),
      };

      triggerHandlers('fetch', {
        ...handlerData,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return originalFetch.apply(instrument_WINDOW, args).then(
        (response) => {
          triggerHandlers('fetch', {
            ...handlerData,
            endTimestamp: Date.now(),
            response,
          });
          return response;
        },
        (error) => {
          triggerHandlers('fetch', {
            ...handlerData,
            endTimestamp: Date.now(),
            error,
          });
          // NOTE: If you are a Sentry user, and you are seeing this stack frame,
          //       it means the sentry.javascript SDK caught an error invoking your application code.
          //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
          throw error;
        },
      );
    };
  });
}

function hasProp(obj, prop) {
  return !!obj && typeof obj === 'object' && !!(obj )[prop];
}

function getUrlFromResource(resource) {
  if (typeof resource === 'string') {
    return resource;
  }

  if (!resource) {
    return '';
  }

  if (hasProp(resource, 'url')) {
    return resource.url;
  }

  if (resource.toString) {
    return resource.toString();
  }

  return '';
}

/**
 * Parses the fetch arguments to find the used Http method and the url of the request
 */
function parseFetchArgs(fetchArgs) {
  if (fetchArgs.length === 0) {
    return { method: 'GET', url: '' };
  }

  if (fetchArgs.length === 2) {
    const [url, options] = fetchArgs ;

    return {
      url: getUrlFromResource(url),
      method: hasProp(options, 'method') ? String(options.method).toUpperCase() : 'GET',
    };
  }

  const arg = fetchArgs[0];
  return {
    url: getUrlFromResource(arg ),
    method: hasProp(arg, 'method') ? String(arg.method).toUpperCase() : 'GET',
  };
}

/** JSDoc */
function instrumentXHR() {
  if (!('XMLHttpRequest' in instrument_WINDOW)) {
    return;
  }

  const xhrproto = XMLHttpRequest.prototype;

  (0,object/* fill */.hl)(xhrproto, 'open', function (originalOpen) {
    return function ( ...args) {
      const url = args[1];
      const xhrInfo = (this[SENTRY_XHR_DATA_KEY] = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        method: (0,is/* isString */.HD)(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1],
        request_headers: {},
      });

      // if Sentry key appears in URL, don't capture it as a request
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if ((0,is/* isString */.HD)(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
        this.__sentry_own_request__ = true;
      }

      const onreadystatechangeHandler = () => {
        // For whatever reason, this is not the same instance here as from the outer method
        const xhrInfo = this[SENTRY_XHR_DATA_KEY];

        if (!xhrInfo) {
          return;
        }

        if (this.readyState === 4) {
          try {
            // touching statusCode in some platforms throws
            // an exception
            xhrInfo.status_code = this.status;
          } catch (e) {
            /* do nothing */
          }

          triggerHandlers('xhr', {
            args: args ,
            endTimestamp: Date.now(),
            startTimestamp: Date.now(),
            xhr: this,
          } );
        }
      };

      if ('onreadystatechange' in this && typeof this.onreadystatechange === 'function') {
        (0,object/* fill */.hl)(this, 'onreadystatechange', function (original) {
          return function ( ...readyStateArgs) {
            onreadystatechangeHandler();
            return original.apply(this, readyStateArgs);
          };
        });
      } else {
        this.addEventListener('readystatechange', onreadystatechangeHandler);
      }

      // Intercepting `setRequestHeader` to access the request headers of XHR instance.
      // This will only work for user/library defined headers, not for the default/browser-assigned headers.
      // Request cookies are also unavailable for XHR, as `Cookie` header can't be defined by `setRequestHeader`.
      (0,object/* fill */.hl)(this, 'setRequestHeader', function (original) {
        return function ( ...setRequestHeaderArgs) {
          const [header, value] = setRequestHeaderArgs ;

          const xhrInfo = this[SENTRY_XHR_DATA_KEY];

          if (xhrInfo) {
            xhrInfo.request_headers[header.toLowerCase()] = value;
          }

          return original.apply(this, setRequestHeaderArgs);
        };
      });

      return originalOpen.apply(this, args);
    };
  });

  (0,object/* fill */.hl)(xhrproto, 'send', function (originalSend) {
    return function ( ...args) {
      const sentryXhrData = this[SENTRY_XHR_DATA_KEY];
      if (sentryXhrData && args[0] !== undefined) {
        sentryXhrData.body = args[0];
      }

      triggerHandlers('xhr', {
        args,
        startTimestamp: Date.now(),
        xhr: this,
      });

      return originalSend.apply(this, args);
    };
  });
}

let lastHref;

/** JSDoc */
function instrumentHistory() {
  if (!supportsHistory()) {
    return;
  }

  const oldOnPopState = instrument_WINDOW.onpopstate;
  instrument_WINDOW.onpopstate = function ( ...args) {
    const to = instrument_WINDOW.location.href;
    // keep track of the current URL state, as we always receive only the updated state
    const from = lastHref;
    lastHref = to;
    triggerHandlers('history', {
      from,
      to,
    });
    if (oldOnPopState) {
      // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
      // https://github.com/getsentry/sentry-javascript/issues/3344
      // https://github.com/bugsnag/bugsnag-js/issues/469
      try {
        return oldOnPopState.apply(this, args);
      } catch (_oO) {
        // no-empty
      }
    }
  };

  /** @hidden */
  function historyReplacementFunction(originalHistoryFunction) {
    return function ( ...args) {
      const url = args.length > 2 ? args[2] : undefined;
      if (url) {
        // coerce to string (this is what pushState does)
        const from = lastHref;
        const to = String(url);
        // keep track of the current URL state, as we always receive only the updated state
        lastHref = to;
        triggerHandlers('history', {
          from,
          to,
        });
      }
      return originalHistoryFunction.apply(this, args);
    };
  }

  (0,object/* fill */.hl)(instrument_WINDOW.history, 'pushState', historyReplacementFunction);
  (0,object/* fill */.hl)(instrument_WINDOW.history, 'replaceState', historyReplacementFunction);
}

const debounceDuration = 1000;
let debounceTimerID;
let lastCapturedEvent;

/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
  // If there was no previous event, it should always be swapped for the new one.
  if (!previous) {
    return true;
  }

  // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
  if (previous.type !== current.type) {
    return true;
  }

  try {
    // If both events have the same type, it's still possible that actions were performed on different targets.
    // e.g. 2 clicks on different buttons.
    if (previous.target !== current.target) {
      return true;
    }
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
  }

  // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
  // to which an event listener was attached), we treat them as the same action, as we want to capture
  // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
  return false;
}

/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
  // We are only interested in filtering `keypress` events for now.
  if (event.type !== 'keypress') {
    return false;
  }

  try {
    const target = event.target ;

    if (!target || !target.tagName) {
      return true;
    }

    // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
    // e.g.tabbing through elements, hotkeys, etc.
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return false;
    }
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
  }

  return true;
}

/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener = false) {
  return (event) => {
    // It's possible this handler might trigger multiple times for the same
    // event (e.g. event propagation through node ancestors).
    // Ignore if we've already captured that event.
    if (!event || lastCapturedEvent === event) {
      return;
    }

    // We always want to skip _some_ events.
    if (shouldSkipDOMEvent(event)) {
      return;
    }

    const name = event.type === 'keypress' ? 'input' : event.type;

    // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
    if (debounceTimerID === undefined) {
      handler({
        event: event,
        name,
        global: globalListener,
      });
      lastCapturedEvent = event;
    }
    // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
    // If that's the case, emit the previous event and store locally the newly-captured DOM event.
    else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
      handler({
        event: event,
        name,
        global: globalListener,
      });
      lastCapturedEvent = event;
    }

    // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
    clearTimeout(debounceTimerID);
    debounceTimerID = instrument_WINDOW.setTimeout(() => {
      debounceTimerID = undefined;
    }, debounceDuration);
  };
}

/** JSDoc */
function instrumentDOM() {
  if (!('document' in instrument_WINDOW)) {
    return;
  }

  // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
  // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
  // we instrument `addEventListener` so that we don't end up attaching this handler twice.
  const triggerDOMHandler = triggerHandlers.bind(null, 'dom');
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  instrument_WINDOW.document.addEventListener('click', globalDOMEventHandler, false);
  instrument_WINDOW.document.addEventListener('keypress', globalDOMEventHandler, false);

  // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
  // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
  // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
  // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
  // guaranteed to fire at least once.)
  ['EventTarget', 'Node'].forEach((target) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const proto = (instrument_WINDOW )[target] && (instrument_WINDOW )[target].prototype;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return;
    }

    (0,object/* fill */.hl)(proto, 'addEventListener', function (originalAddEventListener) {
      return function (

        type,
        listener,
        options,
      ) {
        if (type === 'click' || type == 'keypress') {
          try {
            const el = this ;
            const handlers = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
            const handlerForType = (handlers[type] = handlers[type] || { refCount: 0 });

            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              originalAddEventListener.call(this, type, handler, options);
            }

            handlerForType.refCount++;
          } catch (e) {
            // Accessing dom properties is always fragile.
            // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
          }
        }

        return originalAddEventListener.call(this, type, listener, options);
      };
    });

    (0,object/* fill */.hl)(
      proto,
      'removeEventListener',
      function (originalRemoveEventListener) {
        return function (

          type,
          listener,
          options,
        ) {
          if (type === 'click' || type == 'keypress') {
            try {
              const el = this ;
              const handlers = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers[type];

              if (handlerForType) {
                handlerForType.refCount--;
                // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                if (handlerForType.refCount <= 0) {
                  originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                  handlerForType.handler = undefined;
                  delete handlers[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                }

                // If there are no longer any custom handlers of any type on this element, cleanup everything.
                if (Object.keys(handlers).length === 0) {
                  delete el.__sentry_instrumentation_handlers__;
                }
              }
            } catch (e) {
              // Accessing dom properties is always fragile.
              // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
            }
          }

          return originalRemoveEventListener.call(this, type, listener, options);
        };
      },
    );
  });
}

let _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
  _oldOnErrorHandler = instrument_WINDOW.onerror;

  instrument_WINDOW.onerror = function (msg, url, line, column, error) {
    triggerHandlers('error', {
      column,
      error,
      line,
      msg,
      url,
    });

    if (_oldOnErrorHandler && !_oldOnErrorHandler.__SENTRY_LOADER__) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnErrorHandler.apply(this, arguments);
    }

    return false;
  };

  instrument_WINDOW.onerror.__SENTRY_INSTRUMENTED__ = true;
}

let _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = instrument_WINDOW.onunhandledrejection;

  instrument_WINDOW.onunhandledrejection = function (e) {
    triggerHandlers('unhandledrejection', e);

    if (_oldOnUnhandledRejectionHandler && !_oldOnUnhandledRejectionHandler.__SENTRY_LOADER__) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }

    return true;
  };

  instrument_WINDOW.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}


//# sourceMappingURL=instrument.js.map


/***/ }),

/***/ 7597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cy: () => (/* binding */ isSyntheticEvent),
/* harmony export */   HD: () => (/* binding */ isString),
/* harmony export */   J8: () => (/* binding */ isThenable),
/* harmony export */   Kj: () => (/* binding */ isRegExp),
/* harmony export */   PO: () => (/* binding */ isPlainObject),
/* harmony export */   V9: () => (/* binding */ isInstanceOf),
/* harmony export */   VZ: () => (/* binding */ isError),
/* harmony export */   cO: () => (/* binding */ isEvent),
/* harmony export */   i2: () => (/* binding */ isNaN),
/* harmony export */   kK: () => (/* binding */ isElement),
/* harmony export */   pt: () => (/* binding */ isPrimitive)
/* harmony export */ });
/* unused harmony exports isDOMError, isDOMException, isErrorEvent */
// eslint-disable-next-line @typescript-eslint/unbound-method
const objectToString = Object.prototype.toString;

/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
  switch (objectToString.call(wat)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
/**
 * Checks whether given value is an instance of the given built-in class.
 *
 * @param wat The value to be checked
 * @param className
 * @returns A boolean representing the result.
 */
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}

/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
  return isBuiltin(wat, 'ErrorEvent');
}

/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
  return isBuiltin(wat, 'DOMError');
}

/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
  return isBuiltin(wat, 'DOMException');
}

/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
  return isBuiltin(wat, 'String');
}

/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
  return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}

/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
  return isBuiltin(wat, 'Object');
}

/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
  return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}

/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
  return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}

/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
  return isBuiltin(wat, 'RegExp');
}

/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Boolean(wat && wat.then && typeof wat.then === 'function');
}

/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}

/**
 * Checks whether given value is NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isNaN(wat) {
  return typeof wat === 'number' && wat !== wat;
}

/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}


//# sourceMappingURL=is.js.map


/***/ }),

/***/ 2343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cf: () => (/* binding */ consoleSandbox),
/* harmony export */   RU: () => (/* binding */ CONSOLE_LEVELS),
/* harmony export */   kg: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1235);


/** Prefix for logging strings */
const PREFIX = 'Sentry Logger ';

const CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'] ;

/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
  if (!("console" in _worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .GLOBAL_OBJ */ .n2)) {
    return callback();
  }

  const originalConsole = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .GLOBAL_OBJ */ .n2.console ;
  const wrappedLevels = {};

  // Restore all wrapped console methods
  CONSOLE_LEVELS.forEach(level => {
    // TODO(v7): Remove this check as it's only needed for Node 6
    const originalWrappedFunc =
      originalConsole[level] && (originalConsole[level] ).__sentry_original__;
    if (level in originalConsole && originalWrappedFunc) {
      wrappedLevels[level] = originalConsole[level] ;
      originalConsole[level] = originalWrappedFunc ;
    }
  });

  try {
    return callback();
  } finally {
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(level => {
      originalConsole[level] = wrappedLevels[level ];
    });
  }
}

function makeLogger() {
  let enabled = false;
  const logger = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    },
  };

  if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
    CONSOLE_LEVELS.forEach(name => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      logger[name] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            _worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .GLOBAL_OBJ */ .n2.console[name](`${PREFIX}[${name}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach(name => {
      logger[name] = () => undefined;
    });
  }

  return logger ;
}

// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
let logger;
if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
  logger = (0,_worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .getGlobalSingleton */ .YO)('logger', makeLogger);
} else {
  logger = makeLogger();
}


//# sourceMappingURL=logger.js.map


/***/ }),

/***/ 2844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DM: () => (/* binding */ uuid4),
/* harmony export */   Db: () => (/* binding */ addExceptionTypeValue),
/* harmony export */   EG: () => (/* binding */ addExceptionMechanism),
/* harmony export */   J4: () => (/* binding */ parseSemver),
/* harmony export */   YO: () => (/* binding */ checkOrSetAlreadyCaught),
/* harmony export */   go: () => (/* binding */ addContextToFrame),
/* harmony export */   jH: () => (/* binding */ getEventDescription),
/* harmony export */   lE: () => (/* binding */ arrayify)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(535);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7321);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1235);




/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
  const gbl = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .GLOBAL_OBJ */ .n2 ;
  const crypto = gbl.crypto || gbl.msCrypto;

  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, '');
  }

  const getRandomByte =
    crypto && crypto.getRandomValues ? () => crypto.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;

  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
  return (([1e7] ) + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line no-bitwise
    ((c ) ^ ((getRandomByte() & 15) >> ((c ) / 4))).toString(16),
  );
}

function getFirstException(event) {
  return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}

/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }

  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || '<unknown>';
  }
  return eventId || '<unknown>';
}

/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
  const exception = (event.exception = event.exception || {});
  const values = (exception.values = exception.values || []);
  const firstException = (values[0] = values[0] || {});
  if (!firstException.value) {
    firstException.value = value || '';
  }
  if (!firstException.type) {
    firstException.type = type || 'Error';
  }
}

/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }

  const defaultMechanism = { type: 'generic', handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };

  if (newMechanism && 'data' in newMechanism) {
    const mergedData = { ...(currentMechanism && currentMechanism.data), ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}

// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const SEMVER_REGEXP =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * Represents Semantic Versioning object
 */

/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
  const match = input.match(SEMVER_REGEXP) || [];
  const major = parseInt(match[1], 10);
  const minor = parseInt(match[2], 10);
  const patch = parseInt(match[3], 10);
  return {
    buildmetadata: match[5],
    major: isNaN(major) ? undefined : major,
    minor: isNaN(minor) ? undefined : minor,
    patch: isNaN(patch) ? undefined : patch,
    prerelease: match[4],
  };
}

/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext = 5) {
  // When there is no line number in the frame, attaching context is nonsensical and will even break grouping
  if (frame.lineno === undefined) {
    return;
  }

  const maxLines = lines.length;
  const sourceLine = Math.max(Math.min(maxLines - 1, frame.lineno - 1), 0);

  frame.pre_context = lines
    .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__/* .snipLine */ .JM)(line, 0));

  frame.context_line = (0,_string_js__WEBPACK_IMPORTED_MODULE_1__/* .snipLine */ .JM)(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);

  frame.post_context = lines
    .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__/* .snipLine */ .JM)(line, 0));
}

/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (exception && (exception ).__sentry_captured__) {
    return true;
  }

  try {
    // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
    // `ExtraErrorData` integration
    (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* .addNonEnumerableProperty */ .xp)(exception , '__sentry_captured__', true);
  } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
  }

  return false;
}

/**
 * Checks whether the given input is already an array, and if it isn't, wraps it in one.
 *
 * @param maybeArray Input to turn into an array, if necessary
 * @returns The input, if already an array, or an array with the input as the only element, if not
 */
function arrayify(maybeArray) {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}


//# sourceMappingURL=misc.js.map


/***/ }),

/***/ 2176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l$: () => (/* binding */ dynamicRequire),
  KV: () => (/* binding */ isNodeEnv),
  $y: () => (/* binding */ loadModule)
});

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/env.js
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These flags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */

/**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
}

/**
 * Get source of SDK.
 */
function getSDKSource() {
  // @ts-ignore "npm" is injected by rollup during build process
  return "npm";
}


//# sourceMappingURL=env.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/node.js
/* module decorator */ module = __webpack_require__.hmd(module);


/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
  // explicitly check for browser bundles as those can be optimized statically
  // by terser/rollup.
  return (
    !isBrowserBundle() &&
    Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'
  );
}

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return mod.require(request);
}

/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
  let mod;

  try {
    mod = dynamicRequire(module, moduleName);
  } catch (e) {
    // no-empty
  }

  try {
    const { cwd } = dynamicRequire(module, 'process');
    mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`) ;
  } catch (e) {
    // no-empty
  }

  return mod;
}


//# sourceMappingURL=node.js.map


/***/ }),

/***/ 535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HK: () => (/* binding */ getOriginalFunction),
/* harmony export */   Jr: () => (/* binding */ dropUndefinedKeys),
/* harmony export */   Sh: () => (/* binding */ convertToPlainObject),
/* harmony export */   _j: () => (/* binding */ urlEncode),
/* harmony export */   hl: () => (/* binding */ fill),
/* harmony export */   xp: () => (/* binding */ addNonEnumerableProperty),
/* harmony export */   zf: () => (/* binding */ extractExceptionKeysForMessage)
/* harmony export */ });
/* unused harmony exports markFunctionWrapped, objectify */
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8464);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7597);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7321);




/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }

  const original = source[name] ;
  const wrapped = replacementFactory(original) ;

  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  if (typeof wrapped === 'function') {
    try {
      markFunctionWrapped(wrapped, original);
    } catch (_Oo) {
      // This can throw if multiple fill happens on a global object like XMLHttpRequest
      // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
  }

  source[name] = wrapped;
}

/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */
function addNonEnumerableProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
    value: value,
    writable: true,
    configurable: true,
  });
}

/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
function markFunctionWrapped(wrapped, original) {
  const proto = original.prototype || {};
  wrapped.prototype = original.prototype = proto;
  addNonEnumerableProperty(wrapped, '__sentry_original__', original);
}

/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
function getOriginalFunction(func) {
  return func.__sentry_original__;
}

/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
  return Object.keys(object)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
    .join('&');
}

/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argurment itself, when value is neither an Event nor
 *  an Error.
 */
function convertToPlainObject(value)

 {
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isError */ .VZ)(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value),
    };
  } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isEvent */ .cO)(value)) {
    const newObj

 = {
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget),
      ...getOwnProperties(value),
    };

    if (typeof CustomEvent !== 'undefined' && (0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isInstanceOf */ .V9)(value, CustomEvent)) {
      newObj.detail = value.detail;
    }

    return newObj;
  } else {
    return value;
  }
}

/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
  try {
    return (0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isElement */ .kK)(target) ? (0,_browser_js__WEBPACK_IMPORTED_MODULE_1__/* .htmlTreeAsString */ .Rt)(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return '<unknown>';
  }
}

/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
  if (typeof obj === 'object' && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = (obj )[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}

/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();

  if (!keys.length) {
    return '[object has no keys]';
  }

  if (keys[0].length >= maxLength) {
    return (0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .truncate */ .$G)(keys[0], maxLength);
  }

  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(', ');
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return (0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .truncate */ .$G)(serialized, maxLength);
  }

  return '';
}

/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 */
function dropUndefinedKeys(inputValue) {
  // This map keeps track of what already visited nodes map to.
  // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
  // references as the input object.
  const memoizationMap = new Map();

  // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
  return _dropUndefinedKeys(inputValue, memoizationMap);
}

function _dropUndefinedKeys(inputValue, memoizationMap) {
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .PO)(inputValue)) {
    // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = {};
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    for (const key of Object.keys(inputValue)) {
      if (typeof inputValue[key] !== 'undefined') {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }

    return returnValue ;
  }

  if (Array.isArray(inputValue)) {
    // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = [];
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    inputValue.forEach((item) => {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });

    return returnValue ;
  }

  return inputValue;
}

/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
  let objectified;
  switch (true) {
    case wat === undefined || wat === null:
      objectified = new String(wat);
      break;

    // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
    // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
    // an object in order to wrap it.
    case typeof wat === 'symbol' || typeof wat === 'bigint':
      objectified = Object(wat);
      break;

    // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
    case isPrimitive(wat):
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      objectified = new (wat ).constructor(wat);
      break;

    // by process of elimination, at this point we know that `wat` must already be an object
    default:
      objectified = wat;
      break;
  }
  return objectified;
}


//# sourceMappingURL=object.js.map


/***/ }),

/***/ 442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dB: () => (/* binding */ addRequestDataToTransaction),
/* harmony export */   oA: () => (/* binding */ extractPathForTransaction)
/* harmony export */ });
/* unused harmony exports addRequestDataToEvent, extractRequestData */
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6956);




const DEFAULT_INCLUDES = {
  ip: false,
  request: true,
  transaction: true,
  user: true,
};
const DEFAULT_REQUEST_INCLUDES = (/* unused pure expression or super */ null && (['cookies', 'data', 'headers', 'method', 'query_string', 'url']));
const DEFAULT_USER_INCLUDES = (/* unused pure expression or super */ null && (['id', 'username', 'email']));

/**
 * Sets parameterized route as transaction name e.g.: `GET /users/:id`
 * Also adds more context data on the transaction from the request
 */
function addRequestDataToTransaction(
  transaction,
  req,
  deps,
) {
  if (!transaction) return;
  if (!transaction.metadata.source || transaction.metadata.source === 'url') {
    // Attempt to grab a parameterized route off of the request
    transaction.setName(...extractPathForTransaction(req, { path: true, method: true }));
  }
  transaction.setData('url', req.originalUrl || req.url);
  if (req.baseUrl) {
    transaction.setData('baseUrl', req.baseUrl);
  }
  transaction.setData('query', extractQueryParams(req, deps));
}

/**
 * Extracts a complete and parameterized path from the request object and uses it to construct transaction name.
 * If the parameterized transaction name cannot be extracted, we fall back to the raw URL.
 *
 * Additionally, this function determines and returns the transaction name source
 *
 * eg. GET /mountpoint/user/:id
 *
 * @param req A request object
 * @param options What to include in the transaction name (method, path, or a custom route name to be
 *                used instead of the request's route)
 *
 * @returns A tuple of the fully constructed transaction name [0] and its source [1] (can be either 'route' or 'url')
 */
function extractPathForTransaction(
  req,
  options = {},
) {
  const method = req.method && req.method.toUpperCase();

  let path = '';
  let source = 'url';

  // Check to see if there's a parameterized route we can use (as there is in Express)
  if (options.customRoute || req.route) {
    path = options.customRoute || `${req.baseUrl || ''}${req.route && req.route.path}`;
    source = 'route';
  }

  // Otherwise, just take the original URL
  else if (req.originalUrl || req.url) {
    path = (0,_url_js__WEBPACK_IMPORTED_MODULE_0__/* .stripUrlQueryAndFragment */ .rt)(req.originalUrl || req.url || '');
  }

  let name = '';
  if (options.method && method) {
    name += method;
  }
  if (options.method && options.path) {
    name += ' ';
  }
  if (options.path && path) {
    name += path;
  }

  return [name, source];
}

/** JSDoc */
function extractTransaction(req, type) {
  switch (type) {
    case 'path': {
      return extractPathForTransaction(req, { path: true })[0];
    }
    case 'handler': {
      return (req.route && req.route.stack && req.route.stack[0] && req.route.stack[0].name) || '<anonymous>';
    }
    case 'methodPath':
    default: {
      return extractPathForTransaction(req, { path: true, method: true })[0];
    }
  }
}

/** JSDoc */
function extractUserData(
  user

,
  keys,
) {
  const extractedUser = {};
  const attributes = Array.isArray(keys) ? keys : DEFAULT_USER_INCLUDES;

  attributes.forEach(key => {
    if (user && key in user) {
      extractedUser[key] = user[key];
    }
  });

  return extractedUser;
}

/**
 * Normalize data from the request object, accounting for framework differences.
 *
 * @param req The request object from which to extract data
 * @param options.include An optional array of keys to include in the normalized data. Defaults to
 * DEFAULT_REQUEST_INCLUDES if not provided.
 * @param options.deps Injected, platform-specific dependencies
 * @returns An object containing normalized request data
 */
function extractRequestData(
  req,
  options

,
) {
  const { include = DEFAULT_REQUEST_INCLUDES, deps } = options || {};
  const requestData = {};

  // headers:
  //   node, express, koa, nextjs: req.headers
  const headers = (req.headers || {})

;
  // method:
  //   node, express, koa, nextjs: req.method
  const method = req.method;
  // host:
  //   express: req.hostname in > 4 and req.host in < 4
  //   koa: req.host
  //   node, nextjs: req.headers.host
  const host = req.hostname || req.host || headers.host || '<no host>';
  // protocol:
  //   node, nextjs: <n/a>
  //   express, koa: req.protocol
  const protocol = req.protocol === 'https' || (req.socket && req.socket.encrypted) ? 'https' : 'http';
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  const originalUrl = req.originalUrl || req.url || '';
  // absolute url
  const absoluteUrl = `${protocol}://${host}${originalUrl}`;
  include.forEach(key => {
    switch (key) {
      case 'headers': {
        requestData.headers = headers;
        break;
      }
      case 'method': {
        requestData.method = method;
        break;
      }
      case 'url': {
        requestData.url = absoluteUrl;
        break;
      }
      case 'cookies': {
        // cookies:
        //   node, express, koa: req.headers.cookie
        //   vercel, sails.js, express (w/ cookie middleware), nextjs: req.cookies
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        requestData.cookies =
          // TODO (v8 / #5257): We're only sending the empty object for backwards compatibility, so the last bit can
          // come off in v8
          req.cookies || (headers.cookie && deps && deps.cookie && deps.cookie.parse(headers.cookie)) || {};
        break;
      }
      case 'query_string': {
        // query string:
        //   node: req.url (raw)
        //   express, koa, nextjs: req.query
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        requestData.query_string = extractQueryParams(req, deps);
        break;
      }
      case 'data': {
        if (method === 'GET' || method === 'HEAD') {
          break;
        }
        // body data:
        //   express, koa, nextjs: req.body
        //
        //   when using node by itself, you have to read the incoming stream(see
        //   https://nodejs.dev/learn/get-http-request-body-data-using-nodejs); if a user is doing that, we can't know
        //   where they're going to store the final result, so they'll have to capture this data themselves
        if (req.body !== undefined) {
          requestData.data = isString(req.body) ? req.body : JSON.stringify(normalize(req.body));
        }
        break;
      }
      default: {
        if ({}.hasOwnProperty.call(req, key)) {
          requestData[key] = (req )[key];
        }
      }
    }
  });

  return requestData;
}

/**
 * Options deciding what parts of the request to use when enhancing an event
 */

/**
 * Add data from the given request to the given event
 *
 * @param event The event to which the request data will be added
 * @param req Request object
 * @param options.include Flags to control what data is included
 * @param options.deps Injected platform-specific dependencies
 * @hidden
 */
function addRequestDataToEvent(
  event,
  req,
  options,
) {
  const include = {
    ...DEFAULT_INCLUDES,
    ...(options && options.include),
  };

  if (include.request) {
    const extractedRequestData = Array.isArray(include.request)
      ? extractRequestData(req, { include: include.request, deps: options && options.deps })
      : extractRequestData(req, { deps: options && options.deps });

    event.request = {
      ...event.request,
      ...extractedRequestData,
    };
  }

  if (include.user) {
    const extractedUser = req.user && isPlainObject(req.user) ? extractUserData(req.user, include.user) : {};

    if (Object.keys(extractedUser).length) {
      event.user = {
        ...event.user,
        ...extractedUser,
      };
    }
  }

  // client ip:
  //   node, nextjs: req.socket.remoteAddress
  //   express, koa: req.ip
  if (include.ip) {
    const ip = req.ip || (req.socket && req.socket.remoteAddress);
    if (ip) {
      event.user = {
        ...event.user,
        ip_address: ip,
      };
    }
  }

  if (include.transaction && !event.transaction) {
    // TODO do we even need this anymore?
    // TODO make this work for nextjs
    event.transaction = extractTransaction(req, include.transaction);
  }

  return event;
}

function extractQueryParams(
  req,
  deps,
) {
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  let originalUrl = req.originalUrl || req.url || '';

  if (!originalUrl) {
    return;
  }

  // The `URL` constructor can't handle internal URLs of the form `/some/path/here`, so stick a dummy protocol and
  // hostname on the beginning. Since the point here is just to grab the query string, it doesn't matter what we use.
  if (originalUrl.startsWith('/')) {
    originalUrl = `http://dogs.are.great${originalUrl}`;
  }

  return (
    req.query ||
    (typeof URL !== undefined && new URL(originalUrl).search.replace('?', '')) ||
    // In Node 8, `URL` isn't in the global scope, so we have to use the built-in module from Node
    (deps && deps.url && deps.url.parse(originalUrl).query) ||
    undefined
  );
}


//# sourceMappingURL=requestdata.js.map


/***/ }),

/***/ 6147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pE: () => (/* binding */ createStackParser),
  $P: () => (/* binding */ getFunctionName),
  Ep: () => (/* binding */ nodeStackLineParser),
  Sq: () => (/* binding */ stackParserFromStackParserOptions)
});

// UNUSED EXPORTS: stripSentryFramesAndReverse

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/node-stack-trace.js
/** Node Stack line parser */
// eslint-disable-next-line complexity
function node(getModule) {
  const FILENAME_MATCH = /^\s*[-]{4,}$/;
  const FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;

  // eslint-disable-next-line complexity
  return (line) => {
    const lineMatch = line.match(FULL_MATCH);

    if (lineMatch) {
      let object;
      let method;
      let functionName;
      let typeName;
      let methodName;

      if (lineMatch[1]) {
        functionName = lineMatch[1];

        let methodStart = functionName.lastIndexOf('.');
        if (functionName[methodStart - 1] === '.') {
          methodStart--;
        }

        if (methodStart > 0) {
          object = functionName.slice(0, methodStart);
          method = functionName.slice(methodStart + 1);
          const objectEnd = object.indexOf('.Module');
          if (objectEnd > 0) {
            functionName = functionName.slice(objectEnd + 1);
            object = object.slice(0, objectEnd);
          }
        }
        typeName = undefined;
      }

      if (method) {
        typeName = object;
        methodName = method;
      }

      if (method === '<anonymous>') {
        methodName = undefined;
        functionName = undefined;
      }

      if (functionName === undefined) {
        methodName = methodName || '<anonymous>';
        functionName = typeName ? `${typeName}.${methodName}` : methodName;
      }

      let filename = lineMatch[2] && lineMatch[2].startsWith('file://') ? lineMatch[2].slice(7) : lineMatch[2];
      const isNative = lineMatch[5] === 'native';

      if (!filename && lineMatch[5] && !isNative) {
        filename = lineMatch[5];
      }

      const isInternal =
        isNative ||
        (filename &&
          // It's not internal if it's an absolute linux path
          !filename.startsWith('/') &&
          // It's not internal if it's an absolute windows path
          !filename.includes(':\\') &&
          // It's not internal if the path is starting with a dot
          !filename.startsWith('.') &&
          // It's not internal if the frame has a protocol. In node, this is usually the case if the file got pre-processed with a bundler like webpack
          !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)); // Schema from: https://stackoverflow.com/a/3641782

      // in_app is all that's not an internal Node function or a module within node_modules
      // note that isNative appears to return true even for node core libraries
      // see https://github.com/getsentry/raven-node/issues/176

      const in_app = !isInternal && filename !== undefined && !filename.includes('node_modules/');

      return {
        filename,
        module: getModule ? getModule(filename) : undefined,
        function: functionName,
        lineno: parseInt(lineMatch[3], 10) || undefined,
        colno: parseInt(lineMatch[4], 10) || undefined,
        in_app,
      };
    }

    if (line.match(FILENAME_MATCH)) {
      return {
        filename: line,
      };
    }

    return undefined;
  };
}


//# sourceMappingURL=node-stack-trace.js.map

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/stacktrace.js


const STACKTRACE_FRAME_LIMIT = 50;
// Used to sanitize webpack (error: *) wrapped stack errors
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;

/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map(p => p[1]);

  return (stack, skipFirst = 0) => {
    const frames = [];
    const lines = stack.split('\n');

    for (let i = skipFirst; i < lines.length; i++) {
      const line = lines[i];
      // Ignore lines over 1kb as they are unlikely to be stack frames.
      // Many of the regular expressions use backtracking which results in run time that increases exponentially with
      // input size. Huge strings can result in hangs/Denial of Service:
      // https://github.com/getsentry/sentry-javascript/issues/2286
      if (line.length > 1024) {
        continue;
      }

      // https://github.com/getsentry/sentry-javascript/issues/5459
      // Remove webpack (error: *) wrappers
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, '$1') : line;

      // https://github.com/getsentry/sentry-javascript/issues/7813
      // Skip Error: lines
      if (cleanedLine.match(/\S*Error: /)) {
        continue;
      }

      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);

        if (frame) {
          frames.push(frame);
          break;
        }
      }

      if (frames.length >= STACKTRACE_FRAME_LIMIT) {
        break;
      }
    }

    return stripSentryFramesAndReverse(frames);
  };
}

/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}

/**
 * Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
 * Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
 * function that caused the crash is the last frame in the array.
 * @hidden
 */
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }

  const localStack = Array.from(stack);

  // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
  if (/sentryWrapped/.test(localStack[localStack.length - 1].function || '')) {
    localStack.pop();
  }

  // Reversing in the middle of the procedure allows us to just pop the values off the stack
  localStack.reverse();

  // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
  if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || '')) {
    localStack.pop();

    // When using synthetic events, we will have a 2 levels deep stack, as `new Error('Sentry syntheticException')`
    // is produced within the hub itself, making it:
    //
    //   Sentry.captureException()
    //   getCurrentHub().captureException()
    //
    // instead of just the top `Sentry` call itself.
    // This forces us to possibly strip an additional frame in the exact same was as above.
    if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || '')) {
      localStack.pop();
    }
  }

  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map(frame => ({
    ...frame,
    filename: frame.filename || localStack[localStack.length - 1].filename,
    function: frame.function || '?',
  }));
}

const defaultFunctionName = '<anonymous>';

/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== 'function') {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    return defaultFunctionName;
  }
}

/**
 * Node.js stack line parser
 *
 * This is in @sentry/utils so it can be used from the Electron SDK in the browser for when `nodeIntegration == true`.
 * This allows it to be used without referencing or importing any node specific code which causes bundlers to complain
 */
function nodeStackLineParser(getModule) {
  return [90, node(getModule)];
}


//# sourceMappingURL=stacktrace.js.map


/***/ }),

/***/ 7321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $G: () => (/* binding */ truncate),
/* harmony export */   JM: () => (/* binding */ snipLine),
/* harmony export */   U0: () => (/* binding */ stringMatchesSomePattern)
/* harmony export */ });
/* unused harmony exports isMatchingPattern, safeJoin */
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7597);


/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max = 0) {
  if (typeof str !== 'string' || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}

/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150) {
    return newLine;
  }
  if (colno > lineLength) {
    // eslint-disable-next-line no-param-reassign
    colno = lineLength;
  }

  let start = Math.max(colno - 60, 0);
  if (start < 5) {
    start = 0;
  }

  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5) {
    end = lineLength;
  }
  if (end === lineLength) {
    start = Math.max(end - 140, 0);
  }

  newLine = newLine.slice(start, end);
  if (start > 0) {
    newLine = `'{snip} ${newLine}`;
  }
  if (end < lineLength) {
    newLine += ' {snip}';
  }

  return newLine;
}

/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return '';
  }

  const output = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      output.push(String(value));
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
}

/**
 * Checks if the given value matches a regex or string
 *
 * @param value The string to test
 * @param pattern Either a regex or a string against which `value` will be matched
 * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
 * `pattern` if it contains `pattern`. Only applies to string-type patterns.
 */
function isMatchingPattern(
  value,
  pattern,
  requireExactStringMatch = false,
) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(value)) {
    return false;
  }

  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isRegExp */ .Kj)(pattern)) {
    return pattern.test(value);
  }
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }

  return false;
}

/**
 * Test the given string against an array of strings and regexes. By default, string matching is done on a
 * substring-inclusion basis rather than a strict equality basis
 *
 * @param testString The string to test
 * @param patterns The patterns against which to test the string
 * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
 * count. If false, `testString` will match a string pattern if it contains that pattern.
 * @returns
 */
function stringMatchesSomePattern(
  testString,
  patterns = [],
  requireExactStringMatch = false,
) {
  return patterns.some(pattern => isMatchingPattern(testString, pattern, requireExactStringMatch));
}


//# sourceMappingURL=string.js.map


/***/ }),

/***/ 6893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $2: () => (/* binding */ rejectedSyncPromise),
/* harmony export */   WD: () => (/* binding */ resolvedSyncPromise),
/* harmony export */   cW: () => (/* binding */ SyncPromise)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7597);


/* eslint-disable @typescript-eslint/explicit-function-return-type */

/** SyncPromise internal states */
var States; (function (States) {
  /** Pending */
  const PENDING = 0; States[States["PENDING"] = PENDING] = "PENDING";
  /** Resolved / OK */
  const RESOLVED = 1; States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
  /** Rejected / Error */
  const REJECTED = 2; States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));

// Overloads so we can call resolvedSyncPromise without arguments and generic argument

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
  return new SyncPromise(resolve => {
    resolve(value);
  });
}

/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}

/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
class SyncPromise {

   constructor(
    executor,
  ) {SyncPromise.prototype.__init.call(this);SyncPromise.prototype.__init2.call(this);SyncPromise.prototype.__init3.call(this);SyncPromise.prototype.__init4.call(this);
    this._state = States.PENDING;
    this._handlers = [];

    try {
      executor(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }

  /** JSDoc */
   then(
    onfulfilled,
    onrejected,
  ) {
    return new SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        result => {
          if (!onfulfilled) {
            // TODO: ¯\_(ツ)_/¯
            // TODO: FIXME
            resolve(result );
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        reason => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        },
      ]);
      this._executeHandlers();
    });
  }

  /** JSDoc */
   catch(
    onrejected,
  ) {
    return this.then(val => val, onrejected);
  }

  /** JSDoc */
   finally(onfinally) {
    return new SyncPromise((resolve, reject) => {
      let val;
      let isRejected;

      return this.then(
        value => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        reason => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        },
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }

        resolve(val );
      });
    });
  }

  /** JSDoc */
    __init() {this._resolve = (value) => {
    this._setResult(States.RESOLVED, value);
  };}

  /** JSDoc */
    __init2() {this._reject = (reason) => {
    this._setResult(States.REJECTED, reason);
  };}

  /** JSDoc */
    __init3() {this._setResult = (state, value) => {
    if (this._state !== States.PENDING) {
      return;
    }

    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isThenable */ .J8)(value)) {
      void (value ).then(this._resolve, this._reject);
      return;
    }

    this._state = state;
    this._value = value;

    this._executeHandlers();
  };}

  /** JSDoc */
    __init4() {this._executeHandlers = () => {
    if (this._state === States.PENDING) {
      return;
    }

    const cachedHandlers = this._handlers.slice();
    this._handlers = [];

    cachedHandlers.forEach(handler => {
      if (handler[0]) {
        return;
      }

      if (this._state === States.RESOLVED) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        handler[1](this._value );
      }

      if (this._state === States.REJECTED) {
        handler[2](this._value);
      }

      handler[0] = true;
    });
  };}
}


//# sourceMappingURL=syncpromise.js.map


/***/ }),

/***/ 1170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z1: () => (/* binding */ browserPerformanceTimeOrigin),
/* harmony export */   ph: () => (/* binding */ timestampInSeconds),
/* harmony export */   yW: () => (/* binding */ dateTimestampInSeconds)
/* harmony export */ });
/* unused harmony exports _browserPerformanceTimeOriginMode, timestampWithMs, usingPerformanceAPI */
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2176);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1235);
/* module decorator */ module = __webpack_require__.hmd(module);



// eslint-disable-next-line deprecation/deprecation
const WINDOW = (0,_worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .getGlobalObject */ .Rf)();

/**
 * An object that can return the current timestamp in seconds since the UNIX epoch.
 */

/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
const dateTimestampSource = {
  nowSeconds: () => Date.now() / 1000,
};

/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */

/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
  const { performance } = WINDOW;
  if (!performance || !performance.now) {
    return undefined;
  }

  // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
  //
  // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
  // performance.now() gives a date arbitrarily in the past.
  //
  // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
  // undefined.
  //
  // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
  // interact with data coming out of performance entries.
  //
  // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
  // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
  // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
  // observed skews that can be as long as days, weeks or months.
  //
  // See https://github.com/getsentry/sentry-javascript/issues/2590.
  //
  // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
  // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
  // transactions of long-lived web pages.
  const timeOrigin = Date.now() - performance.now();

  return {
    now: () => performance.now(),
    timeOrigin,
  };
}

/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
  try {
    const perfHooks = (0,_node_js__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .l$)(module, 'perf_hooks') ;
    return perfHooks.performance;
  } catch (_) {
    return undefined;
  }
}

/**
 * The Performance API implementation for the current platform, if available.
 */
const platformPerformance = (0,_node_js__WEBPACK_IMPORTED_MODULE_1__/* .isNodeEnv */ .KV)() ? getNodePerformance() : getBrowserPerformance();

const timestampSource =
  platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1000,
      };

/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
const dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);

/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
const timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);

/**
 * Re-exported with an old name for backwards-compatibility.
 * TODO (v8): Remove this
 *
 * @deprecated Use `timestampInSeconds` instead.
 */
const timestampWithMs = (/* unused pure expression or super */ null && (timestampInSeconds));

/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
const usingPerformanceAPI = platformPerformance !== undefined;

/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
let _browserPerformanceTimeOriginMode;

/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
const browserPerformanceTimeOrigin = (() => {
  // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
  // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
  // data as reliable if they are within a reasonable threshold of the current time.

  const { performance } = WINDOW;
  if (!performance || !performance.now) {
    _browserPerformanceTimeOriginMode = 'none';
    return undefined;
  }

  const threshold = 3600 * 1000;
  const performanceNow = performance.now();
  const dateNow = Date.now();

  // if timeOrigin isn't available set delta to threshold so it isn't used
  const timeOriginDelta = performance.timeOrigin
    ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
    : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;

  // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
  // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
  // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
  // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
  // Date API.
  // eslint-disable-next-line deprecation/deprecation
  const navigationStart = performance.timing && performance.timing.navigationStart;
  const hasNavigationStart = typeof navigationStart === 'number';
  // if navigationStart isn't available set delta to threshold so it isn't used
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;

  if (timeOriginIsReliable || navigationStartIsReliable) {
    // Use the more reliable time origin
    if (timeOriginDelta <= navigationStartDelta) {
      _browserPerformanceTimeOriginMode = 'timeOrigin';
      return performance.timeOrigin;
    } else {
      _browserPerformanceTimeOriginMode = 'navigationStart';
      return navigationStart;
    }
  }

  // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
  _browserPerformanceTimeOriginMode = 'dateNow';
  return dateNow;
})();


//# sourceMappingURL=time.js.map


/***/ }),

/***/ 7638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $p: () => (/* binding */ generateSentryTraceHeader),
/* harmony export */   KA: () => (/* binding */ tracingContextFromHeaders),
/* harmony export */   Ke: () => (/* binding */ TRACEPARENT_REGEXP),
/* harmony export */   qG: () => (/* binding */ extractTraceparentData)
/* harmony export */ });
/* harmony import */ var _baggage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9181);
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2844);



const TRACEPARENT_REGEXP = new RegExp(
  '^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$', // whitespace
);

/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return undefined;
  }

  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return undefined;
  }

  let parentSampled;
  if (matches[3] === '1') {
    parentSampled = true;
  } else if (matches[3] === '0') {
    parentSampled = false;
  }

  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2],
  };
}

/**
 * Create tracing context from incoming headers.
 */
function tracingContextFromHeaders(
  sentryTrace,
  baggage,
)

 {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = (0,_baggage_js__WEBPACK_IMPORTED_MODULE_0__/* .baggageHeaderToDynamicSamplingContext */ .EN)(baggage);

  const { traceId, parentSpanId, parentSampled } = traceparentData || {};

  const propagationContext = {
    traceId: traceId || (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)(),
    spanId: (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)().substring(16),
    sampled: parentSampled === undefined ? false : parentSampled,
  };

  if (parentSpanId) {
    propagationContext.parentSpanId = parentSpanId;
  }

  if (dynamicSamplingContext) {
    propagationContext.dsc = dynamicSamplingContext ;
  }

  return {
    traceparentData,
    dynamicSamplingContext,
    propagationContext,
  };
}

/**
 * Create sentry-trace header from span context values.
 */
function generateSentryTraceHeader(
  traceId = (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)(),
  spanId = (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__/* .uuid4 */ .DM)().substring(16),
  sampled,
) {
  let sampledString = '';
  if (sampled !== undefined) {
    sampledString = sampled ? '-1' : '-0';
  }
  return `${traceId}-${spanId}${sampledString}`;
}


//# sourceMappingURL=tracing.js.map


/***/ }),

/***/ 6956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $A: () => (/* binding */ getNumberOfUrlSegments),
/* harmony export */   en: () => (/* binding */ parseUrl),
/* harmony export */   rt: () => (/* binding */ stripUrlQueryAndFragment),
/* harmony export */   tF: () => (/* binding */ getSanitizedUrlString)
/* harmony export */ });
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
  if (!url) {
    return {};
  }

  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

  if (!match) {
    return {};
  }

  // coerce to undefined values to empty string so we don't get 'undefined'
  const query = match[6] || '';
  const fragment = match[8] || '';
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    search: query,
    hash: fragment,
    relative: match[5] + query + fragment, // everything minus origin
  };
}

/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
  // eslint-disable-next-line no-useless-escape
  return urlPath.split(/[\?#]/, 1)[0];
}

/**
 * Returns number of URL segments of a passed string URL.
 */
function getNumberOfUrlSegments(url) {
  // split at '/' or at '\/' to split regex urls correctly
  return url.split(/\\?\//).filter(s => s.length > 0 && s !== ',').length;
}

/**
 * Takes a URL object and returns a sanitized string which is safe to use as span description
 * see: https://develop.sentry.dev/sdk/data-handling/#structuring-data
 */
function getSanitizedUrlString(url) {
  const { protocol, host, path } = url;

  const filteredHost =
    (host &&
      host
        // Always filter out authority
        .replace(/^.*@/, '[filtered]:[filtered]@')
        // Don't show standard :80 (http) and :443 (https) ports to reduce the noise
        .replace(':80', '')
        .replace(':443', '')) ||
    '';

  return `${protocol ? `${protocol}://` : ''}${filteredHost}${path}`;
}


//# sourceMappingURL=url.js.map


/***/ }),

/***/ 1235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rf: () => (/* binding */ getGlobalObject),
/* harmony export */   YO: () => (/* binding */ getGlobalSingleton),
/* harmony export */   n2: () => (/* binding */ GLOBAL_OBJ)
/* harmony export */ });
/** Internal global with common properties and Sentry extensions  */

// The code below for 'isGlobalObj' and 'GLOBAL_OBJ' was copied from core-js before modification
// https://github.com/zloirock/core-js/blob/1b944df55282cdc99c90db5f49eb0b6eda2cc0a3/packages/core-js/internals/global.js
// core-js has the following licence:
//
// Copyright (c) 2014-2022 Denis Pushkarev
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/** Returns 'obj' if it's the global object, otherwise returns undefined */
function isGlobalObj(obj) {
  return obj && obj.Math == Math ? obj : undefined;
}

/** Get's the global object for the current JavaScript runtime */
const GLOBAL_OBJ =
  (typeof globalThis == 'object' && isGlobalObj(globalThis)) ||
  // eslint-disable-next-line no-restricted-globals
  (typeof window == 'object' && isGlobalObj(window)) ||
  (typeof self == 'object' && isGlobalObj(self)) ||
  (typeof global == 'object' && isGlobalObj(global)) ||
  (function () {
    return this;
  })() ||
  {};

/**
 * @deprecated Use GLOBAL_OBJ instead or WINDOW from @sentry/browser. This will be removed in v8
 */
function getGlobalObject() {
  return GLOBAL_OBJ ;
}

/**
 * Returns a global singleton contained in the global `__SENTRY__` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
 * @returns the singleton
 */
function getGlobalSingleton(name, creator, obj) {
  const gbl = (obj || GLOBAL_OBJ) ;
  const __SENTRY__ = (gbl.__SENTRY__ = gbl.__SENTRY__ || {});
  const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
  return singleton;
}


//# sourceMappingURL=worldwide.js.map


/***/ }),

/***/ 8054:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const events_1 = __webpack_require__(2361);
const debug_1 = __importDefault(__webpack_require__(5158));
const promisify_1 = __importDefault(__webpack_require__(6304));
const debug = debug_1.default('agent-base');
function isAgent(v) {
    return Boolean(v) && typeof v.addRequest === 'function';
}
function isSecureEndpoint() {
    const { stack } = new Error();
    if (typeof stack !== 'string')
        return false;
    return stack.split('\n').some(l => l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
}
function createAgent(callback, opts) {
    return new createAgent.Agent(callback, opts);
}
(function (createAgent) {
    /**
     * Base `http.Agent` implementation.
     * No pooling/keep-alive is implemented by default.
     *
     * @param {Function} callback
     * @api public
     */
    class Agent extends events_1.EventEmitter {
        constructor(callback, _opts) {
            super();
            let opts = _opts;
            if (typeof callback === 'function') {
                this.callback = callback;
            }
            else if (callback) {
                opts = callback;
            }
            // Timeout for the socket to be returned from the callback
            this.timeout = null;
            if (opts && typeof opts.timeout === 'number') {
                this.timeout = opts.timeout;
            }
            // These aren't actually used by `agent-base`, but are required
            // for the TypeScript definition files in `@types/node` :/
            this.maxFreeSockets = 1;
            this.maxSockets = 1;
            this.maxTotalSockets = Infinity;
            this.sockets = {};
            this.freeSockets = {};
            this.requests = {};
            this.options = {};
        }
        get defaultPort() {
            if (typeof this.explicitDefaultPort === 'number') {
                return this.explicitDefaultPort;
            }
            return isSecureEndpoint() ? 443 : 80;
        }
        set defaultPort(v) {
            this.explicitDefaultPort = v;
        }
        get protocol() {
            if (typeof this.explicitProtocol === 'string') {
                return this.explicitProtocol;
            }
            return isSecureEndpoint() ? 'https:' : 'http:';
        }
        set protocol(v) {
            this.explicitProtocol = v;
        }
        callback(req, opts, fn) {
            throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
        }
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */
        addRequest(req, _opts) {
            const opts = Object.assign({}, _opts);
            if (typeof opts.secureEndpoint !== 'boolean') {
                opts.secureEndpoint = isSecureEndpoint();
            }
            if (opts.host == null) {
                opts.host = 'localhost';
            }
            if (opts.port == null) {
                opts.port = opts.secureEndpoint ? 443 : 80;
            }
            if (opts.protocol == null) {
                opts.protocol = opts.secureEndpoint ? 'https:' : 'http:';
            }
            if (opts.host && opts.path) {
                // If both a `host` and `path` are specified then it's most
                // likely the result of a `url.parse()` call... we need to
                // remove the `path` portion so that `net.connect()` doesn't
                // attempt to open that as a unix socket file.
                delete opts.path;
            }
            delete opts.agent;
            delete opts.hostname;
            delete opts._defaultAgent;
            delete opts.defaultPort;
            delete opts.createConnection;
            // Hint to use "Connection: close"
            // XXX: non-documented `http` module API :(
            req._last = true;
            req.shouldKeepAlive = false;
            let timedOut = false;
            let timeoutId = null;
            const timeoutMs = opts.timeout || this.timeout;
            const onerror = (err) => {
                if (req._hadError)
                    return;
                req.emit('error', err);
                // For Safety. Some additional errors might fire later on
                // and we need to make sure we don't double-fire the error event.
                req._hadError = true;
            };
            const ontimeout = () => {
                timeoutId = null;
                timedOut = true;
                const err = new Error(`A "socket" was not created for HTTP request before ${timeoutMs}ms`);
                err.code = 'ETIMEOUT';
                onerror(err);
            };
            const callbackError = (err) => {
                if (timedOut)
                    return;
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                onerror(err);
            };
            const onsocket = (socket) => {
                if (timedOut)
                    return;
                if (timeoutId != null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                if (isAgent(socket)) {
                    // `socket` is actually an `http.Agent` instance, so
                    // relinquish responsibility for this `req` to the Agent
                    // from here on
                    debug('Callback returned another Agent instance %o', socket.constructor.name);
                    socket.addRequest(req, opts);
                    return;
                }
                if (socket) {
                    socket.once('free', () => {
                        this.freeSocket(socket, opts);
                    });
                    req.onSocket(socket);
                    return;
                }
                const err = new Error(`no Duplex stream was returned to agent-base for \`${req.method} ${req.path}\``);
                onerror(err);
            };
            if (typeof this.callback !== 'function') {
                onerror(new Error('`callback` is not defined'));
                return;
            }
            if (!this.promisifiedCallback) {
                if (this.callback.length >= 3) {
                    debug('Converting legacy callback function to promise');
                    this.promisifiedCallback = promisify_1.default(this.callback);
                }
                else {
                    this.promisifiedCallback = this.callback;
                }
            }
            if (typeof timeoutMs === 'number' && timeoutMs > 0) {
                timeoutId = setTimeout(ontimeout, timeoutMs);
            }
            if ('port' in opts && typeof opts.port !== 'number') {
                opts.port = Number(opts.port);
            }
            try {
                debug('Resolving socket for %o request: %o', opts.protocol, `${req.method} ${req.path}`);
                Promise.resolve(this.promisifiedCallback(req, opts)).then(onsocket, callbackError);
            }
            catch (err) {
                Promise.reject(err).catch(callbackError);
            }
        }
        freeSocket(socket, opts) {
            debug('Freeing socket %o %o', socket.constructor.name, opts);
            socket.destroy();
        }
        destroy() {
            debug('Destroying agent %o', this.constructor.name);
        }
    }
    createAgent.Agent = Agent;
    // So that `instanceof` works correctly
    createAgent.prototype = createAgent.Agent.prototype;
})(createAgent || (createAgent = {}));
module.exports = createAgent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6304:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function promisify(fn) {
    return function (req, opts) {
        return new Promise((resolve, reject) => {
            fn.call(this, req, opts, (err, rtn) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rtn);
                }
            });
        });
    };
}
exports["default"] = promisify;
//# sourceMappingURL=promisify.js.map

/***/ }),

/***/ 6489:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.Q = parse;
__webpack_unused_export__ = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(';')
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var index = pair.indexOf('=')

    // skip things that don't look like key=value
    if (index < 0) {
      continue;
    }

    var key = pair.substring(0, index).trim()

    // only assign once
    if (undefined == obj[key]) {
      var val = pair.substring(index + 1, pair.length).trim()

      // quoted values
      if (val[0] === '"') {
        val = val.slice(1, -1)
      }

      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ 1227:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(2447)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 2447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(7824);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 5158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(1227);
} else {
	module.exports = __webpack_require__(39);
}


/***/ }),

/***/ 39:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(6224);
const util = __webpack_require__(3837);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(2130);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(2447)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 2559:
/***/ ((module) => {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.lengthOf = exports.keysOf = exports.isObject = exports.isInfOrNaN = exports.isFunction = exports.isArguments = exports.hasOwn = exports.handleError = exports.convertMapToObject = exports.checkError = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};

exports.isFunction = isFunction;

var isObject = function isObject(fn) {
  return _typeof(fn) === 'object';
};

exports.isObject = isObject;

var keysOf = function keysOf(obj) {
  return Object.keys(obj);
};

exports.keysOf = keysOf;

var lengthOf = function lengthOf(obj) {
  return Object.keys(obj).length;
};

exports.lengthOf = lengthOf;

var hasOwn = function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

exports.hasOwn = hasOwn;

var convertMapToObject = function convertMapToObject(map) {
  return Array.from(map).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    // reassign to not create new object
    acc[key] = value;
    return acc;
  }, {});
};

exports.convertMapToObject = convertMapToObject;

var isArguments = function isArguments(obj) {
  return obj != null && hasOwn(obj, 'callee');
};

exports.isArguments = isArguments;

var isInfOrNaN = function isInfOrNaN(obj) {
  return Number.isNaN(obj) || obj === Infinity || obj === -Infinity;
};

exports.isInfOrNaN = isInfOrNaN;
var checkError = {
  maxStack: function maxStack(msgError) {
    return new RegExp('Maximum call stack size exceeded', 'g').test(msgError);
  }
};
exports.checkError = checkError;

var handleError = function handleError(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      var isMaxStack = checkError.maxStack(error.message);

      if (isMaxStack) {
        throw new Error('Converting circular structure to JSON');
      }

      throw error;
    }
  };
};

exports.handleError = handleError;

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Base64 = void 0;
// Base 64 encoding
var BASE_64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var BASE_64_VALS = Object.create(null);

var getChar = function getChar(val) {
  return BASE_64_CHARS.charAt(val);
};

var getVal = function getVal(ch) {
  return ch === '=' ? -1 : BASE_64_VALS[ch];
};

for (var i = 0; i < BASE_64_CHARS.length; i++) {
  BASE_64_VALS[getChar(i)] = i;
}

;

var encode = function encode(array) {
  if (typeof array === "string") {
    var str = array;
    array = newBinary(str.length);

    for (var _i = 0; _i < str.length; _i++) {
      var ch = str.charCodeAt(_i);

      if (ch > 0xFF) {
        throw new Error("Not ascii. Base64.encode can only take ascii strings.");
      }

      array[_i] = ch;
    }
  }

  var answer = [];
  var a = null;
  var b = null;
  var c = null;
  var d = null;

  for (var _i2 = 0; _i2 < array.length; _i2++) {
    switch (_i2 % 3) {
      case 0:
        a = array[_i2] >> 2 & 0x3F;
        b = (array[_i2] & 0x03) << 4;
        break;

      case 1:
        b = b | array[_i2] >> 4 & 0xF;
        c = (array[_i2] & 0xF) << 2;
        break;

      case 2:
        c = c | array[_i2] >> 6 & 0x03;
        d = array[_i2] & 0x3F;
        answer.push(getChar(a));
        answer.push(getChar(b));
        answer.push(getChar(c));
        answer.push(getChar(d));
        a = null;
        b = null;
        c = null;
        d = null;
        break;
    }
  }

  if (a != null) {
    answer.push(getChar(a));
    answer.push(getChar(b));

    if (c == null) {
      answer.push('=');
    } else {
      answer.push(getChar(c));
    }

    if (d == null) {
      answer.push('=');
    }
  }

  return answer.join("");
}; // XXX This is a weird place for this to live, but it's used both by
// this package and 'ejson', and we can't put it in 'ejson' without
// introducing a circular dependency. It should probably be in its own
// package or as a helper in a package that both 'base64' and 'ejson'
// use.


var newBinary = function newBinary(len) {
  if (typeof Uint8Array === 'undefined' || typeof ArrayBuffer === 'undefined') {
    var ret = [];

    for (var _i3 = 0; _i3 < len; _i3++) {
      ret.push(0);
    }

    ret.$Uint8ArrayPolyfill = true;
    return ret;
  }

  return new Uint8Array(new ArrayBuffer(len));
};

var decode = function decode(str) {
  var len = Math.floor(str.length * 3 / 4);

  if (str.charAt(str.length - 1) == '=') {
    len--;

    if (str.charAt(str.length - 2) == '=') {
      len--;
    }
  }

  var arr = newBinary(len);
  var one = null;
  var two = null;
  var three = null;
  var j = 0;

  for (var _i4 = 0; _i4 < str.length; _i4++) {
    var c = str.charAt(_i4);
    var v = getVal(c);

    switch (_i4 % 4) {
      case 0:
        if (v < 0) {
          throw new Error('invalid base64 string');
        }

        one = v << 2;
        break;

      case 1:
        if (v < 0) {
          throw new Error('invalid base64 string');
        }

        one = one | v >> 4;
        arr[j++] = one;
        two = (v & 0x0F) << 4;
        break;

      case 2:
        if (v >= 0) {
          two = two | v >> 2;
          arr[j++] = two;
          three = (v & 0x03) << 6;
        }

        break;

      case 3:
        if (v >= 0) {
          arr[j++] = three | v;
        }

        break;
    }
  }

  return arr;
};

var Base64 = {
  encode: encode,
  decode: decode,
  newBinary: newBinary
};
exports.Base64 = Base64;

/***/ }),
/* 3 */
/***/ (function(module) {



module.exports = {
  //
  // When fibers are not supported on you system Meteor automatically sets this
  // function to a nope function. We're going to do the same here as there are
  // small parts of the code that call this function.
  //
  _noYieldsAllowed: function _noYieldsAllowed(f) {
    return f();
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Based on json2.js from https://github.com/douglascrockford/JSON-js
//
//    json2.js
//    2012-10-08
//
//    Public Domain.
//
//    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
function quote(string) {
  return JSON.stringify(string);
}

var str = function str(key, holder, singleIndent, outerIndent, canonical) {
  var value = holder[key]; // What happens next depends on the value's type.

  switch (_typeof(value)) {
    case 'string':
      return quote(value);

    case 'number':
      // JSON numbers must be finite. Encode non-finite numbers as null.
      return isFinite(value) ? String(value) : 'null';

    case 'boolean':
      return String(value);
    // If the type is 'object', we might be dealing with an object or an array or
    // null.

    case 'object':
      {
        // Due to a specification blunder in ECMAScript, typeof null is 'object',
        // so watch out for that case.
        if (!value) {
          return 'null';
        } // Make an array to hold the partial results of stringifying this object
        // value.


        var innerIndent = outerIndent + singleIndent;
        var partial = [];
        var v; // Is the value an array?

        if (Array.isArray(value) || {}.hasOwnProperty.call(value, 'callee')) {
          // The value is an array. Stringify every element. Use null as a
          // placeholder for non-JSON values.
          var length = value.length;

          for (var i = 0; i < length; i += 1) {
            partial[i] = str(i, value, singleIndent, innerIndent, canonical) || 'null';
          } // Join all of the elements together, separated with commas, and wrap
          // them in brackets.


          if (partial.length === 0) {
            v = '[]';
          } else if (innerIndent) {
            v = '[\n' + innerIndent + partial.join(',\n' + innerIndent) + '\n' + outerIndent + ']';
          } else {
            v = '[' + partial.join(',') + ']';
          }

          return v;
        } // Iterate through all of the keys in the object.


        var keys = Object.keys(value);

        if (canonical) {
          keys = keys.sort();
        }

        keys.forEach(function (k) {
          v = str(k, value, singleIndent, innerIndent, canonical);

          if (v) {
            partial.push(quote(k) + (innerIndent ? ': ' : ':') + v);
          }
        }); // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        if (partial.length === 0) {
          v = '{}';
        } else if (innerIndent) {
          v = '{\n' + innerIndent + partial.join(',\n' + innerIndent) + '\n' + outerIndent + '}';
        } else {
          v = '{' + partial.join(',') + '}';
        }

        return v;
      }

    default: // Do nothing

  }
}; // If the JSON object does not yet have a stringify method, give it one.


var canonicalStringify = function canonicalStringify(value, options) {
  // Make a fake root object containing our value under the key of ''.
  // Return the result of stringifying the value.
  var allOptions = Object.assign({
    indent: '',
    canonical: false
  }, options);

  if (allOptions.indent === true) {
    allOptions.indent = '  ';
  } else if (typeof allOptions.indent === 'number') {
    var newIndent = '';

    for (var i = 0; i < allOptions.indent; i++) {
      newIndent += ' ';
    }

    allOptions.indent = newIndent;
  }

  return str('', {
    '': value
  }, allOptions.indent, '', allOptions.canonical);
};

var _default = canonicalStringify;
exports["default"] = _default;
module.exports = exports.default;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_12371__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_12371__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __nested_webpack_exports__;
/* provided dependency */ var Base64 = __nested_webpack_require_12371__(2)["Base64"];
/* provided dependency */ var Meteor = __nested_webpack_require_12371__(3);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EJSON = void 0;

var _utils = __nested_webpack_require_12371__(1);

/**
 * @namespace
 * @summary Namespace for EJSON functions
 */
var EJSON = {}; // Custom type interface definition

/**
 * @class CustomType
 * @instanceName customType
 * @memberOf EJSON
 * @summary The interface that a class must satisfy to be able to become an
 * EJSON custom type via EJSON.addType.
 */

/**
 * @function typeName
 * @memberOf EJSON.CustomType
 * @summary Return the tag used to identify this type.  This must match the
 *          tag used to register this type with
 *          [`EJSON.addType`](#ejson_add_type).
 * @locus Anywhere
 * @instance
 */

/**
 * @function toJSONValue
 * @memberOf EJSON.CustomType
 * @summary Serialize this instance into a JSON-compatible value.
 * @locus Anywhere
 * @instance
 */

/**
 * @function clone
 * @memberOf EJSON.CustomType
 * @summary Return a value `r` such that `this.equals(r)` is true, and
 *          modifications to `r` do not affect `this` and vice versa.
 * @locus Anywhere
 * @instance
 */

/**
 * @function equals
 * @memberOf EJSON.CustomType
 * @summary Return `true` if `other` has a value equal to `this`; `false`
 *          otherwise.
 * @locus Anywhere
 * @param {Object} other Another object to compare this to.
 * @instance
 */

exports.EJSON = EJSON;
var customTypes = new Map(); // Add a custom type, using a method of your choice to get to and
// from a basic JSON-able representation.  The factory argument
// is a function of JSON-able --> your object
// The type you add must have:
// - A toJSONValue() method, so that Meteor can serialize it
// - a typeName() method, to show how to look it up in our type table.
// It is okay if these methods are monkey-patched on.
// EJSON.clone will use toJSONValue and the given factory to produce
// a clone, but you may specify a method clone() that will be
// used instead.
// Similarly, EJSON.equals will use toJSONValue to make comparisons,
// but you may provide a method equals() instead.

/**
 * @summary Add a custom datatype to EJSON.
 * @locus Anywhere
 * @param {String} name A tag for your custom type; must be unique among
 *                      custom data types defined in your project, and must
 *                      match the result of your type's `typeName` method.
 * @param {Function} factory A function that deserializes a JSON-compatible
 *                           value into an instance of your type.  This should
 *                           match the serialization performed by your
 *                           type's `toJSONValue` method.
 */

EJSON.addType = function (name, factory) {
  if (customTypes.has(name)) {
    throw new Error("Type ".concat(name, " already present"));
  }

  customTypes.set(name, factory);
};

var builtinConverters = [{
  // Date
  matchJSONValue: function matchJSONValue(obj) {
    return (0, _utils.hasOwn)(obj, '$date') && (0, _utils.lengthOf)(obj) === 1;
  },
  matchObject: function matchObject(obj) {
    return obj instanceof Date;
  },
  toJSONValue: function toJSONValue(obj) {
    return {
      $date: obj.getTime()
    };
  },
  fromJSONValue: function fromJSONValue(obj) {
    return new Date(obj.$date);
  }
}, {
  // RegExp
  matchJSONValue: function matchJSONValue(obj) {
    return (0, _utils.hasOwn)(obj, '$regexp') && (0, _utils.hasOwn)(obj, '$flags') && (0, _utils.lengthOf)(obj) === 2;
  },
  matchObject: function matchObject(obj) {
    return obj instanceof RegExp;
  },
  toJSONValue: function toJSONValue(regexp) {
    return {
      $regexp: regexp.source,
      $flags: regexp.flags
    };
  },
  fromJSONValue: function fromJSONValue(obj) {
    // Replaces duplicate / invalid flags.
    return new RegExp(obj.$regexp, obj.$flags // Cut off flags at 50 chars to avoid abusing RegExp for DOS.
    .slice(0, 50).replace(/[^gimuy]/g, '').replace(/(.)(?=.*\1)/g, ''));
  }
}, {
  // NaN, Inf, -Inf. (These are the only objects with typeof !== 'object'
  // which we match.)
  matchJSONValue: function matchJSONValue(obj) {
    return (0, _utils.hasOwn)(obj, '$InfNaN') && (0, _utils.lengthOf)(obj) === 1;
  },
  matchObject: _utils.isInfOrNaN,
  toJSONValue: function toJSONValue(obj) {
    var sign;

    if (Number.isNaN(obj)) {
      sign = 0;
    } else if (obj === Infinity) {
      sign = 1;
    } else {
      sign = -1;
    }

    return {
      $InfNaN: sign
    };
  },
  fromJSONValue: function fromJSONValue(obj) {
    return obj.$InfNaN / 0;
  }
}, {
  // Binary
  matchJSONValue: function matchJSONValue(obj) {
    return (0, _utils.hasOwn)(obj, '$binary') && (0, _utils.lengthOf)(obj) === 1;
  },
  matchObject: function matchObject(obj) {
    return typeof Uint8Array !== 'undefined' && obj instanceof Uint8Array || obj && (0, _utils.hasOwn)(obj, '$Uint8ArrayPolyfill');
  },
  toJSONValue: function toJSONValue(obj) {
    return {
      $binary: Base64.encode(obj)
    };
  },
  fromJSONValue: function fromJSONValue(obj) {
    return Base64.decode(obj.$binary);
  }
}, {
  // Escaping one level
  matchJSONValue: function matchJSONValue(obj) {
    return (0, _utils.hasOwn)(obj, '$escape') && (0, _utils.lengthOf)(obj) === 1;
  },
  matchObject: function matchObject(obj) {
    var match = false;

    if (obj) {
      var keyCount = (0, _utils.lengthOf)(obj);

      if (keyCount === 1 || keyCount === 2) {
        match = builtinConverters.some(function (converter) {
          return converter.matchJSONValue(obj);
        });
      }
    }

    return match;
  },
  toJSONValue: function toJSONValue(obj) {
    var newObj = {};
    (0, _utils.keysOf)(obj).forEach(function (key) {
      newObj[key] = EJSON.toJSONValue(obj[key]);
    });
    return {
      $escape: newObj
    };
  },
  fromJSONValue: function fromJSONValue(obj) {
    var newObj = {};
    (0, _utils.keysOf)(obj.$escape).forEach(function (key) {
      newObj[key] = EJSON.fromJSONValue(obj.$escape[key]);
    });
    return newObj;
  }
}, {
  // Custom
  matchJSONValue: function matchJSONValue(obj) {
    return (0, _utils.hasOwn)(obj, '$type') && (0, _utils.hasOwn)(obj, '$value') && (0, _utils.lengthOf)(obj) === 2;
  },
  matchObject: function matchObject(obj) {
    return EJSON._isCustomType(obj);
  },
  toJSONValue: function toJSONValue(obj) {
    var jsonValue = Meteor._noYieldsAllowed(function () {
      return obj.toJSONValue();
    });

    return {
      $type: obj.typeName(),
      $value: jsonValue
    };
  },
  fromJSONValue: function fromJSONValue(obj) {
    var typeName = obj.$type;

    if (!customTypes.has(typeName)) {
      throw new Error("Custom EJSON type ".concat(typeName, " is not defined"));
    }

    var converter = customTypes.get(typeName);
    return Meteor._noYieldsAllowed(function () {
      return converter(obj.$value);
    });
  }
}];

EJSON._isCustomType = function (obj) {
  return obj && (0, _utils.isFunction)(obj.toJSONValue) && (0, _utils.isFunction)(obj.typeName) && customTypes.has(obj.typeName());
};

EJSON._getTypes = function () {
  var isOriginal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return isOriginal ? customTypes : (0, _utils.convertMapToObject)(customTypes);
};

EJSON._getConverters = function () {
  return builtinConverters;
}; // Either return the JSON-compatible version of the argument, or undefined (if
// the item isn't itself replaceable, but maybe some fields in it are)


var toJSONValueHelper = function toJSONValueHelper(item) {
  for (var i = 0; i < builtinConverters.length; i++) {
    var converter = builtinConverters[i];

    if (converter.matchObject(item)) {
      return converter.toJSONValue(item);
    }
  }

  return undefined;
}; // for both arrays and objects, in-place modification.


var adjustTypesToJSONValue = function adjustTypesToJSONValue(obj) {
  // Is it an atom that we need to adjust?
  if (obj === null) {
    return null;
  }

  var maybeChanged = toJSONValueHelper(obj);

  if (maybeChanged !== undefined) {
    return maybeChanged;
  } // Other atoms are unchanged.


  if (!(0, _utils.isObject)(obj)) {
    return obj;
  } // Iterate over array or object structure.


  (0, _utils.keysOf)(obj).forEach(function (key) {
    var value = obj[key];

    if (!(0, _utils.isObject)(value) && value !== undefined && !(0, _utils.isInfOrNaN)(value)) {
      return; // continue
    }

    var changed = toJSONValueHelper(value);

    if (changed) {
      obj[key] = changed;
      return; // on to the next key
    } // if we get here, value is an object but not adjustable
    // at this level.  recurse.


    adjustTypesToJSONValue(value);
  });
  return obj;
};

EJSON._adjustTypesToJSONValue = adjustTypesToJSONValue;
/**
 * @summary Serialize an EJSON-compatible value into its plain JSON
 *          representation.
 * @locus Anywhere
 * @param {EJSON} val A value to serialize to plain JSON.
 */

EJSON.toJSONValue = function (item) {
  var changed = toJSONValueHelper(item);

  if (changed !== undefined) {
    return changed;
  }

  var newItem = item;

  if ((0, _utils.isObject)(item)) {
    newItem = EJSON.clone(item);
    adjustTypesToJSONValue(newItem);
  }

  return newItem;
}; // Either return the argument changed to have the non-json
// rep of itself (the Object version) or the argument itself.
// DOES NOT RECURSE.  For actually getting the fully-changed value, use
// EJSON.fromJSONValue


var fromJSONValueHelper = function fromJSONValueHelper(value) {
  if ((0, _utils.isObject)(value) && value !== null) {
    var keys = (0, _utils.keysOf)(value);

    if (keys.length <= 2 && keys.every(function (k) {
      return typeof k === 'string' && k.substr(0, 1) === '$';
    })) {
      for (var i = 0; i < builtinConverters.length; i++) {
        var converter = builtinConverters[i];

        if (converter.matchJSONValue(value)) {
          return converter.fromJSONValue(value);
        }
      }
    }
  }

  return value;
}; // for both arrays and objects. Tries its best to just
// use the object you hand it, but may return something
// different if the object you hand it itself needs changing.


var adjustTypesFromJSONValue = function adjustTypesFromJSONValue(obj) {
  if (obj === null) {
    return null;
  }

  var maybeChanged = fromJSONValueHelper(obj);

  if (maybeChanged !== obj) {
    return maybeChanged;
  } // Other atoms are unchanged.


  if (!(0, _utils.isObject)(obj)) {
    return obj;
  }

  (0, _utils.keysOf)(obj).forEach(function (key) {
    var value = obj[key];

    if ((0, _utils.isObject)(value)) {
      var changed = fromJSONValueHelper(value);

      if (value !== changed) {
        obj[key] = changed;
        return;
      } // if we get here, value is an object but not adjustable
      // at this level.  recurse.


      adjustTypesFromJSONValue(value);
    }
  });
  return obj;
};

EJSON._adjustTypesFromJSONValue = adjustTypesFromJSONValue;
/**
 * @summary Deserialize an EJSON value from its plain JSON representation.
 * @locus Anywhere
 * @param {JSONCompatible} val A value to deserialize into EJSON.
 */

EJSON.fromJSONValue = function (item) {
  var changed = fromJSONValueHelper(item);

  if (changed === item && (0, _utils.isObject)(item)) {
    changed = EJSON.clone(item);
    adjustTypesFromJSONValue(changed);
  }

  return changed;
};
/**
 * @summary Serialize a value to a string. For EJSON values, the serialization
 *          fully represents the value. For non-EJSON values, serializes the
 *          same way as `JSON.stringify`.
 * @locus Anywhere
 * @param {EJSON} val A value to stringify.
 * @param {Object} [options]
 * @param {Boolean | Integer | String} options.indent Indents objects and
 * arrays for easy readability.  When `true`, indents by 2 spaces; when an
 * integer, indents by that number of spaces; and when a string, uses the
 * string as the indentation pattern.
 * @param {Boolean} options.canonical When `true`, stringifies keys in an
 *                                    object in sorted order.
 */


EJSON.stringify = (0, _utils.handleError)(function (item, options) {
  var serialized;
  var json = EJSON.toJSONValue(item);

  if (options && (options.canonical || options.indent)) {
    var canonicalStringify = __nested_webpack_require_12371__(4);

    serialized = canonicalStringify(json, options);
  } else {
    serialized = JSON.stringify(json);
  }

  return serialized;
});
/**
 * @summary Parse a string into an EJSON value. Throws an error if the string
 *          is not valid EJSON.
 * @locus Anywhere
 * @param {String} str A string to parse into an EJSON value.
 */

EJSON.parse = function (item) {
  if (typeof item !== 'string') {
    throw new Error('EJSON.parse argument should be a string');
  }

  return EJSON.fromJSONValue(JSON.parse(item));
};
/**
 * @summary Returns true if `x` is a buffer of binary data, as returned from
 *          [`EJSON.newBinary`](#ejson_new_binary).
 * @param {Object} x The variable to check.
 * @locus Anywhere
 */


EJSON.isBinary = function (obj) {
  return !!(typeof Uint8Array !== 'undefined' && obj instanceof Uint8Array || obj && obj.$Uint8ArrayPolyfill);
};
/**
 * @summary Return true if `a` and `b` are equal to each other.  Return false
 *          otherwise.  Uses the `equals` method on `a` if present, otherwise
 *          performs a deep comparison.
 * @locus Anywhere
 * @param {EJSON} a
 * @param {EJSON} b
 * @param {Object} [options]
 * @param {Boolean} options.keyOrderSensitive Compare in key sensitive order,
 * if supported by the JavaScript implementation.  For example, `{a: 1, b: 2}`
 * is equal to `{b: 2, a: 1}` only when `keyOrderSensitive` is `false`.  The
 * default is `false`.
 */


EJSON.equals = function (a, b, options) {
  var i;
  var keyOrderSensitive = !!(options && options.keyOrderSensitive);

  if (a === b) {
    return true;
  } // This differs from the IEEE spec for NaN equality, b/c we don't want
  // anything ever with a NaN to be poisoned from becoming equal to anything.


  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } // if either one is falsy, they'd have to be === to be equal


  if (!a || !b) {
    return false;
  }

  if (!((0, _utils.isObject)(a) && (0, _utils.isObject)(b))) {
    return false;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.valueOf() === b.valueOf();
  }

  if (EJSON.isBinary(a) && EJSON.isBinary(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  if ((0, _utils.isFunction)(a.equals)) {
    return a.equals(b, options);
  }

  if ((0, _utils.isFunction)(b.equals)) {
    return b.equals(a, options);
  } // Array.isArray works across iframes while instanceof won't


  var aIsArray = Array.isArray(a);
  var bIsArray = Array.isArray(b); // if not both or none are array they are not equal

  if (aIsArray !== bIsArray) {
    return false;
  }

  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }

    for (i = 0; i < a.length; i++) {
      if (!EJSON.equals(a[i], b[i], options)) {
        return false;
      }
    }

    return true;
  } // fallback for custom types that don't implement their own equals


  switch (EJSON._isCustomType(a) + EJSON._isCustomType(b)) {
    case 1:
      return false;

    case 2:
      return EJSON.equals(EJSON.toJSONValue(a), EJSON.toJSONValue(b));

    default: // Do nothing

  } // fall back to structural equality of objects


  var ret;
  var aKeys = (0, _utils.keysOf)(a);
  var bKeys = (0, _utils.keysOf)(b);

  if (keyOrderSensitive) {
    i = 0;
    ret = aKeys.every(function (key) {
      if (i >= bKeys.length) {
        return false;
      }

      if (key !== bKeys[i]) {
        return false;
      }

      if (!EJSON.equals(a[key], b[bKeys[i]], options)) {
        return false;
      }

      i++;
      return true;
    });
  } else {
    i = 0;
    ret = aKeys.every(function (key) {
      if (!(0, _utils.hasOwn)(b, key)) {
        return false;
      }

      if (!EJSON.equals(a[key], b[key], options)) {
        return false;
      }

      i++;
      return true;
    });
  }

  return ret && i === bKeys.length;
};
/**
 * @summary Return a deep copy of `val`.
 * @locus Anywhere
 * @param {EJSON} val A value to copy.
 */


EJSON.clone = function (v) {
  var ret;

  if (!(0, _utils.isObject)(v)) {
    return v;
  }

  if (v === null) {
    return null; // null has typeof "object"
  }

  if (v instanceof Date) {
    return new Date(v.getTime());
  } // RegExps are not really EJSON elements (eg we don't define a serialization
  // for them), but they're immutable anyway, so we can support them in clone.


  if (v instanceof RegExp) {
    return v;
  }

  if (EJSON.isBinary(v)) {
    ret = EJSON.newBinary(v.length);

    for (var i = 0; i < v.length; i++) {
      ret[i] = v[i];
    }

    return ret;
  }

  if (Array.isArray(v)) {
    return v.map(EJSON.clone);
  }

  if ((0, _utils.isArguments)(v)) {
    return Array.from(v).map(EJSON.clone);
  } // handle general user-defined typed Objects if they have a clone method


  if ((0, _utils.isFunction)(v.clone)) {
    return v.clone();
  } // handle other custom types


  if (EJSON._isCustomType(v)) {
    return EJSON.fromJSONValue(EJSON.clone(EJSON.toJSONValue(v)), true);
  } // handle other objects


  ret = {};
  (0, _utils.keysOf)(v).forEach(function (key) {
    ret[key] = EJSON.clone(v[key]);
  });
  return ret;
};
/**
 * @summary Allocate a new buffer of binary data that EJSON can serialize.
 * @locus Anywhere
 * @param {Number} size The number of bytes of binary data to allocate.
 */
// EJSON.newBinary is the public documented API for this functionality,
// but the implementation is in the 'base64' package to avoid
// introducing a circular dependency. (If the implementation were here,
// then 'base64' would have to use EJSON.newBinary, and 'ejson' would
// also have to use 'base64'.)


EJSON.newBinary = Base64.newBinary;
}();
module.exports = __nested_webpack_exports__.EJSON;
/******/ })()
;

/***/ }),

/***/ 6729:
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 4063:
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 6560:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 9146:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const net_1 = __importDefault(__webpack_require__(1808));
const tls_1 = __importDefault(__webpack_require__(4404));
const url_1 = __importDefault(__webpack_require__(7310));
const assert_1 = __importDefault(__webpack_require__(9491));
const debug_1 = __importDefault(__webpack_require__(5158));
const agent_base_1 = __webpack_require__(8054);
const parse_proxy_response_1 = __importDefault(__webpack_require__(9829));
const debug = debug_1.default('https-proxy-agent:agent');
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 *
 * @api public
 */
class HttpsProxyAgent extends agent_base_1.Agent {
    constructor(_opts) {
        let opts;
        if (typeof _opts === 'string') {
            opts = url_1.default.parse(_opts);
        }
        else {
            opts = _opts;
        }
        if (!opts) {
            throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        }
        debug('creating new HttpsProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || isHTTPS(proxy.protocol);
        // Prefer `hostname` over `host`, and set the `port` if needed.
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === 'string') {
            proxy.port = parseInt(proxy.port, 10);
        }
        if (!proxy.port && proxy.host) {
            proxy.port = this.secureProxy ? 443 : 80;
        }
        // ALPN is supported by Node.js >= v5.
        // attempt to negotiate http/1.1 for proxy servers that support http/2
        if (this.secureProxy && !('ALPNProtocols' in proxy)) {
            proxy.ALPNProtocols = ['http 1.1'];
        }
        if (proxy.host && proxy.path) {
            // If both a `host` and `path` are specified then it's most likely
            // the result of a `url.parse()` call... we need to remove the
            // `path` portion so that `net.connect()` doesn't attempt to open
            // that as a Unix socket file.
            delete proxy.path;
            delete proxy.pathname;
        }
        this.proxy = proxy;
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */
    callback(req, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { proxy, secureProxy } = this;
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                debug('Creating `tls.Socket`: %o', proxy);
                socket = tls_1.default.connect(proxy);
            }
            else {
                debug('Creating `net.Socket`: %o', proxy);
                socket = net_1.default.connect(proxy);
            }
            const headers = Object.assign({}, proxy.headers);
            const hostname = `${opts.host}:${opts.port}`;
            let payload = `CONNECT ${hostname} HTTP/1.1\r\n`;
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) {
                headers['Proxy-Authorization'] = `Basic ${Buffer.from(proxy.auth).toString('base64')}`;
            }
            // The `Host` header should only include the port
            // number when it is not the default port.
            let { host, port, secureEndpoint } = opts;
            if (!isDefaultPort(port, secureEndpoint)) {
                host += `:${port}`;
            }
            headers.Host = host;
            headers.Connection = 'close';
            for (const name of Object.keys(headers)) {
                payload += `${name}: ${headers[name]}\r\n`;
            }
            const proxyResponsePromise = parse_proxy_response_1.default(socket);
            socket.write(`${payload}\r\n`);
            const { statusCode, buffered } = yield proxyResponsePromise;
            if (statusCode === 200) {
                req.once('socket', resume);
                if (opts.secureEndpoint) {
                    // The proxy is connecting to a TLS server, so upgrade
                    // this socket connection to a TLS connection.
                    debug('Upgrading socket connection to TLS');
                    const servername = opts.servername || opts.host;
                    return tls_1.default.connect(Object.assign(Object.assign({}, omit(opts, 'host', 'hostname', 'path', 'port')), { socket,
                        servername }));
                }
                return socket;
            }
            // Some other status code that's not 200... need to re-play the HTTP
            // header "data" events onto the socket once the HTTP machinery is
            // attached so that the node core `http` can parse and handle the
            // error status code.
            // Close the original socket, and a new "fake" socket is returned
            // instead, so that the proxy doesn't get the HTTP request
            // written to it (which may contain `Authorization` headers or other
            // sensitive data).
            //
            // See: https://hackerone.com/reports/541502
            socket.destroy();
            const fakeSocket = new net_1.default.Socket({ writable: false });
            fakeSocket.readable = true;
            // Need to wait for the "socket" event to re-play the "data" events.
            req.once('socket', (s) => {
                debug('replaying proxy buffer for failed request');
                assert_1.default(s.listenerCount('data') > 0);
                // Replay the "buffered" Buffer onto the fake `socket`, since at
                // this point the HTTP module machinery has been hooked up for
                // the user.
                s.push(buffered);
                s.push(null);
            });
            return fakeSocket;
        });
    }
}
exports["default"] = HttpsProxyAgent;
function resume(socket) {
    socket.resume();
}
function isDefaultPort(port, secure) {
    return Boolean((!secure && port === 80) || (secure && port === 443));
}
function isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for (key in obj) {
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}
//# sourceMappingURL=agent.js.map

/***/ }),

/***/ 6018:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const agent_1 = __importDefault(__webpack_require__(9146));
function createHttpsProxyAgent(opts) {
    return new agent_1.default(opts);
}
(function (createHttpsProxyAgent) {
    createHttpsProxyAgent.HttpsProxyAgent = agent_1.default;
    createHttpsProxyAgent.prototype = agent_1.default.prototype;
})(createHttpsProxyAgent || (createHttpsProxyAgent = {}));
module.exports = createHttpsProxyAgent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9829:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __importDefault(__webpack_require__(5158));
const debug = debug_1.default('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(socket) {
    return new Promise((resolve, reject) => {
        // we need to buffer any HTTP traffic that happens with the proxy before we get
        // the CONNECT response, so that if the response is anything other than an "200"
        // response code, then we can re-play the "data" events on the socket once the
        // HTTP parser is hooked up...
        let buffersLength = 0;
        const buffers = [];
        function read() {
            const b = socket.read();
            if (b)
                ondata(b);
            else
                socket.once('readable', read);
        }
        function cleanup() {
            socket.removeListener('end', onend);
            socket.removeListener('error', onerror);
            socket.removeListener('close', onclose);
            socket.removeListener('readable', read);
        }
        function onclose(err) {
            debug('onclose had error %o', err);
        }
        function onend() {
            debug('onend');
        }
        function onerror(err) {
            cleanup();
            debug('onerror %o', err);
            reject(err);
        }
        function ondata(b) {
            buffers.push(b);
            buffersLength += b.length;
            const buffered = Buffer.concat(buffers, buffersLength);
            const endOfHeaders = buffered.indexOf('\r\n\r\n');
            if (endOfHeaders === -1) {
                // keep buffering
                debug('have not received end of HTTP headers yet...');
                read();
                return;
            }
            const firstLine = buffered.toString('ascii', 0, buffered.indexOf('\r\n'));
            const statusCode = +firstLine.split(' ')[1];
            debug('got proxy server response: %o', firstLine);
            resolve({
                statusCode,
                buffered
            });
        }
        socket.on('error', onerror);
        socket.on('close', onclose);
        socket.on('end', onend);
        read();
    });
}
exports["default"] = parseProxyResponse;
//# sourceMappingURL=parse-proxy-response.js.map

/***/ }),

/***/ 7612:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
 * recently used items while discarding least recently used items when its limit
 * is reached.
 *
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * See README.md for details.
 *
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 */
(function(g,f){
  const e =  true ? exports : 0;
  f(e);
  if (true) { !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }
})(this, function(exports) {

const NEWER = Symbol('newer');
const OLDER = Symbol('older');

function LRUMap(limit, entries) {
  if (typeof limit !== 'number') {
    // called as (entries)
    entries = limit;
    limit = 0;
  }

  this.size = 0;
  this.limit = limit;
  this.oldest = this.newest = undefined;
  this._keymap = new Map();

  if (entries) {
    this.assign(entries);
    if (limit < 1) {
      this.limit = this.size;
    }
  }
}

exports.LRUMap = LRUMap;

function Entry(key, value) {
  this.key = key;
  this.value = value;
  this[NEWER] = undefined;
  this[OLDER] = undefined;
}


LRUMap.prototype._markEntryAsUsed = function(entry) {
  if (entry === this.newest) {
    // Already the most recenlty used entry, so no need to update the list
    return;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry[NEWER]) {
    if (entry === this.oldest) {
      this.oldest = entry[NEWER];
    }
    entry[NEWER][OLDER] = entry[OLDER]; // C <-- E.
  }
  if (entry[OLDER]) {
    entry[OLDER][NEWER] = entry[NEWER]; // C. --> E
  }
  entry[NEWER] = undefined; // D --x
  entry[OLDER] = this.newest; // D. --> E
  if (this.newest) {
    this.newest[NEWER] = entry; // E. <-- D
  }
  this.newest = entry;
};

LRUMap.prototype.assign = function(entries) {
  let entry, limit = this.limit || Number.MAX_VALUE;
  this._keymap.clear();
  let it = entries[Symbol.iterator]();
  for (let itv = it.next(); !itv.done; itv = it.next()) {
    let e = new Entry(itv.value[0], itv.value[1]);
    this._keymap.set(e.key, e);
    if (!entry) {
      this.oldest = e;
    } else {
      entry[NEWER] = e;
      e[OLDER] = entry;
    }
    entry = e;
    if (limit-- == 0) {
      throw new Error('overflow');
    }
  }
  this.newest = entry;
  this.size = this._keymap.size;
};

LRUMap.prototype.get = function(key) {
  // First, find our cache entry
  var entry = this._keymap.get(key);
  if (!entry) return; // Not cached. Sorry.
  // As <key> was found in the cache, register it as being requested recently
  this._markEntryAsUsed(entry);
  return entry.value;
};

LRUMap.prototype.set = function(key, value) {
  var entry = this._keymap.get(key);

  if (entry) {
    // update existing
    entry.value = value;
    this._markEntryAsUsed(entry);
    return this;
  }

  // new entry
  this._keymap.set(key, (entry = new Entry(key, value)));

  if (this.newest) {
    // link previous tail to the new tail (entry)
    this.newest[NEWER] = entry;
    entry[OLDER] = this.newest;
  } else {
    // we're first in -- yay
    this.oldest = entry;
  }

  // add new entry to the end of the linked list -- it's now the freshest entry.
  this.newest = entry;
  ++this.size;
  if (this.size > this.limit) {
    // we hit the limit -- remove the head
    this.shift();
  }

  return this;
};

LRUMap.prototype.shift = function() {
  // todo: handle special case when limit == 1
  var entry = this.oldest;
  if (entry) {
    if (this.oldest[NEWER]) {
      // advance the list
      this.oldest = this.oldest[NEWER];
      this.oldest[OLDER] = undefined;
    } else {
      // the cache is exhausted
      this.oldest = undefined;
      this.newest = undefined;
    }
    // Remove last strong reference to <entry> and remove links from the purged
    // entry being returned:
    entry[NEWER] = entry[OLDER] = undefined;
    this._keymap.delete(entry.key);
    --this.size;
    return [entry.key, entry.value];
  }
};

// ----------------------------------------------------------------------------
// Following code is optional and can be removed without breaking the core
// functionality.

LRUMap.prototype.find = function(key) {
  let e = this._keymap.get(key);
  return e ? e.value : undefined;
};

LRUMap.prototype.has = function(key) {
  return this._keymap.has(key);
};

LRUMap.prototype['delete'] = function(key) {
  var entry = this._keymap.get(key);
  if (!entry) return;
  this._keymap.delete(entry.key);
  if (entry[NEWER] && entry[OLDER]) {
    // relink the older entry with the newer entry
    entry[OLDER][NEWER] = entry[NEWER];
    entry[NEWER][OLDER] = entry[OLDER];
  } else if (entry[NEWER]) {
    // remove the link to us
    entry[NEWER][OLDER] = undefined;
    // link the newer entry to head
    this.oldest = entry[NEWER];
  } else if (entry[OLDER]) {
    // remove the link to us
    entry[OLDER][NEWER] = undefined;
    // link the newer entry to head
    this.newest = entry[OLDER];
  } else {// if(entry[OLDER] === undefined && entry.newer === undefined) {
    this.oldest = this.newest = undefined;
  }

  this.size--;
  return entry.value;
};

LRUMap.prototype.clear = function() {
  // Not clearing links should be safe, as we don't expose live links to user
  this.oldest = this.newest = undefined;
  this.size = 0;
  this._keymap.clear();
};


function EntryIterator(oldestEntry) { this.entry = oldestEntry; }
EntryIterator.prototype[Symbol.iterator] = function() { return this; }
EntryIterator.prototype.next = function() {
  let ent = this.entry;
  if (ent) {
    this.entry = ent[NEWER];
    return { done: false, value: [ent.key, ent.value] };
  } else {
    return { done: true, value: undefined };
  }
};


function KeyIterator(oldestEntry) { this.entry = oldestEntry; }
KeyIterator.prototype[Symbol.iterator] = function() { return this; }
KeyIterator.prototype.next = function() {
  let ent = this.entry;
  if (ent) {
    this.entry = ent[NEWER];
    return { done: false, value: ent.key };
  } else {
    return { done: true, value: undefined };
  }
};

function ValueIterator(oldestEntry) { this.entry = oldestEntry; }
ValueIterator.prototype[Symbol.iterator] = function() { return this; }
ValueIterator.prototype.next = function() {
  let ent = this.entry;
  if (ent) {
    this.entry = ent[NEWER];
    return { done: false, value: ent.value };
  } else {
    return { done: true, value: undefined };
  }
};


LRUMap.prototype.keys = function() {
  return new KeyIterator(this.oldest);
};

LRUMap.prototype.values = function() {
  return new ValueIterator(this.oldest);
};

LRUMap.prototype.entries = function() {
  return this;
};

LRUMap.prototype[Symbol.iterator] = function() {
  return new EntryIterator(this.oldest);
};

LRUMap.prototype.forEach = function(fun, thisObj) {
  if (typeof thisObj !== 'object') {
    thisObj = this;
  }
  let entry = this.oldest;
  while (entry) {
    fun.call(thisObj, entry.value, entry.key, this);
    entry = entry[NEWER];
  }
};

/** Returns a JSON (array) representation */
LRUMap.prototype.toJSON = function() {
  var s = new Array(this.size), i = 0, entry = this.oldest;
  while (entry) {
    s[i++] = { key: entry.key, value: entry.value };
    entry = entry[NEWER];
  }
  return s;
};

/** Returns a String representation */
LRUMap.prototype.toString = function() {
  var s = '', entry = this.oldest;
  while (entry) {
    s += String(entry.key)+':'+entry.value;
    entry = entry[NEWER];
    if (entry) {
      s += ' < ';
    }
  }
  return s;
};

});


/***/ }),

/***/ 4341:
/***/ ((module) => {

"use strict";


const copyProperty = (to, from, property, ignoreNonConfigurable) => {
	// `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
	// `Function#prototype` is non-writable and non-configurable so can never be modified.
	if (property === 'length' || property === 'prototype') {
		return;
	}

	// `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
	if (property === 'arguments' || property === 'caller') {
		return;
	}

	const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
	const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

	if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
		return;
	}

	Object.defineProperty(to, property, fromDescriptor);
};

// `Object.defineProperty()` throws if the property exists, is not configurable and either:
//  - one its descriptors is changed
//  - it is non-writable and its value is changed
const canCopyProperty = function (toDescriptor, fromDescriptor) {
	return toDescriptor === undefined || toDescriptor.configurable || (
		toDescriptor.writable === fromDescriptor.writable &&
		toDescriptor.enumerable === fromDescriptor.enumerable &&
		toDescriptor.configurable === fromDescriptor.configurable &&
		(toDescriptor.writable || toDescriptor.value === fromDescriptor.value)
	);
};

const changePrototype = (to, from) => {
	const fromPrototype = Object.getPrototypeOf(from);
	if (fromPrototype === Object.getPrototypeOf(to)) {
		return;
	}

	Object.setPrototypeOf(to, fromPrototype);
};

const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;

const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name) => {
	const withName = name === '' ? '' : `with ${name.trim()}() `;
	const newToString = wrappedToString.bind(null, withName, from.toString());
	// Ensure `to.toString.toString` is non-enumerable and has the same `same`
	Object.defineProperty(newToString, 'name', toStringName);
	Object.defineProperty(to, 'toString', {...toStringDescriptor, value: newToString});
};

const mimicFn = (to, from, {ignoreNonConfigurable = false} = {}) => {
	const {name} = to;

	for (const property of Reflect.ownKeys(from)) {
		copyProperty(to, from, property, ignoreNonConfigurable);
	}

	changePrototype(to, from);
	changeToString(to, from, name);

	return to;
};

module.exports = mimicFn;


/***/ }),

/***/ 7824:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 7345:
/***/ ((module) => {

"use strict";

module.exports = (promise, onFinally) => {
	onFinally = onFinally || (() => {});

	return promise.then(
		val => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => val),
		err => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => {
			throw err;
		})
	);
};


/***/ }),

/***/ 5860:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const EventEmitter = __webpack_require__(6729);
const p_timeout_1 = __webpack_require__(6512);
const priority_queue_1 = __webpack_require__(6506);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const empty = () => { };
const timeoutError = new p_timeout_1.TimeoutError();
/**
Promise queue with concurrency control.
*/
class PQueue extends EventEmitter {
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ''}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ''}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
    }
    get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
    get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
    }
    _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit('next');
    }
    _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
            this._resolveIdle();
            this._resolveIdle = empty;
            this.emit('idle');
        }
    }
    _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = undefined;
    }
    _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === undefined) {
            const delay = this._intervalEnd - now;
            if (delay < 0) {
                // Act as the interval was done
                // We don't need to resume it here because it will be resumed on line 160
                this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
            }
            else {
                // Act as the interval is pending
                if (this._timeoutId === undefined) {
                    this._timeoutId = setTimeout(() => {
                        this._onResumeInterval();
                    }, delay);
                }
                return true;
            }
        }
        return false;
    }
    _tryToStartAnother() {
        if (this._queue.size === 0) {
            // We can clear the interval ("pause")
            // Because we can redo it later ("resume")
            if (this._intervalId) {
                clearInterval(this._intervalId);
            }
            this._intervalId = undefined;
            this._resolvePromises();
            return false;
        }
        if (!this._isPaused) {
            const canInitializeInterval = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                const job = this._queue.dequeue();
                if (!job) {
                    return false;
                }
                this.emit('active');
                job();
                if (canInitializeInterval) {
                    this._initializeIntervalIfNeeded();
                }
                return true;
            }
        }
        return false;
    }
    _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== undefined) {
            return;
        }
        this._intervalId = setInterval(() => {
            this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
    }
    _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */
    _processQueue() {
        // eslint-disable-next-line no-empty
        while (this._tryToStartAnother()) { }
    }
    get concurrency() {
        return this._concurrency;
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */
    async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
            const run = async () => {
                this._pendingCount++;
                this._intervalCount++;
                try {
                    const operation = (this._timeout === undefined && options.timeout === undefined) ? fn() : p_timeout_1.default(Promise.resolve(fn()), (options.timeout === undefined ? this._timeout : options.timeout), () => {
                        if (options.throwOnTimeout === undefined ? this._throwOnTimeout : options.throwOnTimeout) {
                            reject(timeoutError);
                        }
                        return undefined;
                    });
                    resolve(await operation);
                }
                catch (error) {
                    reject(error);
                }
                this._next();
            };
            this._queue.enqueue(run, options);
            this._tryToStartAnother();
            this.emit('add');
        });
    }
    /**
    Same as `.add()`, but accepts an array of sync or async functions.

    @returns A promise that resolves when all functions are resolved.
    */
    async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */
    start() {
        if (!this._isPaused) {
            return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
    }
    /**
    Put queue execution on hold.
    */
    pause() {
        this._isPaused = true;
    }
    /**
    Clear the queue.
    */
    clear() {
        this._queue = new this._queueClass();
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */
    async onEmpty() {
        // Instantly resolve if the queue is empty
        if (this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveEmpty;
            this._resolveEmpty = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */
    async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (this._pendingCount === 0 && this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveIdle;
            this._resolveIdle = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    Size of the queue.
    */
    get size() {
        return this._queue.size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */
    sizeBy(options) {
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        return this._queue.filter(options).length;
    }
    /**
    Number of pending promises.
    */
    get pending() {
        return this._pendingCount;
    }
    /**
    Whether the queue is currently paused.
    */
    get isPaused() {
        return this._isPaused;
    }
    get timeout() {
        return this._timeout;
    }
    /**
    Set the timeout for future operations.
    */
    set timeout(milliseconds) {
        this._timeout = milliseconds;
    }
}
exports["default"] = PQueue;


/***/ }),

/***/ 7489:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while (count > 0) {
        const step = (count / 2) | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        }
        else {
            count = step;
        }
    }
    return first;
}
exports["default"] = lowerBound;


/***/ }),

/***/ 6506:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const lower_bound_1 = __webpack_require__(7489);
class PriorityQueue {
    constructor() {
        this._queue = [];
    }
    enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
            priority: options.priority,
            run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
            this._queue.push(element);
            return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
    }
    dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
    }
    filter(options) {
        return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
    }
    get size() {
        return this._queue.length;
    }
}
exports["default"] = PriorityQueue;


/***/ }),

/***/ 6512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const pFinally = __webpack_require__(7345);

class TimeoutError extends Error {
	constructor(message) {
		super(message);
		this.name = 'TimeoutError';
	}
}

const pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
	if (typeof milliseconds !== 'number' || milliseconds < 0) {
		throw new TypeError('Expected `milliseconds` to be a positive number');
	}

	if (milliseconds === Infinity) {
		resolve(promise);
		return;
	}

	const timer = setTimeout(() => {
		if (typeof fallback === 'function') {
			try {
				resolve(fallback());
			} catch (error) {
				reject(error);
			}

			return;
		}

		const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
		const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);

		if (typeof promise.cancel === 'function') {
			promise.cancel();
		}

		reject(timeoutError);
	}, milliseconds);

	// TODO: Use native `finally` keyword when targeting Node.js 10
	pFinally(
		// eslint-disable-next-line promise/prefer-await-to-then
		promise.then(resolve, reject),
		() => {
			clearTimeout(timer);
		}
	);
});

module.exports = pTimeout;
// TODO: Remove this for the next major release
module.exports["default"] = pTimeout;

module.exports.TimeoutError = TimeoutError;


/***/ }),

/***/ 3354:
/***/ ((module) => {

function toIEEE754(v, ebits, fbits) {

    var bias = (1 << (ebits - 1)) - 1;

    // Compute sign, exponent, fraction
    var s, e, f;
    if (isNaN(v)) {
        e = (1 << bias) - 1; f = 1; s = 0;
    }
    else if (v === Infinity || v === -Infinity) {
        e = (1 << bias) - 1; f = 0; s = (v < 0) ? 1 : 0;
    }
    else if (v === 0) {
        e = 0; f = 0; s = (1 / v === -Infinity) ? 1 : 0;
    }
    else {
        s = v < 0;
        v = Math.abs(v);

        if (v >= Math.pow(2, 1 - bias)) {
            var ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = v * Math.pow(2, fbits - ln) - Math.pow(2, fbits);
        }
        else {
            e = 0;
            f = v / Math.pow(2, 1 - bias - fbits);
        }
    }

    // Pack sign, exponent, fraction
    var i, bits = [];
    for (i = fbits; i; i -= 1) { bits.push(f % 2 ? 1 : 0); f = Math.floor(f / 2); }
    for (i = ebits; i; i -= 1) { bits.push(e % 2 ? 1 : 0); e = Math.floor(e / 2); }
    bits.push(s ? 1 : 0);
    bits.reverse();
    var str = bits.join('');

    // Bits to bytes
    var bytes = [];
    while (str.length) {
        bytes.push(parseInt(str.substring(0, 8), 2));
        str = str.substring(8);
    }
    return bytes;
}

function fromIEEE754(bytes, ebits, fbits) {

    // Bytes to bits
    var bits = [];
    for (var i = bytes.length; i; i -= 1) {
        var byte = bytes[i - 1];
        for (var j = 8; j; j -= 1) {
            bits.push(byte % 2 ? 1 : 0); byte = byte >> 1;
        }
    }
    bits.reverse();
    var str = bits.join('');

    // Unpack sign, exponent, fraction
    var bias = (1 << (ebits - 1)) - 1;
    var s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
    var e = parseInt(str.substring(1, 1 + ebits), 2);
    var f = parseInt(str.substring(1 + ebits), 2);

    // Produce number
    if (e === (1 << ebits) - 1) {
        return f !== 0 ? NaN : s * Infinity;
    }
    else if (e > 0) {
        return s * Math.pow(2, e - bias) * (1 + f / Math.pow(2, fbits));
    }
    else if (f !== 0) {
        return s * Math.pow(2, -(bias-1)) * (f / Math.pow(2, fbits));
    }
    else {
        return s * 0;
    }
}

function fromIEEE754Double(b) { return fromIEEE754(b, 11, 52); }
function   toIEEE754Double(v) { return   toIEEE754(v, 11, 52); }
function fromIEEE754Single(b) { return fromIEEE754(b,  8, 23); }
function   toIEEE754Single(v) { return   toIEEE754(v,  8, 23); }

module.exports =
{ fromIEEE754Double: fromIEEE754Double
, fromIEEE754Single: fromIEEE754Single
, toIEEE754Double: toIEEE754Double
, toIEEE754Single: toIEEE754Single
};


/***/ }),

/***/ 4762:
/***/ ((module, exports, __webpack_require__) => {

var parse = (__webpack_require__(539)/* .parse */ .Q),
    ieee754   = __webpack_require__(3354),
    util = __webpack_require__(3837),
    __slice = [].slice;

function classify () {
  var i, I, name;
  for (i = 0, I = arguments.length; i < I; i++) {
    name = arguments[i].name;
    if (name[0] == "_")
      this.__defineGetter__(name.slice(1), arguments[i]);
    else
      this[arguments[i].name] = arguments[i];
  }
  return this;
}

// The default transforms built into Packet.
var transforms =
// Convert the value to and from the given encoding.
{ str: function (encoding, parsing, field, value) {
  var i, I, ascii = /^ascii$/i.test(encoding);
    if (parsing) {
      value = new Buffer(value);
      // Broken and waiting on [297](http://github.com/ry/node/issues/issue/297).
      // If the top bit is set, it is not ASCII, so we zero the value.
      if (ascii) {
        for (i = 0, I = value.length; i < I; i++) {
          if (value[i] & 0x80) value[i] = 0;
        }
        encoding = "utf8"
      }
      var length = value.length;
      return value.toString(encoding, 0, length);
    } else {
      var buffer = new Buffer(value, encoding);
      if (ascii) {
        for (var i = 0, I = buffer.length; i < I; i++) {
          if (value.charAt(i) == '\u0000') buffer[i] = 0;
        }
      }
      return buffer;
    }
  }
// Convert to and from ASCII.
, ascii: function (parsing, field, value) {
    return transforms.str("ascii", parsing, field, value);
  }
// Convert to and from UTF-8.
, utf8: function (parsing, field, value) {
    return transforms.str("utf8", parsing, field, value);
  }
// Add padding to a value before you write it to stream.
, pad: function (character, length, parsing, field, value) {
    if (! parsing) {
      while (value.length < length) value = character + value;
    }
    return value;
  }
// Convert a text value from alphanumeric to integer.
, atoi: function (base, parsing, field, value) {
    return parsing ? parseInt(value, base) : value.toString(base);
  }
// Convert a text value from alphanumeric to float.
, atof: function (parsing, field, value) {
    return parsing ? parseFloat(value) : value.toString();
  }
};
/*
function die () {
  console.log.apply(console, [].slice.call(arguments, 0));
  process.exit(1);
}

function say () { console.log.apply(console, [].slice.call(arguments, 0)) }
*/
// The `Definition` class is contained by the `Serializer` and parser. We expose
// public methods by explicitly adding the methods to the `Serializer` or
// `Parser` when we create them. The `Definition` class references only enclosed
// variables, but it does use prototypical inheritance to extend the collections
// of packet patterns and transforms.

function Definition (context, packets, transforms) {
  packets = Object.create(packets);
  transforms = Object.create(transforms);

  function compile (pattern) {
    var parsed = parse(pattern);
    parsed.hasAlternation = parsed.some(function (field) { return field.alternation });
    return parsed;
  }

  function packet (name, pattern) {
    packets[name] = compile(pattern);
  }

  function transform (name, procedure) {
    transforms[name] = procedure;
  }

  function pattern (nameOrPattern) {
    return packets[nameOrPattern] || compile(nameOrPattern);
  }

  function createParser (context) {
    return new Parser(new Definition(context, packets, transforms));
  }

  function createSerializer (context) {
    return new Serializer(new Definition(context, packets, transforms));
  }

  function extend (object) {
    return classify.call(object, packet, transform, createParser, createSerializer);
  }

  // Execute the pipeline of transforms for the `pattern` on the `value`.
  function pipeline (outgoing, pattern, value, reverse) {
    var i, I, j, J, by, pipeline, parameters, transform;
    // Run the pipelines for parsing.
    if (pipeline = pattern.pipeline) {
      if (reverse) {
        i = pipeline.length - 1, I = -1, by = -1;
      } else {
        i = 0, I = pipeline.length; by = 1;
      }
      while (i != I) {
        transform = pipeline[i];
        parameters = [];
        for (j = 0, J = transform.parameters.length; j < J; j++) {
          parameters.push(transform.parameters[j])
        }
        parameters.push(outgoing, pattern, value);
        value = transforms[transform.name].apply(null, parameters);
        i += by;
      }
    }
    return value;
  }

  this.context = context;

  return classify.call(this, packet, transform, pattern, pipeline, extend);
}


//#### Parser

// Construct a `Parser` around the given `definition`.
function Parser (definition) {
  var increment, valueOffset, terminal, terminated, terminator, value,
  bytesRead = 0, skipping, repeat, step, named, index, arrayed,
  pattern, patternIndex, context = definition.context || this, fields, _callback;

  // The length property of the `Parser`, returning the number of bytes read.
  function _length () { return bytesRead }

  // The public `reset` method to reuse the parser, clearing the current state.
  function reset () { bytesRead = 0, named = false }

  // Prepare the parser for the next field in the pattern.
  function nextField ()  {
    var field = pattern[patternIndex];
    repeat = field.repeat;
    index = 0;
    skipping    = null;
    terminated = ! field.terminator;
    terminator = field.terminator && field.terminator[field.terminator.length - 1];
    named = named || field.named;
    if (field.arrayed && field.endianness  != "x") arrayed = [];
  }

  // Prepare the parser to parse the next value in the stream. It initializes
  // the value to a zero integer value or an array. This method accounts for
  // skipping, for skipped patterns.
  function nextValue () {
    // Get the next pattern.
    var field = pattern[patternIndex];

    // If skipping, skip over the count of bytes.
    if (field.endianness == "x") {
      skipping  = field.bytes;

    // Otherwise, create the empty value.
    } else {
      value = field.exploded ? [] : 0;
    }
    var little = field.endianness == 'l';
    var bytes = field.bytes;
    terminal = little ? bytes : -1;
    valueOffset = little ? 0 : bytes - 1;
    increment = little ? 1 : -1;
  }

  // Sets the next packet to extract from the stream by providing a packet name
  // defined by the `packet` function or else a packet pattern to parse. The
  // `callback` will be invoked when the packet has been extracted from the
  // buffer or buffers given to `parse`.

  //
  function extract (nameOrPattern, callback) {
    pattern = definition.pattern(nameOrPattern);
    patternIndex = 0;
    _callback = callback;
    fields = {};

    nextField();
    nextValue();
  }

  //#### parser.parse(buffer[, start][, length])
  // The `parse` method reads from the buffer, returning when the current pattern
  // is read, or the end of the buffer is reached.

  // Read from the `buffer` for the given `start` offset and `length`.
  function parse (buffer, start, length) {
    // Initialize the loop counters. Initialize unspecified parameters with their
    // defaults.
    var bufferOffset = start || 0,
        bufferEnd = bufferOffset + (length == null ? buffer.length : length),
        bytes, bits, field;
    start = bufferOffset;

    // We set the pattern to null when all the fields have been read, so while
    // there is a pattern to fill and bytes to read.
    PATTERN: while (pattern != null && bufferOffset < bufferEnd) {
      field = pattern[patternIndex];
      // If we are skipping, we advance over all the skipped bytes or to the end
      // of the current buffer.
      if (skipping != null) {
        var advance  = Math.min(skipping, bufferEnd - bufferOffset);
        var begin    = bufferOffset;
        bufferOffset       += advance;
        skipping   -= advance;
        bytesRead  += advance;
        // If we have more bytes to skip, then break because we've consumed the
        // entire buffer.
        if (skipping) break;
        else skipping = null
      } else {
        // If the pattern is exploded, the value we're populating is an array.
        if (field.exploded) {
          for (;;) {
            value[valueOffset] = buffer[bufferOffset];
            bufferOffset++;
            valueOffset += increment;
            bytesRead++;
            if (valueOffset == terminal) break;
            if (bufferOffset == bufferEnd) break PATTERN;
          }
        // Otherwise we're packing bytes into an unsigned integer, the most
        // common case.
        } else {
          for (;;) {
            value += Math.pow(256, valueOffset) * buffer[bufferOffset];
            bufferOffset++;
            valueOffset += increment
            bytesRead++;
            if (valueOffset == terminal) break;
            if (bufferOffset == bufferEnd) break PATTERN;
          }
        }
        // Unpack the field value. Perform our basic transformations. That is,
        // convert from a byte array to a JavaScript primitive.
        //
        // Resist the urge to implement these conversions with pipelines. It
        // keeps occurring to you, but those transitions are at a higher level
        // of abstraction, primarily for operations on gathered byte arrays.
        // These transitions need to take place immediately to populate those
        // arrays.

        // By default, value is as it is.
        bytes = value;

        // Convert to float or double.
        if (field.type == "f") {
          if (field.bits == 32)
            value = ieee754.fromIEEE754Single(bytes)
          else
            value = ieee754.fromIEEE754Double(bytes)

        // Get the two's compliment signed value.
        } else if (field.signed) {
          value = 0;
          if ((bytes[bytes.length - 1] & 0x80) == 0x80) {
            var top = bytes.length - 1
            for (i = 0; i < top; i++)
              value += (~bytes[i] & 0xff) * Math.pow(256, i)
            // To get the two's compliment as a positive value you use
            // `~1 & 0xff == 254`. For example: `~1 == -2`.
            value += (~(bytes[top] & 0x7f) & 0xff & 0x7f) * Math.pow(256, top);
            value += 1;
            value *= -1;
          } else {
            // Not really necessary, the bit about top.
            top = bytes.length - 1
            for (i = 0; i < top; i++)
              value += (bytes[i] & 0xff)  * Math.pow(256, i);
            value += (bytes[top] & 0x7f) * Math.pow(256, top);
          }
        }
        // If the current field is arrayed, we keep track of the array we're
        // building after a pause through member variable.
        if (field.arrayed) arrayed.push(value);
      }

      // If we've not yet hit our terminator, check for the terminator. If we've
      // hit the terminator, and we do not have a maximum size to fill, then
      // terminate by setting up the array to terminate.
      //
      // A length value of the maximum number value means to repeat until the
      // terminator, but a specific length value means that the zero terminated
      // string occupies a field that has a fixed length, so we need to skip the
      // unused bytes.
      if (! terminated) {
        if (terminator == value) {
          terminated = true;
          var t = pattern[patternIndex].terminator;
          for (i = 1, I = t.length; i <= I; i++) {
            if (arrayed[arrayed.length - i] != t[t.length - i]) {
              terminated = false
              break
            }
          }
          if (terminated) {
            for (i = 0, I + t.length; i < I; i++) {
              arrayed.pop();
            }
            terminated = true;
            if (repeat == Number.MAX_VALUE) {
              repeat = index + 1;
            } else {
              skipping = (repeat - (++index)) * field.bytes
              if (skipping) {
                repeat = index + 1;
                continue
              }
            }
          }
        }
      }

      // If we are reading an arrayed pattern and we have not read all of the
      // array elements, we repeat the current field type.
      if (++index <  repeat) {
        nextValue();

      // Otherwise, we've got a complete field value, either a JavaScript
      // primitive or raw bytes as an array.
      } else {

        // If we're not skipping, push the field value after running it through
        // the pipeline.
        if (field.endianness != "x") {
          var packing;

          // If the field is a bit packed field, unpack the values and push them
          // onto the field list.
          if (packing = field.packing) {
            var length  = field.bits;
            for (i = 0, I = packing.length; i < I; i++) {
              var pack = packing[i];
              length -= pack.bits;
              if (pack.endianness == "b") {
                var unpacked = Math.floor(value / Math.pow(2, length));
                unpacked = unpacked % Math.pow(2, pack.bits);
                // If signed, we convert from two's compliment.
                if (pack.signed) {
                  var mask = Math.pow(2, pack.bits - 1)
                  if (unpacked & mask)
                    unpacked = -(~(unpacked - 1) & (mask * 2 - 1))
                }
                fields[pack.name] = unpacked;
              }
            }

          // If the value is a length encoding, we set the repeat value for the
          // subsequent array of values. If we have a zero length encoding, we
          // push an empty array through the pipeline, and move on to the next
          // field.
          } else if (field.lengthEncoding) {
            if ((pattern[patternIndex + 1].repeat = value) == 0) {
              fields[pattern[patternIndex + 1].name] = definition.pipeline(true, field, [], false)
              patternIndex++
            }
          // If the value is used as a switch for an alternation, we run through
          // the different possible branches, updating the pattern with the
          // pattern of the first branch that matches. We then re-read the bytes
          // used to determine the conditional outcome.
          } else if (field.alternation) {
            // This makes no sense now.I wonder if it is called.
            // unless field.signed
            //  value = (Math.pow(256, i) * b for b, i in arrayed)
            var i, I, branch;
            for (i = 0, I = field.alternation.length; i < I; i++) {
              branch = field.alternation[i];
              if (branch.read.minimum <= value &&
                  value <= branch.read.maximum &&
                  (value & branch.read.mask) == branch.read.mask)
                break;
            }
            if (branch.failed)
              throw new Error("Cannot match branch.");
            bytes = arrayed.slice(0);
            bytesRead -= bytes.length;
            pattern = pattern.slice(0);
            pattern.splice.apply(pattern, [ patternIndex, 1 ].concat(branch.pattern));
            nextField();
            nextValue();
            parse(bytes, 0, bytes.length);
            continue;


          // Otherwise, the value is what it is, so run it through the user
          // supplied transformation pipeline, and push it onto the list of
          // fields.
          } else {
            if (field.arrayed) value = arrayed;
            fields[field.name] = definition.pipeline(true, field, value, false);
          }
        }
        // If we have read all of the pattern fields, call the associated
        // callback.  We add the parser and the user supplied additional
        // arguments onto the callback arguments.
        //
        // The pattern is set to null, our terminal condition, because the
        // callback may specify a subsequent packet to parse.
        if (++patternIndex == pattern.length) {
          // TODO: Rename to _pattern. This is too wonky.
          var _pattern = pattern;
          pattern = null;

          if (_callback) {
            // At one point, you thought you could have  a test for the arity of
            // the function, and if it was not `1`, you'd call the callback
            // positionally, regardless of named parameters. Then you realized
            // that the `=>` operator in CoffeeScript would use a bind function
            // with no arguments, and read the argument array. If you do decide to
            // go back to arity override, then greater than one is the trigger.
            // However, on reflection, I don't see that the flexibility is useful,
            // and I do believe that it will generate at least one bug report that
            // will take a lot of hashing out only to close with "oh, no, you hit
            // upon a "hidden feature".
            var number = 1
            if (named) {
              _callback.call(context, fields);
            } else {
              var array = [];
              flatten(_pattern, fields, array);
              _callback.apply(context, array);
            }
          }
        // Otherwise we proceed to the next field in the packet pattern.
        } else {
          nextField();
          nextValue();
        }
      }
    }
    // Return the count of bytes read.
    return bufferOffset - start;
  }

  return classify.call(definition.extend(this), extract, parse, reset, _length);
}

function flatten (pattern, fields, array) {
  pattern.forEach(function (field) {
    if (field.packing) {
      flatten(field.packing, fields, array);
    } else if (!field.lengthEncoding && field.endianness != 'x') {
      array.push(fields[field.name]);
    }
  });
}
module.exports.Parser = Parser;

// Construct a `Serializer` around the given `definition`.
function Serializer(definition) {
  var serializer = this, terminal, valueOffset, increment, array, value, bytesWritten = 0,
  skipping, repeat, outgoing, index, terminated, terminates, pattern,
  incoming, named,
  patternIndex, context = definition.context || this, padding, _callback;

  function _length () { return bytesWritten }

  function reset () { bytesWritten = 0 }

  // Prepare the parser for the next field in the pattern.
  function nextField () {
    var field  = pattern[patternIndex]
    repeat       = field.repeat;
    terminated  = ! field.terminator;
    terminates  = ! terminated;
    index       = 0;
    padding     = null;

    // Can't I keep separate indexes? Do I need that zero?
    if (field.endianness ==  "x") {
      if (field.padding != null)
        padding = field.padding
    }
  }

  // Prepare the parser to serialize the next value to the stream. It
  // initializes Initialize the next field value to serialize. In the case of an
  // arrayed value, we will use the next value in the array. This method will
  // adjust the pattern for alteration. It will pack a bit packed integer. It
  // will covert the field to a byte array for floats and signed negative
  // numbers.
  function nextValue () {
    var i, I, packing, count, length, pack, unpacked, range, mask;
    var field = pattern[patternIndex];

    // If we are skipping without filling we note the count of bytes to skip,
    // otherwise we prepare our value.
    if (field.endianness ==  "x" &&  padding == null) {
      skipping = field.bytes
    } else {
      // If we're filling, we write the fill value.
      if (padding != null) {
        value = padding;

      // If the field is arrayed, we get the next value in the array.
      } else if (field.arrayed) {
        if (index == 0) {
          array = incoming[field.name];
          array  = definition.pipeline(false, field, array, true)
        }
        value = array[index];

      // If the field is bit packed, we update the `outgoing` array of values
      // by packing zero, one or more values into a single value. We will also
      // check for bits filled with a pattern specified filler value and pack
      // that in there as well.
      } else if (packing = field.packing) {
        count = 0, value = 0, length = field.bits;
        for (i = 0, I = packing.length; i < I; i++) {
          pack = packing[i];
          length -= pack.bits;
          if (pack.endianness ==  "b" || pack.padding != null) {
            unpacked = pack.padding != null ? pack.padding : incoming[pack.name];
            if (pack.signed) {
              range = Math.pow(2, pack.bits - 1)
              if (!( (-range) <= unpacked &&  unpacked <= range - 1))
                throw new Error("value " + unpacked + " will not fit in " + pack.bits + " bits");
              if (unpacked < 0) {
                mask = range * 2 - 1
                unpacked = (~(- unpacked) + 1) & mask
              }
            }
            value += unpacked * Math.pow(2, length)
          }
        }

      // If the current field is a length encoded array, then the length of the
      // current array value is the next value, otherwise, we have the simple
      // case, the value is the current value.
      } else {
        if (field.lengthEncoding) {
          value = incoming[pattern[patternIndex + 1].name].length;
          pattern[patternIndex + 1].repeat = value;
        } else {
          value = incoming[field.name];
        }
      }
      // If the array is not an unsigned integer, we might have to convert it.
      if (field.exploded) {
        // Convert a float into its IEEE 754 representation.
        if (field.type == "f") {
          if (field.bits == 32)
            value = ieee754.toIEEE754Single(value)
          else
            value = ieee754.toIEEE754Double(value)

        // Convert a signed integer into its two's compliment representation.
        } else if (field.signed) {
          var copy = Math.abs(value);
          var bytes = [];
          // FIXME If the value is greater than zero, we can just change the
          // pattern to packed.
          for (i = 0, I = field.bytes; i < I; i++) {
            var pow = Math.pow(256, i)
            bytes[i] = Math.floor(copy / pow % (pow * 256))
          }
          if (value < 0) {
            var carry = 1;
            for (i = 0, I = bytes.length; i < I; i++) {
              bytes[i] = (~bytes[i] & 0xff) + carry;
              if (bytes[i] ==  256) bytes[i] = 0;
              else carry = 0;
            }
          }
          value = bytes;
        }
      }
      var little = field.endianness == 'l';
      var bytes = field.bytes;
      terminal = little  ? bytes : -1;
      valueOffset = little ? 0 : bytes - 1;
      increment = little ? 1 : -1;
      if (field.pipeline && !field.arrayed) {
        value  = definition.pipeline(false, field, value, true)
      }
    }
  }

  function serialize () {
    // TODO: We're copying because of positional parameters and alternation.
    var shiftable = __slice.call(arguments),
        // TODO: Rename `_pattern`.
        prototype = definition.pattern(shiftable.shift()),
        callback = typeof shiftable[shiftable.length - 1] == 'function' ? shiftable.pop() : void(0),
        skip = 0,
        field, value, alternate, i, I, j, J, k, K, alternates;

    // TODO: Hate that all this has to pass for the common case.
    named = (shiftable.length ==  1
             && typeof shiftable[0] ==  "object"
             && ! (shiftable[0] instanceof Array));

    _callback = callback;
    patternIndex = 0;
    alternates = prototype.slice();

    // Positial arrays go through once to resolve alternation for the sake of
    // the naming. This duplication is the price you pay for invoking with
    // positional arrays, it can't be avoided.
    if (!named) {
      incoming = {}, pattern = []; 
      for (var i = 0; i < alternates.length; i++) {
        field = alternates[i];
        if (field.alternation) {
          field = field.alternation[0];
          if (field.pattern[0].packing) {
            field = field.pattern[0].packing[0];
          }
          value = shiftable[0];

          field = alternates[i];
          for (j = 0, J = field.alternation.length; j < J; j++) {
            alternate = field.alternation[j];
            if (alternate.write.minimum <= value &&  value <= alternate.write.maximum) {
              break;
            }
          }

          alternates.splice.apply(alternates, [ i--, 1 ].concat(alternate.pattern));
          continue;
        }

        pattern.push(field);

        if (field.packing) {
          for (j = 0, J = field.packing.length; j < J; j++) {
            if (field.packing[j].endianness != 'x') {
              incoming[field.packing[j].name] = shiftable.shift();
            }
          }
        } else if (!field.lengthEncoding && field.endianness != 'x') {
          incoming[field.name] = shiftable.shift();
        }
      }
      // Reset for below.
      alternates = pattern, pattern = [];
    } else {
      incoming = shiftable.shift();
    }

    outgoing = {}, pattern = [];

    // Determine alternation now, creating a pattern with the alternation
    // resolved.
    if (prototype.hasAlternation) {
      for (i = 0; i < alternates.length; i++) {
        field = alternates[i];
        // The name of value to test for alternation is either the first name in
        // the alternation or else if the first value is bit packed, the first
        // name in the packed alternates.
        if (field.alternation) {
          field = field.alternation[0];
          if (field.pattern[0].packing) {
            field = field.pattern[0].packing[0];
          }
          value = named ? incoming[field.name] : incoming[0];

          field = alternates[i];
          for (j = 0, J = field.alternation.length; j < J; j++) {
            alternate = field.alternation[j];
            if (alternate.write.minimum <= value &&  value <= alternate.write.maximum) {
              break;
            }
          }

          alternates.splice.apply(alternates, [ i--, 1 ].concat(alternate.pattern));
          continue;
        }
        pattern.push(field);
      }
    } else {
      pattern = alternates;
    }

    // TODO: No. Defer. We can make it faster if we defer.

    // Run the outgoing values through field pipelines before we enter the write
    // loop. We need to skip over the blank fields and constants. We also skip
    // over bit packed fields because we do not apply pipelines to packed fields.
    if (false) {}

    nextField();
    nextValue();
  }

  // Return the count of bytes that will be written by the serializer for the
  // current pattern and variables.
  function _sizeOf () {
    var patternIndex = 0, field = pattern[patternIndex], repeat = field.repeat,
        outgoingIndex = 0, size = 0;
    while (field) {
      if (field.terminator) {
        if (field.repeat == Number.MAX_VALUE) {
          repeat = definition.pipeline(false, field, incoming[field.name], true).length + field.terminator.length;
        } else {
          repeat = field.repeat;
        }
      } else {
        repeat = field.repeat || 1;
        outgoingIndex += repeat;
      }
      size += field.bytes * repeat;
      field = pattern[++patternIndex];
    }
    return size;
  }

  function offsetsOf (buffer) {
    if (Array.isArray(buffer)) buffer = new Buffer(buffer);
    var patternIndex = 0, field = pattern[patternIndex],
        output, offset = 0, record;

    function dump (record) {
      if (buffer) {
        record.hex = buffer.slice(record.offset, record.offset + record.length).toString('hex');
      }
    }

    function detokenize (arrayed, count) {
       var scalar = (field.signed && field.type != 'f' ? '-' : '') +
                     field.endianness +
                     field.bits +
                    (field.type == 'n' ? '' : field.type);
      if (arrayed) {
        if (count) {
          return count.pattern + '/' + scalar;
        } else if (field.terminator) {
          if (field.terminator[0]) {
            // TODO: I'd prefer hex: b8z<0x0d0a>.
            return scalar + 'z<' + field.terminator.join(',') + '>';
          } else {
            return scalar + 'z';
          }
        } else {
          return scalar + '[' + field.repeat + ']';
        }
      } else if (field.packing) {
        return scalar + '{' + field.packing.map(function (field) {
          return (field.signed ? '-' : '') + field.endianness + field.bits;
        }).join(',') + '}';
      } else {
        return scalar;
      }
    }

    function _element (container, index) {
      var value = field.arrayed ? incoming[field.name][index] : incoming[field.name],
          record =  { name: field.name,
                      pattern: detokenize(),
                      value: value,
                      offset: offset,
                      length: field.bits / 8 };
      if (!field.named) delete record.name; // add then remove for the sake of order.
      if (field.endianness == 'x') delete record.value;
      if (field.arrayed) {
        delete record.name;
        container.value[index] = record;
      } else {
        container[index] = record;
      }
      dump(record);
      return record.length;
    }

    output = [];
    while (field) {
      if (field.lengthEncoding) {
        var start = offset;
        var element = pattern[++patternIndex];
        var record = { name: element.name, value: [], offset: 0 };
        if (!element.named) delete record.name;
        output.push(record);
        var value = incoming[element.name];
        offset += _element(record, 'count');
        record.count.value = value.length;
        field = element;
        record.pattern = detokenize(true, record.count);
        for (var i = 0, I = value.length; i < I; i++) {
          offset += _element(record, i);
        }
        record.length = offset - start;
        dump(record);
      } else if (field.terminator) {
        var start = offset,
            record = { name: field.name, pattern: detokenize(true), value: [], offset: 0 },
            value = incoming[field.name];
        if (!field.named) delete record.name;
        output.push(record);
        for (var i = 0, I = value.length; i < I; i++) {
          offset += _element(record, i);
        }
        record.terminator = { value: field.terminator.slice(),
                              offset: offset,
                              length: field.terminator.length,
                              hex: new Buffer(field.terminator).toString('hex') };
        offset += field.terminator.length;
        record.length = offset - start;
        dump(record);
      } else if (field.arrayed) {
        var start = offset,
            value = incoming[field.name],
                // FIXME: offset is not zero. fix here and above.
            record = { name: field.name, pattern: detokenize(true), value: [], offset: 0 };
        if (!field.named) delete record.name;
        for (var i = 0, I = field.repeat; i < I; i++) {
          offset += _element(record, i);
        }
        record.length = offset - start;
        dump(record);
        output.push(record);
      } else if (field.packing) {
        record = { name: field.name,
                   pattern: detokenize(),
                   value: [],
                   offset: offset,
                   length: offset + field.bits / 8 };
        if (!field.named) delete record.name;
        var bit = 0, hex = new Buffer(1);
        var packing = field.packing;
        var start = offset;
        for (var i = 0, I = packing.length; i < I; i++) {
          field = packing[i];
          var element = {
            name: field.name,
            pattern: detokenize(),
            value: incoming[field.name],
            bit: bit,
            bits: field.bits
          }
          if (!field.named) delete element.name;
          if (field.endianness == 'x') delete element.value;
          record.value.push(element);
          if (buffer) {
            element.hex = '';
            element.binary = '';
            var left = bit % 8, right = (8 - ((bit + field.bits) % 8)) & 7, b;
            var mask = 0xff >>> (bit % 8);
            for (var j = Math.floor(bit / 8), J = Math.ceil((bit + field.bits) / 8); j < J; j++) {
              b = buffer[offset + j];
              element.binary +=  ('0000000' + b.toString('2')).slice(-8).substring(left);
              hex[0] = buffer[offset + j] & (0xff >>> left);
              left = 0;
              mask = 0xff;
              if (j == J - 1) {
                hex[0] &= (0xff << right);
                element.binary = element.binary.substring(0, element.binary.length - right);
              }
              element.hex += hex.toString('hex');
            }
            bit += field.bits;
          }
        }
        dump(record);
        output.push(record);
      } else {
        offset += _element(output, output.length);
      }
      field = pattern[++patternIndex];
    }
    return output;
  }

  //#### serializer.write(buffer[, start][, length])

  // The `write` method writes to the buffer, returning when the current pattern
  // is written, or the end of the buffer is reached.  Write to the `buffer` in
  // the region defined by the given `start` offset and `length`.
  function write (buffer, start, length) {
    // **TODO**: Tidy.
    var bufferOffset = start || 0;
    if (length == null) length = buffer.length;
    var bufferEnd = bufferOffset + (length == null ? buffer.length : length);
    start = bufferOffset;

    // While there is a pattern to fill and space to write.
    PATTERN: while (pattern.length != patternIndex &&  bufferOffset < bufferEnd) {
      if (skipping) {
        var advance     = Math.min(skipping, bufferEnd - bufferOffset);
        bufferOffset         += advance;
        skipping      -= advance;
        bytesWritten  += advance;
        if (skipping) break;

      } else {
        // If the pattern is exploded, the value we're writing is an array.
        if (pattern[patternIndex].exploded) {
          for (;;) {
            buffer[bufferOffset] = value[valueOffset];
            valueOffset += increment;
            bytesWritten++;
            bufferOffset++;
            if (valueOffset ==  terminal) break;
            if (bufferOffset == bufferEnd) break PATTERN;
          }
        // Otherwise we're unpacking bytes of an unsigned integer, the most common
        // case.
        } else {
          for (;;) {
            buffer[bufferOffset] = Math.floor(value / Math.pow(256, valueOffset)) & 0xff;
            valueOffset += increment;
            bytesWritten++;
            bufferOffset++;
            if (valueOffset ==  terminal) break;
            if (bufferOffset ==  bufferEnd) break PATTERN;
          }
        }
      }
      // If we have not terminated, check for the termination state change.
      // Termination will change the loop settings.
      if (terminates) {
        if (terminated) {
          if (repeat ==  Number.MAX_VALUE) {
            repeat = index + 1
          } else if (pattern[patternIndex].padding != null)  {
            padding = pattern[patternIndex].padding
          } else {
            skipping = (repeat - (++index)) * pattern[patternIndex].bytes;
            if (skipping) {
              repeat = index + 1;
              continue;
            }
          }
        } else {
          // If we are at the end of the series, then we create an empty outgoing
          // array to hold the terminator, because the outgoing series may be a
          // buffer. We insert the terminator at next index in the outgoing array.
          // We then set repeat to allow one more iteration before callback.
          if (array.length == index + 1) {
            terminated = true;
            array = [];
            var terminator = pattern[patternIndex].terminator;
            for (var i = 0, I = terminator.length; i < I; i++) {
              array[index + 1 + i] = terminator[i];
            }
          }
        }
      }
      // If we are reading an arrayed pattern and we have not read all of the
      // array elements, we repeat the current field type.
      if (++index < repeat) {
        nextValue();

      // If we have written all of the packet fields, call the associated
      // callback with self parser.
      //
      // The pattern is set to null, our terminal condition, before the callback,
      // because the callback may specify a subsequent packet to parse.
      } else if (++patternIndex ==  pattern.length) {
        if (_callback != null) {
          _callback.call(context, serializer);
        }
      } else {

        padding = null;
        repeat      = pattern[patternIndex].repeat;
        terminated  = ! pattern[patternIndex].terminator;
        terminates  = ! terminated;
        index       = 0;

        nextField();
        nextValue();
      }
    }

    return bufferOffset - start;
  }

  classify.call(definition.extend(this), serialize, write, reset, offsetsOf, _length, _sizeOf);
}

function createParser (context) { return new Parser(new Definition(context, {}, transforms)) }
function createSerializer (context) { return new Serializer(new Definition(context, {}, transforms)) }

classify.call(exports, createParser, createSerializer);


/***/ }),

/***/ 539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Don't forget that parsers of any sort tend to be complex. A simple PEG
// grammar quickly becomes a thousand lines. This compiles to under 400 lines of
// JavaScript. You are going to find it difficult to make it much smaller.
//
// This module is separated for isolation during testing. It is not meant to be
// exposed as part of the public API.

// We don't count an initial newline as a line in our report. CoffeeScripters
// might be defining their patterns use a HERDOC.
function error (message, pattern, index) {
  var lines;
  if (pattern.indexOf("\n") != -1) {
    lines = pattern.substring(0, index).split(/\n/);
    if (lines[0] == "") lines.shift();
    return message + " at line " + lines.length + " character " + (lines.pop().length + 1);
  } else {
    return message + " at character " + (index + 1);
  }
}

var BASE = { "0x": 16, "0": 8 };

var re = {};

function compileRegularExpressions() {
  var name, $, lines, i, I, source;
  source = (__webpack_require__(7147).readFileSync)(__filename, "utf8").split(/\r?\n/);
  for (i = 0, I = source.length; i < I; i++, $ = null) {
    for (; !$ && i < I; i++) {
      $ = /re\["([^"]+)"\s*\/\*\s*$/.exec(source[i]);
    }
    if ($) {
      name = $[1], lines = [];
      for (; ! ($ = /^\s*(i?)\*\/\]/.exec(source[i])); i++) {
        lines.push(source[i].replace(/\/\/.*$/, '').trim());
      }
      re[name] = new RegExp(lines.join("").replace(/ /g, ''), $[1] || "");
    }
  }
}

compileRegularExpressions();

// Extract an alternation range number or bit mask from at the current pattern
// substring given by `rest`.
function number (pattern, rest, index) {
  var match = re["number" /*
    ^               // start
    (                 // capture for length
      \s*               // skip white
      (?:
        (\&?)             // test is mask
        0x([0-9a-f]+)     // hex
        |
        (\d+)             // decimal
      )
    (-)?            // range
    )
    (.*)            // rest
    $               // end
  i*/].exec(rest);

  if (! match)
    throw new Error(error("invalid number", pattern, index));

  var matched = match[1], mask = match[2], hex = match[3],
    decimal = match[4], range = match[5], rest = match[6],
    value = (hex != null) ? parseInt(hex, 16) : parseInt(decimal, 10);

  index += matched.length;

  return { mask: !! mask
         , value: value
         , index: index
         , range: range
         , rest: rest
         }
}

// Parse an alternation condition.
function condition (pattern, index, rest, struct) {
  var from = number(pattern, rest, index), match, num, to;
  if (from.mask) {
    if (from.range)
      throw new Error(error("masks not permitted in ranges", pattern, index));
    struct.mask = from.value;
    index = from.index;
  } else {
    if (from.range) {
      to = number(pattern, from.rest, from.index);
      if (to.mask)
        throw new Error(error("masks not permitted in ranges", pattern, from.index));
      struct.minimum = from.value;
      struct.maximum = to.value;
      index = to.index;
    } else {
      struct.minimum = struct.maximum = from.value;
      index = from.index;
    }
  }
  num = to || from;
  if (match = /(\s*)\S/.exec(num.rest))
    throw new Error(error("invalid pattern", pattern, index + match[1].length));
  return index;
}

// An alternation condition that never matches. This is not a constant for the
// sake of consistency with `always()`.
function never () {
  return {
    maximum: -Number.MAX_VALUE,
    minimum: Number.MAX_VALUE
  }
}

// Generates an alternation condition that will always match. This is not a
// constant because we build upon it to create specific conditions.
function always () {
  return {
    maximum: Number.MAX_VALUE,
    minimum: -Number.MAX_VALUE,
    mask: 0
  }
}

// Parse an alternation pattern.
function alternates (pattern, array, rest, primary, secondary, allowSecondary, index) {
  var alternate, $, startIndex;
  // Chip away at the pattern.
  while (rest) {
    alternate             = {}
    alternate[primary]    = always();
    alternate[secondary]  = allowSecondary ? always() : never();

    // Match the condition and the colon prior to the pattern. If this doesn't
    // match than we assume that we have a final, default pattern.
    if ($ = /^([^/:]+)(?:(\s*\/\s*)([^:]+))?(:\s*)(.*)$/.exec(rest)) {
      var first = $[1], delimiter = $[2], second = $[3], imparative = $[4], rest = $[5];

      startIndex = index;
      condition(pattern, index, first, alternate[primary]);

      // If we are allowing patterns to match write conditions, and we have a
      // write condition, parse the condition. Otherwise, the read and write
      // conditions are the same.
      if (allowSecondary) {
        if (second) {
          condition(pattern, index, second, alternate[secondary]);
        } else {
          alternate[secondary] = alternate[primary];
        }

      // If we do not allow patterns with write conditions, raise an exception if
      // one exists.
      } else if (second) {
        var slashIndex = startIndex + first.length + delimiter.indexOf("/");
        throw new Error(error("field alternates not allowed", pattern, slashIndex));
      }

      // Increment the index.
      index += first.length + imparative.length;
      if (delimiter != null) index += delimiter.length + second.length;
    }

    // Check to see if we have further alternates.
    if ($ = /^(\s*)([^|]+)(\|\s*)(.*)$/.exec(rest)) {
      var padding = $[1], part = $[2], delimiter = $[3], rest = $[4];
    } else {
      var padding = "", part = rest, delimiter = "", rest = null;
    }
    index += padding.length;

    // Parse the alienate pattern.
    alternate.pattern = parse(pattern, part, index, 8);
    index += part.length + delimiter.length;

    // Record the alternate.
    array.push(alternate);
  }
}

// Parse a part of a pattern. The `next` regular expression is replaced when we
// match bit packing patterns, with a regular expression that excludes modifiers
// that are non-applicable to bit packing patterns.
function parse (pattern, part, index, bits, next) {
  var fields = [], lengthEncoded = false, rest, $, position = 0;

  next = next || /^(-?)([xbl])(\d+)([fa]?)(.*)$/;

  // We chip away at the pattern, removing the parts we've matched, while keeping
  // track of the index separately for error messages.
  rest = part
  for (;;) {
    // Match a packet pattern.
    $ = next.exec(rest);

    // The 6th field is a trick to reuse this method for bit packing patterns
    // which are limited in what they can do. For bit packing the 5th pattern
    // will match the rest only if it begins with a comma or named field arrow,
    // otherwise it falls to the 6th which matches.
    if (!$)
      throw new Error(error("invalid pattern", pattern, index));
    if ($[6])
      throw new Error(error("invalid pattern", pattern, index + rest.length - $[6].length));

    // The remainder of the pattern, if any.
    rest = $[5]

    // Convert the match into an object.
    var f =
    { signed:     !!$[1] || $[4] == "f"
    , endianness: $[2]
    , bits:       parseInt($[3], 10)
    , type:       $[4] || 'n'
    };

    // Move the character position up to the bit count.
    if ($[1]) index++;
    index++;

    // Check for a valid character
    if (f.bits == 0)
      throw new Error(error("bit size must be non-zero", pattern, index));
    if (f.bits % bits)
      throw new Error(error("bit size must be divisible by " + bits, pattern, index));
    if (f.type == "f" && !(f.bits == 32 || f.bits == 64))
      throw Error(error("floats can only be 32 or 64 bits", pattern, index));

    // Move the character position up to the rest of the pattern.
    index += $[3].length;
    if ($[4]) index++;

    // Set the implicit fields. Unpacking logic is inconsistent between bits and
    // bytes, but not applicable for bits anyway.
    if (f.bits > 64 && f.type == "n") f.type = "a";
    f.bytes = f.bits / bits
    f.exploded = !!(f.signed || f.bytes > 8 || ~"ha".indexOf(f.type));


    // Check for bit backing. The intense rest pattern in the regex allows us to
    // skip over a nested padding specifier in the bit packing pattern, nested
    // curly brace matching for a depth of one.
    if ($ = /^{((?:-b|b|x)(?:[^{}]+|{[^}]+})+)}(\s*,.*|\s*)$/.exec(rest)) {
      index++

      var packIndex = index;

      f.packing   = parse(pattern, $[1], index, 1, re["pack" /*
        ^       // start
        (-?)    // sign
        ([xb])  // skip or big-endian
        (\d+)   // bits
        ()      // never a modifier
        (       // valid tokens following size
          \s*     // optional whitespace followed by
          (?:
            ,     // a comma to continue the pattern
            |
            =>    // a name specifier
            |
            {\d   // a fill character specifier
          )
          .*    // the rest of the pattern
          |
        )
        (.*)    // match everything if the previous match misses
        $
      */]);
      rest = $[2];
      index += $[1].length + 1;

      // Check that the packed bits sum up to the size of the field into which
      // they are packed.
      var sum = f.packing.reduce(function (x, y) { return x + y.bits }, 0);

      if (sum < f.bits)
        throw new Error(error("bit pack pattern underflow", pattern, packIndex));

      if (sum > f.bits)
        throw new Error(error("bit pack pattern overflow", pattern, packIndex));

    // Check for alternation.
    } else if ($ = /^\(([^)]+)\)(.*)$/.exec(rest)) {
      f.arrayed     = true;
      var read      = $[1];
      rest          = $[2];
      var write     = null;

      // See if there is a full write pattern. If not, then the pattern will be
      // the same for reads and writes, but with possible different conditions
      // for write to match an alternate.
      if ($ = /^(\s*\/\s*)\(([^)]+)\)(.*)$/.exec(rest)) {
        var slash = $[1], write = $[2], rest = $[3];
      }

      // Parse the primary alternation pattern.
      index += 1
      alternates(pattern, f.alternation = [], read, "read", "write", ! write, index);
      index += read.length + 1;

      // Parse the full write alternation pattern, if we have one.
      if (write) {
        index += slash.length + 1
        alternates(pattern, f.alternation, write, "write", "read", false, index);
        index += write.length
      }

      // This condition will catch all, and let us know that no condition
      // matched.
      f.alternation.push({
        read: always(), write: always(), failed: true
      });

    // Neither bit packing nor alternation.
    } else{
      // Check if this is a length encoding.
      if ($ = /^\/(.*)$/.exec(rest)) {
        index++;
        f.lengthEncoding = true;
        rest = $[1];
        f.arrayed = false;
        f.repeat = 1;
        lengthEncoded = true;
        fields.push(f);
        // Nothing else can apply to a length encoding.
        continue;
      }

      f.repeat = 1;
      f.arrayed = lengthEncoded;
      if (! lengthEncoded) {
        // Check for structure modifiers.
        if ($ = /^\[(\d+)\](.*)$/.exec(rest)) {
          f.arrayed = true
          f.repeat = parseInt($[1], 10)
          index++
          if (f.repeat == 0)
            throw new Error(error("array length must be non-zero", pattern, index));
          index += $[1].length + 1
          rest = $[2]
        }
      }

      // Check for a padding value.
      if ($ = /^({\s*)((0x|0)?([a-f\d]+)\s*})(.*)$/i.exec(rest)) {
        var before = $[1], after = $[2], base = $[3], pad = $[4], rest = $[5];
        index += before.length;
        if (isNaN(f.padding = parseInt(pad, BASE[base]))) {
          throw new Error(error("invalid number format", pattern, index));
        }
        index += after.length;
      }

      // Check for zero termination.
      if ($ = /^z(?:<(.*?>))?(.*)$/.exec(rest)) {
        index++
        rest = $[2];
        if ($[1] != null) {
          index++;
          f.terminator = [];
          var terminator = $[1];
          for (;;) {
            $ = re["terminator" /*
              ^         // start
              (\s*)     // skip whitespace
              (?:
                0x([A-F-a-f00-9]{2})  // hex
                |
                (\d+)                 // decimal
              )
              (\s*)     // skip whitespace
              ([,>])    // separator for next value or close
              (.*)      // rest
              $         // end
            */].exec(terminator);
            if (!$)
              throw new Error(error("invalid terminator value", pattern, index));
            var before = $[1], hex = $[2], decimal = $[3], after = $[4],
                delimiter = $[5], terminator = $[6];
            index += before.length;
            var numberIndex = index;
            if (hex) {
              var value = parseInt(hex, 16);
              index += hex.length + 2;
            } else {
              var value = parseInt(decimal, 10);
              index += decimal.length;
            }
            if (value > 255)
              throw new Error(error("terminator value out of range", pattern, numberIndex));
            index += after.length;
            index += delimiter.length;
            f.terminator.push(value);
            if (delimiter == ">") {
              index += terminator.length
              break
            }
          }
        } else {
          f.terminator = [ 0 ];
        }
        f.arrayed = true;
        if (f.repeat == 1) f.repeat = Number.MAX_VALUE;
      }

      // Parse pipelines.
      while ($ = /^\|(\w[\w\d]*)\((\)?)(.*)/.exec(rest)) {
        index          += rest.length - $[3].length;
        var transform       = { name: $[1], parameters: [] };
        rest            = $[3];
        var hasArgument     = ! $[2];

        // Regular expression to match a pipeline argument, expressed as a
        // JavaScript scalar, taken in part from
        // [json2.js](http://www.JSON.org/json2.js).
        while (hasArgument) {
          $ = re["scalar" /*
            ( '(?:[^\\']|\\.)+'|"(?:[^\\"]|\\.)+"   // string
            | true | false                          // boolean
            | null                                  // null
            | -?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?     // number
            )
            (\s*,\s*|\s*\))?                        // remaining arguments
            (.*)                                    // remaining pattern
          */].exec(rest);
          index += rest.length - $[3].length;
          value = eval($[1]);
          hasArgument = $[2].indexOf(")") == -1;
          rest = $[3];

          transform.parameters.push(value)
        }

        if (!f.pipeline) f.pipeline = [];
        f.pipeline.push(transform)
      }

      // Named pattern.
      if ($ = /^\s*=>\s*(\w[\w\d]*)\s*(.*)/.exec(rest)) {
        index += rest.length - $[2].length;
        f.name = $[1];
        rest = $[2];
        f.named = true;
      } else {
        f.name = 'field' + (position ++);
      }
    }

    // Record the new field pattern object.
    fields.push(f);

    // A comma indicates that we're to continue.
    if (!($ = /^(\s*,\s*)(.*)$/.exec(rest))) break;

    // Reset for the next iteration.
    index += $[1].length;
    rest = $[2];
    lengthEncoded = false
  }
  if (/\S/.test(rest))
    throw  new Error(error("invalid pattern", pattern, index));

  return fields;
}

//#### parse(pattern)
// Parse a pattern and create a list of fields.

// The `pattern` is the pattern to parse.
module.exports.Q = function (pattern) {
  var part = pattern.replace(/\n/g, " ").replace(/^\s+/, "")
    , index = pattern.length - part.length;
  return parse(pattern, part, index, 8);
}


/***/ }),

/***/ 2130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(2037);
const tty = __webpack_require__(6224);
const hasFlag = __webpack_require__(6560);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 3567:
/***/ ((module, exports, __webpack_require__) => {

/*
Copyright (c) 2016, William Viker <william.viker@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

var debug        = __webpack_require__(5158)("tsl-umd");
var util         = __webpack_require__(3837);
var EventEmitter = (__webpack_require__(2361).EventEmitter);
var dgram        = __webpack_require__(1891);
var packet       = __webpack_require__(4762);


function tslumd(port) {

	var self = this;

	self.port = port;
	self.parser = packet.createParser();
	self.server = dgram.createSocket('udp4');
	self.parser.packet('tsl', 'b8{x1, b7 => address},b8{x2, b2 => brightness, b1 => tally4, b1 => tally3, b1 => tally2, b1 => tally1 }, b8[16] => label');

	self.server.on('error', (err) => {
		debug('error',err);
		throw err;
		self.server.close();
	});

	self.server.on('message', (msg, rinfo) => {
		self.parser.extract("tsl", function (res) {
			res.label = new Buffer(res.label).toString();
			res.sender = rinfo.address;
			self.emit('message', res);
		});
		self.parser.parse(msg);
	});

	self.server.on('listening', () => {
		var address = self.server.address();
		console.log(`server listening ${address.address}:${address.port}`);
	});

	self.server.bind(self.port);

}

util.inherits(tslumd, EventEmitter);

exports = module.exports = tslumd;


/***/ }),

/***/ 5144:
/***/ ((module) => {

module.exports = {

	initActions() {
		let self = this; // required to have reference to outer `this`
		let actions = {};

		this.setActionDefinitions(actions);
	},
}


/***/ }),

/***/ 5965:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {InstanceStatus } = __webpack_require__(8049);

const TSLUMD 					= __webpack_require__(3567); // TSL 3.1 UDP package
//const TSLUMDv5                  = require('tsl-umd-v5');
const net 						= __webpack_require__(1808);
const packet 					= __webpack_require__(4762);

module.exports = {

	openPort() {
		let self = this; // required to have reference to outer `this`
		
		const port = self.config.port
		const portType = self.config.porttype
		const protocol = self.config.protocol

		switch(protocol) {
			case 'tsl3.1':
				setupTSL31(self, port, portType);
				break;
			case 'tsl4.0':
				break;
			case 'tsl5.0':
				break;
			default:
				break;
		}

		self.oldPortType = portType;
	},

	closePort() {
		let self = this; // required to have reference to outer `this`
		
		let port = self.config.port;
		let portType = self.oldPortType == '' ? self.config.porttype : self.oldPortType;

		if (self.SERVER !== undefined) {
			try {
				switch(portType) {
					case 'udp':
						self.log('info', `Closing TSL UMD UDP Port.`);
						self.SERVER.close();
						break;
					case 'tcp':
						self.log('info', `Closing TSL UMD TCP Port.`);
						if (self.SERVER.server !== undefined) {
							self.SERVER.server.close(function() {});
						}
						break;
					default:
						break;
				}

				self.SERVER = undefined;
			}
			catch(error) {
				self.log('error', 'Error occurred closing Tally listener port: ' + error.toString());
				self.setVariableValues({'module_state': 'Error - See Log.'});
			}
		}
	}
}

function setupTSL31(self, port, portType) {
	try {
		if (portType == 'udp') {
			self.SERVER = new TSLUMD(port);
			self.log('info', `TSL 3.1 Server started. Listening for data on UDP Port: ${port}`);
			self.SERVER.on('message', function(tally) {
				processTSL31Tally.bind(self)(tally);
			});
		}
		else if (portType == 'tcp') {
			let parser = packet.createParser();
			parser.packet('tsl', 'b8{x1, b7 => address},b8{x2, b2 => brightness, b1 => tally4, b1 => tally3, b1 => tally2, b1 => tally1 }, b8[16] => label');

			self.SERVER = net.createServer(function (socket) {
				socket.on('data', function (data) {
					parser.extract('tsl', function (result) {
						result.label = new Buffer.from(result.label).toString().trim();
						processTSL31Tally.bind(self)(result);
					});
					parser.parse(data);
				});

				socket.on('close', function () {
					self.log('debug', `TSL 3.1 TCP Server connection closed.`);
				});
			})
			.on('error', (err) => {
				let error = err.toString();

				Object.keys(err).forEach(function(key) {
					if (key === 'code') {
						if (err[key] === 'EADDRINUSE') {
							error = 'This port (' + port + ') is already in use. Choose another port.';
						}
					}
				});

				self.log('error', error);
			})
			.listen(port, function() {
				self.log('info', `TSL 3.1 Server started. Listening for data on TCP Port: ${port}`);
			});
		}
	}
	catch(error) {
		self.log('error', 'Error occurred setting up Tally Listener: ' + error.toString());
		self.setVariableValues({'module_state': 'Error - See Log.'});
	}
}

function processTSL31Tally(tally) {
	let self = this;

	let found = false;

	if (self.CHOICES_TALLYADDRESSES.length > 0 && self.CHOICES_TALLYADDRESSES[0].id == -1) { //if the choices list is still set to default, go ahead and reset it
		self.CHOICES_TALLYADDRESSES = [];
	}

	for (let i = 0; i < self.TALLIES.length; i++) {
		if (self.TALLIES[i].address == tally.address) {
			self.TALLIES[i].tally1 = tally.tally1;
			self.TALLIES[i].tally2 = tally.tally2;
			self.TALLIES[i].label = tally.label.trim().replace(self.config.filter, '');

			found = true;
			break;
		}
	}

	if (!found) {
		let tallyObj = {};
		tallyObj.address = tally.address;
		tallyObj.tally1 = tally.tally1;
		tallyObj.tally2 = tally.tally2;
		tallyObj.label = tally.label.trim().replace(self.config.filter, '');

		self.TALLIES.push(tallyObj);
		self.TALLIES.sort((a, b) => a.address - b.address);
		
		self.CHOICES_TALLYADDRESSES.push(
			{
				id: tally.address,
				label: tally.address + ' (' + tally.label.trim().replace(self.config.filter, '') + ')'
			}
		);

		self.CHOICES_TALLYADDRESSES.sort((a, b) => a.id - b.id);

		self.initVariables();
		self.initFeedbacks();
	}

	self.updateStatus(InstanceStatus.Ok);
	self.setVariableValues({'module_state': 'Tally Data Received.'});

	self.checkVariables();
	self.checkFeedbacks();
}

/***/ }),

/***/ 9182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Regex } = __webpack_require__(8049)

module.exports = {
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module listens to incoming TSL UMD data at the TCP or UDP port specified and updates Feedbacks and Variables accordingly.'
			},
			{
				type: 'number',
				id: 'port',
				width: 6,
				label: 'Listening Port',
				default: '9800',
				regex: this.REGEX_PORT
			},
			{
				type: 'dropdown',
				id: 'porttype',
				width: 8,
				default: 'udp',
				label: 'Port Type',
				choices: [
					{ id: 'tcp', label: 'TCP' },
					{ id: 'udp', label: 'UDP' },
				]
			},
			{
				type: 'dropdown',
				id: 'protocol',
				width: 8,
				default: 'tsl3.1',
				label: 'TSL Protcol Version',
				choices: [
					{ id: 'tsl3.1', label: 'TSL 3.1' },
					//{ id: 'tsl4.0', label: 'TSL 4.0' },
					//{ id: 'tsl5.0', label: 'TSL 5.0' }
				]
			},
			{
				type: 'static-text',
				id: 'dummy2',
				width: 12,
				label: ' ',
				value: ' ',
			},
			{
				type: 'textinput',
				id: 'filter',
				width: 6,
				label: 'Label Filter',
				tooltip: 'If the UMD label contains this text, remove it',
				default: ' (FSFC)',
			},
			{
				type: 'static-text',
				id: 'dummy3',
				width: 12,
				label: ' ',
				value: ' ',
			},
			{
				type: 'checkbox',
				id: 'verbose',
				label: 'Enable Verbose Logging',
				default: false
			}
		]
	},
}


/***/ }),

/***/ 7417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { combineRgb } = __webpack_require__(8049);

module.exports = {
    initFeedbacks() {
        let self = this;
        const feedbacks = {};

        const foregroundColorWhite = combineRgb(255, 255, 255) // White
        const foregroundColorBlack = combineRgb(0, 0, 0) // Black
        const backgroundColorRed = combineRgb(255, 0, 0) // Red
        const backgroundColorGreen = combineRgb(0, 255, 0) // Green
        const backgroundColorOrange = combineRgb(255, 102, 0) // Orange

        feedbacks['tallyState'] = {
            type: 'boolean',
            name: 'Show Tally State On Button',
            description: 'Indicate if Selected Address Tally is in X State',
            style: {
                color: foregroundColorWhite,
                bgcolor: backgroundColorRed,
            },
            options: [
				{
                    type: 'dropdown',
                    label: 'Tally Address',
                    id: 'address',
                    default: self.CHOICES_TALLYADDRESSES[0].id,
                    choices: self.CHOICES_TALLYADDRESSES
                },
				{
                    type: 'dropdown',
                    label: 'Tally Number',
                    id: 'number',
                    default: 'tally2',
                    choices: [
                        { id: 'tally1', label: 'PVW' },
						{ id: 'tally2', label: 'PGM' },
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Indicate in X Status',
                    id: 'state',
                    default: 1,
                    choices: [
                        { id: 0, label: 'Off' },
                        { id: 1, label: 'On' }
                    ]
                }
            ],
            callback: function (feedback) {
                let opt = feedback.options;

				let tallyObj = self.TALLIES.find((tally) => tally.address == opt.address);
				
				if (tallyObj) {
					if (tallyObj[opt.number] == opt.state) {
						return true;
					}
				}			

                return false;
            }
        }

        self.setFeedbackDefinitions(feedbacks);
    }
}

/***/ }),

/***/ 3125:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { combineRgb } = __webpack_require__(8049);

module.exports = {
	initPresets() {
		let self = this;
		
		const presets = []

		for (let i = 0; i < self.TALLIES.length; i++) {
			presets.push({
				type: 'button',
				category: 'Tally State',
				name: `${self.TALLIES[i].label} Tally State`,
				style: {
					text: `$(tslumd-listener:tally_${self.TALLIES[i].address}_label)`,
					size: '18',
					color: '16777215',
					bgcolor: combineRgb(0, 0, 0)
				},
				steps: [],
				feedbacks: [
					{
						feedbackId: 'tallyState',
						options: {
							address: self.TALLIES[i].address,
							number: 'tally1',
							option: 1
						},
						style: {
							color: foregroundColor,
							bgcolor: backgroundColorGreen
						}
					},
					{
						feedbackId: 'tallyState',
						options: {
							address: self.TALLIES[i].address,
							number: 'tally2',
							option: 1
						},
						style: {
							color: foregroundColor,
							bgcolor: backgroundColorRed
						}
					}
				]
			});
		}

		self.setPresetDefinitions(presets);
	},
}


/***/ }),

/***/ 4556:
/***/ ((module) => {

module.exports = [
	function (context, props) {
		// This is a placeholder than now cannot be used/removed
		return {
			updatedConfig: null,
			updatedActions: [],
			updatedFeedbacks: [],
		}
	},
]

/***/ }),

/***/ 4049:
/***/ ((module) => {

module.exports = {
	initVariables() {
		let self = this;

		let variables = [
			{ name: 'Module State', variableId: 'module_state'},
		]

		for (let i = 0; i < self.TALLIES.length; i++) {
			variables.push( { name: `Tally ${self.TALLIES[i].address} Label`, variableId: `tally_${self.TALLIES[i].address}_label`});
			variables.push( { name: `Tally ${self.TALLIES[i].address} PVW`, variableId: `tally_${self.TALLIES[i].address}_pvw`});
			variables.push( { name: `Tally ${self.TALLIES[i].address} PGM`, variableId: `tally_${self.TALLIES[i].address}_pgm`});
		}

		self.setVariableDefinitions(variables);
	},

	checkVariables() {
		let self = this;
		
		try {
			let variableObj = {};

			for (let i = 0; i < self.TALLIES.length; i++) {
				variableObj[`tally_${self.TALLIES[i].address}_label`] = self.TALLIES[i].label;
				variableObj[`tally_${self.TALLIES[i].address}_pvw`] = (self.TALLIES[i].tally1 == 1 ? 'True' : 'False');
				variableObj[`tally_${self.TALLIES[i].address}_pgm`] = (self.TALLIES[i].tally2 == 1 ? 'True' : 'False');
			}

			self.setVariableValues(variableObj);
		}
		catch(error) {
			//do something with that error
			if (self.config.verbose) {
				self.log('debug', 'Error Updating Variables: ' + error);
			}
		}
	}
}

/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 1891:
/***/ ((module) => {

"use strict";
module.exports = require("dgram");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1405:
/***/ ((module) => {

"use strict";
module.exports = require("inspector");

/***/ }),

/***/ 1808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 6224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 2764:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Warning: these types are used in various stable apis.
 * BE VERY CAREFUL WHEN MAKING CHANGES
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=osc.js.map

/***/ }),

/***/ 7359:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runEntrypoint = void 0;
const tslib_1 = __webpack_require__(7582);
/* eslint-disable no-process-exit */
const versions_1 = __webpack_require__(9913);
const promises_1 = tslib_1.__importDefault(__webpack_require__(3292));
const util_1 = __webpack_require__(2068);
const node_1 = __webpack_require__(9938);
__webpack_require__(5605);
const ipc_wrapper_1 = __webpack_require__(8221);
const path_1 = tslib_1.__importDefault(__webpack_require__(1017));
let hasEntrypoint = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let moduleInstance;
// async function readFileUrl(url: URL): Promise<string> {
// 	// Hack to make json files be loadable after being inlined by webpack
// 	const prefix = 'application/json;base64,'
// 	if (url.pathname.startsWith(prefix)) {
// 		const base64 = url.pathname.substring(prefix.length)
// 		return Buffer.from(base64, 'base64').toString()
// 	}
// 	// Fallback to reading from disk
// 	const buf = await fs.readFile(url)
// 	return buf.toString()
// }
/**
 * Setup the module for execution
 * This should be called once per-module, to register the class that should be executed
 * @param factory The class for the module
 * @param upgradeScripts Upgrade scripts
 */
function runEntrypoint(factory, upgradeScripts) {
    Promise.resolve()
        .then(async () => {
        // const pkgJsonStr = (await fs.readFile(path.join(__dirname, '../package.json'))).toString()
        // const pkgJson = JSON.parse(pkgJsonStr)
        // if (!pkgJson || pkgJson.name !== '@companion-module/base')
        // 	throw new Error('Failed to find the package.json for @companion-module/base')
        // if (!pkgJson.version) throw new Error('Missing version field in the package.json for @companion-module/base')
        // Ensure only called once per module
        if (hasEntrypoint)
            throw new Error(`runEntrypoint can only be called once`);
        hasEntrypoint = true;
        const manifestPath = process.env.MODULE_MANIFEST;
        if (!manifestPath)
            throw new Error('Module initialise is missing MODULE_MANIFEST');
        // check manifest api field against apiVersion
        const manifestBlob = await promises_1.default.readFile(manifestPath);
        const manifestJson = JSON.parse(manifestBlob.toString());
        if (manifestJson.runtime?.api !== versions_1.HostApiNodeJsIpc)
            throw new Error(`Module manifest 'api' mismatch`);
        if (!manifestJson.runtime.apiVersion)
            throw new Error(`Module manifest 'apiVersion' missing`);
        let apiVersion = manifestJson.runtime.apiVersion;
        if (apiVersion === '0.0.0') {
            // It looks like the module is in dev mode. lets attempt to load the package.json from this module instead
            try {
                const baseJsonStr = await promises_1.default.readFile(path_1.default.join(__dirname, '../package.json'));
                const baseJson = JSON.parse(baseJsonStr.toString());
                if (baseJson.name === '@companion-module/base') {
                    apiVersion = baseJson.version;
                }
            }
            catch (e) {
                throw new Error('Failed to determine module api version');
            }
        }
        if (!process.send)
            throw new Error('Module is not being run with ipc');
        console.log(`Starting up module class: ${factory.name}`);
        const connectionId = process.env.CONNECTION_ID;
        if (typeof connectionId !== 'string' || !connectionId)
            throw new Error('Module initialise is missing CONNECTION_ID');
        const verificationToken = process.env.VERIFICATION_TOKEN;
        if (typeof verificationToken !== 'string' || !verificationToken)
            throw new Error('Module initialise is missing VERIFICATION_TOKEN');
        // Allow the DSN to be provided as an env variable
        const sentryDsn = process.env.SENTRY_DSN;
        const sentryUserId = process.env.SENTRY_USERID;
        const sentryCompanionVersion = process.env.SENTRY_COMPANION_VERSION;
        if (sentryDsn && sentryUserId && sentryDsn.substring(0, 8) == 'https://') {
            console.log('Sentry enabled');
            (0, node_1.init)({
                dsn: sentryDsn,
                release: `${manifestJson.name}@${manifestJson.version}`,
                beforeSend(event) {
                    if (event.exception) {
                        console.log('sentry', 'error', event.exception);
                    }
                    return event;
                },
            });
            (0, node_1.configureScope)((scope) => {
                scope.setUser({ id: sentryUserId });
                scope.setTag('companion', sentryCompanionVersion);
            });
        }
        else {
            console.log('Sentry disabled');
        }
        const ipcWrapper = new ipc_wrapper_1.IpcWrapper({}, (msg) => {
            process.send(msg);
        }, 5000);
        process.once('message', (msg) => {
            ipcWrapper.receivedMessage(msg);
        });
        moduleInstance = new factory((0, util_1.literal)({
            id: connectionId,
            upgradeScripts,
            _isInstanceBaseProps: true,
        }));
        ipcWrapper.sendWithCb('register', { apiVersion, connectionId, verificationToken }).then(() => {
            console.log(`Module-host accepted registration`);
        }, (err) => {
            console.error('Module registration failed', err);
            // Kill the process
            process.exit(11);
        });
    })
        .catch((e) => {
        console.error(`Failed to startup module:`);
        console.error(e.stack || e.message);
        process.exit(1);
    });
}
exports.runEntrypoint = runEntrypoint;
//# sourceMappingURL=entrypoint.js.map

/***/ }),

/***/ 1972:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UDPHelper = exports.TelnetHelper = exports.TCPHelper = void 0;
var tcp_1 = __webpack_require__(9159);
Object.defineProperty(exports, "TCPHelper", ({ enumerable: true, get: function () { return tcp_1.TCPHelper; } }));
var telnet_1 = __webpack_require__(6226);
Object.defineProperty(exports, "TelnetHelper", ({ enumerable: true, get: function () { return telnet_1.TelnetHelper; } }));
var udp_1 = __webpack_require__(8473);
Object.defineProperty(exports, "UDPHelper", ({ enumerable: true, get: function () { return udp_1.UDPHelper; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9159:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * This file is part of the Companion project
 * Copyright (c) 2018 Bitfocus AS
 * Authors: William Viker <william@bitfocus.io>, Håkon Nessjøen <haakon@bitfocus.io>
 *
 * This program is free software.
 * You should have received a copy of the MIT licence as well as the Bitfocus
 * Individual Contributor License Agreement for companion along with
 * this program.
 *
 * You can be released from the requirements of the license by purchasing
 * a commercial license. Buying such a license is mandatory as soon as you
 * develop commercial activities involving the Companion software without
 * disclosing the source code of your own applications.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TCPHelper = void 0;
const tslib_1 = __webpack_require__(7582);
const net_1 = tslib_1.__importDefault(__webpack_require__(1808));
const eventemitter3_1 = __webpack_require__(6729);
const enums_1 = __webpack_require__(609);
class TCPHelper extends eventemitter3_1.EventEmitter {
    #host;
    #port;
    _socket;
    #options;
    #connected = false;
    #connecting = false;
    #destroyed = false;
    #lastStatus;
    #reconnectTimer;
    get isConnected() {
        return this.#connected;
    }
    get isConnecting() {
        return this.#connecting;
    }
    get isDestroyed() {
        return this.#destroyed;
    }
    constructor(host, port, options) {
        super();
        this.#host = host;
        this.#port = port;
        this.#options = {
            reconnect_interval: 2000,
            reconnect: true,
            ...options,
        };
        this._socket = new net_1.default.Socket();
        this._socket.setKeepAlive(true);
        this._socket.setNoDelay(true);
        this._socket.on('error', (err) => {
            this.#connecting = false;
            this.#connected = false;
            if (this.#options.reconnect) {
                this.#queueReconnect();
            }
            this.#new_status(enums_1.InstanceStatus.UnknownError, err.message);
            this.emit('error', err);
        });
        this._socket.on('ready', () => {
            this.#connected = true;
            this.#connecting = false;
            this.#new_status(enums_1.InstanceStatus.Ok);
            this.emit('connect');
        });
        this._socket.on('end', () => {
            this.#connected = false;
            this.#new_status(enums_1.InstanceStatus.Disconnected);
            if (!this.#connecting && this.#options.reconnect) {
                this.#queueReconnect();
            }
            this.emit('end');
        });
        this._socket.on('data', (data) => this.emit('data', data));
        this._socket.on('drain', () => this.emit('drain'));
        // Let caller install event handlers first
        setImmediate(() => this.connect());
        setTimeout(() => {
            if (!this.#destroyed && !this.listenerCount('error')) {
                // The socket is active and has no listeners. Log an error for the module devs!
                console.error(`Danger: TCP client for ${this.#host}:${this.#port} is missing an error handler!`);
            }
        }, 5000);
    }
    connect() {
        if (this.#destroyed)
            throw new Error('Cannot connect destroyed socket');
        if (this.#connecting)
            return false;
        this.#connecting = true;
        this._socket.connect(this.#port, this.#host);
        return true;
    }
    async send(message) {
        if (this.#destroyed || this._socket.destroyed)
            throw new Error('Cannot write to destroyed socket');
        if (!message || !message.length)
            throw new Error('No message to send');
        if (!this.#connected) {
            return false;
        }
        try {
            return new Promise((resolve, reject) => {
                this._socket.write(message, (error) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(true);
                });
            });
        }
        catch (error) {
            this.#connected = false;
            const error2 = error instanceof Error ? error : new Error(`${error}`);
            // Unhandeled socket error
            this.#new_status(enums_1.InstanceStatus.UnknownError, error2.message);
            this.emit('error', error2);
            throw error2;
        }
    }
    destroy() {
        this.#destroyed = true;
        if (this.#reconnectTimer !== undefined) {
            clearTimeout(this.#reconnectTimer);
        }
        this._socket.removeAllListeners();
        this.removeAllListeners();
        this._socket.destroy();
    }
    #queueReconnect() {
        if (this.#reconnectTimer !== undefined) {
            clearTimeout(this.#reconnectTimer);
        }
        this.#reconnectTimer = setTimeout(() => {
            this.#reconnectTimer = undefined;
            this.#new_status(enums_1.InstanceStatus.Connecting);
            this.connect();
        }, this.#options.reconnect_interval);
    }
    // Private function
    #new_status(status, message) {
        if (this.#lastStatus != status) {
            this.#lastStatus = status;
            this.emit('status_change', status, message);
        }
    }
}
exports.TCPHelper = TCPHelper;
//# sourceMappingURL=tcp.js.map

/***/ }),

/***/ 6226:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * This file is part of the Companion project
 * Copyright (c) 2018 Bitfocus AS
 * Authors: William Viker <william@bitfocus.io>, Håkon Nessjøen <haakon@bitfocus.io>
 *
 * This program is free software.
 * You should have received a copy of the MIT licence as well as the Bitfocus
 * Individual Contributor License Agreement for companion along with
 * this program.
 *
 * You can be released from the requirements of the license by purchasing
 * a commercial license. Buying such a license is mandatory as soon as you
 * develop commercial activities involving the Companion software without
 * disclosing the source code of your own applications.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TelnetHelper = void 0;
const tslib_1 = __webpack_require__(7582);
const eventemitter3_1 = tslib_1.__importDefault(__webpack_require__(6729));
const stream_1 = __webpack_require__(2781);
const tcp_1 = __webpack_require__(9159);
// const NULL = 0
const DATA = 0;
const SE = 240;
const SB = 250;
const WILL = 251;
const WONT = 252;
const DO = 253;
const DONT = 254;
const IAC = 255;
class TelnetHelper extends eventemitter3_1.default {
    #tcp;
    #stream;
    get isConnected() {
        return this.#tcp.isConnected;
    }
    get isConnecting() {
        return this.#tcp.isConnecting;
    }
    get isDestroyed() {
        return this.#tcp.isDestroyed;
    }
    constructor(host, port, options) {
        super();
        this.#tcp = new tcp_1.TCPHelper(host, port, options);
        this.#stream = new TelnetStream();
        this.#tcp._socket.pipe(this.#stream);
        this.#tcp.on('connect', () => this.emit('connect'));
        this.#tcp.on('end', () => this.emit('end'));
        this.#tcp.on('error', (error) => this.emit('error', error));
        this.#tcp.on('status_change', (status, message) => this.emit('status_change', status, message));
        // Ignore drain and data, they go via the stream
        this.#stream.on('iac', (a, b) => this.emit('iac', a, b));
        this.#stream.on('sb', (buffer) => this.emit('sb', buffer));
        this.#stream.on('data', (data) => this.emit('data', data));
        this.#stream.on('drain', () => this.emit('drain'));
        setTimeout(() => {
            if (!this.isDestroyed && !this.listenerCount('error')) {
                // The socket is active and has no listeners. Log an error for the module devs!
                console.error(`Danger: Telnet client for ${host}:${port} is missing an error handler!`);
            }
        }, 5000);
    }
    connect() {
        return this.#tcp.connect();
    }
    async send(message) {
        return this.#tcp.send(message);
    }
    destroy() {
        this.#tcp.destroy();
        this.#stream.removeAllListeners();
        this.#stream.destroy();
    }
}
exports.TelnetHelper = TelnetHelper;
/*
 * TelnetStream
 */
class TelnetStream extends stream_1.Transform {
    #buffer;
    #subbuffer;
    #state;
    constructor(options) {
        super(options);
        this.#buffer = Buffer.alloc(0);
        this.#subbuffer = Buffer.alloc(0);
        this.#state = DATA;
    }
    _transform(obj, _encoding, callback) {
        for (let i = 0; i < obj.length; ++i) {
            this.#handleByte(obj[i]);
        }
        const data = this.#getData();
        if (data.length) {
            this.push(data);
        }
        callback();
    }
    #handleByte(byte) {
        if (this.#state === DATA) {
            if (byte === IAC) {
                this.#state = IAC;
                return;
            }
            this.#buffer = Buffer.concat([this.#buffer, Buffer.from([byte])]);
        }
        else if (this.#state === IAC) {
            switch (byte) {
                case SB:
                case WILL:
                case WONT:
                case DO:
                case DONT:
                    this.#state = byte;
                    break;
                default:
                    this.#state = DATA;
                    break;
            }
        }
        else if (this.#state >= WILL && this.#state <= DONT) {
            let iac = undefined;
            switch (this.#state) {
                case WILL:
                    iac = 'WILL';
                    break;
                case WONT:
                    iac = 'WONT';
                    break;
                case DO:
                    iac = 'DO';
                    break;
                case DONT:
                    iac = 'DONT';
                    break;
                default:
                    // never hit
                    return;
            }
            this.emit('iac', iac, byte);
            this.#state = DATA;
            return;
        }
        else if (this.#state === SB) {
            if (byte === SE) {
                this.emit('sb', this.#subbuffer);
                this.#state = DATA;
                this.#subbuffer = Buffer.alloc(0);
                return;
            }
            this.#subbuffer = Buffer.concat([this.#subbuffer, Buffer.from([byte])]);
        }
    }
    #getData() {
        const buff = this.#buffer;
        this.#buffer = Buffer.alloc(0);
        return buff;
    }
}
//# sourceMappingURL=telnet.js.map

/***/ }),

/***/ 8473:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * This file is part of the Companion project
 * Copyright (c) 2018 Bitfocus AS
 * Authors: William Viker <william@bitfocus.io>, Håkon Nessjøen <haakon@bitfocus.io>
 *
 * This program is free software.
 * You should have received a copy of the MIT licence as well as the Bitfocus
 * Individual Contributor License Agreement for companion along with
 * this program.
 *
 * You can be released from the requirements of the license by purchasing
 * a commercial license. Buying such a license is mandatory as soon as you
 * develop commercial activities involving the Companion software without
 * disclosing the source code of your own applications.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UDPHelper = void 0;
const tslib_1 = __webpack_require__(7582);
const dgram_1 = tslib_1.__importDefault(__webpack_require__(1891));
const eventemitter3_1 = __webpack_require__(6729);
const enums_1 = __webpack_require__(609);
class UDPHelper extends eventemitter3_1.EventEmitter {
    #host;
    #port;
    #socket;
    #options;
    #destroyed = false;
    #lastStatus;
    get isDestroyed() {
        return this.#destroyed;
    }
    constructor(host, port, options) {
        super();
        this.#host = host;
        this.#port = port;
        this.#options = { ...options };
        // this.bound = false
        // this.pending_memberships = []
        this.#socket = dgram_1.default.createSocket('udp4');
        try {
            this.#socket.bind(this.#options.bind_port || 0, this.#options.bind_ip);
        }
        catch (e) {
            throw new Error(`Unable to bind to ip/port: ${this.#options.bind_ip}:${this.#options.bind_port}`);
        }
        if (this.#options.broadcast) {
            this.#socket.setBroadcast(true);
        }
        if (this.#options.ttl !== undefined) {
            this.#socket.setTTL(this.#options.ttl);
        }
        if (this.#options.multicast_ttl !== undefined) {
            this.#socket.setMulticastTTL(this.#options.multicast_ttl);
        }
        this.#socket.on('error', (error) => {
            this.#new_status(enums_1.InstanceStatus.UnknownError, error.message);
            this.emit('error', error);
        });
        this.#socket.on('listening', () => {
            // this.bound = true
            // if (this.pending_memberships.length) {
            // 	while (this.pending_memberships.length > 0) {
            // 		this.socket.addMembership(member.shift())
            // 	}
            // }
            if (this.#options.multicast_interface) {
                this.#socket.setMulticastInterface(this.#options.multicast_interface);
            }
            this.#new_status(enums_1.InstanceStatus.Ok);
            this.emit('listening');
        });
        this.#socket.on('message', (data) => this.emit('data', data));
        setTimeout(() => {
            if (!this.#destroyed && !this.listenerCount('error')) {
                // The socket is active and has no listeners. Log an error for the module devs!
                console.error(`Danger: UDP socket for ${this.#host}:${this.#port} is missing an error handler!`);
            }
        }, 5000);
    }
    async send(message) {
        if (this.#destroyed)
            throw new Error('Cannot write to destroyed socket');
        if (!message || !message.length)
            throw new Error('No message to send');
        return new Promise((resolve, reject) => {
            this.#socket.send(message, this.#port, this.#host, (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }
    // addMembership(member) {
    // 	if (!this.bound) {
    // 		this.pending_memberships.push(member)
    // 	} else {
    // 		this.socket.addMembership(member)
    // 	}
    // }
    destroy() {
        this.#destroyed = true;
        this.#socket.removeAllListeners();
        this.#socket.close();
        this.removeAllListeners();
    }
    // Private function
    #new_status(status, message) {
        if (this.#lastStatus != status) {
            this.#lastStatus = status;
            this.emit('status_change', status, message);
        }
    }
}
exports.UDPHelper = UDPHelper;
//# sourceMappingURL=udp.js.map

/***/ }),

/***/ 8221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IpcWrapper = void 0;
const tslib_1 = __webpack_require__(7582);
const nanoid_1 = __webpack_require__(4300);
const util_1 = __webpack_require__(2068);
const ejson_1 = tslib_1.__importDefault(__webpack_require__(2559));
class IpcWrapper {
    #handlers;
    #sendMessage;
    #defaultTimeout;
    #pendingCallbacks = {};
    constructor(handlers, sendMessage, defaultTimeout) {
        this.#handlers = handlers;
        this.#sendMessage = sendMessage;
        this.#defaultTimeout = defaultTimeout;
    }
    async sendWithCb(name, msg, defaultResponse, timeout = 0) {
        if (timeout <= 0)
            timeout = this.#defaultTimeout;
        const callbacks = { timeout: undefined, resolve: () => null, reject: () => null };
        const promise = new Promise((resolve, reject) => {
            callbacks.resolve = resolve;
            callbacks.reject = reject;
        });
        const id = (0, nanoid_1.nanoid)();
        this.#pendingCallbacks[id] = callbacks;
        this.#sendMessage({
            direction: 'call',
            name: String(name),
            payload: ejson_1.default.stringify(msg),
            callbackId: id,
        });
        // Setup a timeout, creating the error in the call, so that the stack trace is useful
        const timeoutError = new Error('Call timed out');
        callbacks.timeout = setTimeout(() => {
            callbacks.reject(defaultResponse ? defaultResponse() : timeoutError);
            delete this.#pendingCallbacks[id];
        }, timeout);
        return promise;
    }
    sendWithNoCb(name, msg) {
        this.#sendMessage({
            direction: 'call',
            name: String(name),
            payload: ejson_1.default.stringify(msg),
            callbackId: undefined,
        });
    }
    receivedMessage(msg) {
        const rawMsg = msg;
        switch (msg.direction) {
            case 'call': {
                const handler = this.#handlers[msg.name];
                if (!handler) {
                    if (msg.callbackId) {
                        this.#sendMessage({
                            direction: 'response',
                            callbackId: msg.callbackId,
                            success: false,
                            payload: ejson_1.default.stringify({ message: `Unknown command "${msg.name}"` }),
                        });
                    }
                    return;
                }
                // TODO - should anything be logged here?
                const data = msg.payload ? ejson_1.default.parse(msg.payload) : undefined;
                handler(data).then((res) => {
                    if (msg.callbackId) {
                        this.#sendMessage({
                            direction: 'response',
                            callbackId: msg.callbackId,
                            success: true,
                            payload: ejson_1.default.stringify(res),
                        });
                    }
                }, (err) => {
                    if (msg.callbackId) {
                        this.#sendMessage({
                            direction: 'response',
                            callbackId: msg.callbackId,
                            success: false,
                            payload: err instanceof Error ? JSON.stringify(err, Object.getOwnPropertyNames(err)) : ejson_1.default.stringify(err),
                        });
                    }
                });
                break;
            }
            case 'response': {
                if (!msg.callbackId) {
                    console.error(`Ipc: Response message has no callbackId`);
                    return;
                }
                const callbacks = this.#pendingCallbacks[msg.callbackId];
                delete this.#pendingCallbacks[msg.callbackId];
                if (!callbacks) {
                    // Likely timed out, we should ignore
                    return;
                }
                clearTimeout(callbacks.timeout);
                const data = msg.payload ? ejson_1.default.parse(msg.payload) : undefined;
                if (msg.success) {
                    callbacks.resolve(data);
                }
                else {
                    let err = data;
                    if (data && 'message' in data) {
                        err = new Error(data.message);
                        if (data.stack)
                            err.stack = data.stack;
                    }
                    callbacks.reject(err);
                }
                break;
            }
            default:
                (0, util_1.assertNever)(msg);
                console.error(`Ipc: Message of unknown direction "${rawMsg.direction}"`);
                break;
        }
    }
}
exports.IpcWrapper = IpcWrapper;
//# sourceMappingURL=ipc-wrapper.js.map

/***/ }),

/***/ 9913:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HostApiNodeJsIpc = void 0;
exports.HostApiNodeJsIpc = 'nodejs-ipc';
//# sourceMappingURL=versions.js.map

/***/ }),

/***/ 8049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runEntrypoint = exports.assertNever = exports.splitRgb = exports.combineRgb = exports.literal = void 0;
const tslib_1 = __webpack_require__(7582);
tslib_1.__exportStar(__webpack_require__(7517), exports);
tslib_1.__exportStar(__webpack_require__(4911), exports);
tslib_1.__exportStar(__webpack_require__(2764), exports);
var util_1 = __webpack_require__(2068);
Object.defineProperty(exports, "literal", ({ enumerable: true, get: function () { return util_1.literal; } }));
Object.defineProperty(exports, "combineRgb", ({ enumerable: true, get: function () { return util_1.combineRgb; } }));
Object.defineProperty(exports, "splitRgb", ({ enumerable: true, get: function () { return util_1.splitRgb; } }));
Object.defineProperty(exports, "assertNever", ({ enumerable: true, get: function () { return util_1.assertNever; } }));
tslib_1.__exportStar(__webpack_require__(1972), exports);
var entrypoint_1 = __webpack_require__(7359);
Object.defineProperty(exports, "runEntrypoint", ({ enumerable: true, get: function () { return entrypoint_1.runEntrypoint; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4391:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionManager = void 0;
const base_1 = __webpack_require__(2557);
function convertActionInstanceToEvent(action) {
    return {
        id: action.id,
        actionId: action.actionId,
        controlId: action.controlId,
        options: action.options,
    };
}
class ActionManager {
    #parseVariablesInString;
    #setActionDefinitions;
    #log;
    #actionDefinitions = new Map();
    #actionInstances = new Map();
    constructor(parseVariablesInString, setActionDefinitions, log) {
        this.#parseVariablesInString = parseVariablesInString;
        this.#setActionDefinitions = setActionDefinitions;
        this.#log = log;
    }
    async handleExecuteAction(msg) {
        const actionDefinition = this.#actionDefinitions.get(msg.action.actionId);
        if (!actionDefinition)
            throw new Error(`Unknown action: ${msg.action.actionId}`);
        const context = {
            parseVariablesInString: async (text) => {
                const res = await this.#parseVariablesInString({
                    text: text,
                    controlId: msg.action.controlId,
                    actionInstanceId: msg.action.id,
                    feedbackInstanceId: undefined,
                });
                return res.text;
            },
        };
        await actionDefinition.callback({
            id: msg.action.id,
            actionId: msg.action.actionId,
            controlId: msg.action.controlId,
            options: msg.action.options,
            surfaceId: msg.surfaceId ?? msg.deviceId,
            _deviceId: msg.surfaceId ?? msg.deviceId,
            _page: msg.action.page,
            _bank: msg.action.bank,
        }, context);
    }
    handleUpdateActions(actions) {
        for (const [id, action] of Object.entries(actions)) {
            const existing = this.#actionInstances.get(id);
            if (existing) {
                // Call unsubscribe
                const definition = this.#actionDefinitions.get(existing.actionId);
                if (definition?.unsubscribe) {
                    const context = {
                        parseVariablesInString: async (text) => {
                            const res = await this.#parseVariablesInString({
                                text: text,
                                controlId: existing.controlId,
                                actionInstanceId: existing.id,
                                feedbackInstanceId: undefined,
                            });
                            return res.text;
                        },
                    };
                    Promise.resolve(definition.unsubscribe(convertActionInstanceToEvent(existing), context)).catch((e) => {
                        this.#log('error', `Action unsubscribe failed: ${JSON.stringify(existing)} - ${e?.message ?? e} ${e?.stack}`);
                    });
                }
            }
            if (!action || action.disabled) {
                // Deleted
                this.#actionInstances.delete(id);
            }
            else {
                // TODO module-lib - deep freeze the action to avoid mutation?
                this.#actionInstances.set(id, action);
                // Inserted or updated
                const definition = this.#actionDefinitions.get(action.actionId);
                if (definition?.subscribe) {
                    const context = {
                        parseVariablesInString: async (text) => {
                            const res = await this.#parseVariablesInString({
                                text: text,
                                controlId: action.controlId,
                                actionInstanceId: action.id,
                                feedbackInstanceId: undefined,
                            });
                            return res.text;
                        },
                    };
                    Promise.resolve(definition.subscribe(convertActionInstanceToEvent(action), context)).catch((e) => {
                        this.#log('error', `Action subscribe failed: ${JSON.stringify(action)} - ${e?.message ?? e} ${e?.stack}`);
                    });
                }
            }
        }
    }
    async handleLearnAction(msg) {
        const definition = this.#actionDefinitions.get(msg.action.actionId);
        if (definition && definition.learn) {
            const context = {
                parseVariablesInString: async (text) => {
                    const res = await this.#parseVariablesInString({
                        text: text,
                        controlId: msg.action.controlId,
                        actionInstanceId: msg.action.id,
                        feedbackInstanceId: undefined,
                    });
                    return res.text;
                },
            };
            const newOptions = await definition.learn({
                id: msg.action.id,
                actionId: msg.action.actionId,
                controlId: msg.action.controlId,
                options: msg.action.options,
                surfaceId: undefined,
                _deviceId: undefined,
                _page: msg.action.page,
                _bank: msg.action.bank,
            }, context);
            return {
                options: newOptions,
            };
        }
        else {
            // Not supported
            return {
                options: undefined,
            };
        }
    }
    setActionDefinitions(actions) {
        const hostActions = [];
        this.#actionDefinitions.clear();
        for (const [actionId, action] of Object.entries(actions)) {
            if (action) {
                hostActions.push({
                    id: actionId,
                    name: action.name,
                    description: action.description,
                    options: (0, base_1.serializeIsVisibleFn)(action.options),
                    hasLearn: !!action.learn,
                });
                // Remember the definition locally
                this.#actionDefinitions.set(actionId, action);
            }
        }
        this.#setActionDefinitions({ actions: hostActions });
    }
    /** @deprecated */
    _getAllActions() {
        return Array.from(this.#actionInstances.values()).map((act) => ({
            id: act.id,
            actionId: act.actionId,
            controlId: act.controlId,
            options: act.options,
        }));
    }
    subscribeActions(actionIds) {
        let actions = Array.from(this.#actionInstances.values());
        const actionIdSet = new Set(actionIds);
        if (actionIdSet.size)
            actions = actions.filter((fb) => actionIdSet.has(fb.actionId));
        for (const act of actions) {
            const def = this.#actionDefinitions.get(act.actionId);
            if (def?.subscribe) {
                const context = {
                    parseVariablesInString: async (text) => {
                        const res = await this.#parseVariablesInString({
                            text: text,
                            controlId: act.controlId,
                            actionInstanceId: act.id,
                            feedbackInstanceId: undefined,
                        });
                        return res.text;
                    },
                };
                Promise.resolve(def.subscribe(convertActionInstanceToEvent(act), context)).catch((e) => {
                    this.#log('error', `Action subscribe failed: ${JSON.stringify(act)} - ${e?.message ?? e} ${e?.stack}`);
                });
            }
        }
    }
    unsubscribeActions(actionIds) {
        let actions = Array.from(this.#actionInstances.values());
        const actionIdSet = new Set(actionIds);
        if (actionIdSet.size)
            actions = actions.filter((fb) => actionIdSet.has(fb.actionId));
        for (const act of actions) {
            const def = this.#actionDefinitions.get(act.actionId);
            if (def && def.unsubscribe) {
                const context = {
                    parseVariablesInString: async (text) => {
                        const res = await this.#parseVariablesInString({
                            text: text,
                            controlId: act.controlId,
                            actionInstanceId: act.id,
                            feedbackInstanceId: undefined,
                        });
                        return res.text;
                    },
                };
                Promise.resolve(def.unsubscribe(convertActionInstanceToEvent(act), context)).catch((e) => {
                    this.#log('error', `Action unsubscribe failed: ${JSON.stringify(act)} - ${e?.message ?? e} ${e?.stack}`);
                });
            }
        }
    }
}
exports.ActionManager = ActionManager;
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 2557:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isInstanceBaseProps = exports.serializeIsVisibleFn = void 0;
function serializeIsVisibleFn(options) {
    return (options ?? []).map((option) => {
        if ('isVisible' in option) {
            if (typeof option.isVisible === 'function') {
                return {
                    ...option,
                    isVisibleFn: option.isVisible.toString(),
                    isVisible: undefined,
                };
            }
        }
        // ignore any existing `isVisibleFn` to avoid code injection
        return {
            ...option,
            isVisibleFn: undefined,
        };
    });
}
exports.serializeIsVisibleFn = serializeIsVisibleFn;
function isInstanceBaseProps(obj) {
    const obj2 = obj;
    return typeof obj2 === 'object' && typeof obj2.id === 'string' && obj2._isInstanceBaseProps === true;
}
exports.isInstanceBaseProps = isInstanceBaseProps;
//# sourceMappingURL=base.js.map

/***/ }),

/***/ 7550:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedbackManager = void 0;
const tslib_1 = __webpack_require__(7582);
const base_1 = __webpack_require__(2557);
const debounce_fn_1 = tslib_1.__importDefault(__webpack_require__(3453));
function convertFeedbackInstanceToEvent(type, feedback) {
    return {
        type: type,
        id: feedback.id,
        feedbackId: feedback.feedbackId,
        controlId: feedback.controlId,
        options: feedback.options,
    };
}
class FeedbackManager {
    #parseVariablesInString;
    #updateFeedbackValues;
    #setFeedbackDefinitions;
    #log;
    #feedbackDefinitions = new Map();
    #feedbackInstances = new Map();
    // Feedback values waiting to be sent
    #pendingFeedbackValues = new Map();
    // Feedbacks currently being checked
    #feedbacksBeingChecked = new Map();
    // while in a context which provides an alternate parseVariablesInString, we should log when the original is called
    #parseVariablesContext;
    get parseVariablesContext() {
        return this.#parseVariablesContext;
    }
    constructor(parseVariablesInString, updateFeedbackValues, setFeedbackDefinitions, log) {
        this.#parseVariablesInString = parseVariablesInString;
        this.#updateFeedbackValues = updateFeedbackValues;
        this.#setFeedbackDefinitions = setFeedbackDefinitions;
        this.#log = log;
    }
    getDefinitionIds() {
        return Array.from(this.#feedbackDefinitions.keys());
    }
    getInstanceIds() {
        return Array.from(this.#feedbackInstances.keys());
    }
    handleUpdateFeedbacks(feedbacks) {
        for (const [id, feedback] of Object.entries(feedbacks)) {
            const existing = this.#feedbackInstances.get(id);
            if (existing) {
                // Call unsubscribe
                const definition = this.#feedbackDefinitions.get(existing.feedbackId);
                if (definition?.unsubscribe) {
                    const context = {
                        parseVariablesInString: async (text) => {
                            const res = await this.#parseVariablesInString({
                                text: text,
                                controlId: existing.controlId,
                                actionInstanceId: undefined,
                                feedbackInstanceId: existing.id,
                            });
                            return res.text;
                        },
                    };
                    Promise.resolve(definition.unsubscribe(convertFeedbackInstanceToEvent(definition.type, existing), context)).catch((e) => {
                        this.#log('error', `Feedback unsubscribe failed: ${JSON.stringify(existing)} - ${e?.message ?? e} ${e?.stack}`);
                    });
                }
            }
            if (!feedback || feedback.disabled) {
                // Deleted
                this.#feedbackInstances.delete(id);
            }
            else {
                // TODO module-lib - deep freeze the feedback to avoid mutation?
                this.#feedbackInstances.set(id, {
                    ...feedback,
                    referencedVariables: null,
                });
                // Inserted or updated
                const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
                if (definition?.subscribe) {
                    const context = {
                        parseVariablesInString: async (text) => {
                            const res = await this.#parseVariablesInString({
                                text: text,
                                controlId: feedback.controlId,
                                actionInstanceId: undefined,
                                feedbackInstanceId: feedback.id,
                            });
                            return res.text;
                        },
                    };
                    Promise.resolve(definition.subscribe(convertFeedbackInstanceToEvent(definition.type, feedback), context)).catch((e) => {
                        this.#log('error', `Feedback subscribe failed: ${JSON.stringify(feedback)} - ${e?.message ?? e} ${e?.stack}`);
                    });
                }
                // update the feedback value
                this.#triggerCheckFeedback(id);
            }
        }
    }
    async handleLearnFeedback(msg) {
        const definition = this.#feedbackDefinitions.get(msg.feedback.feedbackId);
        if (definition && definition.learn) {
            const context = {
                parseVariablesInString: async (text) => {
                    const res = await this.#parseVariablesInString({
                        text: text,
                        controlId: msg.feedback.controlId,
                        actionInstanceId: undefined,
                        feedbackInstanceId: msg.feedback.id,
                    });
                    return res.text;
                },
            };
            const newOptions = await definition.learn({
                id: msg.feedback.id,
                feedbackId: msg.feedback.feedbackId,
                controlId: msg.feedback.controlId,
                options: msg.feedback.options,
                type: definition.type,
            }, context);
            return {
                options: newOptions,
            };
        }
        else {
            // Not supported
            return {
                options: undefined,
            };
        }
    }
    handleVariablesChanged(msg) {
        if (!msg.variablesIds.length)
            return;
        const changedFeedbackIds = new Set(msg.variablesIds);
        // Any feedbacks being checked should be made aware
        for (const feedbackStatus of this.#feedbacksBeingChecked.values()) {
            for (const id of msg.variablesIds) {
                feedbackStatus.changedVariables.add(id);
            }
        }
        // Determine the feedbacks that need checking
        const feedbackIds = new Set();
        for (const feedback of this.#feedbackInstances.values()) {
            // if feedback is currently being checked, it will be handled differently
            if (this.#feedbacksBeingChecked.has(feedback.id))
                continue;
            if (feedback.referencedVariables) {
                for (const id of feedback.referencedVariables) {
                    if (changedFeedbackIds.has(id)) {
                        feedbackIds.add(feedback.id);
                        break;
                    }
                }
            }
        }
        // Trigger all the feedbacks to be rechecked
        for (const id of feedbackIds) {
            setImmediate(() => {
                this.#triggerCheckFeedback(id);
            });
        }
    }
    #triggerCheckFeedback(id) {
        const existingRecheck = this.#feedbacksBeingChecked.get(id);
        if (existingRecheck) {
            // Already being checked
            existingRecheck.needsRecheck = true;
            return;
        }
        const feedback0 = this.#feedbackInstances.get(id);
        if (!feedback0)
            return;
        const feedback = feedback0;
        const feedbackCheckStatus = {
            needsRecheck: false,
            changedVariables: new Set(),
        };
        // mark it as being checked
        this.#feedbacksBeingChecked.set(id, feedbackCheckStatus);
        Promise.resolve()
            .then(async () => {
            const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
            let value;
            const newReferencedVariables = new Set();
            // Calculate the new value for the feedback
            if (definition) {
                // Set this while the promise starts executing
                this.#parseVariablesContext = `Feedback ${feedback.feedbackId} (${id})`;
                const context = {
                    parseVariablesInString: async (text) => {
                        const res = await this.#parseVariablesInString({
                            text: text,
                            controlId: feedback.controlId,
                            actionInstanceId: undefined,
                            feedbackInstanceId: id,
                        });
                        // Track which variables were referenced
                        if (res.variableIds && res.variableIds.length) {
                            for (const id of res.variableIds) {
                                newReferencedVariables.add(id);
                            }
                        }
                        return res.text;
                    },
                };
                if (definition.type === 'boolean') {
                    value = definition.callback({
                        ...convertFeedbackInstanceToEvent('boolean', feedback),
                        type: 'boolean',
                        _rawBank: feedback.rawBank,
                    }, context);
                }
                else {
                    value = definition.callback({
                        ...convertFeedbackInstanceToEvent('advanced', feedback),
                        type: 'advanced',
                        image: feedback.image,
                        _page: feedback.page,
                        _bank: feedback.bank,
                        _rawBank: feedback.rawBank,
                    }, context);
                }
                this.#parseVariablesContext = undefined;
            }
            // Await the value before looking at this.#pendingFeedbackValues, to avoid race conditions
            const resolvedValue = await value;
            this.#pendingFeedbackValues.set(id, {
                id: id,
                controlId: feedback.controlId,
                value: resolvedValue,
            });
            this.#sendFeedbackValues();
            feedback.referencedVariables = newReferencedVariables.size > 0 ? Array.from(newReferencedVariables) : null;
        })
            .catch((e) => {
            console.error(`Feedback check failed: ${JSON.stringify(feedback)} - ${e?.message ?? e} ${e?.stack}`);
        })
            .finally(() => {
            // ensure this.#parseVariablesContext is cleared
            this.#parseVariablesContext = undefined;
            // it is no longer being checked
            this.#feedbacksBeingChecked.delete(id);
            // Check if any variables changed that should cause an immediate recheck
            let recheckForVariableChanged = false;
            if (feedback.referencedVariables) {
                for (const id of feedback.referencedVariables) {
                    if (feedbackCheckStatus.changedVariables.has(id)) {
                        recheckForVariableChanged = true;
                        break;
                    }
                }
            }
            // If queued, trigger a check
            if (recheckForVariableChanged || feedbackCheckStatus.needsRecheck) {
                setImmediate(() => {
                    this.#triggerCheckFeedback(id);
                });
            }
        });
    }
    /**
     * Send pending feedback values (from this.#pendingFeedbackValues) to companion, with a debounce
     */
    #sendFeedbackValues = (0, debounce_fn_1.default)(() => {
        const newValues = this.#pendingFeedbackValues;
        this.#pendingFeedbackValues = new Map();
        // Send the new values back
        if (newValues.size > 0) {
            this.#updateFeedbackValues({
                values: Array.from(newValues.values()),
            });
        }
    }, {
        wait: 5,
        maxWait: 25,
    });
    setFeedbackDefinitions(feedbacks) {
        const hostFeedbacks = [];
        this.#feedbackDefinitions.clear();
        for (const [feedbackId, feedback] of Object.entries(feedbacks)) {
            if (feedback) {
                hostFeedbacks.push({
                    id: feedbackId,
                    name: feedback.name,
                    description: feedback.description,
                    options: (0, base_1.serializeIsVisibleFn)(feedback.options),
                    type: feedback.type,
                    defaultStyle: 'defaultStyle' in feedback ? feedback.defaultStyle : undefined,
                    hasLearn: !!feedback.learn,
                });
                // Remember the definition locally
                this.#feedbackDefinitions.set(feedbackId, feedback);
            }
        }
        this.#setFeedbackDefinitions({ feedbacks: hostFeedbacks });
    }
    checkFeedbacks(feedbackTypes) {
        const types = new Set(feedbackTypes);
        for (const [id, feedback] of this.#feedbackInstances.entries()) {
            const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
            if (definition) {
                if (types.size === 0 || types.has(feedback.feedbackId)) {
                    // update the feedback value
                    this.#triggerCheckFeedback(id);
                }
            }
        }
    }
    checkFeedbacksById(feedbackIds) {
        for (const id of feedbackIds) {
            // update the feedback value
            this.#triggerCheckFeedback(id);
        }
    }
    /** @deprecated */
    _getAllFeedbacks() {
        return Array.from(this.#feedbackInstances.values()).map((fb) => ({
            id: fb.id,
            feedbackId: fb.feedbackId,
            controlId: fb.controlId,
            options: fb.options,
        }));
    }
    subscribeFeedbacks(feedbackIds) {
        let feedbacks = Array.from(this.#feedbackInstances.values());
        const feedbackIdSet = new Set(feedbackIds);
        if (feedbackIdSet.size)
            feedbacks = feedbacks.filter((fb) => feedbackIdSet.has(fb.feedbackId));
        for (const fb of feedbacks) {
            const def = this.#feedbackDefinitions.get(fb.feedbackId);
            if (def?.subscribe) {
                const context = {
                    parseVariablesInString: async (text) => {
                        const res = await this.#parseVariablesInString({
                            text: text,
                            controlId: fb.controlId,
                            actionInstanceId: undefined,
                            feedbackInstanceId: fb.id,
                        });
                        return res.text;
                    },
                };
                Promise.resolve(def.subscribe(convertFeedbackInstanceToEvent(def.type, fb), context)).catch((e) => {
                    this.#log('error', `Feedback subscribe failed: ${JSON.stringify(fb)} - ${e?.message ?? e} ${e?.stack}`);
                });
            }
        }
    }
    unsubscribeFeedbacks(feedbackIds) {
        let feedbacks = Array.from(this.#feedbackInstances.values());
        const feedbackIdSet = new Set(feedbackIds);
        if (feedbackIdSet.size)
            feedbacks = feedbacks.filter((fb) => feedbackIdSet.has(fb.feedbackId));
        for (const fb of feedbacks) {
            const def = this.#feedbackDefinitions.get(fb.feedbackId);
            if (def && def.unsubscribe) {
                const context = {
                    parseVariablesInString: async (text) => {
                        const res = await this.#parseVariablesInString({
                            text: text,
                            controlId: fb.controlId,
                            actionInstanceId: undefined,
                            feedbackInstanceId: fb.id,
                        });
                        return res.text;
                    },
                };
                Promise.resolve(def.unsubscribe(convertFeedbackInstanceToEvent(def.type, fb), context)).catch((e) => {
                    this.#log('error', `Feedback unsubscribe failed: ${JSON.stringify(fb)} - ${e?.message ?? e} ${e?.stack}`);
                });
            }
        }
    }
}
exports.FeedbackManager = FeedbackManager;
//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 1806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runThroughUpgradeScripts = void 0;
const util_1 = __webpack_require__(2068);
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}
/**
 * Run through the upgrade scripts for the given data
 * Note: this updates the inputs in place, but the result needs to be sent back to companion
 * @param allActions Actions that may need upgrading
 * @param allFeedbacks Feedbacks that may need upgrading
 * @param defaultUpgradeIndex The lastUpgradeIndex of the connection, if known
 * @param upgradeScripts The scripts that may be run
 * @param config The current config of the module
 * @param skipConfigUpgrade Whether to skip upgrading the config
 * @returns The upgraded data that needs persisting
 */
function runThroughUpgradeScripts(allActions, allFeedbacks, defaultUpgradeIndex, upgradeScripts, config, skipConfigUpgrade) {
    // First we group all the actions and feedbacks by the version they currently are.
    const pendingUpgradesGrouped = new Map();
    const getPendingUpgradeGroup = (i) => {
        let v = pendingUpgradesGrouped.get(i);
        if (!v) {
            v = { actions: [], feedbacks: [], config: false };
            pendingUpgradesGrouped.set(i, v);
        }
        return v;
    };
    for (const action of Object.values(allActions)) {
        const upgradeIndex = action?.upgradeIndex ?? defaultUpgradeIndex;
        if (action && typeof upgradeIndex === 'number') {
            const pending = getPendingUpgradeGroup(upgradeIndex);
            pending.actions.push(action.id);
        }
    }
    for (const feedback of Object.values(allFeedbacks)) {
        const upgradeIndex = feedback?.upgradeIndex ?? defaultUpgradeIndex;
        if (feedback && typeof upgradeIndex === 'number') {
            const pending = getPendingUpgradeGroup(upgradeIndex);
            pending.feedbacks.push(feedback.id);
        }
    }
    if (!skipConfigUpgrade) {
        // If there is config we still need to upgrade that
        for (let i = defaultUpgradeIndex ?? -1; i < upgradeScripts.length; i++) {
            // ensure the group is registered
            getPendingUpgradeGroup(i).config = true;
        }
    }
    const updatedFeedbacks = {};
    const updatedActions = {};
    let updatedConfig;
    if (pendingUpgradesGrouped.size > 0) {
        // Figure out which script to run first. Note: we track the last index we ran, so it is offset by one
        const pendingUpgradeGroups = Array.from(pendingUpgradesGrouped.keys()).sort();
        const firstUpgradeGroup = Math.min(...pendingUpgradeGroups, defaultUpgradeIndex ?? -1) + 1;
        // Start building arrays of the ids which we are upgrading as we go
        const actionsIdsToUpgrade = [];
        const feedbackIdsToUpgrade = [];
        // Perform the upgrades. We start on the first batch/instance, and work our way up to the last
        const targetCount = upgradeScripts.length;
        for (let i = firstUpgradeGroup; i < targetCount; i++) {
            const group = pendingUpgradesGrouped.get(i - 1);
            if (group) {
                // Update the list of objects that need upgrading
                actionsIdsToUpgrade.push(...group.actions);
                feedbackIdsToUpgrade.push(...group.feedbacks);
            }
            // Only upgrade the config, if we are past the last version we had for it
            const upgradeConfig = !!group?.config;
            // Ensure there is something to upgrade
            if (!upgradeConfig && actionsIdsToUpgrade.length === 0 && feedbackIdsToUpgrade.length === 0)
                continue;
            const inputConfig = updatedConfig ?? config;
            // We have an upgrade script that can be run
            const fcn = upgradeScripts[i];
            const res = fcn({
                // Pass a clone to avoid mutations
                currentConfig: clone(inputConfig),
            }, {
                config: upgradeConfig ? inputConfig : null,
                // Only pass the actions & feedbacks which need upgrading from this version
                actions: actionsIdsToUpgrade
                    .map((id) => {
                    const inst = allActions[id];
                    if (inst) {
                        return (0, util_1.literal)({
                            id: inst.id,
                            controlId: inst.controlId,
                            actionId: inst.actionId,
                            options: inst.options !== undefined ? clone(inst.options) : {},
                        });
                    }
                })
                    .filter((v) => !!v),
                feedbacks: feedbackIdsToUpgrade
                    .map((id) => {
                    const inst = allFeedbacks[id];
                    if (inst) {
                        return (0, util_1.literal)({
                            id: inst.id,
                            controlId: inst.controlId,
                            feedbackId: inst.feedbackId,
                            options: inst.options !== undefined ? clone(inst.options) : {},
                            // TODO - style?
                        });
                    }
                })
                    .filter((v) => !!v),
            });
            // Apply changes
            if (upgradeConfig && res.updatedConfig)
                updatedConfig = res.updatedConfig;
            for (const action of res.updatedActions) {
                if (action) {
                    const instance = allActions[action.id];
                    if (instance) {
                        instance.actionId = action.actionId;
                        instance.options = action.options;
                        // Mark it as changed
                        updatedActions[action.id] = instance;
                    }
                }
            }
            for (const feedback of res.updatedFeedbacks) {
                if (feedback) {
                    const instance = allFeedbacks[feedback.id];
                    if (instance) {
                        instance.feedbackId = feedback.feedbackId;
                        instance.options = feedback.options;
                        // Mark it as changed
                        updatedFeedbacks[feedback.id] = {
                            ...instance,
                            style: updatedFeedbacks[feedback.id]?.style ?? feedback.style,
                        };
                    }
                }
            }
        }
        // Make sure that everything with a upgradeIndex set is sent back
        for (const [id, action] of Object.entries(allActions)) {
            if (!updatedActions[id] && typeof action?.upgradeIndex === 'number') {
                // Send it back to acknowledge that it has been 'upgraded'
                updatedActions[id] = action;
            }
        }
        for (const [id, feedback] of Object.entries(allFeedbacks)) {
            if (!updatedFeedbacks[id] && typeof feedback?.upgradeIndex === 'number') {
                // Send it back to acknowledge that it has been 'upgraded'
                updatedFeedbacks[id] = feedback;
            }
        }
    }
    return {
        updatedActions,
        updatedFeedbacks,
        updatedConfig,
    };
}
exports.runThroughUpgradeScripts = runThroughUpgradeScripts;
//# sourceMappingURL=upgrade.js.map

/***/ }),

/***/ 7517:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateManifest = void 0;
const tslib_1 = __webpack_require__(7582);
// @ts-expect-error no typings
const validate_manifest_1 = tslib_1.__importDefault(__webpack_require__(4618));
/** Validate that a manifest looks correctly populated */
function validateManifest(manifest) {
    if (!(0, validate_manifest_1.default)(manifest)) {
        const errors = validate_manifest_1.default.errors;
        if (!errors)
            throw new Error(`Manifest failed validation with unknown reason`);
        throw new Error(`Manifest validation failed: ${JSON.stringify(errors)}`);
    }
}
exports.validateManifest = validateManifest;
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ 8322:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=action.js.map

/***/ }),

/***/ 5203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InstanceBase = void 0;
const tslib_1 = __webpack_require__(7582);
const util_1 = __webpack_require__(2068);
const p_queue_1 = tslib_1.__importDefault(__webpack_require__(5860));
const base_1 = __webpack_require__(2557);
const upgrade_1 = __webpack_require__(1806);
const feedback_1 = __webpack_require__(7550);
const ipc_wrapper_1 = __webpack_require__(8221);
const actions_1 = __webpack_require__(4391);
class InstanceBase {
    #ipcWrapper;
    #upgradeScripts;
    id;
    #lifecycleQueue = new p_queue_1.default({ concurrency: 1 });
    #initialized = false;
    #recordingActions = false;
    #lastConfig = {};
    #actionManager;
    #feedbackManager;
    #variableDefinitions = new Map();
    #variableValues = new Map();
    #options;
    #label;
    get instanceOptions() {
        return this.#options;
    }
    /**
     * The user chosen name for this instance.
     * This can be changed just before `configUpdated` is called
     */
    get label() {
        return this.#label;
    }
    /**
     * Create an instance of the module
     */
    constructor(internal) {
        if (!(0, base_1.isInstanceBaseProps)(internal) || !internal._isInstanceBaseProps)
            throw new Error(`Module instance is being constructed incorrectly. Make sure you aren't trying to do this manually`);
        this.#options = {
            disableVariableValidation: false,
        };
        this.#ipcWrapper = new ipc_wrapper_1.IpcWrapper({
            init: this._handleInit.bind(this),
            destroy: this._handleDestroy.bind(this),
            updateConfigAndLabel: this._handleConfigUpdateAndLabel.bind(this),
            updateConfig: async () => undefined,
            executeAction: this._handleExecuteAction.bind(this),
            updateFeedbacks: this._handleUpdateFeedbacks.bind(this),
            updateActions: this._handleUpdateActions.bind(this),
            getConfigFields: this._handleGetConfigFields.bind(this),
            handleHttpRequest: this._handleHttpRequest.bind(this),
            learnAction: this._handleLearnAction.bind(this),
            learnFeedback: this._handleLearnFeedback.bind(this),
            startStopRecordActions: this._handleStartStopRecordActions.bind(this),
            variablesChanged: this._handleVariablesChanged.bind(this),
        }, (msg) => {
            process.send(msg);
        }, 5000);
        process.on('message', (msg) => {
            this.#ipcWrapper.receivedMessage(msg);
        });
        this.#actionManager = new actions_1.ActionManager(async (msg) => this.#ipcWrapper.sendWithCb('parseVariablesInString', msg), (msg) => this.#ipcWrapper.sendWithNoCb('setActionDefinitions', msg), this.log.bind(this));
        this.#feedbackManager = new feedback_1.FeedbackManager(async (msg) => this.#ipcWrapper.sendWithCb('parseVariablesInString', msg), (msg) => this.#ipcWrapper.sendWithNoCb('updateFeedbackValues', msg), (msg) => this.#ipcWrapper.sendWithNoCb('setFeedbackDefinitions', msg), this.log.bind(this));
        this.#upgradeScripts = internal.upgradeScripts;
        this.id = internal.id;
        this.#label = internal.id; // Temporary
        this.log('debug', 'Initializing');
    }
    async _handleInit(msg) {
        return this.#lifecycleQueue.add(async () => {
            if (this.#initialized)
                throw new Error('Already initialized');
            const actions = msg.actions;
            const feedbacks = msg.feedbacks;
            this.#lastConfig = msg.config;
            this.#label = msg.label;
            // Create initial config object
            if (msg.isFirstInit) {
                const newConfig = {};
                const fields = this.getConfigFields();
                for (const field of fields) {
                    if ('default' in field) {
                        newConfig[field.id] = field.default;
                    }
                }
                this.#lastConfig = newConfig;
                this.saveConfig(this.#lastConfig);
                // this is new, so there is no point attempting to run any upgrade scripts
                msg.lastUpgradeIndex = this.#upgradeScripts.length - 1;
            }
            /**
             * Performing upgrades during init requires a fair chunk of work.
             * Some actions/feedbacks will be using the upgradeIndex of the instance, but some may have their own upgradeIndex on themselves if they are from an import.
             */
            const { updatedActions, updatedFeedbacks, updatedConfig } = (0, upgrade_1.runThroughUpgradeScripts)(actions, feedbacks, msg.lastUpgradeIndex, this.#upgradeScripts, this.#lastConfig, false);
            this.#lastConfig = updatedConfig ?? this.#lastConfig;
            // Send the upgraded data back to companion now. Just so that if the init crashes, this doesnt have to be repeated
            const pSendUpgrade = this.#ipcWrapper.sendWithCb('upgradedItems', {
                updatedActions,
                updatedFeedbacks,
            });
            // Now we can initialise the module
            try {
                await this.init(this.#lastConfig, !!msg.isFirstInit);
                this.#initialized = true;
            }
            catch (e) {
                console.trace(`Init failed: ${e}`);
                throw e;
            }
            finally {
                // Only now do we need to await the upgrade
                await pSendUpgrade;
            }
            setImmediate(() => {
                // Subscribe all of the actions and feedbacks
                this._handleUpdateActions({ actions }, true).catch((e) => {
                    this.log('error', `Receive actions failed: ${e}`);
                });
                this._handleUpdateFeedbacks({ feedbacks }, true).catch((e) => {
                    this.log('error', `Receive feedbacks failed: ${e}`);
                });
            });
            return {
                hasHttpHandler: typeof this.handleHttpRequest === 'function',
                hasRecordActionsHandler: typeof this.handleStartStopRecordActions == 'function',
                newUpgradeIndex: this.#upgradeScripts.length - 1,
                updatedConfig: this.#lastConfig,
            };
        });
    }
    async _handleDestroy() {
        await this.#lifecycleQueue.add(async () => {
            if (!this.#initialized)
                throw new Error('Not initialized');
            await this.destroy();
            this.#initialized = false;
        });
    }
    async _handleConfigUpdateAndLabel(msg) {
        await this.#lifecycleQueue.add(async () => {
            if (!this.#initialized)
                throw new Error('Not initialized');
            this.#label = msg.label;
            this.#lastConfig = msg.config;
            await this.configUpdated(this.#lastConfig);
        });
    }
    async _handleExecuteAction(msg) {
        return this.#actionManager.handleExecuteAction(msg);
    }
    async _handleUpdateFeedbacks(msg, skipUpgrades) {
        // Run through upgrade scripts if needed
        if (!skipUpgrades) {
            const res = (0, upgrade_1.runThroughUpgradeScripts)({}, msg.feedbacks, null, this.#upgradeScripts, this.#lastConfig, true);
            this.#ipcWrapper
                .sendWithCb('upgradedItems', {
                updatedActions: res.updatedActions,
                updatedFeedbacks: res.updatedFeedbacks,
            })
                .catch((e) => {
                this.log('error', `Failed to save upgraded feedbacks: ${e}`);
            });
        }
        this.#feedbackManager.handleUpdateFeedbacks(msg.feedbacks);
    }
    async _handleUpdateActions(msg, skipUpgrades) {
        // Run through upgrade scripts if needed
        if (!skipUpgrades) {
            const res = (0, upgrade_1.runThroughUpgradeScripts)(msg.actions, {}, null, this.#upgradeScripts, this.#lastConfig, true);
            this.#ipcWrapper
                .sendWithCb('upgradedItems', {
                updatedActions: res.updatedActions,
                updatedFeedbacks: res.updatedFeedbacks,
            })
                .catch((e) => {
                this.log('error', `Failed to save upgraded actions: ${e}`);
            });
        }
        this.#actionManager.handleUpdateActions(msg.actions);
    }
    async _handleGetConfigFields(_msg) {
        return {
            fields: (0, base_1.serializeIsVisibleFn)(this.getConfigFields()),
        };
    }
    async _handleHttpRequest(msg) {
        if (!this.handleHttpRequest)
            throw new Error(`handleHttpRequest is not supported!`);
        const res = await this.handleHttpRequest(msg.request);
        return { response: res };
    }
    async _handleLearnAction(msg) {
        return this.#actionManager.handleLearnAction(msg);
    }
    async _handleLearnFeedback(msg) {
        return this.#feedbackManager.handleLearnFeedback(msg);
    }
    async _handleStartStopRecordActions(msg) {
        if (!msg.recording) {
            if (!this.#recordingActions) {
                // Already stopped
                return;
            }
        }
        else {
            if (this.#recordingActions) {
                // Already running
                return;
            }
        }
        if (!this.handleStartStopRecordActions) {
            this.#recordingActions = false;
            throw new Error('Recording actions is not supported by this module!');
        }
        this.#recordingActions = msg.recording;
        this.handleStartStopRecordActions(this.#recordingActions);
    }
    async _handleVariablesChanged(msg) {
        this.#feedbackManager.handleVariablesChanged(msg);
    }
    /**
     * Save an updated configuration object
     * @param newConfig The new config object
     */
    saveConfig(newConfig) {
        this.#lastConfig = newConfig;
        this.#ipcWrapper.sendWithNoCb('saveConfig', { config: newConfig });
    }
    /**
     * Set the action definitions for this instance
     * @param actions The action definitions
     */
    setActionDefinitions(actions) {
        this.#actionManager.setActionDefinitions(actions);
    }
    /**
     * Set the feedback definitions for this instance
     * @param feedbacks The feedback definitions
     */
    setFeedbackDefinitions(feedbacks) {
        this.#feedbackManager.setFeedbackDefinitions(feedbacks);
    }
    /**
     * Set the peset definitions for this instance
     * @param presets The preset definitions
     */
    setPresetDefinitions(presets) {
        const hostPresets = [];
        for (const [id, preset] of Object.entries(presets)) {
            if (preset) {
                hostPresets.push({
                    ...preset,
                    id,
                });
            }
        }
        this.#ipcWrapper.sendWithNoCb('setPresetDefinitions', { presets: hostPresets });
    }
    /**
     * Set the variable definitions for this instance
     * @param variables The variable definitions
     */
    setVariableDefinitions(variables) {
        const hostVariables = [];
        this.#variableDefinitions.clear();
        for (const variable of variables) {
            hostVariables.push({
                id: variable.variableId,
                name: variable.name,
            });
            // Remember the definition locally
            this.#variableDefinitions.set(variable.variableId, variable);
            if (!this.#variableValues.has(variable.variableId)) {
                // Give us a local cached value of something
                this.#variableValues.set(variable.variableId, '');
            }
        }
        if (!this.#options.disableVariableValidation) {
            const validIds = new Set(this.#variableDefinitions.keys());
            for (const id of this.#variableValues.keys()) {
                if (!validIds.has(id)) {
                    // Delete any local cached value
                    this.#variableValues.delete(id);
                }
            }
        }
        this.#ipcWrapper.sendWithNoCb('setVariableDefinitions', { variables: hostVariables });
    }
    /**
     * Set the values of some variables
     * @param values The new values for the variables
     */
    setVariableValues(values) {
        const hostValues = [];
        for (const [variableId, value] of Object.entries(values)) {
            if (this.#options.disableVariableValidation) {
                // update the cached value
                if (value === undefined) {
                    this.#variableValues.delete(variableId);
                }
                else {
                    this.#variableValues.set(variableId, value);
                }
                hostValues.push({
                    id: variableId,
                    value: value,
                });
            }
            else if (this.#variableDefinitions.has(variableId)) {
                // update the cached value
                this.#variableValues.set(variableId, value ?? '');
                hostValues.push({
                    id: variableId,
                    value: value ?? '',
                });
            }
            else {
                // tell companion to delete the value
                hostValues.push({
                    id: variableId,
                    value: undefined,
                });
            }
        }
        this.#ipcWrapper.sendWithNoCb('setVariableValues', { newValues: hostValues });
    }
    /**
     * Get the last set value of a variable from this connection
     * @param variableId id of the variable
     * @returns The value
     */
    getVariableValue(variableId) {
        return this.#variableValues.get(variableId);
    }
    /**
     * Parse and replace all the variables in a string
     * Note: You must not use this for feedbacks, as your feedback will not update when the variable changes.
     * There is an alternate version of this supplied to each of the action/feedback callbacks that tracks
     * usages properly and will retrigger the feedback when the variables change.
     * @param text The text to parse
     * @returns The string with variables replaced with their values
     */
    async parseVariablesInString(text) {
        const currentContext = this.#feedbackManager.parseVariablesContext;
        if (currentContext) {
            this.log('debug', `parseVariablesInString called while in: ${currentContext}. You should use the parseVariablesInString provided to the callback instead`);
        }
        const res = await this.#ipcWrapper.sendWithCb('parseVariablesInString', {
            text: text,
            controlId: undefined,
            actionInstanceId: undefined,
            feedbackInstanceId: undefined,
        });
        return res.text;
    }
    /**
     * Request all feedbacks of the specified types to be checked for changes
     * @param feedbackTypes The feedback types to check
     */
    checkFeedbacks(...feedbackTypes) {
        this.#feedbackManager.checkFeedbacks(feedbackTypes);
    }
    /**
     * Request the specified feedback instances to be checked for changes
     * @param feedbackIds The ids of the feedback instances to check
     */
    checkFeedbacksById(...feedbackIds) {
        this.#feedbackManager.checkFeedbacksById(feedbackIds);
    }
    /** @deprecated */
    _getAllActions() {
        return this.#actionManager._getAllActions();
    }
    /**
     * Call subscribe on all currently known placed actions.
     * It can be useful to trigger this upon establishing a connection, to ensure all data is loaded.
     * @param actionIds The actionIds to call subscribe for. If no values are provided, then all are called.
     */
    subscribeActions(...actionIds) {
        this.#actionManager.subscribeActions(actionIds);
    }
    /**
     * Call unsubscribe on all currently known placed actions.
     * It can be useful to do some cleanup upon a connection closing.
     * @param actionIds The actionIds to call subscribe for. If no values are provided, then all are called.
     */
    unsubscribeActions(...actionIds) {
        this.#actionManager.unsubscribeActions(actionIds);
    }
    /** @deprecated */
    _getAllFeedbacks() {
        return this.#feedbackManager._getAllFeedbacks();
    }
    /**
     * Call subscribe on all currently known placed feedbacks.
     * It can be useful to trigger this upon establishing a connection, to ensure all data is loaded.
     * @param feedbackIds The feedbackIds to call subscribe for. If no values are provided, then all are called.
     */
    subscribeFeedbacks(...feedbackIds) {
        this.#feedbackManager.subscribeFeedbacks(feedbackIds);
    }
    /**
     * Call unsubscribe on all currently known placed feedbacks.
     * It can be useful to do some cleanup upon a connection closing.
     * @param feedbackIds The feedbackIds to call subscribe for. If no values are provided, then all are called.
     */
    unsubscribeFeedbacks(...feedbackIds) {
        this.#feedbackManager.unsubscribeFeedbacks(feedbackIds);
    }
    /**
     * Add an action to the current recording session
     * @param action The action to be added to the recording session
     * @param uniquenessId A unique id for the action being recorded. This should be different for each action, but by passing the same as a previous call will replace the previous value.
     */
    recordAction(action, uniquenessId) {
        if (!this.#recordingActions)
            throw new Error('Not currently recording actions');
        this.#ipcWrapper.sendWithNoCb('recordAction', {
            uniquenessId: uniquenessId ?? null,
            actionId: action.actionId,
            options: action.options,
        });
    }
    /**
     * Experimental: This method may change without notice. Do not use!
     * Set the value of a custom variable
     * @param variableName
     * @param value
     * @returns Promise which resolves upon success, or rejects if the variable no longer exists
     */
    setCustomVariableValue(variableName, value) {
        this.#ipcWrapper.sendWithNoCb('setCustomVariable', {
            customVariableId: variableName,
            value,
        });
    }
    /**
     * Send an osc message from the system osc sender
     * @param host destination ip address
     * @param port destination port number
     * @param path message path
     * @param args mesage arguments
     */
    oscSend(host, port, path, args) {
        this.#ipcWrapper.sendWithNoCb('send-osc', (0, util_1.literal)({
            host,
            port,
            path,
            args,
        }));
    }
    /**
     * Update the status of this connection
     * @param status The status level
     * @param message Additional information about the status
     *
     * ### Example
     * ```js
     * this.updateStatus(InstanceStatus.Ok)
     * ```
     */
    updateStatus(status, message) {
        this.#ipcWrapper.sendWithNoCb('set-status', (0, util_1.literal)({
            status,
            message: message ?? null,
        }));
    }
    /**
     * Write a line to the log
     * @param level The level of the message
     * @param message The message text to write
     */
    log(level, message) {
        this.#ipcWrapper.sendWithNoCb('log-message', (0, util_1.literal)({
            level,
            message,
        }));
    }
}
exports.InstanceBase = InstanceBase;
//# sourceMappingURL=base.js.map

/***/ }),

/***/ 9051:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 609:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Regex = exports.InstanceStatus = void 0;
/**
 * All the possible status levels that an instance can use.
 * Note: When adding more, companion needs to be updated to know how they should be displayed
 */
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["Ok"] = "ok";
    InstanceStatus["Connecting"] = "connecting";
    InstanceStatus["Disconnected"] = "disconnected";
    InstanceStatus["ConnectionFailure"] = "connection_failure";
    InstanceStatus["BadConfig"] = "bad_config";
    InstanceStatus["UnknownError"] = "unknown_error";
    InstanceStatus["UnknownWarning"] = "unknown_warning";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Regex;
(function (Regex) {
    // TODO - are all of these needed?
    Regex.IP = '/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/';
    Regex.HOSTNAME = '/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/';
    Regex.BOOLEAN = '/^(true|false|0|1)$/i';
    Regex.PORT = '/^([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-4])$/';
    Regex.PERCENT = '/^(100|[0-9]|[0-9][0-9])$/';
    Regex.FLOAT = '/^([0-9]*\\.)?[0-9]+$/';
    Regex.SIGNED_FLOAT = '/^[+-]?([0-9]*\\.)?[0-9]+$/';
    Regex.FLOAT_OR_INT = '/^([0-9]+)(\\.[0-9]+)?$/';
    Regex.NUMBER = '/^\\d+$/';
    Regex.SIGNED_NUMBER = '/^[+-]?\\d+$/';
    Regex.SOMETHING = '/^.+$/';
    Regex.TIMECODE = '/^(0*[0-9]|1[0-9]|2[0-4]):(0*[0-9]|[1-5][0-9]|60):(0*[0-9]|[1-5][0-9]|60):(0*[0-9]|[12][0-9]|30)$/';
})(Regex = exports.Regex || (exports.Regex = {}));
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ 4334:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 2490:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=http.js.map

/***/ }),

/***/ 4911:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(7582);
tslib_1.__exportStar(__webpack_require__(8322), exports);
tslib_1.__exportStar(__webpack_require__(5203), exports);
tslib_1.__exportStar(__webpack_require__(9051), exports);
tslib_1.__exportStar(__webpack_require__(609), exports);
tslib_1.__exportStar(__webpack_require__(4334), exports);
tslib_1.__exportStar(__webpack_require__(2490), exports);
tslib_1.__exportStar(__webpack_require__(3646), exports);
tslib_1.__exportStar(__webpack_require__(3558), exports);
tslib_1.__exportStar(__webpack_require__(4788), exports);
tslib_1.__exportStar(__webpack_require__(521), exports);
tslib_1.__exportStar(__webpack_require__(6870), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3646:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=input.js.map

/***/ }),

/***/ 3558:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=preset.js.map

/***/ }),

/***/ 4788:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=style.js.map

/***/ }),

/***/ 521:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateConvertToBooleanFeedbackUpgradeScript = exports.EmptyUpgradeScript = void 0;
/**
 * A helper upgrade script, which does nothing.
 * Useful to replace a script which is no longer needed
 */
const EmptyUpgradeScript = () => ({
    updatedConfig: null,
    updatedActions: [],
    updatedFeedbacks: [],
});
exports.EmptyUpgradeScript = EmptyUpgradeScript;
/**
 * A helper script to automate the bulk of the process to upgrade feedbacks from 'advanced' to 'boolean'.
 * There are some built-in rules for properties names based on the most common cases.
 * @param upgradeMap The feedbacks to upgrade and the properties to convert
 */
function CreateConvertToBooleanFeedbackUpgradeScript(upgradeMap) {
    // Warning: the unused parameters will often be null
    return (_context, props) => {
        const changedFeedbacks = [];
        for (const feedback of props.feedbacks) {
            let upgrade_rules = upgradeMap[feedback.feedbackId];
            if (upgrade_rules === true) {
                // These are some automated built in rules. They can help make it easier to migrate
                upgrade_rules = {
                    bg: 'bgcolor',
                    bgcolor: 'bgcolor',
                    fg: 'color',
                    color: 'color',
                    png64: 'png64',
                    png: 'png64',
                };
            }
            if (upgrade_rules) {
                if (!feedback.style)
                    feedback.style = {};
                for (const [option_key, style_key] of Object.entries(upgrade_rules)) {
                    if (feedback.options[option_key] !== undefined) {
                        feedback.style[style_key] = feedback.options[option_key];
                        delete feedback.options[option_key];
                        changedFeedbacks.push(feedback);
                    }
                }
            }
        }
        return {
            updatedConfig: null,
            updatedActions: [],
            updatedFeedbacks: changedFeedbacks,
        };
    };
}
exports.CreateConvertToBooleanFeedbackUpgradeScript = CreateConvertToBooleanFeedbackUpgradeScript;
//# sourceMappingURL=upgrade.js.map

/***/ }),

/***/ 6870:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=variable.js.map

/***/ }),

/***/ 2068:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.splitRgb = exports.combineRgb = exports.assertNever = exports.literal = void 0;
/**
 * Assert a certain type for a literal.
 * This can be used to correctly type parts of an object in TypeScript.
 *
 * ### Example
 *  ```ts
 * {
 *  [ActionId.MyAction]: literal<CompanionActionDefinition>({
 *   name: 'My Action',
 *   // ...
 *  })
 * }
 * ```
 *
 * instead of this
 * ```ts
 * {
 *  [ActionId.MyAction]: {
 *   name: 'My Action',
 *   // ...
 *  }
 * }
 * ```
 */
function literal(v) {
    return v;
}
exports.literal = literal;
/** Type assert that a value is never */
function assertNever(_val) {
    // Nothing to do
}
exports.assertNever = assertNever;
/**
 * Combine separate RGB component to one single value to be used in feedback styles
 *
 * ### Example
 *
 * ```js
 * defaultStyle: {
 *  bgcolor: combineRgb(255, 0, 0),
 *  color: combineRgb(255, 255, 255),
 * }
 * ```
 */
function combineRgb(r, g, b) {
    return ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
}
exports.combineRgb = combineRgb;
/**
 * Split a combined color value to separate RGB component values
 */
function splitRgb(dec) {
    return {
        r: (dec & 0xff0000) >> 16,
        g: (dec & 0x00ff00) >> 8,
        b: dec & 0x0000ff,
    };
}
exports.splitRgb = splitRgb;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 4618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = validate20;module.exports["default"] = validate20;const schema22 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"ModuleManifest","properties":{"id":{"type":"string","description":"Unique identifier for the module"},"name":{"type":"string","description":"Name of the module"},"shortname":{"type":"string"},"description":{"type":"string","description":"Description of the module "},"version":{"type":"string","description":"Current version of the module"},"license":{"type":"string","description":"SPDX identifier for license of the module"},"repository":{"type":"string","description":"URL to the source repository"},"bugs":{"type":"string","description":"URL to bug tracker"},"maintainers":{"type":"array","description":"List of active maintiners","uniqueItems":true,"items":{"type":"object","title":"ModuleManifestMaintainer","properties":{"name":{"type":"string"},"email":{"type":"string"},"github":{"type":"string"}},"required":["name"]}},"legacyIds":{"type":"array","description":"If the module had a different unique identifier previously, then specify it here","uniqueItems":true,"items":{"type":"string"}},"runtime":{"type":"object","title":"ModuleManifestRuntime","description":"Information on how to execute the module","properties":{"type":{"type":"string","description":"Type of the module. Must be: node18"},"api":{"type":"string","description":"Which host-api does it use. In the future alternate options will be allowed","enum":["nodejs-ipc"]},"apiVersion":{"type":"string","description":"The version of the host-api used"},"entrypoint":{"type":"string","description":"Entrypoint to pass to the runtime. eg index.js"}},"required":["type","api","apiVersion","entrypoint"]},"manufacturer":{"type":"string"},"products":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"keywords":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"required":["id","name","shortname","description","version","license","repository","bugs","maintainers","legacyIds","runtime","manufacturer","products","keywords"]};const func0 = (__webpack_require__(7056)/* ["default"] */ .Z);function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((((((((((((data.id === undefined) && (missing0 = "id")) || ((data.name === undefined) && (missing0 = "name"))) || ((data.shortname === undefined) && (missing0 = "shortname"))) || ((data.description === undefined) && (missing0 = "description"))) || ((data.version === undefined) && (missing0 = "version"))) || ((data.license === undefined) && (missing0 = "license"))) || ((data.repository === undefined) && (missing0 = "repository"))) || ((data.bugs === undefined) && (missing0 = "bugs"))) || ((data.maintainers === undefined) && (missing0 = "maintainers"))) || ((data.legacyIds === undefined) && (missing0 = "legacyIds"))) || ((data.runtime === undefined) && (missing0 = "runtime"))) || ((data.manufacturer === undefined) && (missing0 = "manufacturer"))) || ((data.products === undefined) && (missing0 = "products"))) || ((data.keywords === undefined) && (missing0 = "keywords"))){validate20.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.id !== undefined){const _errs1 = errors;if(typeof data.id !== "string"){validate20.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs3 = errors;if(typeof data.name !== "string"){validate20.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.shortname !== undefined){const _errs5 = errors;if(typeof data.shortname !== "string"){validate20.errors = [{instancePath:instancePath+"/shortname",schemaPath:"#/properties/shortname/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.description !== undefined){const _errs7 = errors;if(typeof data.description !== "string"){validate20.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.version !== undefined){const _errs9 = errors;if(typeof data.version !== "string"){validate20.errors = [{instancePath:instancePath+"/version",schemaPath:"#/properties/version/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.license !== undefined){const _errs11 = errors;if(typeof data.license !== "string"){validate20.errors = [{instancePath:instancePath+"/license",schemaPath:"#/properties/license/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.repository !== undefined){const _errs13 = errors;if(typeof data.repository !== "string"){validate20.errors = [{instancePath:instancePath+"/repository",schemaPath:"#/properties/repository/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.bugs !== undefined){const _errs15 = errors;if(typeof data.bugs !== "string"){validate20.errors = [{instancePath:instancePath+"/bugs",schemaPath:"#/properties/bugs/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.maintainers !== undefined){let data8 = data.maintainers;const _errs17 = errors;if(errors === _errs17){if(Array.isArray(data8)){var valid1 = true;const len0 = data8.length;for(let i0=0; i0<len0; i0++){let data9 = data8[i0];const _errs19 = errors;if(errors === _errs19){if(data9 && typeof data9 == "object" && !Array.isArray(data9)){let missing1;if((data9.name === undefined) && (missing1 = "name")){validate20.errors = [{instancePath:instancePath+"/maintainers/" + i0,schemaPath:"#/properties/maintainers/items/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data9.name !== undefined){const _errs21 = errors;if(typeof data9.name !== "string"){validate20.errors = [{instancePath:instancePath+"/maintainers/" + i0+"/name",schemaPath:"#/properties/maintainers/items/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs21 === errors;}else {var valid2 = true;}if(valid2){if(data9.email !== undefined){const _errs23 = errors;if(typeof data9.email !== "string"){validate20.errors = [{instancePath:instancePath+"/maintainers/" + i0+"/email",schemaPath:"#/properties/maintainers/items/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs23 === errors;}else {var valid2 = true;}if(valid2){if(data9.github !== undefined){const _errs25 = errors;if(typeof data9.github !== "string"){validate20.errors = [{instancePath:instancePath+"/maintainers/" + i0+"/github",schemaPath:"#/properties/maintainers/items/properties/github/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs25 === errors;}else {var valid2 = true;}}}}}else {validate20.errors = [{instancePath:instancePath+"/maintainers/" + i0,schemaPath:"#/properties/maintainers/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs19 === errors;if(!valid1){break;}}if(valid1){let i1 = data8.length;let j0;if(i1 > 1){outer0:for(;i1--;){for(j0 = i1; j0--;){if(func0(data8[i1], data8[j0])){validate20.errors = [{instancePath:instancePath+"/maintainers",schemaPath:"#/properties/maintainers/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"}];return false;break outer0;}}}}}}else {validate20.errors = [{instancePath:instancePath+"/maintainers",schemaPath:"#/properties/maintainers/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.legacyIds !== undefined){let data13 = data.legacyIds;const _errs27 = errors;if(errors === _errs27){if(Array.isArray(data13)){var valid4 = true;const len1 = data13.length;for(let i2=0; i2<len1; i2++){const _errs29 = errors;if(typeof data13[i2] !== "string"){validate20.errors = [{instancePath:instancePath+"/legacyIds/" + i2,schemaPath:"#/properties/legacyIds/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs29 === errors;if(!valid4){break;}}if(valid4){let i3 = data13.length;let j1;if(i3 > 1){const indices0 = {};for(;i3--;){let item0 = data13[i3];if(typeof item0 !== "string"){continue;}if(typeof indices0[item0] == "number"){j1 = indices0[item0];validate20.errors = [{instancePath:instancePath+"/legacyIds",schemaPath:"#/properties/legacyIds/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"}];return false;break;}indices0[item0] = i3;}}}}else {validate20.errors = [{instancePath:instancePath+"/legacyIds",schemaPath:"#/properties/legacyIds/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.runtime !== undefined){let data15 = data.runtime;const _errs31 = errors;if(errors === _errs31){if(data15 && typeof data15 == "object" && !Array.isArray(data15)){let missing2;if(((((data15.type === undefined) && (missing2 = "type")) || ((data15.api === undefined) && (missing2 = "api"))) || ((data15.apiVersion === undefined) && (missing2 = "apiVersion"))) || ((data15.entrypoint === undefined) && (missing2 = "entrypoint"))){validate20.errors = [{instancePath:instancePath+"/runtime",schemaPath:"#/properties/runtime/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];return false;}else {if(data15.type !== undefined){const _errs33 = errors;if(typeof data15.type !== "string"){validate20.errors = [{instancePath:instancePath+"/runtime/type",schemaPath:"#/properties/runtime/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs33 === errors;}else {var valid6 = true;}if(valid6){if(data15.api !== undefined){let data17 = data15.api;const _errs35 = errors;if(typeof data17 !== "string"){validate20.errors = [{instancePath:instancePath+"/runtime/api",schemaPath:"#/properties/runtime/properties/api/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}if(!(data17 === "nodejs-ipc")){validate20.errors = [{instancePath:instancePath+"/runtime/api",schemaPath:"#/properties/runtime/properties/api/enum",keyword:"enum",params:{allowedValues: schema22.properties.runtime.properties.api.enum},message:"must be equal to one of the allowed values"}];return false;}var valid6 = _errs35 === errors;}else {var valid6 = true;}if(valid6){if(data15.apiVersion !== undefined){const _errs37 = errors;if(typeof data15.apiVersion !== "string"){validate20.errors = [{instancePath:instancePath+"/runtime/apiVersion",schemaPath:"#/properties/runtime/properties/apiVersion/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs37 === errors;}else {var valid6 = true;}if(valid6){if(data15.entrypoint !== undefined){const _errs39 = errors;if(typeof data15.entrypoint !== "string"){validate20.errors = [{instancePath:instancePath+"/runtime/entrypoint",schemaPath:"#/properties/runtime/properties/entrypoint/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs39 === errors;}else {var valid6 = true;}}}}}}else {validate20.errors = [{instancePath:instancePath+"/runtime",schemaPath:"#/properties/runtime/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.manufacturer !== undefined){const _errs41 = errors;if(typeof data.manufacturer !== "string"){validate20.errors = [{instancePath:instancePath+"/manufacturer",schemaPath:"#/properties/manufacturer/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs41 === errors;}else {var valid0 = true;}if(valid0){if(data.products !== undefined){let data21 = data.products;const _errs43 = errors;if(errors === _errs43){if(Array.isArray(data21)){var valid7 = true;const len2 = data21.length;for(let i4=0; i4<len2; i4++){const _errs45 = errors;if(typeof data21[i4] !== "string"){validate20.errors = [{instancePath:instancePath+"/products/" + i4,schemaPath:"#/properties/products/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs45 === errors;if(!valid7){break;}}if(valid7){let i5 = data21.length;let j2;if(i5 > 1){const indices1 = {};for(;i5--;){let item1 = data21[i5];if(typeof item1 !== "string"){continue;}if(typeof indices1[item1] == "number"){j2 = indices1[item1];validate20.errors = [{instancePath:instancePath+"/products",schemaPath:"#/properties/products/uniqueItems",keyword:"uniqueItems",params:{i: i5, j: j2},message:"must NOT have duplicate items (items ## "+j2+" and "+i5+" are identical)"}];return false;break;}indices1[item1] = i5;}}}}else {validate20.errors = [{instancePath:instancePath+"/products",schemaPath:"#/properties/products/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs43 === errors;}else {var valid0 = true;}if(valid0){if(data.keywords !== undefined){let data23 = data.keywords;const _errs47 = errors;if(errors === _errs47){if(Array.isArray(data23)){var valid9 = true;const len3 = data23.length;for(let i6=0; i6<len3; i6++){const _errs49 = errors;if(typeof data23[i6] !== "string"){validate20.errors = [{instancePath:instancePath+"/keywords/" + i6,schemaPath:"#/properties/keywords/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs49 === errors;if(!valid9){break;}}if(valid9){let i7 = data23.length;let j3;if(i7 > 1){const indices2 = {};for(;i7--;){let item2 = data23[i7];if(typeof item2 !== "string"){continue;}if(typeof indices2[item2] == "number"){j3 = indices2[item2];validate20.errors = [{instancePath:instancePath+"/keywords",schemaPath:"#/properties/keywords/uniqueItems",keyword:"uniqueItems",params:{i: i7, j: j3},message:"must NOT have duplicate items (items ## "+j3+" and "+i7+" are identical)"}];return false;break;}indices2[item2] = i7;}}}}else {validate20.errors = [{instancePath:instancePath+"/keywords",schemaPath:"#/properties/keywords/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs47 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}

/***/ }),

/***/ 3453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const mimicFn = __webpack_require__(4341);

module.exports = (inputFunction, options = {}) => {
	if (typeof inputFunction !== 'function') {
		throw new TypeError(`Expected the first argument to be a function, got \`${typeof inputFunction}\``);
	}

	const {
		wait = 0,
		maxWait = 0,
		before = false,
		after = true
	} = options;

	if (!before && !after) {
		throw new Error('Both `before` and `after` are false, function wouldn\'t be called.');
	}

	let timeout;
	let maxTimeout;
	let result;

	const debouncedFunction = function (...arguments_) {
		const context = this;

		const later = () => {
			timeout = undefined;

			if (maxTimeout) {
				clearTimeout(maxTimeout);
				maxTimeout = undefined;
			}

			if (after) {
				result = inputFunction.apply(context, arguments_);
			}
		};

		const maxLater = () => {
			maxTimeout = undefined;

			if (timeout) {
				clearTimeout(timeout);
				timeout = undefined;
			}

			result = inputFunction.apply(context, arguments_);
		};

		const shouldCallNow = before && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (maxWait > 0 && !maxTimeout && after) {
			maxTimeout = setTimeout(maxLater, maxWait);
		}

		if (shouldCallNow) {
			result = inputFunction.apply(context, arguments_);
		}

		return result;
	};

	mimicFn(debouncedFunction, inputFunction);

	debouncedFunction.cancel = () => {
		if (timeout) {
			clearTimeout(timeout);
			timeout = undefined;
		}

		if (maxTimeout) {
			clearTimeout(maxTimeout);
			maxTimeout = undefined;
		}
	};

	return debouncedFunction;
};


/***/ }),

/***/ 4300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let crypto = __webpack_require__(6113)
let { urlAlphabet } = __webpack_require__(3792)
const POOL_SIZE_MULTIPLIER = 128
let pool, poolOffset
let fillPool = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)
    crypto.randomFillSync(pool)
    poolOffset = 0
  } else if (poolOffset + bytes > pool.length) {
    crypto.randomFillSync(pool)
    poolOffset = 0
  }
  poolOffset += bytes
}
let random = bytes => {
  fillPool((bytes -= 0))
  return pool.subarray(poolOffset - bytes, poolOffset)
}
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let i = step
      while (i--) {
        id += alphabet[bytes[i] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  fillPool((size -= 0))
  let id = ''
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63]
  }
  return id
}
module.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }


/***/ }),

/***/ 3792:
/***/ ((module) => {

let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
module.exports = { urlAlphabet }


/***/ }),

/***/ 7582:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 6010);
/******/ 	
/******/ })()
;