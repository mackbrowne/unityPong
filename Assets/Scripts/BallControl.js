#pragma strict
	var bonusSound : AudioSource;
	var clickSound : AudioSource;

var ballSpeed : float = 100;

function Start () {
	yield WaitForSeconds(2);
	GoBall();
}

function Update(){
	var xVel : float = rigidbody2D.velocity.x;
	
	if(xVel < 18 && xVel > -18 && xVel != 0 ){
		if(xVel > 0){
			rigidbody2D.velocity.x = 20;
		}else{
			rigidbody2D.velocity.x = -20;
		}
	}
}

function GoBall(){
	var randomNumber = Random.Range(0, 2);
	if(randomNumber <= 0.5){
		rigidbody2D.AddForce(new Vector2(ballSpeed, 10));
	}else{
		rigidbody2D.AddForce(new Vector2(-ballSpeed, 10));
	}
}

function ResetBall(){

	bonusSound.Play();

	rigidbody2D.velocity.y = 0;
	rigidbody2D.velocity.x = 0;
	
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds(0.5);
	GoBall();
	
}

function OnCollisionEnter2D(colInfo : Collision2D){
	if(colInfo.collider.tag == "Player"){
		var yVel = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;

		rigidbody2D.velocity.y =  yVel;
		
		audio.pitch = Random.Range(0.98f, 1.02f);
		clickSound.Play();
	}
} 