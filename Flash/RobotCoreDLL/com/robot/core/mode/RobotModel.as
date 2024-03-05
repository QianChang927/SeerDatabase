package com.robot.core.mode
{
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.npc.NpcInfo;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.text.TextFormat;
   
   public class RobotModel extends BasePeoleModel
   {
       
      
      private var _posList:Array;
      
      private var _dialogList:Array;
      
      public function RobotModel(param1:NpcInfo, param2:Array = null)
      {
         var _loc3_:UserInfo = null;
         var _loc4_:uint = 0;
         this._dialogList = param2;
         _loc3_ = new UserInfo();
         _loc3_.color = param1.color;
         _loc3_.nick = param1.npcName;
         for each(_loc4_ in param1.clothIds)
         {
            _loc3_.clothes.push(new PeopleItemInfo(_loc4_));
         }
         super(_loc3_);
         direction = param1.dir;
         pos = param1.point;
         this._posList = param1.walkPoints;
         buttonMode = false;
         mouseEnabled = false;
         clickBtn.mouseChildren = clickBtn.mouseEnabled = false;
         var _loc5_:MovieClip = new npc_shadow_mc();
         _loc5_.y += 20;
         addChildAt(_loc5_,0);
         _skeletonSys.getBodyMC().filters = [new GlowFilter(3355443,1,4,4)];
         var _loc6_:TextFormat;
         (_loc6_ = new TextFormat()).size = 14;
         _loc6_.color = 255;
         _nameTxt.setTextFormat(_loc6_);
         _nameTxt.y += 15;
         _nameTxt.y += param1.nameY;
         _nameTxt.filters = [new GlowFilter(16777215,1,3,3,5)];
         MapManager.currentMap.depthLevel.addChild(this);
      }
      
      public function moveRobot() : void
      {
         var _loc1_:Point = this._posList[Math.floor(Math.random() * this._posList.length)];
         _walk.execute_point(this,_loc1_,false);
      }
      
      public function showDialog(param1:Function) : void
      {
         if(this._dialogList)
         {
            showBox(this._dialogList[Math.floor(Math.random() * this._dialogList.length)],0,param1);
         }
      }
      
      public function addNewContainer(param1:DisplayObjectContainer) : void
      {
         param1.addChild(this);
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this._posList = null;
      }
   }
}
