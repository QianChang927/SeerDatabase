package com.robot.app.aimat.state
{
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.mode.ActionSpriteModel;
   import com.robot.core.mode.IActionSprite;
   import com.robot.core.mode.PetModel;
   
   public class AimatState_10058 extends BaseAimatState
   {
       
      
      private var _obj:IActionSprite;
      
      private var _mc:PetModel;
      
      private var _petArr:Array;
      
      public function AimatState_10058()
      {
         this._petArr = [164,77,27,62,108];
         super();
      }
      
      override public function get isFinish() : Boolean
      {
         if(this._obj)
         {
            this._mc.x = this._obj.sprite.x;
            this._mc.y = this._obj.sprite.y;
            this._mc.direction = this._obj.direction;
         }
         ++_count;
         if(_count >= 50)
         {
            return true;
         }
         return false;
      }
      
      override public function execute(param1:IActionSprite, param2:AimatInfo) : void
      {
         this._obj = param1;
         if(param1.sprite.visible == false)
         {
            return;
         }
         param1.sprite.visible = false;
         var _loc3_:PetShowInfo = new PetShowInfo();
         _loc3_.petID = this._petArr[uint(Math.random() * 5)];
         var _loc4_:ActionSpriteModel = param1.sprite as ActionSpriteModel;
         this._mc = new PetModel(_loc4_);
         this._mc.show(_loc3_);
         this._mc.x = this._obj.sprite.x;
         this._mc.y = this._obj.sprite.y;
      }
      
      override public function destroy() : void
      {
         this._obj.sprite.visible = true;
         this._obj = null;
         this._mc.destroy();
         this._mc = null;
         this._petArr = null;
      }
   }
}
