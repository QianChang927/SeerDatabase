package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_25 extends BaseMapProcess
   {
       
      
      public function MapProcess_25()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,84806806);
         if(TasksManager.getTaskStatus(97) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(97,function(param1:Array):void
            {
               if(Boolean(param1[3]) && !param1[4])
               {
                  if(MapProcess_325.visiteMaomao != "visited")
                  {
                     conLevel["bigMaomao"].visible = true;
                     conLevel["bigMaomao"].buttonMode = true;
                     conLevel["bigMaomao"].addEventListener(MouseEvent.CLICK,pleaseMao);
                  }
               }
               else
               {
                  DisplayUtil.removeForParent(conLevel["bigMaomao"]);
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(conLevel["bigMaomao"]);
         }
         ItemManager.getCloth(function():void
         {
            if(ItemManager.containsAll(100048))
            {
               DisplayUtil.removeForParent(conLevel["flyCloth"]);
            }
            else
            {
               ToolTipManager.add(conLevel["flyCloth"],"领取飞行套装");
               conLevel["flyCloth"].buttonMode = true;
               conLevel["flyCloth"].addEventListener(MouseEvent.CLICK,onGetFlyHandler);
            }
         });
      }
      
      private function onGetFlyHandler(param1:MouseEvent) : void
      {
         ItemAction.buyMultiItem(4,"飞行套装",100048,100049,100050,100051);
      }
      
      private function pleaseMao(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BIGMAOMAO,["哇哇哇！！！嘟嘟哒！嘟嘟哒！什么？你说你找我去开演唱会？哇卡卡卡卡！那可是毛毛的梦想！！#8#8我这就去艾迪星球！哟呼！"],["毛毛似乎太兴奋了点吧……"],[function():void
         {
            AnimateManager.playMcAnimate(conLevel["bigMaomao"],0,"",function():void
            {
               var _loc1_:* = undefined;
               MapProcess_325.visiteMaomao = "visited";
               if(MapProcess_325.vistiteEva == "visited")
               {
                  TasksManager.complete(97,4,null,true);
               }
               else
               {
                  _loc1_ = new AppModel(ClientConfig.getTaskModule("TaskPanel_97"),"正在打开任务信息....");
                  _loc1_.setup();
                  _loc1_.show();
               }
            });
         }]);
      }
      
      override public function destroy() : void
      {
         if(conLevel["bigMaomao"])
         {
            conLevel["bigMaomao"].removeEventListener(MouseEvent.CLICK,this.pleaseMao);
         }
         if(conLevel["flyCloth"])
         {
            ToolTipManager.remove(conLevel["flyCloth"]);
            conLevel["flyCloth"].removeEventListener(MouseEvent.CLICK,this.onGetFlyHandler);
         }
      }
      
      private function doorAction() : void
      {
         conLevel["door"].addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            var e:Event = param1;
            if(conLevel["door"].currentFrame == 18)
            {
               conLevel["door"].removeEventListener(Event.ENTER_FRAME,arguments.callee);
               MainManager.actorModel.sprite.x = 214;
               MainManager.actorModel.sprite.y = 240;
               TweenLite.to(MainManager.actorModel.sprite,1,{
                  "x":220,
                  "y":-40,
                  "onComplete":function():void
                  {
                     MapManager.changeMap(26);
                  }
               });
            }
         });
         (conLevel["door"] as MovieClip).gotoAndPlay(2);
      }
      
      public function kettleFun() : void
      {
         this.doorAction();
      }
      
      private function isWearFlyCloths() : Boolean
      {
         var _loc1_:Array = MainManager.actorInfo.clothIDs;
         if(_loc1_.indexOf(100048) != -1 && _loc1_.indexOf(100049) != -1 && _loc1_.indexOf(100050) != -1 && _loc1_.indexOf(100051) != -1)
         {
            return true;
         }
         return false;
      }
      
      public function exploitGas() : void
      {
         EnergyController.exploit(5);
      }
   }
}
