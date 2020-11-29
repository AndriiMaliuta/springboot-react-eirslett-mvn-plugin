package com.dev.anma.sbreacteirslett

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController()
class RestControllers {

    val REST_URL = "/rest/api/v1/cats"

    @GetMapping("/rest/api/v1/cats")
    fun restCats(): List<Cat> {
        val vasyl = Cat("Vasyl", 7, "grey")
        val ryzhyk = Cat("Ryzhyk", 8, "red")
        val liza = Cat("Liza", 10, "three-colored")
        return listOf(ryzhyk, vasyl, liza)
    }
}