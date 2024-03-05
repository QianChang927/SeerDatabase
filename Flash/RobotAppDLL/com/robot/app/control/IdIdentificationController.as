package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.FocusEvent;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class IdIdentificationController
   {
      
      private static var timeStamp:Number = -1;
      
      private static var panelShow:Boolean;
      
      private static var panelShow1:Boolean;
      
      private static var timeStamp1:Number = -1;
      
      private static var loginShow:Boolean;
      
      private static var showType:int;
      
      private static var gameTimes:Array = [60,60,60,0];
      
      private static var LoginidIdentificationPanel:MovieClip;
      
      private static var ageIdentificationPanel:MovieClip;
      
      private static var identificationPanel:MovieClip;
       
      
      public function IdIdentificationController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.sendByQueue(45773,[],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            var byte:ByteArray = e.data as ByteArray;
            var b:int = int(byte.readUnsignedInt());
            MainManager.visitor = b == 0;
            showType = byte.readUnsignedInt();
            SocketConnection.sendByQueue(45777,[],function(param1:SocketEvent):void
            {
               var e1:SocketEvent = param1;
               var byte1:ByteArray = e1.data as ByteArray;
               MainManager.age = byte1.readUnsignedInt();
               KTool.getMultiValue([103799,12462],function(param1:Array):void
               {
                  timeStamp = param1[0];
                  timeStamp1 = param1[1];
                  SystemTimerManager.addTickFun(setOnlineTime);
                  setOnlineTime();
               });
            });
         });
      }
      
      private static function setOnlineTime() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc3_:Date = null;
         var _loc4_:int = 0;
         if(timeStamp != -1)
         {
            _loc1_ = (timeStamp + SystemTimerManager.time - MainManager.actorInfo.logintimeThisTime) / 60;
            if(_loc1_ >= 60 && Boolean(MainManager.visitor))
            {
               removeLoginidIdentificationPanel();
               showIdentificationPanel();
            }
            else if(Boolean(MainManager.visitor) && !loginShow)
            {
               showLoginIdentificationPanel();
               loginShow = true;
            }
         }
         if(timeStamp1 != -1)
         {
            _loc2_ = (timeStamp1 + SystemTimerManager.time - MainManager.actorInfo.logintimeThisTime) / 60;
            if(MainManager.age < 18 && !MainManager.visitor)
            {
               _loc3_ = SystemTimerManager.sysBJDate;
               if(MainManager.age < 8)
               {
                  _loc4_ = 0;
               }
               else if(MainManager.age < 16 && MainManager.age >= 8)
               {
                  _loc4_ = 1;
               }
               else
               {
                  _loc4_ = 2;
               }
               if(!(_loc3_.hours < 8 || _loc3_.hours >= 22))
               {
                  if(_loc2_ >= gameTimes[_loc4_])
                  {
                  }
               }
            }
         }
      }
      
      private static function showLoginIdentificationPanel() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("update/LoginidIdentificationPanel"),function(param1:MovieClip):void
         {
            LoginidIdentificationPanel = param1;
            LoginidIdentificationPanel["iname"].text = "请填写真实姓名";
            LoginidIdentificationPanel["iid"].text = "请填写身份证号码";
            LoginidIdentificationPanel["tipMc"].gotoAndStop(showType + 1);
            LoginidIdentificationPanel["iname"].addEventListener(FocusEvent.FOCUS_IN,focusInHandle2);
            LoginidIdentificationPanel["iname"].addEventListener(FocusEvent.FOCUS_OUT,focusOutHandle2);
            LoginidIdentificationPanel["iid"].addEventListener(FocusEvent.FOCUS_IN,focusInHandle3);
            LoginidIdentificationPanel["iid"].addEventListener(FocusEvent.FOCUS_OUT,focusOutHandle3);
            LoginidIdentificationPanel.addEventListener(MouseEvent.CLICK,mcClickHandle2);
            LevelManager.stage.addEventListener(Event.ENTER_FRAME,frameHandle2);
            LevelManager.stage.addChild(LoginidIdentificationPanel);
         });
      }
      
      private static function frameHandle2(param1:Event) : void
      {
         var _loc2_:int = 0;
         var _loc3_:DisplayObject = null;
         if(LoginidIdentificationPanel)
         {
            _loc2_ = LevelManager.stage.numChildren - 1;
            while(_loc2_ >= 0)
            {
               _loc3_ = LevelManager.stage.getChildAt(_loc2_);
               if(!_loc3_["applyBtn"])
               {
                  LevelManager.stage.setChildIndex(LoginidIdentificationPanel,_loc2_);
                  break;
               }
               _loc2_--;
            }
         }
      }
      
      private static function focusInHandle2(param1:FocusEvent) : void
      {
         if(LoginidIdentificationPanel["iname"].text == "请填写真实姓名")
         {
            LoginidIdentificationPanel["iname"].text = "";
         }
      }
      
      private static function focusOutHandle2(param1:FocusEvent) : void
      {
         if(LoginidIdentificationPanel["iname"].text == "")
         {
            LoginidIdentificationPanel["iname"].text = "请填写真实姓名";
         }
      }
      
      private static function focusInHandle3(param1:FocusEvent) : void
      {
         if(LoginidIdentificationPanel["iid"].text == "请填写身份证号码")
         {
            LoginidIdentificationPanel["iid"].text = "";
         }
      }
      
      private static function focusOutHandle3(param1:FocusEvent) : void
      {
         if(LoginidIdentificationPanel["iid"].text == "")
         {
            LoginidIdentificationPanel["iid"].text = "请填写身份证号码";
         }
      }
      
      private static function removeLoginidIdentificationPanel() : void
      {
         if(LoginidIdentificationPanel)
         {
            LoginidIdentificationPanel.removeEventListener(MouseEvent.CLICK,mcClickHandle);
            LoginidIdentificationPanel["iname"].removeEventListener(FocusEvent.FOCUS_IN,focusInHandle2);
            LoginidIdentificationPanel["iname"].removeEventListener(FocusEvent.FOCUS_OUT,focusOutHandle2);
            LoginidIdentificationPanel["iid"].removeEventListener(FocusEvent.FOCUS_IN,focusInHandle3);
            LoginidIdentificationPanel["iid"].removeEventListener(FocusEvent.FOCUS_OUT,focusOutHandle3);
            LoginidIdentificationPanel.removeEventListener(MouseEvent.CLICK,mcClickHandle2);
            LevelManager.stage.removeEventListener(Event.ENTER_FRAME,frameHandle2);
            LevelManager.stage.removeChild(LoginidIdentificationPanel);
            LoginidIdentificationPanel = null;
         }
      }
      
      private static function checkLoginCnName() : Boolean
      {
         var _loc3_:String = null;
         var _loc1_:String = String(LoginidIdentificationPanel["iname"].text);
         var _loc2_:RegExp = /^[一-龥]{2,4}$/;
         if(!_loc2_.exec(_loc1_))
         {
            Alarm.show("请输入正确的姓名");
            return false;
         }
         return true;
      }
      
      private static function checkLoginId() : Boolean
      {
         var _loc1_:RegExp = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
         var _loc2_:String = String(LoginidIdentificationPanel["iid"].text);
         var _loc3_:Boolean = false;
         var _loc4_:Boolean;
         _loc3_ = _loc4_ = _loc1_.exec(_loc2_);
         if(!_loc3_)
         {
            Alarm.show("身份证号必须是18位数字或字母！");
         }
         _loc3_ = checkIdentification(_loc2_);
         if(_loc4_ && !_loc3_)
         {
            Alarm.show("请输入正确的身份证号！");
         }
         if(!_loc3_)
         {
            return false;
         }
         return true;
      }
      
      private static function mcClickHandle2(param1:MouseEvent) : void
      {
         var iname:String = null;
         var id:String = null;
         var byte1:ByteArray = null;
         var byte2:ByteArray = null;
         var e:MouseEvent = param1;
         var ename:String = String(e.target.name);
         switch(ename)
         {
            case "ok":
               if(!checkLoginId())
               {
                  return;
               }
               iname = String(LoginidIdentificationPanel["iname"].text);
               id = String(LoginidIdentificationPanel["iid"].text);
               byte1 = new ByteArray();
               byte1.writeUTFBytes(id);
               byte1.length = 19;
               byte2 = new ByteArray();
               byte2.writeUTFBytes(iname);
               byte2.length = 64;
               SocketConnection.sendByQueue(45774,[byte1,byte2],function(param1:SocketEvent):void
               {
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  var _loc3_:int = int(_loc2_.readUnsignedInt());
                  MainManager.visitor = _loc3_ == 0;
                  if(_loc3_ != 0)
                  {
                     removeLoginidIdentificationPanel();
                     Alarm.show("恭喜你，实名认证成功，你可以继续在赛尔号中探险了！");
                  }
                  else
                  {
                     Alarm.show("很抱歉，实名认证失败！可能是由于身份信息填写错误或同一IP地址认证次数过于频繁，请小赛尔稍后重新认证！");
                  }
               },function(param1:SocketEvent):void
               {
               });
               break;
            case "leave":
               navigateToURL(new URLRequest("http://seer.61.com"),"_self");
               break;
            case "close":
               removeLoginidIdentificationPanel();
         }
      }
      
      private static function showageIdentificationPanel(param1:int) : void
      {
         var frame:int = param1;
         if(!panelShow1)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("update/ageIdentificationPanel"),function(param1:MovieClip):void
            {
               ageIdentificationPanel = param1;
               ageIdentificationPanel.gotoAndStop(frame);
               ageIdentificationPanel.addEventListener(MouseEvent.CLICK,mcClickHandle1);
               LevelManager.stage.addEventListener(Event.ENTER_FRAME,frameHandle1);
               LevelManager.stage.addChild(ageIdentificationPanel);
            });
            panelShow1 = true;
         }
      }
      
      private static function mcClickHandle1(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "know":
               navigateToURL(new URLRequest("http://seer.61.com"),"_self");
               break;
            case "q":
               navigateToURL(new URLRequest("http://seer.61.com"),"_self");
               navigateToURL(new URLRequest("http://kf.61.com"),"_blank");
         }
      }
      
      private static function frameHandle1(param1:Event) : void
      {
         var _loc2_:int = 0;
         var _loc3_:DisplayObject = null;
         if(ageIdentificationPanel)
         {
            _loc2_ = LevelManager.stage.numChildren - 1;
            while(_loc2_ >= 0)
            {
               _loc3_ = LevelManager.stage.getChildAt(_loc2_);
               if(!_loc3_["applyBtn"])
               {
                  LevelManager.stage.setChildIndex(ageIdentificationPanel,_loc2_);
                  break;
               }
               _loc2_--;
            }
         }
      }
      
      private static function showIdentificationPanel() : void
      {
         if(!panelShow)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("update/idIdentificationPanel"),function(param1:MovieClip):void
            {
               identificationPanel = param1;
               identificationPanel["iname"].text = "请填写真实姓名";
               identificationPanel["iid"].text = "请填写身份证号码";
               identificationPanel["iname"].addEventListener(FocusEvent.FOCUS_IN,focusInHandle);
               identificationPanel["iname"].addEventListener(FocusEvent.FOCUS_OUT,focusOutHandle);
               identificationPanel["iid"].addEventListener(FocusEvent.FOCUS_IN,focusInHandle1);
               identificationPanel["iid"].addEventListener(FocusEvent.FOCUS_OUT,focusOutHandle1);
               identificationPanel.addEventListener(MouseEvent.CLICK,mcClickHandle);
               LevelManager.stage.addEventListener(Event.ENTER_FRAME,frameHandle);
               LevelManager.stage.addChild(identificationPanel);
            });
            panelShow = true;
         }
      }
      
      private static function frameHandle(param1:Event) : void
      {
         var _loc2_:int = 0;
         var _loc3_:DisplayObject = null;
         if(identificationPanel)
         {
            _loc2_ = LevelManager.stage.numChildren - 1;
            while(_loc2_ >= 0)
            {
               _loc3_ = LevelManager.stage.getChildAt(_loc2_);
               if(!_loc3_["applyBtn"])
               {
                  LevelManager.stage.setChildIndex(identificationPanel,_loc2_);
                  break;
               }
               _loc2_--;
            }
         }
      }
      
      private static function focusInHandle(param1:FocusEvent) : void
      {
         if(identificationPanel["iname"].text == "请填写真实姓名")
         {
            identificationPanel["iname"].text = "";
         }
      }
      
      private static function focusOutHandle(param1:FocusEvent) : void
      {
         if(identificationPanel["iname"].text == "")
         {
            identificationPanel["iname"].text = "请填写真实姓名";
         }
      }
      
      private static function focusInHandle1(param1:FocusEvent) : void
      {
         if(identificationPanel["iid"].text == "请填写身份证号码")
         {
            identificationPanel["iid"].text = "";
         }
      }
      
      private static function focusOutHandle1(param1:FocusEvent) : void
      {
         if(identificationPanel["iid"].text == "")
         {
            identificationPanel["iid"].text = "请填写身份证号码";
         }
      }
      
      private static function checkCnName() : Boolean
      {
         var _loc3_:String = null;
         var _loc1_:String = String(identificationPanel["iname"].text);
         var _loc2_:RegExp = /^[一-龥]{2,4}$/;
         if(!_loc2_.exec(_loc1_))
         {
            Alarm.show("请输入正确的姓名");
            return false;
         }
         return true;
      }
      
      private static function checkId() : Boolean
      {
         var _loc1_:RegExp = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
         var _loc2_:String = String(identificationPanel["iid"].text);
         var _loc3_:Boolean = false;
         var _loc4_:Boolean;
         _loc3_ = _loc4_ = _loc1_.exec(_loc2_);
         if(!_loc3_)
         {
            Alarm.show("身份证号必须是18位数字或字母！");
         }
         _loc3_ = checkIdentification(_loc2_);
         if(_loc4_ && !_loc3_)
         {
            Alarm.show("请输入正确的身份证号！");
         }
         if(!_loc3_)
         {
            return false;
         }
         return true;
      }
      
      private static function checkIdentification(param1:String) : Boolean
      {
         var _loc2_:int = new Date().fullYear;
         if(_loc2_ <= 2017)
         {
            _loc2_ = 2017;
         }
         var _loc3_:int = int(param1.substr(16,1)) % 2 == 0 ? 0 : 2;
         var _loc4_:int = int(param1.substr(6,4));
         var _loc5_:int = int(param1.substr(10,2));
         var _loc6_:int = int(param1.substr(12,2));
         if(_loc4_ > _loc2_ || _loc4_ < 1900)
         {
            return false;
         }
         if(_loc5_ > 12 || _loc5_ < 1)
         {
            return false;
         }
         if(_loc6_ > 31 || _loc6_ < 1)
         {
            return false;
         }
         var _loc7_:Array = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1];
         var _loc8_:Array = ["1","0","X","9","8","7","6","5","4","3","2"];
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         while(_loc10_ < 17)
         {
            _loc9_ += parseInt(param1.charAt(_loc10_)) * _loc7_[_loc10_];
            _loc10_++;
         }
         var _loc11_:String = String(_loc8_[_loc9_ % 11]);
         if(param1.charAt(17).toLocaleLowerCase() != _loc11_.toLocaleLowerCase())
         {
            return false;
         }
         return true;
      }
      
      private static function mcClickHandle(param1:MouseEvent) : void
      {
         var iname:String = null;
         var id:String = null;
         var byte1:ByteArray = null;
         var byte2:ByteArray = null;
         var e:MouseEvent = param1;
         var ename:String = String(e.target.name);
         switch(ename)
         {
            case "ok":
               if(!checkId())
               {
                  return;
               }
               iname = String(identificationPanel["iname"].text);
               id = String(identificationPanel["iid"].text);
               byte1 = new ByteArray();
               byte1.writeUTFBytes(id);
               byte1.length = 19;
               byte2 = new ByteArray();
               byte2.writeUTFBytes(iname);
               byte2.length = 64;
               SocketConnection.sendByQueue(45774,[byte1,byte2],function(param1:SocketEvent):void
               {
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  var _loc3_:int = int(_loc2_.readUnsignedInt());
                  MainManager.visitor = _loc3_ == 0;
                  if(_loc3_ != 0)
                  {
                     identificationPanel.removeEventListener(MouseEvent.CLICK,mcClickHandle);
                     identificationPanel["iname"].removeEventListener(FocusEvent.FOCUS_IN,focusInHandle);
                     identificationPanel["iname"].removeEventListener(FocusEvent.FOCUS_OUT,focusOutHandle);
                     identificationPanel["iid"].removeEventListener(FocusEvent.FOCUS_IN,focusInHandle1);
                     identificationPanel["iid"].removeEventListener(FocusEvent.FOCUS_OUT,focusOutHandle1);
                     Alarm.show("恭喜你，实名认证成功，你可以继续在赛尔号中探险了！");
                     LevelManager.stage.removeEventListener(Event.ENTER_FRAME,frameHandle);
                     LevelManager.stage.removeChild(identificationPanel);
                     identificationPanel = null;
                  }
                  else
                  {
                     Alarm.show("很抱歉，实名认证失败！可能是由于身份信息填写错误或同一IP地址认证次数过于频繁，请小赛尔稍后重新认证！");
                  }
               },function(param1:SocketEvent):void
               {
               });
               break;
            case "leave":
               navigateToURL(new URLRequest("http://seer.61.com"),"_self");
         }
      }
   }
}
