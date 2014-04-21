#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var theSkin : GUISkin;
var theBall : Transform;

function Start(){
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}

static function Score(wallName : String){
	if(wallName == "RightWall"){
		playerScore01 += 1;
	}else{
		playerScore02 += 1;
	}
	Debug.Log("PlayerScore01 -" + playerScore01);
	Debug.Log("PlayerScore02 -" + playerScore02);
}

function OnGUI(){
	GUI.skin = theSkin;
	GUI.Label(new Rect(Screen.width/2-150-13, 20, 100, 100), "" + playerScore01);
	GUI.Label(new Rect(Screen.width/2+150-13, 20, 100, 100), "" + playerScore02);
	
	if(GUI.Button( new Rect (Screen.width/2-121/2, 29, 121, 53), "RESET" )){
		playerScore01 = 0;
		playerScore02 = 0;
			
		theBall.gameObject.SendMessage("ResetBall");	
	}
}