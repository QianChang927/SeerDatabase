package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_25 extends BaseMapProcess
   {
       
      
      private var flyEquipArr:Array;
      
      private var yunxiaoEquipArr:Array;
      
      public function MapProcess_25()
      {
         this.flyEquipArr = [100048,100049,100050,100051];
         this.yunxiaoEquipArr = [1301079,1301080,1301081,1301082];
         super();
      }
      
      override protected function init() : void
      {
         if(!MapStoryManager.IsInStory)
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
            this.onStoryQuit();
         }
         else
         {
            this.onStoryStart();
         }
         if(MapStoryManager.StoryProgress >= 17)
         {
            animatorLevel["animator_mc22"].visible = false;
         }
         topLevel.visible = false;
         conLevel["Alice"].addEventListener(MouseEvent.CLICK,this.AliceDialog);
         EventManager.addEventListener(MapStoryManager.ON_MAP_STORY_Quit,this.onStoryQuit);
         EventManager.addEventListener(MapStoryManager.ON_MAP_STORY_START,this.onStoryStart);
         if(conLevel["Gas"])
         {
            conLevel["Gas"].addEventListener(MouseEvent.CLICK,this.GasDialog);
         }
         if(conLevel["Ship"])
         {
            conLevel["Ship"].addEventListener(MouseEvent.CLICK,this.ShipDialog);
         }
         if(conLevel["Moby"])
         {
            conLevel["Moby"].addEventListener(MouseEvent.CLICK,this.MobyDialog);
         }
         if(conLevel["PopWork"])
         {
            conLevel["PopWork"].addEventListener(MouseEvent.CLICK,this.PopWorkDialog);
         }
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
         if(conLevel["Gas"])
         {
            conLevel["Gas"].removeEventListener(MouseEvent.CLICK,this.GasDialog);
         }
         if(conLevel["Ship"])
         {
            conLevel["Ship"].removeEventListener(MouseEvent.CLICK,this.ShipDialog);
         }
         if(conLevel["Moby"])
         {
            conLevel["Moby"].removeEventListener(MouseEvent.CLICK,this.MobyDialog);
         }
         if(conLevel["PopWork"])
         {
            conLevel["PopWork"].removeEventListener(MouseEvent.CLICK,this.PopWorkDialog);
         }
         if(conLevel["flyCloth"])
         {
            ToolTipManager.remove(conLevel["flyCloth"]);
            conLevel["flyCloth"].removeEventListener(MouseEvent.CLICK,this.onGetFlyHandler);
         }
         if(conLevel["Alice"])
         {
            conLevel["Alice"].removeEventListener(MouseEvent.CLICK,this.AliceDialog);
         }
         EventManager.removeEventListener(MapStoryManager.ON_MAP_STORY_Quit,this.onStoryQuit);
         EventManager.removeEventListener(MapStoryManager.ON_MAP_STORY_START,this.onStoryStart);
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
         if(!MapStoryManager.IsInStory)
         {
            this.doorAction();
         }
         else
         {
            this.PopWorkDialog(null);
         }
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
         if(!MapStoryManager.IsInStory)
         {
            EnergyController.exploit(5);
         }
         else
         {
            this.GasDialog(null);
         }
      }
      
      private function onStoryStart(param1:* = null) : void
      {
         var e:* = param1;
         conLevel["Ship"].visible = true;
         conLevel["Moby"].visible = true;
         conLevel["Alice"].visible = true;
         DisplayUtil.removeForParent(conLevel["bigMaomao"]);
         DisplayUtil.removeForParent(conLevel["flyCloth"]);
         conLevel["Gas"].visible = true;
         if(MapStoryManager.StoryProgress == 2)
         {
            MapStoryManager.changeSeerEquip(this.flyEquipArr);
            Alarm.show("飞行装已更换完毕，可前往进行弹射",function():void
            {
            });
         }
         if(MapStoryManager.StoryProgress == 4)
         {
            MapStoryManager.changeSeerEquip(this.yunxiaoEquipArr);
            Alarm.show("飞行装已更换完毕，可前往进行弹射",function():void
            {
            });
         }
         if(MapStoryManager.StoryProgress == 3)
         {
            MainManager.actorModel.sprite.x = 205;
            MainManager.actorModel.sprite.y = 235;
            conLevel["Alice"].x = 255;
            conLevel["Alice"].y = 128;
            this.AliceDialog(null);
         }
         conLevel["Alice"].gotoAndStop(1);
         if(MapStoryManager.StoryProgress >= 4)
         {
            conLevel["Alice"].x = 249;
            conLevel["Alice"].y = 135;
            conLevel["Alice"].gotoAndStop(2);
         }
      }
      
      private function onStoryQuit(param1:* = null) : void
      {
         conLevel["Ship"].visible = true;
         conLevel["Moby"].visible = false;
         conLevel["Alice"].visible = MapStoryManager.StoryProgress >= 0 && MapStoryManager.StoryProgress < 5;
         MapStoryManager.recoverSeerEquip();
         conLevel["Gas"].visible = false;
         conLevel["Alice"].gotoAndStop(1);
         if(MapStoryManager.StoryProgress >= 4)
         {
            conLevel["Alice"].x = 249;
            conLevel["Alice"].y = 135;
            conLevel["Alice"].gotoAndStop(2);
         }
      }
      
      private function AliceDialog(param1:*) : void
      {
         var mainDialog:Function = null;
         var e:* = param1;
         mainDialog = function():void
         {
            if(MapStoryManager.IsInStory == false && MapStoryManager.StoryProgress >= 1)
            {
               MapStoryManager.dialog(165,1,function(param1:int):void
               {
                  if(param1 == 1)
                  {
                     MapStoryManager.startStory();
                  }
               });
               return;
            }
            switch(MapStoryManager.StoryProgress)
            {
               case 0:
                  if(MapStoryManager.IsInStory == false)
                  {
                     MapStoryManager.dialog(165,1,function(param1:int):void
                     {
                        var va:int = param1;
                        if(va == 1)
                        {
                           MapStoryManager.startStory();
                           MapStoryManager.dialogToNextStep(165,6,function(param1:int):void
                           {
                           });
                        }
                     });
                  }
                  else
                  {
                     MapStoryManager.dialogToNextStep(165,6,function(param1:int):void
                     {
                     });
                  }
                  break;
               case 1:
                  MapStoryManager.dialog(165,7,function(param1:int):void
                  {
                  });
                  break;
               case 2:
                  MapStoryManager.dialog(165,11,function(param1:int):void
                  {
                  });
                  break;
               case 3:
                  MapStoryManager.dialog(165,15,function(param1:int):void
                  {
                     var va:int = param1;
                     ModuleManager.showAppModule("MapStoryScreenView",{
                        "acId":165,
                        "numId":16,
                        "callback":function():void
                        {
                           topLevel.visible = true;
                           AnimateManager.playMcAnimate(topLevel["ani"],0,"",function():void
                           {
                              topLevel.visible = false;
                              conLevel["Alice"].gotoAndStop(2);
                              MapStoryManager.changeSeerEquip(yunxiaoEquipArr);
                              MapStoryManager.dialog(165,17,function(param1:int):void
                              {
                                 MapStoryManager.pushNextStep();
                              });
                           });
                        }
                     });
                  });
                  break;
               case 4:
                  MapStoryManager.dialog(165,18,function(param1:int):void
                  {
                  });
            }
         };
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget,mainDialog);
         }
         else
         {
            mainDialog();
         }
      }
      
      private function GasDialog(param1:*) : void
      {
         var e:* = param1;
         if(!MapStoryManager.IsInStory)
         {
            return;
         }
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget);
         }
         switch(MapStoryManager.StoryProgress)
         {
            case 0:
               MapStoryManager.dialog(165,2,function(param1:int):void
               {
               });
               break;
            case 1:
               MapStoryManager.dialog(165,2,function(param1:int):void
               {
               });
               break;
            case 2:
               MapStoryManager.dialog(165,12,function(param1:int):void
               {
               });
               break;
            case 3:
               MapStoryManager.dialog(165,12,function(param1:int):void
               {
               });
               break;
            case 4:
               MapStoryManager.dialog(165,19,function(param1:int):void
               {
               });
         }
      }
      
      private function ShipDialog(param1:*) : void
      {
         var e:* = param1;
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget,function():void
            {
               if(!MapStoryManager.IsInStory)
               {
                  MapManager.changeMap(4);
                  return;
               }
               switch(MapStoryManager.StoryProgress)
               {
                  case 0:
                     MapStoryManager.dialog(165,3,function(param1:int):void
                     {
                        if(param1 != 1)
                        {
                           if(param1 == 2)
                           {
                              MapStoryManager.quitStory();
                              MapManager.changeMap(1);
                           }
                        }
                     });
                     break;
                  case 1:
                     MapStoryManager.dialog(165,8,function(param1:int):void
                     {
                     });
                     break;
                  case 2:
                     MapStoryManager.dialog(165,13,function(param1:int):void
                     {
                        if(param1 != 1)
                        {
                           if(param1 == 2)
                           {
                              MapStoryManager.quitStory();
                              MapManager.changeMap(1);
                           }
                        }
                     });
                     break;
                  case 3:
                     MapStoryManager.dialog(165,13,function(param1:int):void
                     {
                     });
                     break;
                  case 4:
                     MapStoryManager.dialog(165,20,function(param1:int):void
                     {
                        if(param1 == 2)
                        {
                           MapStoryManager.quitStory();
                           MapManager.changeMap(1);
                        }
                     });
               }
            });
         }
      }
      
      private function MobyDialog(param1:*) : void
      {
         var e:* = param1;
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget,function():void
            {
               switch(MapStoryManager.StoryProgress)
               {
                  case 0:
                     MapStoryManager.dialog(165,4,function(param1:int):void
                     {
                     });
                     break;
                  case 1:
                     MapStoryManager.dialogToNextStep(165,10,function(param1:int):void
                     {
                        var va:int = param1;
                        MapStoryManager.changeSeerEquip(flyEquipArr);
                        Alarm.show("飞行装已更换完毕，可前往进行弹射",function():void
                        {
                        });
                     });
                     break;
                  case 2:
                     MapStoryManager.dialog(165,14,function(param1:int):void
                     {
                     });
                     break;
                  case 3:
                     MapStoryManager.dialog(165,14,function(param1:int):void
                     {
                     });
                     break;
                  case 4:
                     MapStoryManager.dialog(165,21,function(param1:int):void
                     {
                     });
               }
            });
         }
      }
      
      private function PopWorkDialog(param1:*) : void
      {
         var e:* = param1;
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget);
         }
         switch(MapStoryManager.StoryProgress)
         {
            case 0:
               MapStoryManager.dialog(165,5,function(param1:int):void
               {
               });
               break;
            case 1:
               MapStoryManager.dialog(165,9,function(param1:int):void
               {
               });
               break;
            case 2:
               this.doorAction();
               break;
            case 3:
               MapStoryManager.dialog(165,5,function(param1:int):void
               {
               });
               break;
            case 4:
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("MapStoryFullAnim_1"),function():void
               {
                  MapStoryManager.pushNextStep().then(function():void
                  {
                     MapManager.changeMap(27);
                  });
               });
         }
      }
   }
}
