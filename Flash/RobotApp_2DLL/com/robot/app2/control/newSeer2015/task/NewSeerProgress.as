package com.robot.app2.control.newSeer2015.task
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.newSeer2015.NewSeer2015Controller;
   import com.robot.app2.control.newSeer2015.NewSeerGuide;
   import com.robot.app2.control.newSeer2015.NewSeerIcon;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.app2.systems.iconLevel.IconView;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.DataEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerProgress
   {
      
      public static const WATER_1_FIGHT:int = 1;
      
      public static const WATER_2_EXP_MOVIE:int = 2;
      
      public static const WATER_2_EXP:int = 3;
      
      public static const WATER_3_PET_MOVIE:int = 4;
      
      public static const WATER_3_PET:int = 5;
      
      public static const FIRE_1_DRUG_MOVIE:int = 6;
      
      public static const FIRE_1_DRUG:int = 7;
      
      public static const FIRE_2_PET_MOVIE:int = 8;
      
      public static const FIRE_2_PET:int = 9;
      
      public static const GRASS_1_CATCH_MOVIE:int = 10;
      
      public static const GRASS_1_CATCH:int = 11;
      
      public static const GRASS_2_PET_MOVIE:int = 12;
      
      public static const GRASS_2_PET:int = 13;
      
      public static const ADVANCE_INTRODUCE:int = 14;
      
      public static const ADVANCE_DV_MOVIE:int = 15;
      
      public static const ADVANCE_DV:int = 16;
      
      public static const FINAL:int = 19;
      
      public static const OVER:int = 20;
      
      private static var _ins:com.robot.app2.control.newSeer2015.task.NewSeerProgress;
       
      
      private var _config:XML;
      
      private var _inited:Boolean = false;
      
      private var _taskMap:HashMap;
      
      private var _progress:int = -1;
      
      private var _icons:Array;
      
      public function NewSeerProgress()
      {
         this._taskMap = new HashMap();
         this._icons = [];
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.task.NewSeerProgress
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.task.NewSeerProgress());
      }
      
      private function init(param1:Function = null) : void
      {
         var func:Function = param1;
         var loader:SeerUrlLoader = new SeerUrlLoader("加载ICON配置文件");
         loader.doLoad(ClientConfig.getAppRes("newSeer2015/task/new_seer_task",".xml"),function(param1:*):void
         {
            _config = XML(param1);
            parse();
            _inited = true;
            if(null != func)
            {
               func();
            }
         });
      }
      
      private function parse() : void
      {
         var _loc1_:XML = null;
         for each(_loc1_ in this._config.descendants("task"))
         {
            this._taskMap.add(String(_loc1_.@progress),this.parseTask(_loc1_));
         }
      }
      
      private function parseTask(param1:XML) : Object
      {
         var _loc3_:XML = null;
         var _loc4_:Object = null;
         var _loc2_:Object = {};
         _loc2_.progress = String(param1.@progress);
         _loc2_.guide = String(param1.@guide);
         _loc2_.gift = String(param1.@gift);
         _loc2_.click = String(param1.@click);
         _loc2_.autoComplete = String(param1.@autoComplete);
         _loc2_.autoComplete = _loc2_.autoComplete == "true" ? true : false;
         _loc2_.steps = [];
         _loc2_.stat = "";
         if(param1.@stat)
         {
            _loc2_.stat = String(param1.@stat);
         }
         for each(_loc3_ in param1.step)
         {
            (_loc4_ = {}).type = String(_loc3_.@type);
            if(_loc4_.type == "dialog")
            {
               _loc4_.action = String(_loc3_.@action);
               if(_loc4_.action == "load")
               {
                  _loc4_.name = String(_loc3_.@name);
                  _loc4_.path = String(_loc3_.@path);
               }
               else
               {
                  _loc4_.ui = String(_loc3_.@ui);
               }
            }
            else if(_loc4_.type == "mask")
            {
               _loc4_.action = String(_loc3_.@action);
               _loc4_.next = String(_loc3_.@next);
               _loc4_.ui = String(_loc3_.@ui);
            }
            else if(_loc4_.type == "panel")
            {
               _loc4_.action = String(_loc3_.@action);
               _loc4_.path = String(_loc3_.@path);
            }
            else if(_loc4_.type == "map")
            {
               _loc4_.id = String(_loc3_.@id);
            }
            else if(_loc4_.type == "fakeFight")
            {
               _loc4_.action = String(_loc3_.@action);
               if(_loc4_.action == "load")
               {
                  _loc4_.path = String(_loc3_.@path);
               }
               else
               {
                  _loc4_.from = String(_loc3_.@from);
                  _loc4_.end = String(_loc3_.@end);
               }
            }
            else if(_loc4_.type == "icon")
            {
               _loc4_.action = String(_loc3_.@action);
               _loc4_.ui = String(_loc3_.@ui);
            }
            else if(_loc4_.type == "anim")
            {
               _loc4_.action = String(_loc3_.@action);
            }
            _loc2_.steps.push(_loc4_);
         }
         return _loc2_;
      }
      
      public function update(param1:int) : void
      {
         var progress:int = param1;
         this._progress = progress;
         MainManager.newSeerProgress = this._progress;
         if(this._inited)
         {
            NewSeerProgressPanel.instance.init(this.currentTask);
            this.listen();
         }
         else
         {
            this.init(function():void
            {
               initListen();
               NewSeerProgressPanel.instance.init(currentTask);
               listen();
            });
         }
      }
      
      private function initListen() : void
      {
         if(this._progress >= WATER_2_EXP_MOVIE && this._progress < OVER)
         {
            ToolBarController.panel.closePetBag(true);
         }
         ModuleManager.addEventListener(ModuleManager.MODEL_LOADED,this.onModuleLoad);
         if(this._progress >= ADVANCE_DV_MOVIE)
         {
            ToolBarController.panel.setCulture(true);
            IconController.eachIcon(function(param1:IconView):void
            {
               setViewPos(param1);
            });
            EventManager.addEventListener("iconAdded",this.onIconAdd);
            this.toggleToolBar(true);
         }
      }
      
      private function onIconAdd(param1:DynamicEvent) : void
      {
         this.setViewPos(param1.paramObject as IconView);
      }
      
      private function setViewPos(param1:IconView) : void
      {
         var id:int = 0;
         var view:IconView = param1;
         if(Boolean(view) && (view.direction == "right" || view.direction == "right_side"))
         {
            if(Boolean(view.ui) && view.ui.y > 0)
            {
               id = int(setTimeout(function():void
               {
                  clearTimeout(id);
                  view.ui.y -= NewSeerIcon.ICON_OFFSET;
                  _icons.push(view.url);
               },1000));
            }
         }
      }
      
      public function destroy() : void
      {
         ModuleManager.removeListener(ModuleManager.MODEL_LOADED,this.onModuleLoad);
         EventManager.removeEventListener("iconAddedToStage",this.onIconAdd);
         this._config = null;
         this._taskMap.clear();
         this._taskMap = null;
      }
      
      private function onModuleLoad(param1:DataEvent) : void
      {
         var _loc2_:MovieClip = null;
         if(ModuleManager.hasModule(ClientConfig.getAppModule("ADPetBagPanelNew")))
         {
            _loc2_ = ModuleManager.getModule(ClientConfig.getAppModule("ADPetBagPanelNew")).content["ui"];
            CommonUI.setEnabled(_loc2_.followBtn,false,true);
            CommonUI.setEnabled(_loc2_.storageBtn,false,true);
            CommonUI.setEnabled(_loc2_.waitBtn,false,true);
            CommonUI.setEnabled(_loc2_.petSkillPanel.ReviewsBtn,false,true);
            CommonUI.setEnabled(_loc2_.petStorageBtn,false,true);
            CommonUI.setEnabled(_loc2_.cureBtn,false,true);
            CommonUI.setEnabled(_loc2_.friend,false,true);
            CommonUI.setEnabled(_loc2_.petInfoPanel.abilityMarkMC,false,true);
            CommonUI.setEnabled(_loc2_.petInfoPanel.skilMarkMC,false,true);
            CommonUI.setEnabled(_loc2_.petInfoPanel.commonMarkMC,false,true);
            CommonUI.setEnabled(_loc2_.petInfoPanel.skillStone,false,true);
            CommonUI.setEnabled(_loc2_.secondPanel.second1.go_6,false,true);
            CommonUI.setEnabled(_loc2_.secondPanel.second1.go_7,false,true);
         }
      }
      
      public function listen() : void
      {
         if(this._progress == WATER_2_EXP_MOVIE)
         {
            NewSeerWaterTask.instance.water_2_exp_listen();
         }
         else if(this._progress == WATER_3_PET_MOVIE)
         {
            NewSeerWaterTask.instance.water_3_pet_listen();
         }
         else if(this._progress == FIRE_1_DRUG_MOVIE)
         {
            NewSeerFireTask.instance.fire_1_drug_listen();
         }
         else if(this._progress == FIRE_2_PET_MOVIE)
         {
            NewSeerFireTask.instance.fire_2_pet_listen();
         }
         else if(this._progress == GRASS_1_CATCH_MOVIE)
         {
            NewSeerGrassTask.instance.grass_1_catch_listen();
         }
         else if(this._progress == GRASS_2_PET_MOVIE)
         {
            NewSeerGrassTask.instance.grass_2_pet_listen();
         }
         else if(this._progress == ADVANCE_DV_MOVIE)
         {
            NewSeerAdvanceTask.instance.advance_2_dv_listen();
         }
      }
      
      public function get currentTask() : Object
      {
         var _loc2_:Object = null;
         var _loc1_:int = this._progress + 1;
         if(_loc1_ > OVER)
         {
            _loc1_ = OVER;
         }
         while((_loc2_ = this._taskMap.getValue(_loc1_)) == null)
         {
            _loc1_ += 1;
         }
         return _loc2_;
      }
      
      public function get currentProgress() : int
      {
         return this._progress;
      }
      
      public function set currentProgress(param1:int) : void
      {
         this._progress = param1;
      }
      
      public function complete(param1:int, param2:Function = null) : void
      {
         var checkMap:Function = null;
         var checkGift:Function = null;
         var step:int = param1;
         var func:Function = param2;
         checkMap = function(param1:SocketEvent = null):void
         {
            if(step == GRASS_1_CATCH_MOVIE)
            {
               checkGift();
            }
            else
            {
               KTool.changeMapWithCallBack(NewSeer2015Controller.MAIN_MAP,checkGift);
            }
         };
         checkGift = function():void
         {
            var gift:String = null;
            gift = String(currentTask.gift);
            if(!gift)
            {
               checkCallback();
               return;
            }
            ResourceManager.getResource(ClientConfig.getAppRes("newSeer2015/task/task_complete_alarm"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               mc.gotoAndStop(gift);
               mc.y = 560;
               LevelManager.tipLevel.addChild(mc);
               TweenLite.to(mc,1,{
                  "y":0,
                  "onComplete":function():void
                  {
                     var tid:* = undefined;
                     tid = setTimeout(function():void
                     {
                        clearTimeout(tid);
                        DisplayUtil.removeForParent(mc);
                        checkCallback();
                     },2500);
                  }
               });
            });
         };
         var checkCallback:Function = function():void
         {
            if(step == OVER)
            {
               if(null != func)
               {
                  func();
               }
            }
            else
            {
               NewSeerGuide.instance.update(func);
            }
            NewSeerProgressPanel.instance.toggleGo(true);
         };
         NewSeerProgressPanel.instance.toggleGo(false);
         if(this.currentProgress < step && Boolean(this.currentTask.autoComplete))
         {
            SocketConnection.sendByQueue(CommandID.NEW_SEER_2015_COMPLETE_TASK,[step,NewSeerGuide.instance.catchTime],checkMap);
         }
         else
         {
            checkMap();
         }
      }
      
      public function toggleToolBar(param1:Boolean) : void
      {
         ToolBarController.panel.show();
         if(param1)
         {
            ToolBarController.showOrHideAllUser(true);
            ToolBarController.panel.setFriendEnable(true);
            ToolBarController.panel.setHelperEnable(true);
            ToolBarController.panel.setHomeEnable(true);
            ToolBarController.panel.setShopEnable(true);
            ToolBarController.panel.openMap();
            ToolBarController.panel.openStarMap();
            ToolBarController.panel.vipOn();
            ToolBarController.panel.closePetBag(true);
            ToolBarController.panel.bagOn();
            ToolBarController.panel.setShopMv(true);
            ToolBarController.panel.setCulture(true);
         }
         else
         {
            ToolBarController.panel.setFriendEnable(false);
            ToolBarController.panel.setHelperEnable(false);
            ToolBarController.panel.setHomeEnable(false);
            ToolBarController.panel.setShopEnable(false);
            ToolBarController.panel.closeMap();
            ToolBarController.panel.closeStarMap();
            ToolBarController.panel.vipOff();
            ToolBarController.panel.closePetBag(false);
            ToolBarController.panel.bagOff();
            ToolBarController.panel.setShopMv(false);
            ToolBarController.panel.setCulture(false);
         }
      }
   }
}
