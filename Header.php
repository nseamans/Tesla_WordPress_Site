<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<?php wp_head(); ?>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<!-- CDNs for Wordpress Theme (SCRIPTS)-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
	<!-- CDNs for Wordpress Theme (CSS)-->
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Arima+Madurai&family=DM+Mono&family=Oxygen&family=Vollkorn&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Bellefair&family=Inter&display=swap" rel="stylesheet">
	<link  href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
</head>
<body <?php body_class(); ?>>
<div id="wrapper" class="hfeed">
<header id="header">
<div id="branding">
<div id="site-title">
	<!-- Bootstrap Header Code Custom Bootstrap Header -->
	<nav class="navbar navbar-expand-sm  navbar-dark">
		<a class="navbar-brand"><img src="http://18.189.182.245/wp-content/uploads/2020/12/Tesla-Logo-Silver.svg" class="menu_title"></a>
<!-- 			<button class="navbar-toggler" type="button" data-toggle="collapse"
										 data-target="#navbarSupportedContent" 
										 aria-controls="navbarSupportedContent" 
										 aria-expanded="false" aria-label="Toggle navigation">
		<h1><i class="fa fa-bars menu_expand" ></i></h1>
	  	</button>	 -->
	  <!-- Links -->
		<?php wp_nav_menu( array( 'theme_location'       => 'main-menu',
								  'container'            => 'div',
								  'items_wrap'           => '<ul id="%1$s" class="menu_item">%3$s</ul>',
								  'container_aria_label' => '' ) ); ?>
<!-- 		<?php wp_nav_menu( array( 'theme_location'       => 'main-menu',
								  'container'            => 'div',
								  'items_wrap'           => '<ul id="%1$s" >%3$s</ul>',
								  'container_aria_label' => '' ) ); ?> -->
<!-- 	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		
	  </div> -->
	</nav>
	<div class="hero_img">
		<h1 class="hero_description"><?php bloginfo( 'description' ); ?></h1>	
	</div>
</div>
</div>
<nav id="menu">
</nav>
</header>
<div id="container">
