package com.robot.core.mode
{
   import com.robot.core.aimat.AimatStateManamer;
   import com.robot.core.aticon.IWalk;
   import com.robot.core.aticon.WalkAction;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.ui.DialogBox;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.utils.clearInterval;
   import flash.utils.getDefinitionByName;
   import flash.utils.setInterval;
   import org.taomee.utils.MathUtil;
   
   public class ActionSpriteModel extends SpriteModel implements IActionSprite
   {
      
      public static const expList:Array = ["#0","#1","#2","#3","#4","#5","#6","#7","#8","#9","#10","#11","#12","#13","#14","#15","#16","#17","#18","#19","#20","#21","#22"];
       
      
      protected var _speed:Number = 1;
      
      protected var _actionType:String;
      
      protected var _walk:IWalk;
      
      protected var _aimatStateManager:AimatStateManamer;
      
      public var allowAimatState:Boolean = true;
      
      protected var _autoRect:Rectangle;
      
      protected var _autoInvTime:uint;
      
      protected var _dialogBox:DialogBox;
      
      public function ActionSpriteModel()
      {
         this._autoRect = new Rectangle(0,0,MainManager.getStageWidth(),MainManager.getStageHeight() - 65);
         super();
         this._aimatStateManager = new AimatStateManamer(this);
         this._walk = new WalkAction();
      }
      
      override public function destroy() : void
      {
         super.destroy();
         if(this._aimatStateManager)
         {
            this._aimatStateManager.destroy();
            this._aimatStateManager = null;
         }
         if(this._dialogBox)
         {
            this._dialogBox.destroy();
            this._dialogBox = null;
         }
         clearInterval(this._autoInvTime);
         if(this._walk)
         {
            this._walk.destroy();
         }
         this._walk = null;
         this._autoRect = null;
      }
      
      public function get aimatStateManager() : AimatStateManamer
      {
         return this._aimatStateManager;
      }
      
      public function set actionType(param1:String) : void
      {
         this._actionType = param1;
      }
      
      public function get actionType() : String
      {
         return this._actionType;
      }
      
      public function set speed(param1:Number) : void
      {
         this._speed = param1;
      }
      
      public function get speed() : Number
      {
         return this._speed;
      }
      
      public function get autoRect() : Rectangle
      {
         return this._autoRect;
      }
      
      public function set autoRect(param1:Rectangle) : void
      {
         this._autoRect = param1;
      }
      
      public function get walk() : IWalk
      {
         return this._walk;
      }
      
      public function set walk(param1:IWalk) : void
      {
         if(this._walk)
         {
            this._walk.destroy();
         }
         this._walk = null;
         this._walk = param1;
      }
      
      public function aimatState(param1:AimatInfo) : void
      {
         if(this.allowAimatState)
         {
            this._aimatStateManager.execute(param1);
         }
      }
      
      public function showBox(param1:String, param2:Number = 0, param3:Function = null) : void
      {
         if(this._dialogBox)
         {
            this._dialogBox.destroy();
            this._dialogBox = null;
         }
         if(getDefinitionByName("com.robot.app2.control.FourthSeerController").fourthSeerTalkFlag)
         {
            getDefinitionByName("com.robot.app2.control.FourthSeerController").fourthSeerTalkFlag = false;
            this._dialogBox = new DialogBox(60000);
         }
         else
         {
            this._dialogBox = new DialogBox();
         }
         this._dialogBox.name = "dialogBox";
         this._dialogBox.show(param1,0,-height + param2,this,param3);
      }
      
      public function play() : void
      {
      }
      
      public function stop() : void
      {
         if(this._walk)
         {
            this._walk.stop();
         }
      }
      
      public function starAutoWalk(param1:int) : void
      {
         clearInterval(this._autoInvTime);
         this._autoInvTime = setInterval(this.onAutoWalk,MathUtil.randomHalfAdd(param1));
      }
      
      public function stopAutoWalk(param1:Boolean = true) : void
      {
         clearInterval(this._autoInvTime);
         if(param1)
         {
            this.stop();
         }
      }
      
      protected function onAutoWalk() : void
      {
         if(MapManager.isInMap == false)
         {
            return;
         }
         if(this._walk)
         {
            this._walk.execute(this,new Point(this._autoRect.x + this._autoRect.width * Math.random(),this._autoRect.y + this._autoRect.height * Math.random()),false);
         }
      }
      
      public function startPursueWalk(param1:int) : void
      {
         clearInterval(this._autoInvTime);
         this._autoInvTime = setInterval(this.onPursueWalk,MathUtil.randomHalfAdd(param1));
      }
      
      private function onPursueWalk() : void
      {
         if(!MapManager.isInMap)
         {
            return;
         }
         if(this._walk)
         {
            this._walk.execute(this,new Point(MainManager.actorModel.x,MainManager.actorModel.y),false);
         }
      }
   }
}
