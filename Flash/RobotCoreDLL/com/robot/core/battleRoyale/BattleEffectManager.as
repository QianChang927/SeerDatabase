package com.robot.core.battleRoyale
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.ds.HashMap;
   import org.taomee.utils.DisplayUtil;
   
   public class BattleEffectManager
   {
       
      
      private var _effectMap:HashMap;
      
      public function BattleEffectManager()
      {
         super();
         this._effectMap = new HashMap();
         this._effectMap.add(400761,MapManager.currentMap.libManager.getClass("effect_400761"));
         this._effectMap.add(400762,MapManager.currentMap.libManager.getClass("effect_400762"));
         this._effectMap.add(400753,MapManager.currentMap.libManager.getClass("effect_400753"));
         this._effectMap.add(400766,MapManager.currentMap.libManager.getClass("effect_400766"));
         this._effectMap.add(400767,MapManager.currentMap.libManager.getClass("effect_400767"));
         this._effectMap.add(400768,MapManager.currentMap.libManager.getClass("effect_400766"));
         this._effectMap.add(400769,MapManager.currentMap.libManager.getClass("effect_400767"));
      }
      
      public function showEffect(param1:uint, param2:uint, param3:BasePeoleModel, param4:Function = null) : void
      {
         var _class:Class = null;
         var mc:MovieClip = null;
         var effectID:uint = param1;
         var targetID:uint = param2;
         var mode:BasePeoleModel = param3;
         var func:Function = param4;
         if(this._effectMap.containsKey(effectID))
         {
            _class = this._effectMap.getValue(effectID);
            mc = MovieClip(new _class());
            mc.x = mode.x;
            mc.y = mode.y + 20;
            mc.addEventListener(Event.ENTER_FRAME,function():void
            {
               mc.x = mode.x;
               mc.y = mode.y + 20;
               if(mc.currentFrame == mc.totalFrames)
               {
                  mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  DisplayUtil.removeForParent(mc);
                  mc.stop();
                  mc = null;
               }
            });
            MapManager.currentMap.depthLevel.addChild(mc);
            mc.gotoAndPlay(1);
            if(targetID == mode.info.userID)
            {
               switch(effectID)
               {
                  case 400761:
                     this.stopMode(mode);
                     break;
                  case 400762:
                     this.disturbMode(mode);
                     break;
                  default:
                     if(func != null)
                     {
                        func(mode);
                     }
               }
            }
         }
      }
      
      private function stopMode(param1:BasePeoleModel) : void
      {
         var delay:uint = 0;
         var mode:BasePeoleModel = param1;
         BattleFightManager.stopBodyMove(mode);
         delay = setTimeout(function():void
         {
            BattleFightManager.startBodyMove(mode);
            clearTimeout(delay);
         },3000);
      }
      
      private function disturbMode(param1:BasePeoleModel) : void
      {
         var delay:uint = 0;
         var mode:BasePeoleModel = param1;
         this.disturbBody(mode);
         delay = setTimeout(function():void
         {
            normalBody(mode);
            clearTimeout(delay);
         },3000);
      }
      
      private function disturbBody(param1:BasePeoleModel) : void
      {
         if(param1 == MainManager.actorModel)
         {
            for each(param1 in UserManager.getUserModelList())
            {
               param1.mouseEnabled = false;
               param1.mouseChildren = false;
            }
         }
      }
      
      private function normalBody(param1:BasePeoleModel) : void
      {
         if(param1 == MainManager.actorModel)
         {
            for each(param1 in UserManager.getUserModelList())
            {
               param1.mouseEnabled = true;
               param1.mouseChildren = true;
            }
         }
      }
   }
}
