package com.robot.app.cmd
{
   import com.robot.app.achieve.AchievePanelController;
   import com.robot.app.cmd.helper.AchieveCmdFightHelper;
   import com.robot.app.fightNote.FightNoteCmdListener;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.AchieveInformInfo;
   import com.robot.core.info.AchieveListInfo;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.bean.BaseBean;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class AchieveCmdListener extends BaseBean
   {
       
      
      private var _achieveType:Array;
      
      private var _data:AchieveInformInfo;
      
      private var oneItem:MovieClip;
      
      private var spr:Sprite;
      
      public function AchieveCmdListener()
      {
         this._achieveType = [95,22,24,25,26,27,33,34,58,72,74,81,83,86,103,118,119,122,126,35,36,133,134];
         super();
      }
      
      private function activeAchieveList(param1:Array) : void
      {
         var id:uint;
         var achieve:Array = param1;
         if(achieve.length == 0)
         {
            return;
         }
         id = achieve.shift();
         SocketConnection.addCmdListener(CommandID.ACTIVEACHIEVE,function(param1:SocketEvent):void
         {
            var i:uint = 0;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.ACTIVEACHIEVE,arguments.callee);
            i = setTimeout(function():void
            {
               clearTimeout(i);
               activeAchieveList(achieve);
            },1000);
         });
         SocketConnection.send(CommandID.ACTIVEACHIEVE,id);
      }
      
      override public function start() : void
      {
         this.activeAchieveList(this._achieveType);
         SocketConnection.addCmdListener(CommandID.ACHIEVEINFORM,this.handler);
         finish();
      }
      
      private function petCatchHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,this.petCatchHandler);
         if(this._data == null)
         {
            return;
         }
         this.analyseAchieveData();
      }
      
      private function petInfoUpdate(param1:PetFightEvent) : void
      {
         PetManager.removeEventListener(PetFightEvent.PET_UPDATE_INFORM,this.petInfoUpdate);
         if(this._data == null)
         {
            return;
         }
         this.analyseAchieveData();
      }
      
      private function petFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.petFightOver);
         if(this._data == null)
         {
            return;
         }
         this.analyseAchieveData();
      }
      
      private function teamPKOver(param1:Event) : void
      {
         EventManager.removeEventListener("TeamPKOver",this.teamPKOver);
         if(this._data == null)
         {
            return;
         }
         this.analyseAchieveData();
      }
      
      private function handler(param1:SocketEvent) : void
      {
         this._data = param1.data as AchieveInformInfo;
         MainManager.actorInfo.totalAchieve += this._data.achievepoint;
         var _loc2_:uint = Math.max(this._data.value,AchieveValueCmdListener.hashmap.getValue(this._data.id));
         AchieveValueCmdListener.hashmap.add(this._data.id,_loc2_);
         EventManager.dispatchEvent(new DynamicEvent("ACHIEVELIST",this._data));
         var _loc3_:XML = AchieveXMLInfo.getBranchByID(this._data.id);
         var _loc4_:uint = uint(_loc3_.@type);
         switch(_loc4_)
         {
            case 0:
               this.analyseAchieveData();
               break;
            case 1:
               FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.petCatchHandler);
               break;
            case 2:
               if(FightNoteCmdListener.isInFightModule)
               {
                  AchieveCmdFightHelper.init(_loc4_,this._data);
               }
               else
               {
                  this.analyseAchieveData();
               }
               break;
            case 3:
               PetManager.addEventListener(PetFightEvent.PET_UPDATE_INFORM,this.petInfoUpdate);
               break;
            case 4:
               EventManager.addEventListener("TeamPKOver",this.teamPKOver);
               break;
            case 5:
               GamePlatformManager.addEventListener(GamePlatformManager.GAME_OVER,this.onOverHandler);
               break;
            default:
               this.analyseAchieveData();
         }
      }
      
      public function analyseAchieveData(param1:AchieveInformInfo = null) : void
      {
         var arr:Array = null;
         var xml:XML = null;
         var tmpdata:AchieveInformInfo = null;
         var i:uint = 0;
         var j:uint = 0;
         var t:uint = 0;
         var data:AchieveInformInfo = param1;
         arr = [];
         if(data)
         {
            this._data = data;
         }
         xml = AchieveXMLInfo.getBranchByID(this._data.id);
         if(this._data.id == 2 || this._data.id == 14 || this._data.id == 64 || this._data.id == 58 || this._data.id == 110 || this._data.id == 103 || this._data.id == 104 || this._data.id == 105 || this._data.id == 106 || this._data.id == 108)
         {
            i = 0;
            while(i < 32)
            {
               if(BitUtil.getBit(this._data.value,i) == 1)
               {
                  if(BitUtil.getBit(this._data.oldValue,i) != 1)
                  {
                     arr.push(i);
                  }
               }
               i++;
            }
         }
         else if(this._data.id == 49)
         {
            if(this._data.value == 21)
            {
               arr.push(0);
            }
         }
         else if(this._data.id == 78)
         {
            arr.push(0);
         }
         else if(this._data.id == 62)
         {
            arr.push(this._data.value - 1);
         }
         else
         {
            j = 0;
            while(j < xml.children().length())
            {
               if(this._data.value != this._data.oldValue && this._data.value == uint(xml.children()[j].@Threshold) && this._data.oldValue < uint(xml.children()[j].@Threshold))
               {
                  arr.push(j);
               }
               j++;
            }
         }
         tmpdata = this._data;
         if(arr.length > 0)
         {
            if(this._data == null)
            {
               this.creatList(xml,arr,tmpdata);
            }
            else
            {
               t = setTimeout(function():void
               {
                  clearTimeout(t);
                  creatList(xml,arr,tmpdata);
               },2000);
            }
         }
      }
      
      private function onOverHandler(param1:Event) : void
      {
         GamePlatformManager.removeEventListener(GamePlatformManager.GAME_OVER,this.onOverHandler);
         if(this._data == null)
         {
            return;
         }
         this.analyseAchieveData();
      }
      
      private function creatList(param1:XML, param2:Array, param3:AchieveInformInfo) : void
      {
         var _xml:XML = null;
         var index:uint = 0;
         var xml:XML = param1;
         var arr:Array = param2;
         var tmpdata:AchieveInformInfo = param3;
         if(arr.length == 0 || tmpdata == null)
         {
            return;
         }
         index = arr.length - 1;
         ResourceManager.getResource(ClientConfig.getAppRes("AchieveAnimate_2"),function(param1:DisplayObject):void
         {
            var mc1:DisplayObject = param1;
            ResourceManager.getResource(ClientConfig.getAppRes("AchieveAnimate_1"),function(param1:DisplayObject):void
            {
               var a:Array;
               var achievementPoint:int;
               var mc2:DisplayObject = param1;
               var item:MovieClip = mc1 as MovieClip;
               var boom:MovieClip = mc2 as MovieClip;
               if(tmpdata.id == 2 && arr[index] >= 15)
               {
                  _xml = xml.children()[arr[index] - 1];
               }
               else
               {
                  _xml = xml.children()[arr[index]];
               }
               if(tmpdata.id == 43)
               {
                  item["title_name"].text = "属性至尊";
               }
               else if(_xml.@achName.toString() != "")
               {
                  item["title_name"].text = _xml.@achName;
               }
               else
               {
                  item["title_name"].text = _xml.@Desc;
               }
               if(tmpdata.id == 2 || tmpdata.id == 14 || tmpdata.id == 64 || tmpdata.id == 103 || tmpdata.id == 104 || tmpdata.id == 105 || tmpdata.id == 106 || tmpdata.id == 110)
               {
                  getSptIcon(_xml.@proicon,item["pro_icon"]);
               }
               else
               {
                  getPorIcon(_xml.@proicon,item["pro_icon"]);
               }
               a = [10,15,30,20,40,50,25,5,35,0];
               achievementPoint = int(uint(_xml.@AchievementPoint));
               getIcon((a.indexOf(achievementPoint) + 1).toString(),item["icon_mc"]);
               if(spr == null)
               {
                  spr = new Sprite();
                  LevelManager.stage.addChild(spr);
               }
               LevelManager.stage.addChild(spr);
               item.y = spr.numChildren / 2 * 114 + 20 + 42;
               item.x = 172.95;
               item.scaleX = 0.01;
               item.scaleY = 0.01;
               spr.x = (960 - 354) / 2;
               spr.y = 400 - spr.height;
               boom.x = 173.8;
               boom.y = item.y + 21;
               spr.addChild(item);
               spr.addChild(boom);
               oneItem = spr.getChildAt(spr.numChildren - 1) as MovieClip;
               TweenLite.to(item,0.5,{
                  "ease":Back.easeOut,
                  "scaleX":1,
                  "scaleY":1,
                  "onComplete":function():void
                  {
                     var id:* = undefined;
                     id = setTimeout(function():void
                     {
                        clearTimeout(id);
                        TweenLite.to(spr,1,{
                           "alpha":0,
                           "onComplete":function():void
                           {
                              if(spr)
                              {
                                 spr.alpha = 1;
                                 DisplayUtil.removeForParent(spr);
                                 spr = null;
                              }
                           }
                        });
                     },3000);
                     oneItem.addEventListener(MouseEvent.CLICK,onOneItemClickHandler);
                     _data = null;
                  }
               });
            },"AchieveBoom_UI");
         },"AchieveBar_UI");
      }
      
      private function getIcon(param1:String, param2:MovieClip) : void
      {
         var iconID:String = param1;
         var iconContainer:MovieClip = param2;
         var _url:String = String(ClientConfig.getResPath("achieve/point/" + iconID + ".swf"));
         ResourceManager.getResource(_url,function(param1:DisplayObject):void
         {
            var _loc2_:MLoadPane = null;
            if(param1)
            {
               _loc2_ = new MLoadPane(param1);
               if(param1.width > param1.height)
               {
                  _loc2_.fitType = MLoadPane.FIT_WIDTH;
               }
               else
               {
                  _loc2_.fitType = MLoadPane.FIT_HEIGHT;
               }
               _loc2_.setSizeWH(50,40);
               DisplayUtil.removeAllChild(iconContainer);
               iconContainer.addChild(_loc2_);
            }
         },"item");
      }
      
      private function onOneItemClickHandler(param1:MouseEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.ACHIEVELIST,this.onAchieveListHandler);
         SocketConnection.send(CommandID.ACHIEVELIST);
      }
      
      private function onAchieveListHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ACHIEVELIST,this.onAchieveListHandler);
         var _loc2_:AchieveListInfo = param1.data as AchieveListInfo;
         AchievePanelController.showNew();
      }
      
      private function getSptIcon(param1:String, param2:MovieClip) : void
      {
         var iconID:String = param1;
         var iconContainer:MovieClip = param2;
         var _url:String = String(ClientConfig.getResPath("achieve/spt/" + iconID + ".swf"));
         ResourceManager.getResource(_url,function(param1:DisplayObject):void
         {
            var _loc2_:MLoadPane = null;
            if(param1)
            {
               _loc2_ = new MLoadPane(param1);
               if(param1.width > param1.height)
               {
                  _loc2_.fitType = MLoadPane.FIT_WIDTH;
               }
               else
               {
                  _loc2_.fitType = MLoadPane.FIT_HEIGHT;
               }
               _loc2_.setSizeWH(50,50);
               DisplayUtil.removeAllChild(iconContainer);
               iconContainer.addChild(param1);
            }
         },"spt");
      }
      
      private function getPorIcon(param1:String, param2:MovieClip) : void
      {
         var iconID:String = param1;
         var iconContainer:MovieClip = param2;
         var _url:String = String(ClientConfig.getResPath("achieve/icon/" + iconID + ".swf"));
         ResourceManager.getResource(_url,function(param1:DisplayObject):void
         {
            var _loc2_:MLoadPane = null;
            if(param1)
            {
               _loc2_ = new MLoadPane(param1);
               if(param1.width > param1.height)
               {
                  _loc2_.fitType = MLoadPane.FIT_WIDTH;
               }
               else
               {
                  _loc2_.fitType = MLoadPane.FIT_HEIGHT;
               }
               _loc2_.setSizeWH(50,40);
               DisplayUtil.removeAllChild(iconContainer);
               iconContainer.addChild(_loc2_);
            }
         },"icon");
      }
   }
}
