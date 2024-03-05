package com.robot.app2.control
{
   import com.robot.app.ParseSocketError;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.email.EmailLinkInfo;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class TaitanMineController
   {
      
      private static var usedPets:Array = [];
      
      private static var _isFirstLeave:Boolean = true;
      
      public static var robPointStatus:Array = [];
       
      
      public function TaitanMineController()
      {
         super();
      }
      
      public static function getUsedPets() : Array
      {
         return usedPets;
      }
      
      public static function addUsedPets(param1:Array) : void
      {
         usedPets = usedPets.concat(param1);
      }
      
      public static function initUsedPets() : void
      {
         robPointStatus = [0,0,0];
         usedPets.splice(0);
      }
      
      public static function fightSuccess(param1:int) : void
      {
         robPointStatus[param1] = 1;
      }
      
      public static function getSuccessCount() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            if(robPointStatus[_loc2_] == 1)
            {
               _loc1_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public static function setup() : void
      {
         KTool.getMultiValue([15035],function(param1:Array):void
         {
            if(param1[0] == 0)
            {
               MapManager.setLeaveCheckFun(isFirstLeave);
            }
         });
      }
      
      public static function isFirstLeave() : Boolean
      {
         if(MapManager.currentMap.id == 1 || MapManager.currentMap.id == 103)
         {
            if(_isFirstLeave)
            {
               playSpriteAnim();
               _isFirstLeave = !_isFirstLeave;
               return false;
            }
         }
         return true;
      }
      
      public static function playSpriteAnim() : void
      {
         var url:String;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         url = "mine_sprite";
         if(MapManager.currentMap.id == 103)
         {
            url = "mine_sprite2";
         }
         ResourceManager.getResource(ClientConfig.getMapAnimate(url),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               setAnimStatus();
               BitBuffSetClass.setState(22622,1);
               NpcDialog.show(NPC.TAI_LING,["有个地方叫泰坦晶矿，里面的泰坦之灵无穷无尽，要不要我带你去看看？"],[" 好啊好啊，快走。","我没兴趣，再见。"],[function():void
               {
                  mc.parent.removeChild(mc);
                  ModuleManager.showAppModule("MineSpritePanel");
                  MapManager.setLeaveCheckFun(null);
                  KTool.showMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(true);
               },function():void
               {
                  mc.parent.removeChild(mc);
                  MapManager.setLeaveCheckFun(null);
                  KTool.showMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(true);
               }]);
            });
         });
      }
      
      private static function setAnimStatus() : void
      {
         SocketConnection.sendWithCallback(43158,function(param1:SocketEvent):void
         {
            _isFirstLeave = false;
         },1);
      }
      
      public static function joinMine(param1:EmailLinkInfo) : void
      {
         var arr:Array = null;
         var tempArr:Array = null;
         var eli:EmailLinkInfo = param1;
         var sendJoinMine:Function = function():void
         {
            KTool.getMultiValue([5193,5194,5195],function(param1:Array):void
            {
               var itemNames:Array = null;
               var iid:int = 0;
               var values:Array = param1;
               var index:int = int(arr[1]) - 1;
               if(values[index] > 0)
               {
                  itemNames = ["小型","中型","大型"];
                  Alarm2.show("你已经占领过" + itemNames[index] + "矿洞，无法占有多个同类型的矿。");
               }
               else
               {
                  iid = 5487 + index;
                  KTool.getMultiValue([iid],function(param1:Array):void
                  {
                     var onMineInfoError:Function = null;
                     var arr1:Array = param1;
                     var num:int = int(arr1[0]);
                     if(num > 0)
                     {
                        onMineInfoError = function(param1:Event):void
                        {
                           Alarm2.show("矿点已经失效，无法加入！");
                        };
                        ParseSocketError.addErrorListener(300010,onMineInfoError);
                        ParseSocketError.addErrorListener(1960027,onMineInfoError);
                        SocketConnection.sendByQueue(43151,tempArr,function(param1:SocketEvent):void
                        {
                           ParseSocketError.removeErrorListener(300010,onMineInfoError);
                           ParseSocketError.removeErrorListener(1960027,onMineInfoError);
                           ModuleManager.showModule(ClientConfig.getAppModule("PveMiningPanel"),"",{
                              "id":int(arr[0]),
                              "size":int(arr[1]),
                              "openTime":uint(arr[2]),
                              "firstEnter":true
                           });
                        },function(param1:*):void
                        {
                           ParseSocketError.removeErrorListener(300010,onMineInfoError);
                           ParseSocketError.removeErrorListener(1960027,onMineInfoError);
                        });
                     }
                     else
                     {
                        Alarm2.show("很遗憾，你没有足够的开采通行证，无法加入矿点！");
                     }
                  });
               }
            });
         };
         arr = String(eli.sParam).split(":");
         tempArr = [];
         var i:int = 0;
         while(i < arr.length)
         {
            tempArr[i] = int(arr[i]);
            i++;
         }
         tempArr.push(eli.mid);
         if(int(arr[1]) < 3 || Boolean(MainManager.actorInfo.isVip))
         {
            sendJoinMine();
         }
         else
         {
            Alert.show("大型矿洞只有vip才可进入，是否成为vip?",function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
               {
                  if(MainManager.actorInfo.isVip)
                  {
                     sendJoinMine();
                  }
               });
            });
         }
      }
   }
}
