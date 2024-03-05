package com.robot.core.behavior
{
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.controller.SaveUserInfo;
   import com.robot.core.event.PeopleActionEvent;
   import com.robot.core.event.UserEvent;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.TransformSkeleton;
   import flash.utils.ByteArray;
   
   public class ChangeClothBehavior extends BaseBehavior
   {
       
      
      private var _data:Array;
      
      public function ChangeClothBehavior(param1:Array, param2:Boolean = true)
      {
         super(param2);
         this._data = param1;
      }
      
      override public function execute(param1:BasePeoleModel) : void
      {
         var _loc2_:PeopleItemInfo = null;
         var _loc3_:uint = 0;
         var _loc4_:ByteArray = null;
         var _loc5_:Array = null;
         if(_isNet)
         {
            _loc3_ = this._data.length;
            _loc4_ = new ByteArray();
            for each(_loc2_ in this._data)
            {
               _loc4_.writeUnsignedInt(_loc2_.id);
            }
            SocketConnection.send(CommandID.CHANGE_CLOTH,_loc3_,_loc4_);
         }
         else
         {
            param1.skeleton.takeOffCloth();
            param1.skeleton.changeCloth(this._data);
            param1.info.clothes = this._data;
            if(param1.skeleton is TransformSkeleton)
            {
               if(SuitXMLInfo.getSuitID(param1.info.clothIDs) == 0)
               {
                  TransformSkeleton(param1.skeleton).untransform();
               }
               else if(SuitXMLInfo.getIsTransform(SuitXMLInfo.getSuitID(param1.info.clothIDs)) == false)
               {
                  TransformSkeleton(param1.skeleton).untransform();
               }
            }
            _loc5_ = [];
            for each(_loc2_ in this._data)
            {
               _loc5_.push(_loc2_.id);
            }
            if(param1.info.userID == MainManager.actorID)
            {
               SaveUserInfo.saveSo();
               AimatController.setAimatID(_loc5_);
            }
            if(param1.info.mountId == 0)
            {
               param1.speed = ItemXMLInfo.getSpeed(_loc5_);
               if(param1.info.isVip)
               {
                  param1.speed *= 1.3;
               }
            }
            UserManager.dispatchEvent(new UserEvent(UserEvent.INFO_CHANGE,param1.info));
            param1.showClothLight();
            param1.dispatchEvent(new PeopleActionEvent(PeopleActionEvent.CLOTH_CHANGE,param1.info.clothes));
         }
         this._data = null;
      }
   }
}
