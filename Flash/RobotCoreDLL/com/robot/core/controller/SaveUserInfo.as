package com.robot.core.controller
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SOManager;
   import flash.net.SharedObject;
   
   public class SaveUserInfo
   {
      
      public static var isSave:Boolean = false;
      
      public static var loginIDInfo:Object;
       
      
      public function SaveUserInfo()
      {
         super();
      }
      
      public static function saveSo() : void
      {
         if(SaveUserInfo.isSave == false)
         {
            return;
         }
         var _loc1_:SharedObject = SOManager.getCommonSO(SOManager.LOGIN);
         var _loc2_:Array = _loc1_.data.users;
         if(_loc2_ == null)
         {
            _loc2_ = [];
         }
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(MainManager.actorID == _loc2_[_loc3_].id)
            {
               _loc2_.splice(_loc3_,1);
            }
            _loc3_++;
         }
         _loc2_.push(getLoginUserObject());
         while(_loc2_.length > 3)
         {
            _loc2_.shift();
         }
         _loc1_.data.users = _loc2_;
         SOManager.flush(_loc1_);
      }
      
      private static function getLoginUserObject() : Object
      {
         var _loc2_:int = 0;
         var _loc1_:SharedObject = SharedObject.getLocal("common/login/otherlogin","/");
         if(_loc1_.data.hasOwnProperty(MainManager.actorInfo.userID.toString()))
         {
            _loc2_ = int(_loc1_.data[MainManager.actorInfo.userID.toString()]);
         }
         return {
            "id":MainManager.actorID,
            "customID":loginIDInfo.customID,
            "lastUsedID":loginIDInfo.lastUsedID,
            "pwd":getEncryptPassword(MainManager.password),
            "nickName":MainManager.actorInfo.nick,
            "color":MainManager.actorInfo.color,
            "texture":MainManager.actorInfo.texture,
            "clothes":MainManager.actorInfo.clothIDs,
            "isMD5":true,
            "otherlogintype":_loc2_,
            "lastLogin":new Date()
         };
      }
      
      private static function getEncryptPassword(param1:String) : String
      {
         var _loc2_:String = param1.slice(0,8);
         var _loc3_:String = param1.slice(8,16);
         var _loc4_:String = param1.slice(16,24);
         var _loc5_:String = param1.slice(24,32);
         return _loc3_ + _loc2_ + _loc5_ + _loc4_;
      }
      
      public static function saveNewsSO() : void
      {
         var _loc1_:SharedObject = SOManager.getNews_Read();
         _loc1_.data.userId = MainManager.actorInfo.userID;
         _loc1_.data.version = ClientConfig.newsVersion;
         SOManager.flush(_loc1_);
      }
      
      public static function getNewsVersion() : Object
      {
         var _loc1_:Object = new Object();
         var _loc2_:SharedObject = SOManager.getNews_Read();
         _loc1_.userId = _loc2_.data.userId;
         _loc1_.version = _loc2_.data.version;
         return _loc1_;
      }
   }
}
