package com.dev.anma.sbreacteirslett

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController()
class RestControllers {

    val vasyl = Cat(1,"Vasyl", 7, "grey")
    val ryzhyk = Cat(2,"Ryzhyk", 8, "red")
    val liza = Cat(3,"Liza", 10, "three-colored")
    var catList = arrayListOf(vasyl, ryzhyk, liza)

    var REST_URL = "/rest/api/v1/cats"

    @GetMapping("/rest/api/v1/cats")
    fun restCats(): List<Cat> {
        return catList
    }

    @GetMapping("/rest/api/v1/cats/{id}")
    fun restCat(@PathVariable id: Int): Cat {
        return catList[id - 1]
    }
}