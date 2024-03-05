package com.robot.core.config
{
   import com.robot.core.config.xml.PetSkinXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.VersionManager;
   import com.robot.core.pet.PetIdTransform;
   
   public class ClientConfig
   {
      
      private static const SUFFIX_SWF:String = ".swf";
      
      private static var _clientXML:XML;
      
      private static var _resURL:String;
      
      private static var _moduleURL:String;
      
      private static var _taskItemIconURL:String;
      
      private static var _npcURL:String;
      
      private static var _mailTemplateURL:String;
      
      private static var _clothLightURL:String;
      
      private static var _transformURL:String;
      
      private static var _uiURL:String;
       
      
      public function ClientConfig()
      {
         super();
      }
      
      public static function setup(param1:XML) : void
      {
         _clientXML = param1;
         _resURL = _clientXML.Res[0].@url.toString();
         _moduleURL = _clientXML.Module[0].@url.toString();
         _taskItemIconURL = _clientXML.TaskItemIconURL[0].@url.toString();
         _npcURL = param1.Npc[0].@url.toString();
         _mailTemplateURL = _clientXML.MailTemplateURL[0].@url.toString();
         _clothLightURL = _clientXML.ClothLight[0].@url.toString();
         _transformURL = _clientXML.Transform[0].@url.toString();
         _uiURL = _clientXML.UI[0].@url.toString();
      }
      
      public static function getDLLPath(param1:String) : String
      {
         return VersionManager.getURL("dll/" + param1);
      }
      
      public static function get resURL() : String
      {
         return _resURL;
      }
      
      public static function getClothLightUrl(param1:uint) : String
      {
         return VersionManager.getURL(_clothLightURL + "light_" + param1 + SUFFIX_SWF);
      }
      
      public static function getClothCircleUrl(param1:uint) : String
      {
         return VersionManager.getURL(_clothLightURL + "qq_" + param1 + SUFFIX_SWF);
      }
      
      public static function getClothSpecialUrl(param1:uint) : String
      {
         return VersionManager.getURL(_clothLightURL + "special_" + param1 + SUFFIX_SWF);
      }
      
      private static function getClothURL(param1:String, param2:uint, param3:uint = 0) : String
      {
         if(param3 == 0 || param3 == 1)
         {
            return VersionManager.getURL(_resURL + "item/cloth/" + param1 + "/" + param2.toString() + SUFFIX_SWF);
         }
         return VersionManager.getURL(_resURL + "item/cloth/" + param1 + "/" + param2.toString() + "_" + param3.toString() + SUFFIX_SWF);
      }
      
      public static function getClothSwfPath(param1:uint, param2:uint = 0) : String
      {
         return getClothURL("swf",param1,param2);
      }
      
      public static function getClothIconPath(param1:uint, param2:uint = 0) : String
      {
         return getClothURL("icon",param1,param2);
      }
      
      public static function getClothSuitPath(param1:uint, param2:uint = 0) : String
      {
         return getClothURL("suitIcon",param1,param2);
      }
      
      public static function getClothPrevPath(param1:uint, param2:uint = 0) : String
      {
         return getClothURL("prev",param1,param2);
      }
      
      public static function getTransformMovieUrl(param1:uint) : String
      {
         return VersionManager.getURL(_transformURL + param1 + SUFFIX_SWF);
      }
      
      public static function getTransformClothUrl(param1:uint) : String
      {
         return getTransformMovieUrl(param1).replace(/movie\//,"swf/");
      }
      
      public static function getMailTemplateUrl(param1:uint) : String
      {
         return VersionManager.getURL(_mailTemplateURL + param1 + SUFFIX_SWF);
      }
      
      public static function getFullMovie(param1:String = "debugFullMovie") : String
      {
         return VersionManager.getURL(_resURL + "bounsMovie/" + param1 + SUFFIX_SWF);
      }
      
      public static function getMapSound(param1:String) : String
      {
         if(param1 == "")
         {
            return "";
         }
         return VersionManager.getURL(_resURL + "map/sound/" + param1 + ".mp3");
      }
      
      public static function getAdImage(param1:String) : String
      {
         if(param1 == "")
         {
            return "";
         }
         return VersionManager.getURL(_resURL + "videoPlayer/ad/" + param1 + ".jpg");
      }
      
      public static function getVideoImage(param1:String) : String
      {
         if(param1 == "")
         {
            return "";
         }
         return VersionManager.getURL(_resURL + "videoPlayer/image/" + param1 + ".jpg");
      }
      
      public static function getVideoURL(param1:String) : String
      {
         if(param1 == "")
         {
            return "";
         }
         return VersionManager.getURL(_resURL + "videoPlayer/video/" + param1 + ".flv");
      }
      
      public static function getAppExtSwf(param1:String) : String
      {
         return VersionManager.getURL("ext/com/robot/ext/Ext_" + param1 + SUFFIX_SWF);
      }
      
      public static function getNpcSwfPath(param1:String) : String
      {
         return VersionManager.getURL(_npcURL + param1 + SUFFIX_SWF);
      }
      
      public static function getResPath(param1:String) : String
      {
         return VersionManager.getURL(_resURL + param1);
      }
      
      public static function getMapPath(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "map/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getMapAnimate(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "mapAnimate/" + param1 + SUFFIX_SWF);
      }
      
      public static function getNonoPath(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "nono/" + param1);
      }
      
      public static function getDoodleSwf(param1:uint) : String
      {
         if(param1 == 0)
         {
            return "";
         }
         return VersionManager.getURL(_resURL + "item/doodle/swf/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getDoodlePrev(param1:uint) : String
      {
         if(param1 == 0)
         {
            return "";
         }
         return VersionManager.getURL(_resURL + "item/doodle/prev/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getRoomPath(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "room/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getPetSwfPath(param1:uint, param2:uint = 0, param3:int = 0) : String
      {
         var _loc4_:int = int(param1);
         param1 = PetIdTransform.getPetId(param1,param2,true);
         if(param3 != 0)
         {
            param1 = uint(PetSkinXMLInfo.getSkinPetId(param3,_loc4_));
         }
         return VersionManager.getURL(_resURL + "groupFightResource/pet/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getPetFightPath(param1:uint, param2:uint = 0, param3:uint = 0) : String
      {
         var _loc4_:uint = param1;
         param1 = PetIdTransform.getPetId(param1,param2);
         param1 = PetXMLInfo.getRealId(param1);
         if(param3 > 0)
         {
            param1 = uint(PetSkinXMLInfo.getSkinPetId(param3,_loc4_));
         }
         return VersionManager.getURL(_resURL + "fightResource/pet/swf/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getPetHeadPath(param1:uint, param2:uint = 0, param3:uint = 0) : String
      {
         var _loc4_:int = int(param1);
         param1 = PetIdTransform.getPetId(param1,param2);
         param1 = PetXMLInfo.getRealId(param1);
         if(param3 > 0)
         {
            param1 = uint(PetSkinXMLInfo.getSkinPetId(param3,_loc4_));
         }
         return VersionManager.getURL(_resURL + "pet/head/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getFlyPetSwfPath(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "groupFightResource/flyPet/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getGameSwfPath(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "Games/" + param1 + SUFFIX_SWF);
      }
      
      public static function getGameStartPath(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "Games/start/" + param1 + SUFFIX_SWF);
      }
      
      public static function getModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + param1 + SUFFIX_SWF);
      }
      
      public static function getFightModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "fight/" + param1 + SUFFIX_SWF);
      }
      
      public static function getAppModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "app/" + param1 + SUFFIX_SWF);
      }
      
      public static function getAppResource(param1:String, param2:String = ".swf") : String
      {
         return VersionManager.getURL(_resURL + "appRes/" + param1 + param2);
      }
      
      public static function getTaskModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "task/" + param1 + SUFFIX_SWF);
      }
      
      public static function getBookModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "book/" + param1 + SUFFIX_SWF);
      }
      
      public static function getGameModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "game/" + param1 + SUFFIX_SWF);
      }
      
      public static function getMapModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "map/" + param1 + SUFFIX_SWF);
      }
      
      public static function getHelpModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "help/" + param1 + SUFFIX_SWF);
      }
      
      public static function getFestivalModule(param1:String) : String
      {
         return VersionManager.getURL(_moduleURL + "festival/" + param1 + SUFFIX_SWF);
      }
      
      public static function getTaskItemIcon(param1:String) : String
      {
         return VersionManager.getURL(_taskItemIconURL + param1 + SUFFIX_SWF);
      }
      
      public static function getFitmentIcon(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "fitment/icon/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getFitmentItem(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "fitment/item/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getArmIcon(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "arm/icon/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getArmPrev(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "arm/prev/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getArmItem(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "arm/item/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getFlowerPath(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "item/flower/" + param1.toString() + SUFFIX_SWF);
      }
      
      public static function getAppRes(param1:String, param2:String = ".swf") : String
      {
         return VersionManager.getURL(_resURL + "forApp/" + param1 + param2);
      }
      
      public static function getSpecialSkeleton(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "skeleton/" + param1 + SUFFIX_SWF);
      }
      
      public static function getGameStorageBtn(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "Games/storage/" + param1 + SUFFIX_SWF);
      }
      
      public static function getActiveUrl(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "active/" + param1 + SUFFIX_SWF);
      }
      
      public static function getActiveSound(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "active/sound/" + param1 + ".mp3");
      }
      
      public static function getPetChannel(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "petChannel/" + param1 + SUFFIX_SWF);
      }
      
      public static function getFightCard(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "fightCard/" + param1 + ".jpg");
      }
      
      public static function getStarMap(param1:uint) : String
      {
         return VersionManager.getURL(_resURL + "map/starMap/" + param1 + SUFFIX_SWF);
      }
      
      public static function getUiIcon(param1:String) : String
      {
         return VersionManager.getURL(_resURL + "uiIcon/" + param1 + SUFFIX_SWF);
      }
      
      public static function getPanel(param1:String, param2:String = ".swf") : String
      {
         return VersionManager.getURL(_resURL + "module/panel/" + param1 + param2);
      }
      
      public static function getPeakJihadLvBigIcon(param1:int) : String
      {
         return VersionManager.getURL(_resURL + "peakJihad/level/" + param1 + SUFFIX_SWF);
      }
      
      public static function getPeakJihadLvSmallIcon(param1:int) : String
      {
         return VersionManager.getURL(_resURL + "peakJihad/mini_level/" + param1 + SUFFIX_SWF);
      }
      
      public static function getPeakJihadPetIcon(param1:int) : String
      {
         return VersionManager.getURL(_resURL + "peakJihad/pet" + param1 + SUFFIX_SWF);
      }
      
      public static function get httpURL() : String
      {
         return _clientXML.ipConfig.http.@url;
      }
      
      public static function get httpNetURL() : String
      {
         return _clientXML.ipConfig.http.@url1;
      }
      
      public static function get cdnURL() : String
      {
         return _clientXML.ipConfig.cdn.@url;
      }
      
      public static function get SUB_SERVER_IP() : String
      {
         return _clientXML.ipConfig.SubServer.@ip;
      }
      
      public static function get SUB_SERVER_PORT() : uint
      {
         return uint(_clientXML.ipConfig.SubServer.@port);
      }
      
      public static function get EMAIL_IP() : String
      {
         return _clientXML.ipConfig.Email.@ip;
      }
      
      public static function get EMAIL_PORT() : uint
      {
         return uint(_clientXML.ipConfig.Email.@port);
      }
      
      public static function get ID_IP() : String
      {
         return _clientXML.ipConfig.DirSer.@ip;
      }
      
      public static function get ID_PORT() : uint
      {
         return uint(_clientXML.ipConfig.DirSer.@port);
      }
      
      public static function get GUEST_IP() : String
      {
         return _clientXML.ipConfig.Visitor.@ip;
      }
      
      public static function get GUEST_PORT() : uint
      {
         return uint(_clientXML.ipConfig.Visitor.@port);
      }
      
      public static function get deputizeIP() : String
      {
         return String(_clientXML.ipConfig.Deputize.@ip);
      }
      
      public static function get deputizePort() : uint
      {
         return uint(_clientXML.ipConfig.Deputize.@port);
      }
      
      public static function get newsVersion() : uint
      {
         var _loc2_:String = null;
         var _loc3_:Date = null;
         var _loc5_:int = 0;
         var _loc1_:XMLList = new XMLList(_clientXML.elements("newsversion"));
         var _loc4_:int = _loc1_.length();
         _loc5_ = 0;
         while(_loc5_ < _loc4_)
         {
            if(_clientXML.newsversion.@time != null)
            {
               _loc2_ = _loc1_[_loc5_].@time;
               _loc3_ = new Date(_loc2_.substr(0,4),Number(_loc2_.substr(4,2)) - 1,_loc2_.substr(6,2));
               if(SystemTimerManager.sysDate.time < _loc3_.time)
               {
                  return uint(_loc1_[_loc5_ - 1 > 0 ? _loc5_ - 1 : 0]);
               }
            }
            _loc5_++;
         }
         return uint(_loc1_[_loc4_ - 1]);
      }
      
      public static function get versonTimeDate() : Date
      {
         var _loc2_:String = null;
         var _loc4_:int = 0;
         var _loc6_:Date = null;
         var _loc7_:int = 0;
         var _loc1_:XMLList = new XMLList(_clientXML.elements("newsversion"));
         var _loc3_:int = _loc1_.length();
         var _loc5_:Array = [];
         _loc4_ = 0;
         while(_loc4_ < _loc3_)
         {
            if(_clientXML.newsversion.@time != null)
            {
               _loc2_ = _loc1_[_loc4_].@time;
               _loc6_ = new Date(_loc2_.substr(0,4),Number(_loc2_.substr(4,2)) - 1,_loc2_.substr(6,2));
               _loc5_.push(_loc6_);
            }
            _loc4_++;
         }
         if(_loc5_.length == 1)
         {
            return _loc5_[0];
         }
         _loc7_ = -1;
         _loc4_ = 0;
         while(_loc4_ < _loc5_.length)
         {
            if(SystemTimerManager.sysDate.time >= _loc5_[_loc4_].time)
            {
               _loc7_++;
            }
            _loc4_++;
         }
         if(_loc7_ == -1)
         {
            return _loc5_[0];
         }
         return _loc5_[_loc7_];
      }
      
      public static function get dailyTask() : uint
      {
         return uint(_clientXML.dailyTask);
      }
      
      public static function get superNoNo() : uint
      {
         return uint(_clientXML.superNoNo);
      }
      
      public static function get uiVersion() : String
      {
         return _clientXML.uiversion;
      }
   }
}
