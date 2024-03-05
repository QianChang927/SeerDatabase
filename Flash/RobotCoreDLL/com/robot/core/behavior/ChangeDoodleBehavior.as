package com.robot.core.behavior
{
   import com.robot.core.CommandID;
   import com.robot.core.controller.SaveUserInfo;
   import com.robot.core.info.item.DoodleInfo;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   
   public class ChangeDoodleBehavior extends BaseBehavior
   {
       
      
      private var _doodleInfo:DoodleInfo;
      
      public function ChangeDoodleBehavior(param1:DoodleInfo, param2:Boolean = true)
      {
         super(param2);
         this._doodleInfo = param1;
      }
      
      override public function execute(param1:BasePeoleModel) : void
      {
         if(_isNet)
         {
            SocketConnection.send(CommandID.CHANGE_DOODLE,this._doodleInfo.id);
         }
         else
         {
            param1.info.texture = this._doodleInfo.texture;
            param1.info.color = this._doodleInfo.color;
            param1.info.coins = this._doodleInfo.coins;
            if(this._doodleInfo.URL == "" || this._doodleInfo.URL == null)
            {
               return;
            }
            param1.skeleton.changeDoodle(this._doodleInfo.URL);
            param1.skeleton.changeColor(this._doodleInfo.color,false);
            SaveUserInfo.saveSo();
         }
         this._doodleInfo = null;
      }
   }
}
