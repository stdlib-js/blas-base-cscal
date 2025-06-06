/**
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

#include "stdlib/blas/base/cscal.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/base/mul.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
*
* @param N        number of indexed elements
* @param alpha       scalar constant
* @param X       input array
* @param strideX  X stride length
*/
void API_SUFFIX(c_cscal)( const CBLAS_INT N, const stdlib_complex64_t alpha, void *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(c_cscal_ndarray)( N, alpha, X, strideX, ox );
}
