export function viewResults(bookImg0, title0, author0, preview0, 
                            bookImg1, title1, author1, preview1,
                            bookImg2, title2, author2, preview2,
                            bookImg3, title3, author3, preview3,
                            bookImg4, title4, author4, preview4,
                            bookImg5, title5, author5, preview5,
                            bookImg6, title6, author6, preview6,
                            bookImg7, title7, author7, preview7,
                            bookImg8, title8, author8, preview8){
    const view = document.getElementById('results');
    const html = `<!-- START: Card Group 1-->
                    <div class="card-group gap-2 text-dark">
                    
                        <!-- START: Card 1 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg0}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> ${title0} </h3>
                                <p class="card-text">
                                    Author: ${author0}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview0}'"> <i class="bi bi-eye"></i> </button>
                            </div>                                              
                        </div>
                        <!-- END:Card 1 -->
                    
                        <!-- START:Card 2 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg1}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> ${title1} </h3>
                                <p class="card-text">
                                    Author: ${author1}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview1}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div>
                        <!-- END:Card 2 -->
                    
                        <!-- START:Card 3 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg2}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> Title: ${title2} </h3>
                                <p class="card-text">
                                    Author: ${author2}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview2}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div>
                        <!-- END:Card 3 -->
                    
                    </div><!-- END:Card Group 1-->
                    
                    



                    
                    <!-- START: Card Group 2-->
                    <div class="card-group gap-2 my-2 py-2 text-dark">
                    
                        <!-- START: Card 1 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg3}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> Title: ${title3} </h3>
                                <p class="card-text">
                                    Author: ${author3}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview3}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div> 
                        <!-- END:Card 1 -->
                    
                    
                    
                        <!-- START:Card 2 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg4}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> Title: ${title4} </h3>
                                <p class="card-text">
                                    Author: ${author4}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview4}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div>
                        <!-- END:Card 2 -->
                    
                    
                    
                        <!-- START:Card 3 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg5}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> Title:${title5} </h3>
                                <p class="card-text">
                                    Author: ${author5}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview5}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div>
                        <!-- END:Card 3 -->
                                
                    </div>
                    <!-- END:Card Group 2 -->
                    
                    




                    <!-- START: Card Group 3 -->
                    <div class="card-group gap-2 my-2 py-2 text-dark">
                    
                        <!-- START: Card 1 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg6}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> Title: ${title6} </h3>
                                <p class="card-text">
                                    Author: ${author6}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview6}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div> 
                        <!-- END:Card 1 -->
                    
                    
                    
                        <!-- START:Card 2 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg7}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> Title: ${title7} </h3>
                                <p class="card-text">
                                    Author: ${author7}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview7}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div>
                        <!-- END:Card 2 -->
                    
                    
                    
                        <!-- START:Card 3 -->
                        <div class="card text-center">
                    
                            <!-- Card Header -->
                            <div class="card-header">
                                <img class="img-thumbnail" src="${bookImg8}">
                            </div>
                    
                            <!-- Card Body -->
                            <div class="card-body">
                                <h3 class="card-title text-uppercase"> Title: ${title8} </h3>
                                <p class="card-text">
                                    Author: ${author8}
                                </p>
                            </div>
                    
                            <!-- Card Footer -->
                            <div class="card-footer">
                                <button class="btn btn-outline-dark type="button" onclick="window.location.href='${preview8}'"> <i class="bi bi-eye"></i> </button>
                            </div>
                        </div>
                        <!-- END:Card 3 -->
                                
                    </div>
                    <!-- END:Card Group 3 -->`;
    view.innerHTML = html;
}