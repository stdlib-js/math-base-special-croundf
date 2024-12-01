/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { Complex64 } from '@stdlib/types/complex';

/**
* Rounds each component of a single-precision complex floating-point number to the nearest integer.
*
* @param z - input value
* @returns result
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var real = require( '@stdlib/complex-float32-real' );
* var imag = require( '@stdlib/complex-float32-imag' );
*
* var v = croundf( new Complex64( -4.2, 5.5 ) );
* // returns <Complex64>
*
* var re = real( v );
* // returns -4.0
*
* var im = imag( v );
* // returns 6.0
*/
declare function croundf( z: Complex64 ): Complex64;


// EXPORTS //

export = croundf;